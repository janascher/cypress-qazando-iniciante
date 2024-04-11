// Descrição de qual funcionalidade a ser testada
describe('Login', () => {
    // Cenários de testes
    it('Login com sucesso', () => {
        // get() -> seleciona elementos
        cy.visit('/').get('.header-logo');

        // contains() -> encontra elementos por texto. Geralmente diminuímos o escopo com um get().
        cy.get('#top_header').contains('Login');

        // find() -> encontra elementos. Geralmente diminuímos o escopo com um get().
        cy.get('#top_header').find('.fa-user');

        // as() - alias -> cria apelidos (atalhos) para grandes comandos
        // Para referenciar um alias em outros lugares do teste, usa-se o método 'cy.get()' com o alias precedido por um '@'.
        cy.get('#top_header').as('cabecalho');
        cy.get('@cabecalho').find('.fa-user');
    });
});
