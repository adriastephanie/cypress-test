// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from './locators'

Cypress.Commands.add('login', (user, passwd) => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(loc.LOGIN.USER).type(user)
    cy.get(loc.LOGIN.PASSWORD).type(passwd)
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.LOGIN.MESSAGE).should('contain', 'Bem vindo, Adria!')

})

Cypress.Commands.add('resetApp', () => {
    cy.get(loc.MENU.SETTING).click()
    cy.get(loc.MENU.RESET).click()

})

Cypress.Commands.add('getToken', (user, passwd) => {
    cy.request({
        method: 'POST',
        url: '/signin',
        body: {
            email: "adria@teste.com", 
            senha: "123", 
            redirecionar: false
        }
    }).its('body.token').should('not.be.empty')
    .then(token => {
        return token
    })

})
Cypress.Commands.add('resetRest', () => {
    cy.getToken('adria@teste.com', '123').then(token => {
        cy.request({
            method: 'GET',
            url: '/reset',
            headers: { Authorization: `JWT ${token}` },
        })

    })

})

Cypress.Commands.add('getContaByName', nome => {
    cy.getToken('adria@teste.com', '123').then(token => {
        cy.request({
            method:'GET',
            url: '/contas',
            headers: { Authorization: `JWT ${token}` },
            qs: {
                nome: 'Conta para alterar'
            }
        }).then(res => {
            return res.body[0].id
        })
    })
})