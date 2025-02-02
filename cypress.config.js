const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').default;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);

      // Suas configurações existentes para o Mochawesome
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-gpu');
        }
        return launchOptions;
      });

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    stepDefinitions: "cypress/support/step_definitions/**/*.cy.{js,ts}",
    supportFile: 'cypress/support/e2e.js',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    }
  },
});