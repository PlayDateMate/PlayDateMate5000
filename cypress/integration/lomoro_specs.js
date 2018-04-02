// const testingUrl = 'http://localhost:3000';

// describe('Event Page', function(){
//     it('check for buttons', function(){
//         cy.visit(testingUrl+'/#/profile/5')
//             cy.get('.createEventButton')
//                 .should('exist')
           
                
//     })
//     it('check update toggle', function(){
//         cy.visit(testingUrl+'/#/children/2')
//             cy.get('#updateChildButton')
//                 .should('exist')
//                     .click()
//             cy.get('#cancelUpdateButton')
//                 .should('exist')
//                     .click()
//             cy.get('#updateChildButton')
//                 .should('exist')
//     })
//     it('check for update name input boxes', function(){
//         cy.visit(testingUrl+'/#/children/2')
//             cy.get('#updateChildButton')
//                 .should('exist')
//                     .click()
//             cy.get('#updateNameInput')
//                 .type('Tim')
//             cy.get('#cancelUpdateButton')
//                 .click()
//             cy.get('#childName')
//                 .contains('Large Tim')
//                     .should('exist')
//     })
//     it('check for update interests input boxes', function(){
//         cy.visit(testingUrl+'/#/children/2')
//             cy.get('#updateChildButton')
//                 .should('exist')
//                     .click()
//             cy.get('#updateInterestsInput')
//                 .type('Anything At ALll!!')
//             cy.get('#cancelUpdateButton')
//                 .click()
//             cy.get('#childInterests')
//                 .contains('Hockey and Womens Tennis')
//                     .should('exist')
//     })
//     it('check the back button works', function(){
//         cy.visit(testingUrl+'/#/addchild/5')
//             cy.get('#nameInputBox')
//                 .should('exist')
//             cy.get('#interestsInputBox')
//                 .should('exist')
//             cy.get('#cancelAddChild')
//                 .click()
//             cy.get('.addChildButton')
//                 .should('exist')
                    
           
//     })
// })
