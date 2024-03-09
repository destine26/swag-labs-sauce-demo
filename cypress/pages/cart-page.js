class CartPage {

    getTotalItemsInCart() {
      return cy.get('.shopping_cart_badge')
               .invoke('text')
               .then(parseInt);
    }

    getCheckoutButton() {
      return cy.get('#checkout');
    }

    selectCheckoutButton() {
      this.getCheckoutButton().click();
    }

  }
  
  export default CartPage;
  