describe('Test shopping cart page', () => {
  it('Visits shopping cart page', () => {
    cy.visit('/shopping-cart');
    cy.title().should('eq', 'Shopping Cart');
  });

  it('Should increment quantity after click increment button', () => {
    cy.visit('/');
    cy.get('[data-cy="buy-btn"]:first').click();
    cy.visit('/shopping-cart');
    cy.get('[data-cy="increment-btn"]:first').click();
    cy.contains('[data-cy="quantity"]:first', '2');
  });

  it('Should decrement quantity after click decrement button', () => {
    cy.get('[data-cy="decrement-btn"]:first').click();
    cy.contains('[data-cy="quantity"]:first', '1');
  });

  it('Should remove painting after click decrement button if quantity = 1', () => {
    cy.get('[data-cy="decrement-btn"]:first').click();
    cy.get('[data-cy="painting-in-cart"]').should('not.exist');
  });

  it('Should remove painting after click remove button', () => {
    cy.visit('/');
    cy.get('[data-cy="buy-btn"]:first').click();
    cy.visit('/shopping-cart');
    cy.get('[data-cy="remove-btn"]:first').click();
    cy.get('[data-cy="painting-in-cart"]').should('not.exist');
  });

  it('Should show validation message \'Please enter info\' if input was touched and has no value', () => {
    cy.get('[data-cy="input-first-name"]').click().blur();
    cy.get('[data-cy="input-email"]').click().blur();
    cy.get('[data-cy="input-phone"]').click().blur();
    cy.get('[data-cy="input-address"]').click().blur();
    cy.get('[data-cy="input-last-name"]').click().blur();
    cy.get('[data-cy="input-country"]').click().blur();
    cy.get('[data-cy="input-city"]').click().blur();
    cy.get('[data-cy="input-zip"]').click().blur();
    cy.get('[data-cy="validation-first-name"]').should('have.text', 'Please enter info');
    cy.get('[data-cy="validation-email"]').should('have.text', 'Please enter info');
    cy.get('[data-cy="validation-phone"]').should('have.text', 'Please enter info');
    cy.get('[data-cy="validation-address"]').should('have.text', 'Please enter info');
    cy.get('[data-cy="validation-last-name"]').should('have.text', 'Please enter info');
    cy.get('[data-cy="validation-country"]').should('have.text', 'Please enter info');
    cy.get('[data-cy="validation-city"]').should('have.text', 'Please enter info');
    cy.get('[data-cy="validation-zip"]').should('have.text', 'Please enter info');
  });

  it('Should show validation message \'Please enter a correct email\' if email input has incorrect value', () => {
    cy.get('[data-cy="input-email"]').type('test').blur();
    cy.get('[data-cy="validation-email"]').should('have.text', 'Please enter a correct email');
  });

  it('Should show validation message \'Too short\' if input value has shorter value then required', () => {
    cy.get('[data-cy="input-first-name"]').type('hi').blur();
    cy.get('[data-cy="input-phone"]').type('hi').blur();
    cy.get('[data-cy="input-address"]').type('hi').blur();
    cy.get('[data-cy="input-last-name"]').type('hi').blur();
    cy.get('[data-cy="input-country"]').type('hi').blur();
    cy.get('[data-cy="input-city"]').type('hi').blur();
    cy.get('[data-cy="input-zip"]').type('hi').blur();
    cy.get('[data-cy="validation-first-name"]').should('have.text', 'Too short');
    cy.get('[data-cy="validation-phone"]').should('have.text', 'Too short');
    cy.get('[data-cy="validation-address"]').should('have.text', 'Too short');
    cy.get('[data-cy="validation-last-name"]').should('have.text', 'Too short');
    cy.get('[data-cy="validation-country"]').should('have.text', 'Too short');
    cy.get('[data-cy="validation-city"]').should('have.text', 'Too short');
    cy.get('[data-cy="validation-zip"]').should('have.text', 'Too short');
  });

  it('Should show validation message \'Too long\' if input value has longer value then required', () => {
    cy.get('[data-cy="input-first-name"]').clear().type('test validation message \'Too long\'').blur();
    cy.get('[data-cy="input-phone"]').type('test validation message \'Too long\'').blur();
    cy.get('[data-cy="input-last-name"]').type('test validation message \'Too long\'').blur();
    cy.get('[data-cy="validation-first-name"]').should('have.text', 'Too long');
    cy.get('[data-cy="validation-phone"]').should('have.text', 'Too long');
    cy.get('[data-cy="validation-last-name"]').should('have.text', 'Too long');
  });
});
