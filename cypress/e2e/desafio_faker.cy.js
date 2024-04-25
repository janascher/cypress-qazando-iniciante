/// <reference types="cypress" />
// Utilizando a biblioteca Faker para gerar massa de dados
import { faker } from '@faker-js/faker';

const user_data = require('../fixtures/desafio_valid_data.json');
const user_invalid_data = require('../fixtures/desafio_invalid_data.json');

const random_name = faker.person.fullName();
const random_email = faker.internet.email();

describe('Cadastro de usuário', () => {
    it('Validar campo nome vazio', () => {
        cy.visit('/').get('.header-logo');

        cy.get('.fa-lock').should('be.visible').click();

        cy.get('#btnRegister').should('be.visible').click();

        cy.get('#errorMessageFirstName').should('contain', 'O campo nome deve ser prenchido');
    });

    it('Validar campo e-mail vazio', () => {
        cy.visit('/').get('.header-logo');

        cy.get('.fa-lock').should('be.visible').click();

        cy.get('#user').should('be.visible').type(random_name);

        cy.get('#btnRegister').should('be.visible').click();

        cy.get('#errorMessageFirstName').should(
            'contain',
            'O campo e-mail deve ser prenchido corretamente'
        );
    });

    it('Validar campo e-mail inválido', () => {
        cy.visit('/').get('.header-logo');

        cy.get('.fa-lock').should('be.visible').click();

        cy.get('#user').should('be.visible').type(random_name);

        cy.get('#email').should('be.visible').type(user_invalid_data.email);

        cy.get('#btnRegister').should('be.visible').click();

        cy.get('#errorMessageFirstName').should(
            'contain',
            'O campo e-mail deve ser prenchido corretamente'
        );
    });

    it('Validar campo senha vazio', () => {
        cy.visit('/').get('.header-logo');

        cy.get('.fa-lock').should('be.visible').click();

        cy.get('#user').should('be.visible').type(random_name);

        cy.get('#email').should('be.visible').type(random_email);

        cy.get('#btnRegister').should('be.visible').click();

        cy.get('#errorMessageFirstName').should(
            'contain',
            'O campo senha deve ter pelo menos 6 dígitos'
        );
    });

    it('Validar campo senha inválido', () => {
        cy.visit('/').get('.header-logo');

        cy.get('.fa-lock').should('be.visible').click();

        cy.get('#user').should('be.visible').type(random_name);

        cy.get('#email').should('be.visible').type(random_email);

        cy.get('#password').should('be.visible').type(user_invalid_data.password);

        cy.get('#btnRegister').should('be.visible').click();

        cy.get('#errorMessageFirstName').should(
            'contain',
            'O campo senha deve ter pelo menos 6 dígitos'
        );
    });

    it.only('Validar cadastro de usuário com sucesso', () => {

        cy.visit('/').get('.header-logo');

        cy.get('.fa-lock').should('be.visible').click();

        cy.get('#user').should('be.visible').type(random_name);

        cy.get('#email').should('be.visible').type(random_email);

        cy.get('#password').should('be.visible').type(user_data.password);

        cy.get('#btnRegister').should('be.visible').click();

        cy.get('#swal2-title').should('contain', 'Cadastro realizado!');

        cy.get('#swal2-html-container').should('contain', `Bem-vindo ${random_name}`);

        cy.get('button.swal2-confirm.swal2-styled').click();
    });
});
