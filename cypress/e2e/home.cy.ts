describe('Test home page', () => {
  it('Visits home page', () => {
    cy.visit('/');
    cy.title().should('eq', 'Art Store');
  });

  it('Should change button to \'Less categories\' after click', () => {
    cy.get('[data-cy="more-btn"]:first').click();
    cy.get('[data-cy="less-btn"]:first');
  });

  it('Should change button to \'More categories\' after click', () => {
    cy.get('[data-cy="less-btn"]:first').click();
    cy.get('[data-cy="more-btn"]:first');
  });

  it('Should change button to \'Already in cart\' after click at home page and add painting to the cart', () => {
    cy.get('[data-cy="buy-btn"]:first').click();
    cy.get('[data-cy="already-in-cart-btn"]:first');
    cy.get('[data-cy="shopping-cart-link"]').click();
    cy.get('[data-cy="painting-in-cart"]').should('exist');
  });

  it('Should redirect to about us page', () => {
    cy.get('[data-cy="about-us-link"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/about-us');
    cy.title().should('eq', 'About Us');
  });

  it('Should redirect to careers page', () => {
    cy.get('[data-cy="careers-link"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/careers');
    cy.title().should('eq', 'Careers');
  });

  it('Should redirect to shopping cart page', () => {
    cy.get('[data-cy="shopping-cart-link"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/shopping-cart');
    cy.title().should('eq', 'Shopping Cart');
  });

  it('Should redirect to first category - realism from sidebar', () => {
    cy.visit('/');
    cy.get('[data-cy="categories-sidebar-link"]:first').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/realism');
    cy.title().should('eq', 'Realism');
  });

  it('Should redirect to first category - realism from categories block', () => {
    cy.visit('/');
    cy.get('[data-cy="categories-link"]:first').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/realism');
    cy.title().should('eq', 'Realism');
  });
});
