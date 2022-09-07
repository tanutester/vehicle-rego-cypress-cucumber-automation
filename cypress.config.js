const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    specPattern:  "**/*.{feature,features,spec.js,cy.js}",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      allureWriter(on, config);
      // implement node event listeners here
    },
  },
});
