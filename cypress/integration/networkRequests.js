///<reference types= "cypress" />
describe('Using cy.request()', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.litres.ru');
    });
    it.skip('To login and retreive the token',()=>{
        cy.request('POST','/login'{
            username: 'username',
            password: 'password',
        })
        .its('body.token')
        .then((token) =>{
            console.log(`Token:${token}`);
        });
    });

    it('to test api',()=>{
        cy.request('/pages/search_slice/?json=1&limit=9&gu_ajax=true&q=%D0%90%D0%BA%D1%83%D0%BD%D0%B8%D0%BD').as('response')
        cy.get('@response').its('result.kind').should('equal','result.');

    })
        cy.get('.Search-module__search input').type('Акунин');
        cy.get('button[type="submit"]').click({force: true});
        cy.wait('@books-search').then((xhr)=>{
            const books = xhr.response.result.items;
            books.forEach((book, index)=>{
                cy.get('item__type_art')
                .eq(index)
                .within(() =>{
                    cy.get('.art-item__name').should('have.text', book.persons.title);
                    cy.get('.art-item__author ').should('have.text',book.person.s_full_name.join(', '));               
                });
            });
        });
    });
});