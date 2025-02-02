import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const apiUrl = "https://serverest.dev/usuarios";
let userData;
let response;

Given("que o ID do usuário foi salvo previamente", () => {
  // Lê o arquivo JSON com os dados do usuário salvo
  cy.readFile("cypress/fixtures/userData.json").then((data) => {
    userData = data;
  });
});

When("eu consulto o usuário pelo ID", () => {
  // Garante que o dado foi carregado antes de executar a requisição
  cy.then(() => {
    const userId = userData.id;
    cy.request({
      method: "GET",
      url: `${apiUrl}/${userId}`,
    }).then((res) => {
      response = res;
    });
  });
});

Then("a resposta deve ter o status {int}", (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

Then("os dados retornados devem corresponder ao usuário salvo", () => {
  const user = response.body;
  expect(user).to.have.property("_id", userData.id);
  expect(user).to.have.property("nome", userData.nome);
  expect(user).to.have.property("email", userData.email);
});
