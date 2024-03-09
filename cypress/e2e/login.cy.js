import LoginPage from '../pages/login-page';

describe('Login to Sauce Demo', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visitSauceDemo();
  })

  it('Should login with valid credentials', () => {
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.clickLoginButton();

    cy.url().should('include', '/inventory.html');
  });
});
