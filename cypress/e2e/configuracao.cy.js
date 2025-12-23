/// <reference types= "cypress" />
import { faker } from '@faker-js/faker';

describe('Tester funcionalidades de configuração de perfil', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    
    it('Ajustando nome na página do perfil', () => {
        cy.fixture('perfil').then( dados => {
            cy.login(dados.email, dados.senha)
        })

    });
    it('Ajustando dados na página do perfil usando DADOS FAKER', () => {
        var nome = faker.person.firstName();
        var email = faker.internet.email();
        var sobrenome = faker.person.lastName();
        
        cy.cadastro(email, 'teste123', nome, sobrenome)
        cy.get('.woocommerce-message').should('exist')

        
    });
});