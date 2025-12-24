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

    add_produto_carrinho(){

    }

}

export default new ProdutosPage