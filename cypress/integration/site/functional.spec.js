/// <reference types="cypress" />

import loc from '../../support/locators'

describe('Should test a functional level', () => {
    before(() => {
        cy.login()
        cy.resetApp()
      
    })

    it('Should create an account', () => {
        cy.get(loc.MENU.SETTING).click()
        cy.get(loc.MENU.CONTA).click()
        cy.get(loc.CONTA.NOME).type('Conta de teste 1')
        cy.get(loc.CONTA.BTN_SALVAR).click({force: true})
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

} )

