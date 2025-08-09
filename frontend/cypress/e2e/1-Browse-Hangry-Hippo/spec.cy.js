describe('Hits Home Page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
  });

  it('displays the Welcome message', () => {
    cy.get('h1').should(
      'have.text',
      "Welcome to Hangry Hippo! Hungry? Let's get started!"
    );
  });

  it('shows the Menu items', () => {
    // Check for the Appeteasers menu item
    cy.get('[data-testid=category-item]')
      .should('be.visible')
      .and('contain', 'Appeteasers');

    // Check for the Handhelds menu item
    cy.get('[data-testid=category-item]')
      .should('be.visible')
      .and('contain', 'Handhelds');
  });
});

describe('Hits Order Page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/order');
  });

  it('shows Your Order title', () => {
    cy.get('h3').should('have.text', 'Your Order');
  });
});
