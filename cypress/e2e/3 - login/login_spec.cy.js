/**
 * test sequences
 */

/**
 * describe block with * it methods, but what beforeEach
 */
describe('login form', () => {
  beforeEach(() => {
    cy.visit('/login') // Visit the login page (change this path if necessary)
  })

  it('links to sign-up page', () => {
    cy.contains("Don't have an account?") // Find the text container first
      .parent() // Move up to the parent element if needed, or you could target the anchor directly if you can
      .find('a') // Find the <a> tag within the parent
      .should('have.attr', 'href') // Assert it has an href attribute
      .and('include', '/material-ui/getting-started/templates/sign-in/') // Adjust the URL according to your app
  })

  /**
   * validation
   */
  it('require email', () => {
    //cy.get('form').contains('').click()
    cy.get('form').submit() // Use the form element directly

    // Log the error message elements to the console
    // cy.get('.MuiFormHelperText-root').then(($errorMessages) => {
    //   console.log($errorMessages) // Inspect this in the console
    //   expect($errorMessages.text().trim()).to.include("email can't be blank") // Update based on what you see
    // })

    //cy.get('.error-messages').should('contain', "email can't be blank)")
    cy.get('.MuiFormHelperText-root') // Use the actual class that wraps your error message
      .should('contain', 'Please enter a valid email address.')
  })

  it('require password', () => {
    cy.get('[data-cy=login-email]').type('james@gmail.com')
    cy.get('form').submit()

    //cy.get('.error-messages').should('contain', "email can't be clank)")
    cy.get('.MuiFormHelperText-root').should(
      'contain',
      'Password must be at least 6 characters long.'
    )
  })
  //   /**
  //    * validation both
  //    */
  it('require valid username and password', () => {
    cy.get('[data-cy=login-email]').type('james@gmail.com')
    cy.get('[data-cy=login-password]').type('secret')
    cy.get('form').submit()
    cy.url().should('include', '/login') //no dashboard navigation
  })

  it('accepts valid email and password', () => {
    //reverse logic
    // Test with valid email and password
    cy.get('[data-cy=login-email]').clear().type('james@gmail.com')
    cy.get('[data-cy=login-password]').clear().type('validpassword')
    cy.get('form').submit()

    // Assert that there are no error messages displayed
    cy.contains('Please enter a valid email address.').should('not.exist')
    cy.contains('Password must be at least 6 characters long.').should(
      'not.exist'
    )

    // Assert that the user is navigated to the dashboard (or the expected route)
    //cy.url().should('not.include', '/login')
  })

  //can't empty str
  //   it('no navigate', () => {
  //     cy.get('[data-cy=login-email]').type('')
  //     cy.get('[data-cy=login-password]').type('')
  //     cy.hash().should('eq', '#/login')
  //   })

  //is on the same gage
  it('should allow navigating to Forgot Password page', () => {
    // Click on the "Forgot your password?" link
    cy.contains('Forgot your password?').click()

    // Verify that the correct page (or modal) opens
    cy.url().should('include', '/login') // Adjust depending on behavior
  })
})
