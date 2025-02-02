import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// URL base da API
const apiUrl = "https://serverest.dev/usuarios";

let userData;   // Dados lidos do arquivo JSON
let response;   // Armazena a resposta da requisição
let novoNome;   // Novo nome a ser aplicado

Given("que os dados do usuário foram previamente salvos", () => {
  // Lê os dados do usuário salvos no arquivo JSON
  cy.readFile("cypress/fixtures/userData.json").then((data) => {
    userData = data;
  });
});

When("eu envio uma requisição PUT para alterar o nome do usuário para {string}", (nome) => {
  // Armazena o novo nome recebido do step
  novoNome = nome;
  // Garante que a leitura do arquivo já foi concluída antes de enviar a requisição
  cy.then(() => {
    cy.request({
      method: "PUT",
      url: `${apiUrl}/${userData.id}`,
      body: {
        nome: novoNome,
        email: userData.email,
        password: "senha123",       // A senha é necessária para manter o formato correto
        administrador: "true",
      },
    }).then((res) => {
      response = res;
    });
  });
});

Then("valido a resposta que deve ter o status {int}", (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

Then("a mensagem de sucesso deve ser {string}", (message) => {
  expect(response.body).to.have.property("message", message);
});

Then("os dados do usuário salvos devem ser atualizados com o novo nome", () => {
  // Atualiza o arquivo JSON com o novo nome
  cy.writeFile("cypress/fixtures/userData.json", {
    ...userData,
    nome: novoNome,
  });
  cy.log("Nome do usuário alterado com sucesso e arquivo atualizado.");
});
