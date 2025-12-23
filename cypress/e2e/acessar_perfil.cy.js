/// <reference types='cypress'/>
const perfil =require('../fixtures/perfil.json')


describe('Acessar conta utilizando ferramentas avançadas no Cypress', () => {
  beforeEach(() => {
    cy.visit('minha-conta/')
  });

  it('Acessar um usuário usando MASSA DE DADOS', () => {
    cy.get('[name="username"]').type(perfil.email)
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(perfil.senha)
    cy.get('[name="login"]').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').contains('Olá')
  })

  it.only('Acessar um usuário usando FIXTURE', () => {
    cy.fixture('perfil').then( dados =>{
    cy.get('[name="username"]').type(dados.email , {log: false})
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(dados.senha)
      })
      cy.get('[name="login"]').click()
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').contains('Olá')
    })
  })