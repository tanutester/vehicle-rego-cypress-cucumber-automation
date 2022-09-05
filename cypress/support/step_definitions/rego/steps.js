import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open service victoria page', () => {
    cy.visit('https://service.vic.gov.au/find-services/transport-and-driving/registration/check-registration')
})

Then('I should see landing banner', () => {
    cy.get(".landing-banner")
        .find("h1")
        .should('have.text', 'Check registration');
})

Then('I click on Get started button', () => {
    cy.get(".transaction-actions")
        .find("a")
        .contains("Get started")
        .click()
})

Given('check registration page is opened', () => {
    cy.visit("https://service.vic.gov.au/find-services/transport-and-driving/registration/check-registration/vehicle")
})

Then('I should see the title', () => {
    cy.get("header.form-banner")
        .find("h1")
        .should('have.text', 'Check registration')
})

Then('I click on continue button', () => {
    cy.get('.button-holder-wrapper')
    .find('button')
    .contains('Continue')
    .click()

})

Then("I should see error box", () => {
    cy.get('.form-summary.is-error')
    .find('p')
    .should('have.text','The following field contains an error:')
})