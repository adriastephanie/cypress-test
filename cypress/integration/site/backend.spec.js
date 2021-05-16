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

