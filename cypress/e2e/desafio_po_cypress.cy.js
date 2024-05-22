// -- Aula sobre Page Objects com comandos personalizados do Cypress --

/// <reference types="cypress" />
// Utilizando a biblioteca Faker para gerar massa de dados
import { faker } from '@faker-js/faker';

const user_data = require('../fixtures/desafio_valid_data.json');
const user_invalid_data = require('../fixtures/desafio_invalid_data.json');

const random_name = faker.person.fullName();
const random_email = faker.internet.email();

describe('Cadastro de usuário', () => {
    beforeEach('Acessando página de cadastro', () => {
        cy.accessRegisterPage();
    });

    it('Validar campo nome vazio', () => {
        cy.saveRegister();
        cy.checkMessage('O campo nome deve ser prenchido');
    });

    it('Validar campo e-mail vazio', () => {
        cy.fillName(random_name);
        cy.saveRegister();
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente');
    });

    it('Validar campo e-mail inválido', () => {
        cy.fillName(random_name);
        cy.fillEmail(user_invalid_data.email);
        cy.saveRegister();
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente');
    });

    it('Validar campo senha vazio', () => {
        cy.fillName(random_name);
        cy.fillEmail(random_email);
        cy.saveRegister();
        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos');
    });

    it('Validar campo senha inválido', () => {
        cy.fillName(random_name);
        cy.fillEmail(random_email);
        cy.fillPassword(user_invalid_data.password);
        cy.saveRegister();
        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos');
    });

    it('Validar cadastro de usuário com sucesso', () => {
        cy.fillName(random_name);
        cy.fillEmail(random_email);
        cy.fillPassword(user_data.password);
        cy.saveRegister();
        cy.checkRegisterSucess('Cadastro realizado!', random_name);
        cy.confirmRegister();
    });
});
