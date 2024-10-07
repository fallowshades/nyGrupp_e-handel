/**
 *
 */
// describe('user sign-up and login', () => {
//   beforeEach(() => {
//     cy.request('POST, /register').as('signup')
//   })

//   it('should allow a visitor to signup', () => {
//     cy.visit('/')

//     cy.wait('@register')
//   })
// })

// describe('user sign-up and login', () => {
//   beforeEach(() => {
//     // Intercept the registration API request
//     cy.intercept('POST', '/register').as('signup') // Replace '/register' with the correct endpoint if needed
//   })

//   it('should allow a visitor to signup', () => {
//     cy.visit('/register') // Replace this with the actual registration page URL

//     // Simulate form filling (adjust according to your form field names)
//     cy.get('#name').type('Jon Snow')
//     cy.get('#email').type('jon@snow.com')
//     cy.get('#password').type('password123')

//     // Submit the form
//     cy.get('form').submit()

//     // Wait for the signup request to be made
//     cy.wait('@signup').its('response.statusCode').should('eq', 200)
//   })
// })
