/// <reference types="Cypress" />
context('open speakin academy', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.get('#vew#setting').click()
    })
    it('Change the name to Jack Sparrow', ()=>{
        cy.get('#firstName').clear().type('Jack').should('have.value', 'Jack')
        cy.get('#lastName').clear().type('Sparrow').should('have.value', 'Sparrow')
        cy.get('#email').clear().type('some@gmail.com').should('have.value', 'some@gmail.com')
        cy.get('#result')
            .should('contain.value','"firstName':"Jack")
            .should('contain.value','"LastName':"Sparrow")
            .should('contain.value','"email':"some@gmail.com")
    })