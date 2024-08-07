// -- Cria novos comandos no projeto  --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- Sobrescreve um comando que existente --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

// Elementos
const elements = {
    url: {
        visit: '/',
    },
    links: {
        register: '.fa-lock',
    },
    fields: {
        name: '#user',
    },
};

Cypress.Commands.add('accessRegisterPage', () => {
    // Acessa a aplicação
    // cy.visit(elements.url.visit).get('.header-logo');
    cy.visit(elements.url.visit).get('.header-log');
    // Entra no registro
    cy.get(elements.links.register).should('be.visible').click();
    // Verifica se está na página de cadastro
    cy.get(elements.fields.name).should('be.visible');
})