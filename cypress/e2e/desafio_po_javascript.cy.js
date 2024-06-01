// -- Aula sobre Page Objects com comandos personalizados do Cypress --

/// <reference types="cypress" />
// Utilizando a biblioteca Faker para gerar massa de dados
import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page';
import register_page from '../support/pages/register_page';

const user_data = require('../fixtures/desafio_valid_data.json');
const user_invalid_data = require('../fixtures/desafio_invalid_data.json');

const random_name = faker.person.fullName();
const random_email = faker.internet.email();

describe('Cadastro de usuário', () => {
    beforeEach('Acessando página de cadastro', () => {
        home_page.accessRegisterPage();
    });

    it('Validar campo nome vazio', () => {
        register_page.saveRegister();
        register_page.checkMessage('O campo nome deve ser prenchido');
    });

    it('Validar campo e-mail vazio', () => {
        register_page.fillName(random_name);
        register_page.saveRegister();
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente');
    });

    it('Validar campo e-mail inválido', () => {
        register_page.fillName(random_name);
        register_page.fillEmail(user_invalid_data.email);
        register_page.saveRegister();
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente');
    });

    it('Validar campo senha vazio', () => {
        register_page.fillName(random_name);
        register_page.fillEmail(random_email);
        register_page.saveRegister();
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos');
    });

    it('Validar campo senha inválido', () => {
        register_page.fillName(random_name);
        register_page.fillEmail(random_email);
        register_page.fillPassword(user_invalid_data.password);
        register_page.saveRegister();
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos');
    });

    it('Validar cadastro de usuário com sucesso', () => {
        register_page.fillName(random_name);
        register_page.fillEmail(random_email);
        register_page.fillPassword(user_data.password);
        register_page.saveRegister();
        register_page.checkRegisterSucess('Cadastro realizado!', random_name);
        register_page.confirmRegister();
    });
});
