///<reference types= "cypress" />
//figureout
//to check what com es from back, for e2e tests
describe('Search', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.litres.ru');
    });
    it('Intercept and use the response',()=>{
        cy.intercept('/pages/rmd_search/?*').as('books-search');
        cy.get('.Search-module__search input').type('Акунин');
        cy.get('button[type="submit"]').click({force: true});
        cy.wait('@books-search').then((xhr)=>{
            const books = xhr.response.body.items;
            books.forEach((book, index)=>{
                cy.get('item__type_art')
                .eq(index)
                .within(() =>{
                    cy.get('.art-item__name').should('have.text', book.persons.title);
                    cy.get('..art-item__author ').should('have.text', book.person.s_full_name.join(', '));               
                });
            });
        });
    });
});