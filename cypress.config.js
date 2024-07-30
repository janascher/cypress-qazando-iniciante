const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        reporter: 'cypress-mochawesome-reporter',
        reporterOptions: {
            charts: true,
            reportPageTitle: 'Projeto do curso de Cypress',
            embeddedScreenshots: true,
            inlineAssets: true,
            saveAllAttempts: false,
        },
        baseUrl: 'https://www.automationpratice.com.br/',
        defaultCommandTimeout: 5000, // Timeout padrão do projeto todo
        // viewportHeight: 335,
        // viewportWidth: 999,
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});
