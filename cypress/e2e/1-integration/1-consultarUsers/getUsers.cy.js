describe('Teste de API - Lista de Usuários', () => {
  const apiUrl = 'https://serverest.dev/usuarios';

  it('Deve retornar uma lista de usuários e validar a quantidade', () => {
    cy.request({
      method: 'GET',
      url: apiUrl,
    }).then((response) => {
      // Verifica se o status code é 200
      expect(response.status).to.eq(200);

      // Verifica se o corpo da resposta contém a propriedade "usuarios"
      expect(response.body).to.have.property('usuarios');

      // Verifica se "usuarios" é um array
      expect(response.body.usuarios).to.be.an('array');

      // Verifica se a propriedade "quantidade" existe
      expect(response.body).to.have.property('quantidade');

      // Verifica se a quantidade é igual ao tamanho do array "usuarios"
      expect(response.body.usuarios.length).to.eq(response.body.quantidade);

      // Verifique o primeiro usuário na lista (se existir)
      if (response.body.usuarios.length > 0) {
        const primeiroUsuario = response.body.usuarios[0];
        expect(primeiroUsuario).to.have.property('_id');
        expect(primeiroUsuario).to.have.property('nome');
        expect(primeiroUsuario).to.have.property('email');
        expect(primeiroUsuario).to.have.property('password');
        expect(primeiroUsuario).to.have.property('administrador');
      }
    });
  });
});

