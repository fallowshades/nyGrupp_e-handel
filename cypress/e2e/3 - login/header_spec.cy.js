// describe('Logo Navigation', () => {
//   it('should navigate to home page when the logo is clicked', () => {
//     // Visit the initial page (you can replace the URL with your own)
//     cy.visit('/some-page') // Replace '/some-page' with the route you're testing from

//     // Check if the logo exists and has the correct `data-cy` attribute
//     cy.get('[data-cy="home"]')
//       .should('be.visible') // Ensure the element is visible
//       .click() // Simulate a click on the logo

//     // Check that the URL has changed to the home page
//     cy.url().should('eq', Cypress.config().baseUrl + '/')
//   })
// })

/**
 * crazy testing
 */

describe('Logo Navigation', () => {
  it('should navigate to home page when the logo is clicked', () => {
    // Intercept API call if necessary
    cy.intercept('GET', 'https://fakestoreapi.com/products').as('getProducts')

    // Visit the page
    cy.visit('/login')

    // Wait for the API call to complete
    cy.wait('@getProducts')

    // Now check for the logo with data-cy="home"
    cy.get('[data-cy="home"]')
      .should('be.visible') // Ensure the element is visible
      .click() // Simulate a click on the logo

    // Verify the URL
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
})

it('header with data test command', () => {
  cy.visit('ProductId/1')
  cy.getDataTest('id-header').should('exist')
})

// // it('can log out programmatically', () => {
// //   cy.window()
// //     .its('__store__')
// //     .then((store) => {
// //       store.dispatch({ type: 'logoutUser' })
// //     })

// //     cy.window().its('localStorage').invoke('getItem','jwt')
// //     .should('not.exist')
// // })

// it('can log out programmatically', () => {
//   cy.window()
//     .its('__store__')
//     .then((store) => {
//       store.dispatch({ type: 'logoutUser' })
//     })

//   cy.window().its('localStorage').invoke('getItem', 'jwt').should('not.exist')
// })

// // cypress/e2e/navbar_spec.cy.js

// describe('Navbar', () => {
//   beforeEach(() => {
//     // Replace with the actual URL of your app
//     cy.visit('/') // Make sure to visit the page where the Navbar is present

//     // Mock user login if necessary, or ensure the user is logged in
//     // You might need to directly set localStorage or use an API call
//     // For example:
//     cy.window().its('localStorage').setItem('jwt', 'fake_jwt_token')
//   })

//   it('can log out programmatically', () => {
//     // Ensure that the logout button is present
//     cy.get('button').contains('logout').should('be.visible').click() // Simulate clicking the logout button

//     // Verify that the JWT is removed from localStorage
//     cy.window().its('localStorage').invoke('getItem', 'jwt').should('not.exist') // Check that the JWT token no longer exists

//     // Optionally check for UI changes after logging out
//     cy.get('nav') // Adjust the selector to match your Navbar
//       .should('not.contain', 'Hello,') // Check that the greeting is gone
//   })
// })
