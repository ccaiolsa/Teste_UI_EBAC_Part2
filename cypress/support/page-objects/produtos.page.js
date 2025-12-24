class ProdutosPage{
    visitar_url(){
        cy.visit('produtos')
    }

    buscar_produto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('[type="submit"]').eq(1).click()

    }

    visitar_produto(nomeProduto){
        // cy.visit(`produtos/${nomeProduto}`)
        const novaUrl = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${novaUrl}`)

    }

    add_produto_carrinho(tamanho, cor, quantidade){
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('[name="quantity"]').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new ProdutosPage