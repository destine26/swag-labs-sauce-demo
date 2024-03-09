class CheckoutPage {

    getFirstName() {
        return cy.get('[data-test="firstName"]');
    }

    getLastName() {
        return  cy.get('[data-test="lastName"]');        
    }

    getPostalCode() {
        return cy.get('[data-test="postalCode"]');    
    }

    getContinueButton() {
        return cy.get('[data-test="continue"]');
    }

    //Used to validate payment, shipping and price total information
    getSummaryValueLabel() {
        return cy.get('.summary_value_label');
    }

    getItemTotal() {
        return cy.get('.summary_subtotal_label');
    }

    getTax() {
        return cy.get('.summary_tax_label');
    }

    getTotalAmount() {
        return cy.get('.summary_info_label.summary_total_label');
    }

    getConfirmationMessage() {
        return cy.contains('Thank you for your order');
    }

    clickFinishButton() {
        cy.get('#finish').click();
    }

    fillShippingDetails(firstName, lastName, zipcode) {
        this.getFirstName().type(firstName);
        this.getLastName().type(lastName);
        this.getPostalCode().type(zipcode);
    }

    selectContinueButton() {
        this.getContinueButton().click();
    }
}

export default CheckoutPage;
