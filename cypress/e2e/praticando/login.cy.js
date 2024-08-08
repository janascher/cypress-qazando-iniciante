/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import commum_page from '../../support/pages/commum_page';
import login_page from '../../support/pages/login_page';

const user_invalid_data = require('../../fixtures/desafio_invalid_data.json');
const user_data = require('../../fixtures/desafio_valid_data.json');

const random_email = faker.internet.email();

describe.only('Login de usuário', () => {
    beforeEach('Acessando página de login', () => {
        commum_page.accessLoginPage();
    });

    it('Validar campo e-mail vazio', () => {
        login_page.btnLogin();
        login_page.checkMessage('E-mail inválido.');
    });

    it('Validar campo senha vazio', () => {
        login_page.fillEmail(random_email);
        login_page.btnLogin();
        login_page.checkMessage('Senha inválida.');
    });

    it('Validar campo e-mail inválido', () => {
        login_page.fillEmail(user_invalid_data.email);
        login_page.btnLogin();
        login_page.checkMessage('E-mail inválido.');
    });

    it('Validar campo senha inválida', () => {
        login_page.fillEmail(random_email);
        login_page.fillPassword(user_invalid_data.password);
        login_page.btnLogin();
        login_page.checkMessage('Senha inválida.');
    });

    it('Validar login de usuário com sucesso', () => {
        login_page.fillEmail(random_email);
        login_page.fillPassword(user_data.password);
        login_page.btnLogin();
        login_page.checkLoginSucess('Login realizado', random_email);
        login_page.confirmLogin();
    });

    it('Validar link não tenho conta', () => {
        login_page.checkNoAccount();
    });
});
