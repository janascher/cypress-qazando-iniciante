/// <reference types="cypress" />

// Elementos
const elements = {
    buttons: {
        register: '#btnRegister',
        confirmRegister: 'button.swal2-confirm.swal2-styled',
    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password',
    },
    messages: {
        error: '#errorMessageFirstName',
        successTitle: '#swal2-title',
        successSubtitle: '#swal2-html-container',
    },
};

// Ações/métodos/funções
Cypress.Commands.add('saveRegister', () => {
    // Clica no registrar
    cy.get(elements.buttons.register).click();
});

Cypress.Commands.add('fillEmail', (email) => {
    // Preenche email
    cy.get(elements.fields.email).should('be.visible').type(email);
});

Cypress.Commands.add('fillName', (name) => {
    // Preenche nome
    cy.get(elements.fields.name).type(name);
});

Cypress.Commands.add('fillPassword', (password) => {
    // Preenche senha
    cy.get(elements.fields.password).should('be.visible').type(password);
});

Cypress.Commands.add('checkMessage', (message) => {
    // Checar mensagem
    cy.get(elements.messages.error).should('contain', message);
});

Cypress.Commands.add('checkRegisterSucess', (message, name) => {
    // Cadastro concluído
    cy.get(elements.messages.successTitle).should('contain', message);
    cy.get(elements.messages.successSubtitle).should('contain', `Bem-vindo ${name}`);
});

Cypress.Commands.add('confirmRegister', () => {
    // Clica para confirmar o registro
    cy.get(elements.buttons.confirmRegister).click();
});
