describe('Teste de API - Alteração de Nome do Usuário', () => {
    const apiUrl = 'https://serverest.dev/usuarios';
  
    it('Deve alterar o nome do usuário cadastrado anteriormente', () => {
      // Lê o ID do usuário salvo no arquivo JSON
      cy.readFile('cypress/fixtures/userData.json').then((userData) => {
        const userId = userData.id;
        const novoNome = 'Teste Guilherme alterado';
  
        // Envia a requisição de alteração (PUT)
        cy.request({
          method: 'PUT',
          url: `${apiUrl}/${userId}`,
          body: {
            nome: novoNome,
            email: userData.email,
            password: 'senha123', // A senha deve ser incluída no body para manter o formato correto
            administrador: 'true',
          },
        }).then((response) => {
          // Verifica se o status code é 200 (OK)
          expect(response.status).to.eq(200);
  
          // Valida a mensagem de sucesso
          expect(response.body).to.have.property('message', 'Registro alterado com sucesso');
  
          // Atualiza o arquivo JSON com o novo nome
          cy.writeFile('cypress/fixtures/userData.json', {
            ...userData,
            nome: novoNome,
          });
  
          cy.log('Nome do usuário alterado com sucesso.');
        });
      });
    });
  });
  