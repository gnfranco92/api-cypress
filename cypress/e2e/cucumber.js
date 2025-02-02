module.exports = {
    default: {
      require: ["cypress/e2e/step_definitions/*.cy.js"],
      requireModule: ["@badeball/cypress-cucumber-preprocessor"],
      format: ["progress-bar"],
    },
  };