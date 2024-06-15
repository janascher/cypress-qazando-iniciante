/// <reference types="cypress" />

// Elementos
const elements = {
    url: {
        visit: '/',
    },
    links: {
        register: '.fa-lock',
        login: '.fa-user',
    },
    fields: {
        name: '#user',
        email: '#user',
    },
};

// Método JavaScript
export default {
    accessRegisterPage() {
        // Acessa a aplicação
        cy.visit(elements.url.visit).get('.header-logo');
        // Entra no registro
        cy.get(elements.links.register).should('be.visible').click();
        // Verifica se está na página de cadastro
        cy.get(elements.fields.name).should('be.visible');
    },

    accessLoginPage() {
        // Acessa a aplicação
        cy.visit(elements.url.visit).get('.header-logo');
        // Entra no login
        cy.get(elements.links.login).should('be.visible').click();
        // Verifica se está na página de login
        cy.get(elements.fields.email).should('be.visible');
    },
};
