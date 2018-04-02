const testingUrl = 'http://localhost:3000';
    

describe('Dashboard', function(){
    it('check for buttons', function(){
        cy.visit(testingUrl+'/#/events/8')
            cy.get('#friends')
            .should('exist')
            .click()
    })

})

