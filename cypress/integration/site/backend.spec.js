/// <reference types="cypress" />

describe('Should test a functional level', () => {
    before(() => {
        //cy.resetApp()
      
    })

    it('Should create an account', () => {
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: {
                email: "adria@teste.com", 
                senha: "123", 
                redirecionar: false
            }
        }).its('body.token').should('not.be.empty')
            .then(token => {
            cy.request({
                url: 'https://barrigarest.wcaquino.me/contas',
                method: 'POST',
                headers: { Authorization: `JWT ${token}` },
                body: {
                    nome: 'Conta via request'
                }
            }).as('response')
        })

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

