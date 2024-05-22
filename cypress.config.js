const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationpratice.com.br/',
    defaultCommandTimeout: 5000, // Timeout padrão do projeto todo
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
