describe('Test category page', () => {
  it('Visits category page - realism', () => {
    cy.visit('/realism');
    cy.title().should('eq', 'Realism');
  });

  it('Should change button to \'Already in cart\' after click at categories page and add painting to the cart', () => {
    cy.get('[data-cy="buy-btn"]:first').click();
    cy.get('[data-cy="already-in-cart-btn"]:first');
    cy.get('[data-cy="shopping-cart-link"]').click();
    cy.get('[data-cy="painting-in-cart"]').should('exist');
  });

  it('Should redirect to first painting from realism category page', () => {
    cy.visit('/realism');
    cy.get('[data-cy="more-information-link"]:first').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/realism/1');
    cy.title().should('eq', 'Mona Lisa');
  });
});
