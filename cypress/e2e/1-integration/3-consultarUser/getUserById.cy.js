describe('Teste de API - Consulta de Usuário', () => {
    const apiUrl = 'https://serverest.dev/usuarios';
  
    it('Deve consultar o usuário cadastrado previamente', () => {
      // Lê o ID do usuário salvo no arquivo JSON
      cy.readFile('cypress/fixtures/userData.json').then((userData) => {
        const userId = userData.id;
  
        // Realiza a consulta do usuário
        cy.request({
          method: 'GET',
          url: `${apiUrl}/${userId}`,
        }).then((response) => {
          // Verifica se o status code é 200
          expect(response.status).to.eq(200);
  
          // Valida os dados retornados
          const user = response.body;
          expect(user).to.have.property('_id', userId);
          expect(user).to.have.property('nome', userData.nome);
          expect(user).to.have.property('email', userData.email);
  
          cy.log('Consulta de usuário realizada com sucesso.');
        });
      });
    });
  });
  