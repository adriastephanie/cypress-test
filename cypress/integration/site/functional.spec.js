/// <reference types="cypress" />

import loc from '../../support/locators'
import '../../support/commandsConta'

describe('Should test a functional level', () => {
    before(() => {
        cy.login()
        cy.resetApp()
      
    })

    it('Should create an account', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste 1')
        cy.get(loc.LOGIN.MESSAGE).should('contain', 'Conta inserida com sucesso!')

    })

    it('update an account', () => {
        cy.get(loc.MENU.SETTING).click()
        cy.get(loc.MENU.CONTA).click()
        cy.xpath(loc.CONTA.XP_ALTERAR_CONTA).click()
        cy.get(loc.CONTA.NOME)
            .clear()
            .type('Conta alterada')
        cy.get(loc.CONTA.BTN_SALVAR).click({force: true})
        cy.get('.toast-message').should('contain', 'Conta atualizada com sucesso!')

    })

    it('should not create account with same name', () => {
        cy.acessarMenuConta()
   
        cy.get(loc.CONTA.NOME).type('Conta alterada')
        cy.get(loc.CONTA.BTN_SALVAR).click({force: true})
        cy.get(loc.LOGIN.MESSAGE).should('contain', 'code 400')

    })

    it('should create transaction', () => {

        cy.get(loc.MOVIMENTACAO.MENU_MOVIMENTACAO).click()
        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Movimentação 1')
        cy.get(loc.MOVIMENTACAO.VALOR).type('120')
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Maria Clara')
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get('.toast-message').should('contain', 'Movimentação inserida com sucesso!')
    
    })
    

} )

