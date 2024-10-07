describe('Linked List Navigation Bar', () => {
  beforeEach(() => {
    // Visit the page where the linked list exists
    cy.visit('http://localhost:5174')
  })

  it('should have a Home link', () => {
    // Check if the Home link exists
    cy.get('[data-cy=nav-home]')
      .should('have.attr', 'href', '/')
      .and('be.visible')
  })

  it('should have an About Us link', () => {
    // Check if the About Us link exists
    cy.get('[data-cy=nav-about]')
      .should('have.attr', 'href', '/') // Update this if the href value is defined later
      .and('be.visible')
  })

  it('should have a Contact Us link', () => {
    // Check if the Contact Us link exists
    cy.get('[data-cy=nav-contact]')
      .should('have.attr', 'href', '/') // Update this if the href value is defined later
      .and('be.visible')
  })

  it('should have a Tweet button', () => {
    // Check if the Tweet button exists
    cy.get('[data-cy=nav-tweet]')
      .should('be.visible')
      .within(() => {
        cy.get('span').contains('Tweet')
      })
  })

  it('should have the correct hover styles', () => {
    // Check hover effect on the navigation links
    cy.get('[data-cy=nav-home]').trigger('mouseover')
    cy.get('[data-cy=nav-home]').should('have.class', 'hover:text-gray-300')
  })
})
