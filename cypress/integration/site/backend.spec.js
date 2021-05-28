/// <reference types="cypress" />

import '../../support/commands'

describe('Should test a BACKEND level', () => {

    let token

    before(() => {
        cy.getToken('adria@teste.com', '123')
        .then(tkn => {
            token = tkn
        })
      
    })
    beforeEach(() => {
        cy.resetRest()
    })

    it('Should create an account', () => {
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'Conta via request'
            }
        }).as('response')

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta via request')
        })
    })

    it.only('update an account', () => {
        cy.request({
            method:'GET',
            url: '/contas',
            headers: { Authorization: `JWT ${token}` },
            qs: {
                nome: 'Conta para alterar'
            }

        }).then(res => {
            cy.request({
                url: `/contas/${res.body[0].id}`,
                method: 'PUT',
                headers: { Authorization: `JWT ${token}` },
                body: {
                    nome: 'conta modificada 123'
                }
            }).as('response')
    
            cy.get('@response').its('status').should('be.equal', 200)
        })

    })

    it.only('should not create account with same name', () => {
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'Conta mesmo nome'
            },
            failOnStatusCode: false
        }).as('response')

        cy.get('@response').then(res => {
            console.log(res)
            expect(res.status).to.be.equal(400)
            expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
        })

    })

   /*  it('test should create transaction', () => {
    
    })

    it('test should get balance', () => {

    })

    it('test remove a transaction', () => {

    })  */

})