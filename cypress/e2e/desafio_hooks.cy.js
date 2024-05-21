/// <reference types="cypress" />
// Utilizando a biblioteca Faker para gerar massa de dados
import { faker } from '@faker-js/faker';

const user_data = require('../fixtures/desafio_valid_data.json');
const user_invalid_data = require('../fixtures/desafio_invalid_data.json');

const random_name = faker.person.fullName();
const random_email = faker.internet.email();

describe('Cadastro de usuário', () => {
    // Hook - before:
    // before('Acessando página de cadastro', () => {
    // Acessa a aplicação
    // cy.visit('/').get('.header-logo');
    // Entra no registro
    // cy.get('.fa-lock').should('be.visible').click();
    // Verifica se está na página de cadastro
    // cy.get('#btnRegister').should('be.visible').click();
    // });

    // Hook - beforeEach
    beforeEach('Acessando página de cadastro', () => {
        // Acessa a aplicação
        cy.visit('/').get('.header-logo');
        // Entra no registro
        cy.get('.fa-lock').should('be.visible').click();
        // Verifica se está na página de cadastro
        cy.get('#user').should('be.visible');
    });

    it('Validar campo nome vazio', () => {
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('contain', 'O campo nome deve ser prenchido');
    });

    it('Validar campo e-mail vazio', () => {
        cy.get('#user').type(random_name);

        cy.get('#btnRegister').click();

        cy.get('#errorMessageFirstName').should(
            'contain',
            'O campo e-mail deve ser prenchido corretamente'
        );
    });

    it('Validar campo e-mail inválido', () => {
        cy.get('#user').type(random_name);

        cy.get('#email').type(user_invalid_data.email);

        cy.get('#btnRegister').click();

        cy.get('#errorMessageFirstName').should(
            'contain',
            'O campo e-mail deve ser prenchido corretamente'
        );
    });

    it('Validar campo senha vazio', () => {
        cy.get('#user').type(random_name);

        cy.get('#email').type(random_email);

        cy.get('#btnRegister').click();

        cy.get('#errorMessageFirstName').should(
            'contain',
            'O campo senha deve ter pelo menos 6 dígitos'
        );
    });

    it('Validar campo senha inválido', () => {
        cy.get('#user').type(random_name);

        cy.get('#email').type(random_email);

        cy.get('#password').type(user_invalid_data.password);

        cy.get('#btnRegister').click();

        cy.get('#errorMessageFirstName').should(
            'contain',
            'O campo senha deve ter pelo menos 6 dígitos'
        );
    });

    it('Validar cadastro de usuário com sucesso', () => {
        cy.get('#user').type(random_name);

        cy.get('#email').type(random_email);

        cy.get('#password').type(user_data.password);

        cy.get('#btnRegister').click();

        cy.get('#swal2-title').should('contain', 'Cadastro realizado!');

        cy.get('#swal2-html-container').should('contain', `Bem-vindo ${random_name}`);

        cy.get('button.swal2-confirm.swal2-styled').click();
    });
});
