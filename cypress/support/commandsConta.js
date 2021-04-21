import loc from './locators'

Cypress.Commands.add('acessarMenuConta', () => {
    cy.get(loc.MENU.SETTING).click()
    cy.get(loc.MENU.CONTA).click()


})

Cypress.Commands.add('inserirConta', (conta) => {
    cy.get(loc.CONTA.NOME).type(conta)
    cy.get(loc.CONTA.BTN_SALVAR).click()
})

