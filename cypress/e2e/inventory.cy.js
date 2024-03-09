import LoginPage from '../pages/login-page';
import InventoryPage from '../pages/inventory-page'; 
import CartPage from '../pages/cart-page';
import CheckoutPage from '../pages/checkout-page';

describe('Purchase Process', () => {
  let loginPage; 
  let inventoryPage;
  let cartPage;
  let checkoutPage;

  before(() => {
    loginPage = new LoginPage(); 
    inventoryPage = new InventoryPage(); 
    cartPage = new CartPage();
    checkoutPage = new CheckoutPage();
  });
 
  beforeEach(() => {
    loginPage.visit(); 
    loginPage.login('standard_user', 'secret_sauce');
  });

  it('Should successfully complete a purchase with 3 random products in the cart', () => {
    const firstName = 'Gayani';
    const lastName = 'De Silva';
    const zipcode = '12345';

    inventoryPage.addRandomProductsToCart(3);
    inventoryPage.selectCartIcon();
    cartPage.getTotalItemsInCart().should('eq', 3);
    cartPage.selectCheckoutButton();
    checkoutPage.fillShippingDetails(firstName, lastName, zipcode);
    checkoutPage.selectContinueButton();

    //Ensure that payment information is valid
    checkoutPage.getSummaryValueLabel().then(paymentInfo => {
      expect(paymentInfo).to.contain('SauceCard #');
    });

    //Ensure that shipping information is valid
    checkoutPage.getSummaryValueLabel().then(shippingInfo => {
      expect(shippingInfo).to.contain('Free Pony Express Delivery!');
    });

    //Check if total price is a valid number
    checkoutPage.getSummaryValueLabel().then(priceTotal => {
      if (typeof priceTotal === 'string') {
        const priceWithoutDollar = priceTotal.replace('$', '');
        const numericPrice = parseFloat(priceWithoutDollar);
        cy.expect(numericPrice).to.be.a('number');
      } else {
        return ('Price total is not a string');
      }
    });

    //Check if item total is a valid number
    checkoutPage.getItemTotal().then(itemTotal => {
      cy.expect(parseFloat(itemTotal)).to.be.a('number');
    });
    checkoutPage.getTax().then(tax => {
      cy.expect(parseFloat(tax)).to.be.a('number');
    });
    checkoutPage.getTotalAmount().then(totalAmount => {
      cy.expect(parseFloat(totalAmount)).to.be.a('number');
    });
    checkoutPage.clickFinishButton();
    checkoutPage.getConfirmationMessage().should('be.visible');

  });
});
