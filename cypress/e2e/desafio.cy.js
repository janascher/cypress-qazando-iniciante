/// <reference types="cypress" />

describe('Cadastro de usuário', () => {
    const user_name = 'Testando';
    const user_email_invalid = 'E-mail inválido';
    const user_email = 'email-valido@email.com';
    const user_password_invalid = '123';
    const user_password = '123456';

    it('Validar campo nome vazio', () => {
        cy.visit('/').get('.header-logo');

        cy.get('.fa-lock').should('be.visible').click();

        cy.get('#btnRegister').should('be.visible').click();

        cy.get('#errorMessageFirstName').should('contain', 'O campo nome deve ser prenchido');
    });

    it('Validar campo e-mail vazio', () => {
        cy.visit('/').get('.header-logo');

        cy.get('.fa-lock').should('be.visible').click();

        cy.get('#user').should('be.visible').type(user_name);

        cy.get('#btnRegister').should('be.visible').click();

        cy.get('#errorMessageFirstName').should(
            'contain',
            'O campo e-mail deve ser prenchido corretamente'
        );
    });

    it('Validar campo e-mail inválido', () => {
        cy.visit('/').get('.header-logo');

        cy.get('.fa-lock').should('be.visible').click();

        cy.get('#user').should('be.visible').type(user_name);

        cy.get('#email').should('be.visible').type(user_email_invalid);

        cy.get('#btnRegister').should('be.visible').click();

        cy.get('#errorMessageFirstName').should(
            'contain',
            'O campo e-mail deve ser prenchido corretamente'
        );
    });

    it('Validar campo senha vazio', () => {
        cy.visit('/').get('.header-logo');

        cy.get('.fa-lock').should('be.visible').click();

        cy.get('#user').should('be.visible').type(user_name);

        cy.get('#email').should('be.visible').type(user_email);

        cy.get('#btnRegister').should('be.visible').click();

        cy.get('#errorMessageFirstName').should(
            'contain',
            'O campo senha deve ter pelo menos 6 dígitos'
        );
    });

    it('Validar campo senha inválido', () => {
        cy.visit('/').get('.header-logo');

        cy.get('.fa-lock').should('be.visible').click();

        cy.get('#user').should('be.visible').type(user_name);

        cy.get('#email').should('be.visible').type(user_email);

        cy.get('#password').should('be.visible').type(user_password_invalid);

        cy.get('#btnRegister').should('be.visible').click();

        cy.get('#errorMessageFirstName').should(
            'contain',
            'O campo senha deve ter pelo menos 6 dígitos'
        );
    });

    it('Validar cadastro de usuário com sucesso', () => {
        cy.visit('/').get('.header-logo');

        cy.get('.fa-lock').should('be.visible').click();

        cy.get('#user').should('be.visible').type(user_name);

        cy.get('#email').should('be.visible').type(user_email);

        cy.get('#password').should('be.visible').type(user_password);

        cy.get('#btnRegister').should('be.visible').click();

        cy.get('#swal2-title').should('contain', 'Cadastro realizado!');

        cy.get('#swal2-html-container').should('contain', `Bem-vindo ${user_name}`);

        cy.get('button.swal2-confirm.swal2-styled').click();
    });
});
