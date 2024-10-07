// cypress/e2e/cart_page_spec.cy.js

// describe('CartPage', () => {
//   beforeEach(() => {
//     // Visit the cart page and clear localStorage before each test
//     cy.visit('/cartPage')
//     // Clear any existing items and visit the cart page
//     // cy.window().its('localStorage').setItem('cart', JSON.stringify([])) // Clear cart
//     // cy.visit('/cartPage') // Replace with the actual URL of your cart page
//     // Clear localStorage cart item using cy.window().then()
//     cy.window().then((win) => {
//       win.localStorage.setItem('cart', JSON.stringify([])) // Clear cart by setting an empty array
//     })
//   })

//   it('displays a message when the cart is empty', () => {
//     // Visit the cart page with an empty cart
//     cy.get('div').contains('Your cart is empty!').should('be.visible')
//   })

//   it('displays cart items and total when items are in the cart', () => {
//     // Set up mock cart items in local storage
//     const mockCartItems = [
//       {
//         cartID: '1',
//         imgSrc: 'image1.jpg',
//         imgAlt: 'Product 1',
//         title: 'Product 1 Title',
//         price: 29.99,
//         amount: 1,
//       },
//       {
//         cartID: '2',
//         imgSrc: 'image2.jpg',
//         imgAlt: 'Product 2',
//         title: 'Product 2 Title',
//         price: 49.99,
//         amount: 2,
//       },
//     ]

//     // Calculate the order total based on mock cart items
//     const orderTotal = mockCartItems.reduce((total, item) => {
//       return total + item.price * item.amount
//     }, 0)

//     // Set the cart items in local storage
//     cy.window()
//       .its('localStorage')
//       .setItem('cart', JSON.stringify(mockCartItems))

//     // Visit the cart page
//     cy.visit('/cart')

//     // Check if the items are rendered in the cart
//     mockCartItems.forEach((item) => {
//       cy.get('h2').contains(item.title).should('be.visible') // Check if item title is visible
//       cy.get('img[alt="' + item.imgAlt + '"]').should('be.visible') // Check if item image is visible
//       cy.get('div')
//         .contains(`$${item.price.toFixed(2)}`)
//         .should('be.visible') // Check if item price is visible
//     })

//     // Verify the order total is displayed correctly
//     cy.get('div')
//       .contains(`Cart Total: $${orderTotal.toFixed(2)}`)
//       .should('be.visible')

//     // Check if the checkout button is displayed
//     cy.get('button').contains('Click to checkout').should('be.visible')
//   })
// })
/**
 * can also intercept
 */

// describe('Cart Item Input', () => {
//   it('should update the amount and dispatch the edit action when input is changed', () => {
//     // Visit the page where the component is rendered
//     cy.visit('/cartPage') // Adjust to the correct route where the component is rendered

//     // Intercept the dispatch call to monitor actions (if using Redux or similar state management)
//     cy.intercept('POST', '/edit-item').as('editItem') // Adjust URL based on the actual dispatch

//     // Ensure the input exists and has the correct initial value
//     cy.get('[data-cy="input"]').should('be.visible') // Ensure the input field is visible
//     // .should('have.value', '1') // Assuming the default value is 1

//     // Simulate entering a new value (e.g., changing amount to 3)
//     cy.get('[data-cy="input"]')
//       .clear() // Clear the existing value
//       .type('3') // Enter a new amount
//       .trigger('change') // Trigger the onChange event manually if necessary

//     // Check if the input value has changed to 3
//     cy.get('[data-cy="input"]').should('have.value', '3')

//     // Wait for the dispatch action to occur
//     cy.wait('@editItem')

//     // Optionally, assert that the correct dispatch action has been triggered with the new amount
//     // This would depend on how you're dispatching your action and how your backend is structured
//     cy.get('@editItem').should(({ request }) => {
//       expect(request.body).to.have.property('amount', 3)
//     })

//     // Check if the calculated total is correct (based on the price)
//     const price = 10.0 // Example price, adjust to match your component
//     cy.get('.total').should('contain', (3 * price).toFixed(2)) // Assuming there's an element showing the total amount
//   })
// })
