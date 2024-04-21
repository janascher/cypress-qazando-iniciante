/// <reference types="cypress" />

// Asserts: verifica se uma determinada condição é verdadeira
describe('Asserts', () => {
    
    it('Verificar se está visível', () => {
        cy.visit('/').get('.header-logo');

        cy.get('.fa-user').should('be.visible').click();

        // Validar usando should
        // should(): afirma que algo deve ser verdadeiro durante a execução do teste
        cy.get('.account_form > h3').should('be.visible');

        cy.get('.account_form > h3').should('contain', 'Login').should('have.text', 'Login');

        // Outra maneira de validar é usando expect para asserts
        // Muito usado em teste de APIs
        cy.get('.account_form > h3').then((element) => {
            expect(element.text()).eq('Login');
            expect(element).to.be.visible;
            expect(element).not.disabled;
        })
    });  

});
