/// <reference types="Cypress" />
context('Creating todo note', ()=>{
    beforeEach(()=>{
        cy.visit('https://gander.wustl.edu/~wilson/store/yui/docs/app/app-todo.html')
        cy.get('#new-todo').as('new')
    })
    it('Can add new to-do',()=>{
        cy.get('@new').type('A new one todo {enter}')
        cy.contains('#todo-list', 'A new one todo' ).should('be.visible')
    })
    it('Can add new to-do enter text in parts',()=>{
        cy.get('@new').type('A')
        .type(' new')
        .type(' name{enter}')

        cy.contains('#todo-list', 'A new name' ).should('be.visible')
    })
})