import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const apiUrl = "https://serverest.dev/usuarios";
let userData;   
let response;   
let novoNome;   

Given("que os dados do usuário foram previamente salvos", () => {
  cy.readFile("cypress/fixtures/userData.json").then((data) => {
    userData = data;
  });
});

When("eu envio uma requisição PUT para alterar o nome do usuário para {string}", (nome) => {
  novoNome = nome;
  cy.then(() => {
    cy.request({
      method: "PUT",
      url: `${apiUrl}/${userData.id}`,
      body: {
        nome: novoNome,
        email: userData.email,
        password: "senha123",      
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
  cy.writeFile("cypress/fixtures/userData.json", {
    ...userData,
    nome: novoNome,
  });
  cy.log("Nome do usuário alterado com sucesso e arquivo atualizado.");
});
