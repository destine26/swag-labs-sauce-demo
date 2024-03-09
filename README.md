Swag Labs E-Commerce Website Test Suite

This test suite is designed to automate the testing of an e-commerce website's purchase process.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [KeyFeatures](#key features)
- [ProjectStructure](#project structure)
- [Usage](#usage)
- [Tests](#tests)

## Overview

This test suite is designed to automate the testing of an e-commerce website's purchase process using [Cypress](https://www.cypress.io/), a modern end-to-end testing framework. Cypress provides an easy-to-use interface for writing and running tests in JavaScript, making it suitable for automating web applications.


## Install Cypress and other necessary dependencies:

npm install cypress --save-dev
npm install cypress-cucumber-preprocessor --save-dev
npm install cypress-recurse --save-dev (Optional - if recursion is needed)
npm install multiple-cucumber-html-reporter --save-dev (Optional - for HTML report)
npm install cypress-cucumber-attach-screenshots-to-failed-steps --save-dev (Optional - for attaching screenshots to failed steps)


## Key Features

Cypress - Utilizes Cypress as the testing framework.
End-to-End Testing - Automates end-to-end testing of the purchase process from logging in to completing the checkout.
JavaScript - Tests are written in JavaScript, making it accessible to developers familiar with the language.

## Project Structure
The project is organized as follows

swag-labs-sauce-demo/
cypress/
integration/           Contains test files
e2e/                   E2E test cases
features/              Feature files (if using Cypress Cucumber)
plugins/               Cypress plugins
support/               Support files for tests
e2e/                   Folder for E2E test suites
inventory.cy.js        Test suite for inventory operations
login.cy.js            Test suite for login operations
pages/                 Page objects
cart-page.js           Cart page object
checkout-page.js       Checkout page object
inventory-page.js      Inventory page object
login-page.js          Login page object
commands.js            Custom Cypress commands
cypress.json           Cypress configuration file
README.md              This file

## Usage
To run the tests, follow these steps

Open Cypress - Running Tests
npx cypress open

Select the test suite you want to run (e2e/inventory.cy.js or e2e/login.cy.js).
Cypress will open and execute the selected test suite in a browser window.
After the tests are finished, you can view the results in the Cypress interface