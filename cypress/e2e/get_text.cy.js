// Descrição de qual funcionalidade a ser testada
describe('Get Text', () => {
    // Cenários de testes
    it('Obter texto de um elemento', () => {
        
        cy.visit('/').get('.header-logo');

        cy.get('.top_header_left > p')
            // Seleciona um elemento para obter o texto
            .then((element) => {
                element.text()
                // Para visualizar se o texto está aparecendo corretamente
                // console.log(element.text())
            })

    });
});
