context('open speakin academy', ()=>{
    beforeEach(()=>{
        cy.visit('https://keithspeakingacademy.com/')
    })

    it("Link to a category in the header",()=>{
        cy.get('h3>a').contains('Follow a LIVE LESSON').click('bottomRight')
    })
})
context('clicking on  speakin academy', ()=>{
    beforeEach(()=>{
        cy.visit('https://keithspeakingacademy.com/')
    })

    it("Link to a category in the header",()=>{
        cy.get('span').contains('My Online Courses').click(20,40)
    })
})