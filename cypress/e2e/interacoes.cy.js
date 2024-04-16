/// <reference types="cypress" />

// Descrição de qual funcionalidade a ser testada
describe('Interações', () => {
    // Cenários de testes
    // it('Digitar em um campo', () => {
    //     cy.visit('/').get('.header-logo');

        // cy.get('.form-control').type('sakura@email.com');
    // });

    it('Click', () => {
        cy.visit('/').get('.header-logo');

        // Simular apertar "enter"
        cy.get('.form-control').type('sakura@email.com{enter}');

        // Click normal
        // cy.get('.fa-user').click()

        // Click duplo
        // cy.get('.fa-user').dblclick()

        // Click botão direito do mouse
        // cy.get('.fa-user').rightclick()

        // Click por cordenadas
        // cy.get('.fa-user').click(100,100, {force: true})
    })
});
