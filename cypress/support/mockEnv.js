const MockEnv = () => {
    cy.intercept('POST', '/signin*', {
        statusCode: 200,
        body: {
            id:1444,
            nome: 'Adria',
            token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9token.fake',
        },
    }).as('signin')

    cy.intercept('GET', '/saldo*', {
        statusCode: 200,
        body: [{
            conta_id: 9998,
            conta:'Conta fake',
            saldo:'1500.00',
        },
        {
            conta_id: 9999,
            conta:'Conta com movimentacao',
            saldo:25.00,

        }]
    }).as('saldo')

}
export default MockEnv