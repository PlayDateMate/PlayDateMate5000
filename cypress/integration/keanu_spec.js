const testingUrl = 'http://localhost:3000'

describe('Friends Page', function(){
    //1
    it('check for dates', function(){
        cy.visit(testingUrl + '/#/events/7')
        cy.get('#startDate')
        .should('exist')
    })
    //2
    it('check for buttons', function(){
        cy.visit(testingUrl + '/#/friends/7')
        cy.get('#id')
        .should('exist')
    })
    // //3
    it('check for buttons', function(){
        cy.visit(testingUrl + '/#/events/7')
        cy.get('#endDate')
        .should('exist')
    })
    // //4
    it('check for buttons', function(){
        cy.visit(testingUrl + '/#/profile/7')
        cy.get('#childAge')
        .should('exist')
    })
    // //5
    it('check for buttons', function(){
        cy.visit(testingUrl + '/#/events/7')
        cy.get('#minAge')
        .should('exist')
    })
})