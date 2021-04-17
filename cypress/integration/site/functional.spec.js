/// <reference types="cypress" />

describe('Should test a functional level', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test=email]').type('adria@teste.com')
        cy.get('[data-test=passwd]').type('123')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo, Adria!')
    })

    it('Should create an account', () => {
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('Conta de teste 2')
        cy.get('.btn').click({force: true})
        cy.get('.toast-message').should('contain', 'Conta inserida com sucesso!')

    })
} )