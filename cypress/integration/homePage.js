context('Name of site', ()=>{
    it('Has the corect title -Home Page', ()=>{
        cy.visit('https://www.culture.ru/live/cinema/movies')

        cy.title().should('equal', 'Список фильмов: смотреть онлайн и бесплатно лучшие советские и зарубежные фильмы. Каталог классических фильмов.')
        cy.get('h1').should('have.text','Фильмы онлайн')
    })
})