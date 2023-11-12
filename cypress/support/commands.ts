export {};

declare global {
  namespace Cypress {
    interface Chainable {
        shouldNotExist(element: string): Chainable<void>
    }
  }
}; 

Cypress.Commands.add('shouldNotExist', (element: string) => {
    cy.get(element).should('not.exist');
});