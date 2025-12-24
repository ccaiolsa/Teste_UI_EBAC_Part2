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

    it('Visitar produto pelo URL usando PAGE OBJECTS', () => {
        var produto = 'Ajax Full-Zip Sweatshirt';

        ProdutosPage.visitar_produto(produto)
        cy.get('.product_title').should('contain', produto)
    })

    it('Adicionar produto no carrinho usando PAGE OBJECTS', () => {
        var produto = 'Ajax Full-Zip Sweatshirt'
        var cor = 'Blue'
        var tamanho = 'L'
        var quantidade = 3
        ProdutosPage.buscar_produto(produto)
        ProdutosPage.add_produto_carrinho(tamanho, cor, quantidade)
        cy.get('.woocommerce-message').should('contain', `${quantidade} × “${produto}” foram adicionados no seu carrinho.`)
        
    });

    it.only('Buscar produtos através de uma massa de dados', () => {
        cy.fixture('produtos').then( dados =>{
            ProdutosPage.buscar_produto(dados[1].nome)
            ProdutosPage.add_produto_carrinho(
                dados[1].tamanho, 
                dados[1].cor, 
                dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', `${dados[1].quantidade} × “${dados[1].nome}” foram adicionados no seu carrinho.`)
        
        })
    });

});