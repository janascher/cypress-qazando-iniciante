/// <reference types="cypress" />

Cypress.Commands.add('saveRegister', () => {
    // Clica no registrar
    cy.get('#btnRegister').click();
});

Cypress.Commands.add('fillEmail', (email) => {
    // Preenche email
    cy.get('#email').should('be.visible').type(email);
});

Cypress.Commands.add('fillName', (name) => {
    // Preenche nome
    cy.get('#user').type(name);
});

Cypress.Commands.add('fillPassword', (password) => {
    // Preenche senha
    cy.get('#password').should('be.visible').type(password);
});

Cypress.Commands.add('checkMessage', (message) => {
    // Checar mensagem
    cy.get('#errorMessageFirstName').should('contain', message);
});

Cypress.Commands.add('checkRegisterSucess', (message, name) => {
    // Cadastro concluído
    cy.get('#swal2-title').should('contain', message);
    cy.get('#swal2-html-container').should('contain', `Bem-vindo ${name}`);
});

Cypress.Commands.add('confirmRegistration', () => {
    // Clica para confirmar o registro
    cy.get('button.swal2-confirm.swal2-styled').click();
});
