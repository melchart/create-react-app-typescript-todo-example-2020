context('Login', () => {
  it('can go to login page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-cy=login-link]').click()

    cy.url().should('include', 'login')
  })

  it('can enter and submit credentials', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[data-cy=name-input]').type('trump').should('have.value', 'trump')
    cy.get('[data-cy=password-input]')
      .type('bighands')
      .should('have.value', 'bighands')
    cy.get('[data-cy=login-submit]').click()
  })
})
