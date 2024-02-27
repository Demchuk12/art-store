describe('Test good page', () => {
  it('Visits first good - Mona Lisa', () => {
    cy.visit('/realism/1');
    cy.title().should('eq', 'Mona Lisa');
  });

  it('Should change button to \'Already in cart\' after click at good page and add painting to the cart', () => {
    cy.get('[data-cy="buy-btn"]:first').click();
    cy.get('[data-cy="already-in-cart-btn"]:first');
    cy.get('[data-cy="shopping-cart-link"]').click();
    cy.get('[data-cy="painting-in-cart"]').should('exist');
  });

  it('Should show validation messages if inputs were touched and have no value', () => {
    cy.visit('/realism/1');
    cy.get('[data-cy="input-name"]').click().blur();
    cy.get('[data-cy="input-email"]').click().blur();
    cy.get('[data-cy="input-score"]').type(' ').blur();
    cy.get('[data-cy="validation-name"]').should('have.text', 'Please enter your name');
    cy.get('[data-cy="validation-email"]').should('have.text', 'Please enter your email');
    cy.get('[data-cy="validation-score"]').should('have.text', 'Please choose a score');
  });

  it('Should show validation message \'Please enter a correct email\' if email input has incorrect value', () => {
    cy.get('[data-cy="input-email"]').type('test').blur();
    cy.get('[data-cy="validation-email"]').should('have.text', 'Please enter a correct email');
  });

  it('Should show validation message \'Min length is 3 letters, please enter a correct name\' if input value has shorter value then required', () => {
    cy.get('[data-cy="input-name"]').type('hi').blur();
    cy.get('[data-cy="validation-name"]').should('have.text', 'Min length is 3 letters, please enter a correct name');
  });

  it('Should show validation message if input value has longer value then required', () => {
    cy.get('[data-cy="input-name"]').type('test validation message \'Max length is 20 letters, please enter a correct name\'').blur();
    cy.get('[data-cy="input-comment"]').type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Na').blur();
    cy.get('[data-cy="validation-name"]').should('have.text', 'Max length is 20 letters, please enter a correct name');
    cy.get('[data-cy="validation-comment"]').should('have.text', 'Max length is 1000 characters');
  });
});
