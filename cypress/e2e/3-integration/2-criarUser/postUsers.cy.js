// cypress/e2e/criacao/cadastrarUsuario.cy.js
describe('Teste de API - Cadastro de Usuário', () => {
  const apiUrl = 'https://serverest.dev/usuarios';
  const fakeUser = {
    nome: 'Teste Guilheme',
    email: `usuario${Date.now()}@teste.com`,
    password: 'senha123',
    administrador: 'true',
  };

  it('Deve cadastrar um usuário e salvar o ID para futuros testes', () => {
    cy.request({
      method: 'POST',
      url: apiUrl,
      body: fakeUser,
    }).then((response) => {
      // Verifica se o status code é 201 (Criado)
      expect(response.status).to.eq(201);

      // Valida a mensagem de sucesso
      expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');

      // Salva o ID do usuário em um arquivo JSON para reutilização
      const userId = response.body._id;
      cy.writeFile('cypress/fixtures/userData.json', {
        id: userId,
        nome: fakeUser.nome,
        email: fakeUser.email,
      });

      cy.log('Usuário cadastrado com sucesso. ID salvo.');
    });
  });
});
