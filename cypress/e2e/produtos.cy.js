/// <reference types= 'cypress'/>

import ProdutosPage from "../support/page-objects/produtos.page";

describe('Testar funcionalidade de busca', () => {
    beforeEach(() => {
        ProdutosPage.visitar_url()
    });

    it('Buscar produto usando PAGE OBJECTS', () => {
        var produto = 'Aether Gym Pant';

        ProdutosPage.buscar_produto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it.only('Visitar produto pelo URL usando PAGE OBJECTS', () => {
        var produto = 'Ajax Full-Zip Sweatshirt';

        ProdutosPage.visitar_produto(produto)
        cy.get('.product_title').should('contain', produto)
    })

});