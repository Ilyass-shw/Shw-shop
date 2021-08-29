/// <reference types="cypress" />
import data from '../../src/Data';
describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  //==================================================================================================

  it('should handle using product filter on the landing page.', () => {
    const AllProductsNames = data.map((item) => item.name);
    cy.get('[aria-label="product card"]')
      .find('h4')
      .then((DisplayedProducts) =>
        Cypress._.map(DisplayedProducts, 'innerText'),
      )
      .should('deep.equal', AllProductsNames);

    cy.get('#productFilter').select('Ring');
    const RingProducts = data.filter((product) => product.category === 'Ring');
    const RingProductsNames = RingProducts.map((item) => item.name);
    cy.get('[aria-label="product card"]')
      .find('h4')
      .then((DisplayedProducts) =>
        Cypress._.map(DisplayedProducts, 'innerText'),
      )
      .should('deep.equal', RingProductsNames);

    cy.get('#productFilter').select('Earrings');
    const EarringsProducts = data.filter(
      (product) => product.category === 'Earrings',
    );
    const EarringsProductsNames = EarringsProducts.map((item) => item.name);
    cy.get('[aria-label="product card"]')
      .find('h4')
      .then((DisplayedProducts) =>
        Cypress._.map(DisplayedProducts, 'innerText'),
      )
      .should('deep.equal', EarringsProductsNames);

    cy.get('#productFilter').select('Bracelet');
    const BraceletProducts = data.filter(
      (product) => product.category === 'Bracelet',
    );
    const BraceletProductsNames = BraceletProducts.map((item) => item.name);
    cy.get('[aria-label="product card"]')
      .find('h4')
      .then((DisplayedProducts) =>
        Cypress._.map(DisplayedProducts, 'innerText'),
      )
      .should('deep.equal', BraceletProductsNames);

    cy.get('#productFilter').select('All Jewelry');
    cy.get('[aria-label="product card"]')
      .find('h4')
      .then((DisplayedProducts) =>
        Cypress._.map(DisplayedProducts, 'innerText'),
      )
      .should('deep.equal', AllProductsNames);
  });

  //==================================================================================================

  it('should play different imgs on hover over product card.', () => {
    // On small devices the animation is activated
    // when product card is within viewport.
    cy.viewport('iphone-5');

    cy.getProductCardsImgs('ICE – EARRINGS').first().scrollIntoView();

    cy.getProductCardsImgs('ICE – EARRINGS').should((imgs) => {
      expect(imgs[0]).not.to.be.visible;
      expect(imgs[1]).to.be.visible;
    });

    cy.getProductCardsImgs('ICE – EARRINGS').should((imgs) => {
      expect(imgs[0]).to.be.visible;
      expect(imgs[1]).not.to.be.visible;
    });

    // On bigger devices the animation is activate
    // when product is hovered on.
    cy.viewport('macbook-11');
    
    cy.contains('AURORA BOREALIS – NECKLACE')
      .parents('li')
      .trigger('mouseover');

    cy.getProductCardsImgs('AURORA BOREALIS – NECKLACE').should((imgs) => {
      expect(imgs[0]).not.to.be.visible;
      expect(imgs[1]).to.be.visible;
      expect(imgs[2]).not.to.be.visible;
    });

    cy.getProductCardsImgs('AURORA BOREALIS – NECKLACE').should((imgs) => {
      expect(imgs[0]).not.to.be.visible;
      expect(imgs[1]).not.to.be.visible;
      expect(imgs[2]).to.be.visible;
    });

    cy.getProductCardsImgs('AURORA BOREALIS – NECKLACE').should((imgs) => {
      expect(imgs[0]).to.be.visible;
      expect(imgs[1]).not.to.be.visible;
      expect(imgs[2]).not.to.be.visible;
    });

    cy.getProductCardsImgs('AURORA BOREALIS – NECKLACE').should((imgs) => {  
      expect(imgs[0]).not.to.be.visible;
      expect(imgs[1]).to.be.visible;
      expect(imgs[2]).not.to.be.visible;
    });
    cy.contains('AURORA BOREALIS – NECKLACE')
      .parents('li')
      .trigger('mouseout')
      .find('[data-testid=product-images]')
      .first()
      .children()
      .should((imgs) => {
        expect(imgs[0]).not.to.be.visible;
        expect(imgs[1]).to.be.visible;
        expect(imgs[2]).not.be.visible;
      });
    cy.scrollTo(0, 0);

    cy.getProductCardsImgs('AURORA BOREALIS – NECKLACE').should((imgs) => {
      expect(imgs[0]).to.be.visible;
      expect(imgs[1]).not.to.be.visible;
      expect(imgs[2]).not.be.visible;
    });
  });

  //==================================================================================================

  it('should allow user to view product details.', () => {
    cy.contains('AURORA BOREALIS – NECKLACE').click();
    cy.url().should('include', 'http://localhost:3000/product/');
    cy.contains('AURORA BOREALIS – NECKLACE');
    cy.get('[data-testid=miniImgs] > :nth-child(1) > div')
      .should('have.css', 'border', '2.5px solid rgb(0, 0, 0)')
      .find('img')
      .click()
      .then((miniImg) => {
        cy.get('[data-testid=ZoomableImg]').should(
          'have.attr',
          'src',
          miniImg.attr('src'),
        );
      });

    cy.get('[data-testid=miniImgs] > :nth-child(3) > div')
      .should('not.have.css', 'border', '2.5px solid rgb(0, 0, 0)')
      .find('img')
      .click()
      .then((miniImg) => {
        cy.get('[data-testid=ZoomableImg]').should(
          'have.attr',
          'src',
          miniImg.attr('src'),
        );
      });
    cy.get('[data-testid=miniImgs] > :nth-child(3) > div').should(
      'have.css',
      'border',
      '2.5px solid rgb(0, 0, 0)',
    );
    cy.get('[data-testid=miniImgs] > :nth-child(2) > div')
      .should('not.have.css', 'border', '2.5px solid rgb(0, 0, 0)')
      .find('img')
      .click()
      .then((miniImg) => {
        cy.get('[data-testid=ZoomableImg]').should(
          'have.attr',
          'src',
          miniImg.attr('src'),
        );
      });
    cy.get('[data-testid=miniImgs] > :nth-child(2) > div').should(
      'have.css',
      'border',
      '2.5px solid rgb(0, 0, 0)',
    );

    cy.get('[data-testid=leftArrow] > svg').click();
    cy.get('[data-testid=miniImgs] > :nth-child(1) > div')
      .should('have.css', 'border', '2.5px solid rgb(0, 0, 0)')
      .find('img')
      .click()
      .then((miniImg) => {
        cy.get('[data-testid=ZoomableImg]').should(
          'have.attr',
          'src',
          miniImg.attr('src'),
        );
      });
    cy.get('[data-testid=miniImgs] > :nth-child(1) > div').should(
      'have.css',
      'border',
      '2.5px solid rgb(0, 0, 0)',
    );
  });

  //==================================================================================================

  it('should handle opening and closing empty cart. ', () => {
    cy.getByTestId('cart-slide-bar').should('not.be.visible');
    cy.getByTestId('cart-slide-bar-background').should('not.be.visible');
    cy.get('body').should('not.have.css', 'overflow', 'hidden');
    cy.getByTestId('cart-icon').click();
    cy.get('body').should('have.css', 'overflow', 'hidden');
    cy.getByTestId('cart-slide-bar').should('be.visible');
    cy.getByTestId('cart-slide-bar-background').should('be.visible');
    cy.getByTestId('cart-slide-bar-checkoutButton').should(
      'have.css',
      'pointer-events',
      'none',
    );
    cy.getByTestId('cart-slide-bar-closeButton').click();
    cy.getByTestId('cart-slide-bar').should('not.be.visible');
    cy.getByTestId('cart-slide-bar-background').should('not.be.visible');
  });

  it('should handle adding and removing items from the cart. ', () => {
    cy.url().should('not.include', 'http://localhost:3000/product/');
    cy.getByTestId('products-list').find('h4').first().as('ProductName');
    cy.get('@ProductName')
      .invoke('text')
      .then((ProductName) => {
        cy.get('@ProductName').click();
        cy.contains(ProductName);
        cy.url().should('include', 'http://localhost:3000/product/');
      });
    cy.get('select').contains(/size/i).parent().select('M');
    cy.getByTestId('product-quantity-input').contains('+').click();
    cy.getByTestId('cart-icon').contains('1').should('not.exist');
    cy.contains(/add to cart/i).click();
    cy.getByTestId('cart-icon').contains('1');
    cy.getByTestId('cart-icon').click();
    cy.get('[aria-label=cart-products]').children().should('have.length', 1);
  });

  //==================================================================================================

  it('should handle choosing items into the cart and checkout. ', () => {
    // Add first item to cart.
    cy.get('[data-testid=cart-icon]').contains('1').should('not.exist');
    cy.addItemToCart('ICE – EARRINGS', 'M', 3);
    cy.get('[data-testid=cart-icon]').contains('1').click();
    cy.get('[aria-label=cart-products]').children().should('have.length', 1);
    cy.get('[data-testid=cart-quantity-input]').contains('3');
    cy.get('[aria-label=cart-products]').contains('ICE – EARRINGS');
    cy.get('[data-testid=cart-slide-bar-background]').click();
    cy.contains(/shop/i).click();

    // Add second item to cart.
    cy.get('[data-testid=cart-icon]').contains('2').should('not.exist');
    cy.addItemToCart('AURORA BOREALIS – NECKLACE', 'L');
    cy.get('[data-testid=cart-icon]').contains('2').click();
    cy.get('[aria-label=cart-products]').children().should('have.length', 2);
    cy.get('[data-testid=cart-quantity-input]').contains('3');
    cy.contains('AURORA BOREALIS – NECKLACE');

    // Checkout.
    cy.get('[data-testid=cart-slide-bar-checkoutButton]').click();
    cy.url().should('eq', 'http://localhost:3000/checkout');
    cy.get('[name=email]').type('exapmle@gmail.com');
    cy.get('[name=FirstName]').type('Andiran');
    cy.get('[name=LastName]').type('Sobolov');
    cy.get('[name=Address]').type('Somewhere');
    cy.get('[name=City]').type('Berlin');
    cy.get('[name=Country]').select('Germany');
    cy.get('[type=tel]').type('03125481616');
    const stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get('[type=submit]')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          'This is the extent of this website for now, more pages are yet to be available. Thank you for checking out my work. \n      \n    \n      Email: exapmle@gmail.com,\n      isBuyerAcceptingMarketing: false,\n      FirstName: Andiran,\n      LastName: Sobolov,\n      Address: Somewhere,\n      Address2: ,\n      City: Berlin,\n      PhoneNumber: 03125481616,\n      Country: DE,\n      ',
        );
      });
  });
});
