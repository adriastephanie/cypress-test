/// <reference types="cypress" />

import loc from '../../support/locators'
import '../../support/commandsConta'

describe('Should test a functional level', () => {
    before(() => {
        cy.login('adria@teste.com', '123')
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

    it('test should create transaction', () => {

        cy.get(loc.MOVIMENTACAO.MENU_MOVIMENTACAO).click()
        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Movimentação 1')
        cy.get(loc.MOVIMENTACAO.VALOR).type('120')
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Maria Clara')
        cy.get(loc.MOVIMENTACAO.CONTA).select('Conta alterada'),
        cy.get(loc.MOVIMENTACAO.STATUS).click(),
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.LOGIN.MESSAGE).should('contain', 'Movimentação inserida com sucesso!')
    
    })

    it('test should get balance', () => {
        cy.get(loc.MENU.HOME).click(),
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta alterada')).should('contain', '120,00')

    })

    it('test remove a transaction', () => {
        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_REMOVE_ELEMENT('Movimentação 1')).click()

    })
    

} )

