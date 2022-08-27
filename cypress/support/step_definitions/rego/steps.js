import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open service victoria page', () => {
    cy.visit('https://service.vic.gov.au/find-services/transport-and-driving/registration/check-registration')
})

Then('I should see landing banner', () => {
    cy.get(".landing-banner")
        .find("h1")
        .contains("Check registration")
        .should('have.length', 1);
})

Then('I click on Get started button', () => {
    cy.get(".transaction-actions")
        .find("a")
        .contains("Get started")
        .click()
})