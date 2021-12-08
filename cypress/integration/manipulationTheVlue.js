/// <reference types="Cypress" />
context('Changing the slider value', ()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/horizontal_slider')
        
    })
    it('Chenge the value of the slider t0 3',()=>{
        cy.get('input[type="range"]').should('contain.value','0' )

        cy.get('input[type="range"]').invoke('val', 3).trigger('input').should('have.value', '3')
        cy.get('input[type="range"]').should('contain.value', 3)

    })
})