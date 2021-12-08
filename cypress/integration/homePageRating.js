/// <reference types="Cypress" />
context('Galery links', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Has 5  cosiallinks per page', ()=>{   
        cy.get('.pk-social-links-items').should('have.length', 5)
    })
    it('Has the correct text', ()=>{
        cy.xpath('//a[contains(text(), "Фудхантинг")]')
        .should('be.visible')
        cy.xpath('//span[contains(text(),"Подписка на новости")]')
        .should('be.visible')
    })
    it('Has correct title', ()=>{
        cy.title().should('equal','С уважаемым сомелье выбираем лучшее вино до 35 рублей в самых популярных сетевых магазинах - Koko.by')
        cy.get('#menu-item-119867 >a').and('have.text', 'Главная')
    })
    it('The logo is appropriate',()=>{
        cy.get('.cs-entry__title > span')
        .should('have.text', 'С уважаемым сомелье выбираем лучшее вино до 35 рублей в самых популярных сетевых магазинах')
    })
    it('The logo is appropriate',()=>{
        cy.get('.cs-entry__title > span')
        .should('have.text', 'С уважаемым сомелье выбираем лучшее вино до 35 рублей в самых популярных сетевых магазинах')
    })

}) 