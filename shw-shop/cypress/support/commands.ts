declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Yields element by the test Id.
       *
       * @memberof Cypress.Chainable
       *
       * @example
        ```
        cy.getByTestId('productId').then(...)
        ```
       */
      getByTestId: (ID: string) => Chainable;

      /**
       * Adds element to the cart.
       *
       * @memberof Cypress.Chainable
       *
       * @example
        ```
        cy.addItemToCart('ICE – EARRINGS','L',3).then(...)
        ```
       */
      addItemToCart: (
        ItemName: string,
        size: string,
        quantity?: number,
      ) => Chainable;
      /**
       * Yields product card images that are displayed on the main page.
       *
       * @memberof Cypress.Chainable
       *
       * @example
        ```
        cy.addItemToCart('ICE – EARRINGS','L',3).then(...)
        ```
       */
      getProductCardsImgs: (ItemName: string) => Chainable;
    }
  }
}

export const getByTestId = (Id: string): Cypress.Chainable => {
  return cy.get(`[data-testid=${Id}]`);
};

export const addItemToCart = (
  ItemName: string,
  size: string,
  quantity?: number,
): Cypress.Chainable => {
  cy.url().should('not.include', 'http://localhost:3000/product/');
  cy.contains(ItemName).click();
  cy.url().should('include', 'http://localhost:3000/product/');
  cy.contains(ItemName);
  cy.get('select').contains(/size/i).parent().select(size);
  if (quantity) {
    for (let i = 1; i < quantity; i++) {
      cy.get('[data-testid=product-quantity-input]').contains('+').click();
    }
  }
  return cy.contains(/add to cart/i).click();
};

export const getProductCardsImgs = (ItemName: string): Cypress.Chainable => {
  return cy
    .contains(ItemName)
    .parents('li')
    .find('[data-testid=product-images]')
    .children();
};

Cypress.Commands.add('getByTestId', getByTestId);
Cypress.Commands.add('addItemToCart', addItemToCart);
Cypress.Commands.add('getProductCardsImgs', getProductCardsImgs);
