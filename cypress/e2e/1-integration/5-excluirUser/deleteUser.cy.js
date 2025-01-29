describe('Teste de API - Exclusão de Usuário', () => {
    const apiUrl = 'https://serverest.dev/usuarios';
  
    it('Deve excluir o usuário e garantir que ele foi removido', () => {
      // Lê o ID do usuário salvo no arquivo JSON
      cy.readFile('cypress/fixtures/userData.json').then((userData) => {
        const userId = userData.id;
  
        // Envia a requisição para excluir o usuário
        cy.request({
          method: 'DELETE',
          url: `${apiUrl}/${userId}`,
        }).then((response) => {
          // Verifica se o status code é 200
          expect(response.status).to.eq(200);
  
          // Valida a mensagem de sucesso
          expect(response.body).to.have.property('message', 'Registro excluído com sucesso');
  
          cy.log('Usuário excluído com sucesso.');
  
          // Realiza uma consulta para garantir que o usuário foi excluído
          cy.request({
            method: 'GET',
            url: `${apiUrl}/${userId}`,
            failOnStatusCode: false, // Permite que o teste continue se o status não for 2xx
          }).then((getResponse) => {
            // Verifica se o status code é 400 (Não encontrado)
            expect(getResponse.status).to.eq(400);
  
            // Valida a mensagem de erro
            expect(getResponse.body).to.have.property('message', 'Usuário não encontrado');
            cy.log('Validação de exclusão confirmada.');
          });
        });
      });
    });
  });
  