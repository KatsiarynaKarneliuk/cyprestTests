//by default it is 5 sec   
//cy.wait('@fff')  where  @fff =  alias
/// <reference types= "cypress" />

describe('Search', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.litres.ru');
    });
    it('wait for fetch()', ()=>{
        cy.intercept('/pages/rmd_search/?*').as('books-search')
        cy.get('.Search-module__search input').type('Акунин');
        cy.get('button[type="submit"]').click({force: true});
        cy.wait('@books-search', { timeout:2000 })
        cy.contains('.page', 'Не прощаюсь').should('be.visible');
    });

    //cors, I need to figured out
    it.skip('Intercept and fake the respons', ()=>{
        cy.intercept('https://www.litres.ru/pages/rmd_search/?*', {fixture:'just.json'}).as('верхом')
        cy.get('.Search-module__search input').type('Верхом на ракете');
        cy.get('button[type="submit"]').click({force: true});
        cy.contains('.art-item__name', 'Верхом').should('be.visible');
    });

})