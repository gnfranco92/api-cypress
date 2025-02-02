import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const apiUrl = 'https://serverest.dev/usuarios';
let fakeUser;
let userId;

Given('que eu tenha os dados de um novo usuário {string} e {string}', (nome, email) => {
  fakeUser = {
    nome: nome,
    email: email.replace('{timestamp}', Date.now().toString()),
    password: 'senha123',
    administrador: 'true',
  };
});

When('eu enviar uma requisição para criar o usuário', () => {
  cy.request({
    method: 'POST',
    url: apiUrl,
    body: fakeUser,
  }).then((response) => {
    expect(response.status).to.eq(201);
    expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
    userId = response.body._id;
  });
});

Then('o usuário deve ser criado com sucesso', () => {
  expect(userId).to.not.be.undefined;
});

Then('a resposta deve conter a mensagem {string}', (mensagem) => {
  expect(mensagem).to.eq('Cadastro realizado com sucesso');
});

Then('o ID do usuário deve ser salvo para uso futuro', () => {
  cy.writeFile('cypress/fixtures/userData.json', {
    id: userId,
    nome: fakeUser.nome,
    email: fakeUser.email,
  });
  cy.log('Usuário cadastrado com sucesso. ID salvo.');
});
