class InventoryPage {

    addRandomProductsToCart(quantity) {
      //Get all add to cart buttons
      cy.get('.btn_inventory').then(addToCartButtons => {
          for (let i = 0; i < quantity; i++) {
              cy.wrap(addToCartButtons[i]).click();
          }
      });
    }

    selectCartIcon() {
      cy.get('.shopping_cart_link')
        .should('be.visible')
        .click({ force: true });
    }
  }
  
  export default InventoryPage;
  