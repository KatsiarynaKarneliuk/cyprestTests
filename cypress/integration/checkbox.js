/// <reference types="Cypress" />
context('Checking', ()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        
    })
    it('Check box',()=>{
       cy.get('#checkboxes>input').eq(0).check()
    })
    //without appropriate page
    it('Change the gender to female', ()=>{
        cy.get('#result').should('contain.value', '"gender";""')
        cy.get("female").check().should('be.checked')
        cy.get('#result').should('contain.value', '"gender";"femail"')
    })
    it('Check a newsletter', ()=>{
        cy.get('#newsletter').should('contain.value', '"newsletter":false')
        cy.get("#newsletter").check().should('be.checked')
        cy.get('#newsletter').should('contain.value', '"newsletter":true')
        cy.get("#newsletter").uncheck().should('not.be.checked')
        cy.get('#newsletter').should('contain.value', '"newsletter":false')
    })
})
