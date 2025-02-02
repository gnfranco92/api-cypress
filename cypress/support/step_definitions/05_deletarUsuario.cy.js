import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const apiUrl = "https://serverest.dev/usuarios";
let userData;
let response;    
let getResponse; 

Given("que o usuário foi previamente cadastrado e seus dados foram salvos", () => {
  cy.readFile("cypress/fixtures/userData.json").then((data) => {
    userData = data;
  });
});

When("eu envio uma requisição DELETE para excluir o usuário", () => {
  cy.then(() => {
    const userId = userData.id;
    cy.request({
      method: "DELETE",
      url: `${apiUrl}/${userId}`,
    }).then((res) => {
      response = res;
    });
  });
});

Then("valido a requisição com o status {int}", (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

Then("a mensagem deve ser {string}", (expectedMessage) => {
  expect(response.body).to.have.property("message", expectedMessage);
});

When("eu envio uma requisição GET para consultar o usuário", () => {
  cy.then(() => {
    const userId = userData.id;
    cy.request({
      method: "GET",
      url: `${apiUrl}/${userId}`,
      failOnStatusCode: false,
    }).then((res) => {
      getResponse = res;
    });
  });
});

Then("a resposta da consulta deve ter o status {int}", (statusCode) => {
  expect(getResponse.status).to.eq(statusCode);
});

Then("a mensagem de erro deve ser {string}", (expectedMessage) => {
  expect(getResponse.body).to.have.property("message", expectedMessage);
});
