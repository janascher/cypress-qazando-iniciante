// -- Cria novos comandos no projeto  --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- Sobrescreve um comando que existente --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

Cypress.Commands.add('accessRegisterPage', () => {
    // Acessa a aplicação
    cy.visit('/').get('.header-logo');
    // Entra no registro
    cy.get('.fa-lock').should('be.visible').click();
    // Verifica se está na página de cadastro
    cy.get('#user').should('be.visible');
})