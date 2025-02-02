import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const apiUrl = 'https://serverest.dev/usuarios';
let response;

Given('que a API possui usuários cadastrados', () => {
  // Neste caso, assumimos que já existem usuários cadastrados na API
});

When('eu enviar uma requisição para listar os usuários', () => {
  cy.request({
    method: 'GET',
    url: apiUrl,
  }).then((res) => {
    response = res;
  });
});

Then('a resposta deve conter o status code {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

Then('a resposta deve conter uma lista de usuários', () => {
  expect(response.body).to.have.property('usuarios');
  expect(response.body.usuarios).to.be.an('array');
});

Then('a quantidade de usuários deve ser igual ao tamanho da lista retornada', () => {
  expect(response.body).to.have.property('quantidade');
  expect(response.body.usuarios.length).to.eq(response.body.quantidade);
});

Then('cada usuário na lista deve conter um ID, nome, email, password e status de administrador', () => {
  if (response.body.usuarios.length > 0) {
    const primeiroUsuario = response.body.usuarios[0];
    expect(primeiroUsuario).to.have.property('_id');
    expect(primeiroUsuario).to.have.property('nome');
    expect(primeiroUsuario).to.have.property('email');
    expect(primeiroUsuario).to.have.property('password');
    expect(primeiroUsuario).to.have.property('administrador');
  }
});
