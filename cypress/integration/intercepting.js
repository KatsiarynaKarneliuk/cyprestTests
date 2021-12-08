/// <reference types= "cypress" />

describe.only('Search', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.litres.ru');
    });
    it('Search for Акунин', ()=>{
        cy.get('.Search-module__search input').type('Акунин');
        cy.get('button[type="submit"]').click({force: true});
        cy.contains('.page', 'Не прощаюсь').should('be.visible');
    });

    //cy.intercept typicaly insert into beforeEach, but here not, becouse of different type of using it
    it('Intercept with a StringMatcher', ()=>{
        cy.intercept('/pages/rmd_search/?q=%D0%90%D0%BA%D1%83%D0%BD%D0%B8%D0%BD').as('books-search')
        cy.get('.Search-module__search input').type('Акунин');
        cy.get('button[type="submit"]').click({force: true});
        cy.contains('.page', 'Не прощаюсь').should('be.visible');
    });

    it('Intercept with a StringMatcher with wildcards', ()=>{
        cy.intercept('/pages/rmd_search/?*').as('books-search')
        cy.get('.Search-module__search input').type('Акунин');
        cy.get('button[type="submit"]').click({force: true});
        cy.contains('.page', 'Не прощаюсь').should('be.visible');
    });

    it.only('Intercept with a RouteMatcher', ()=>{ //not working match gor me here
        cy.intercept({ url:'**/rmd_search' }).as('books-search')
        cy.get('.Search-module__search input').type('Акунин');
        cy.get('button[type="submit"]').click({force: true});
        cy.contains('.page', 'Не прощаюсь').should('be.visible');
    });

    it('Intercept with a RouteMatcher', ()=>{
        cy.intercept({ pathname:'/pages/rmd_search', method:'get' }).as('books-search')
        cy.get('.Search-module__search input').type('Акунин');
        cy.get('button[type="submit"]').click({force: true});
        cy.contains('.page', 'Не прощаюсь').should('be.visible');
    });
//bug, fix will be realied soon in the cypress
    // it('Intercept with a RouteMatcher', ()=>{
    //     cy.intercept({ 
    //         hostname:'https://www.litres.ru',
    //         method:'get',
    //         pathname:'/pages/rmd_search/?*'
    //     }).as('books-search')
    //     cy.get('.Search-module__search input').type('Акунин');
    //     cy.get('button[type="submit"]').click({force: true});
    //     cy.contains('.page', 'Не прощаюсь').should('be.visible');
    // });


        // just to check in the console(replacing or not templates for comparing ):
        //Cypress.minimatch('/pages/rmd_search/?q=%D0%90%D0%BA%D1%83%D0%BD%D0%B8%D0%BD', '**/rmd_search/*', { matchBase:true })
    
});