const { eq } = require("lodash")

context.skip('Anti-patterns', ()=>{
    it("Don't use variables",()=>{
        //this is an anti-psttern. Don't use!
        const catergoryLink = cy.get('.cs-entry__category > .post-categories > li > a')
        catergoryLink.find('a:visible').first().should('have.text', 'Фудхантинг')
    })
})

context('CatergoryLink in the header', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it("Link to a category in the header",()=>{
        cy.get('.cs-entry__category > .post-categories > li > a').should('have.text','Фудхантинг')
    })
    it('Look at first', () =>{
        cy.get('.powerkit_social_links_widget-3 > .widget-body > .cs-section-heading > .cnvs-section-title').within(()=> {
            cy.get('span').first().should('have.text', 'Подпишитесь')
        })
    })
    it("Nested searches",()=>{
        cy.root()
        cy.get('.powerkit_social_links_widget-3 > .widget-body').within(()=>{
            cy.root()
            cy.get('a').first().should('have.text', '  15K ')
        })
    })
})
context('Navigation', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.get('#menu-primary-1>li').as('nav-menu')
    })
    it("The navigation links have the correct text",()=>{
        cy.get('@nav-menu').eq(0).should('contain','Главная')
        cy.get('@nav-menu').eq(1).should('contain','Каталог')
        cy.get('@nav-menu').eq(2).should('have.text', 'Афиша')
    })
    it("It can navigate to Каталог link manue",()=>{
        cy.contains('Каталог').click({ force: true })
        cy.title().should('equal','Лучшие рестораны, кафе, бары - Каталог заведений cat.koko.by')
    })
    it("It can navigate to Афиша manue",()=>{
        cy.get('a').contains('Афиша').click({ force: true })
        cy.title().should('equal','Афиша и мероприятия, куда сходить в Минске - Koko.by')
    })

    it("It can navigate to Stocks",()=>{
        cy.get('a').contains(/^Акции$/i).click({ force: true })
        cy.title().should('equal','Все акции и скидки в заведениях, ресторанах и кафе - Koko.by')
    })
})