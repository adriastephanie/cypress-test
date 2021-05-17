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
                url: 'https://barrigarest.wcaquino.me/contas',
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

    it('update an account', () => {


    })

    it('should not create account with same name', () => {
  

    })

    it('test should create transaction', () => {
    
    })

    it('test should get balance', () => {

    })

    it('test remove a transaction', () => {

    })
    

} )

