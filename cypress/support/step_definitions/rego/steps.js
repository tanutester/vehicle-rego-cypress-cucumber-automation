import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I am on the registration page', () => {
    cy.visit('https://service.vic.gov.au/find-services/transport-and-driving/registration/check-registration')
})

Then('I should see landing banner', () => {
    cy.get(".landing-banner")
        .find("h1")
        .should('have.text', 'Check registration');
})

When('I click on Get started button', () => {
    cy.get(".transaction-actions")
        .find("a")
        .contains("Get started")
        .click()
})

Then('I should see the vehicle detail page', () => {
    cy.get("header.form-banner")
        .find("h1")
        .should('have.text', 'Check registration')
})

Given('I am on registration detail page', () => {
    cy.visit("https://service.vic.gov.au/find-services/transport-and-driving/registration/check-registration/vehicle")
})

Then('I should see the title', () => {
    cy.get("header.form-banner")
        .find("h1")
        .should('have.text', 'Check registration')
})

When('I click on continue button', () => {
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

When("I enter rego number {string}", (rego) => {
    cy.get('#rego-number').type(rego)
})


Then("I should see the status {string}",(regostatus) => {
    cy.get('.transaction-header')
    .find('h2')
    .should('have.text',regostatus)
})


Then("I should get the error message",() => {
    cy.get('.form-summary.is-error',{timeout: 15000})
        .should('be.visible')
    cy.get('.form-summary-title')
        .find('h2')
        .should('contain',"That number doesn't look right.")

})

When ("I click on motorcycle",() => {
    cy.get('.square').find('li:nth-child(2)').click()

})

When("I enter rego for vehicle type {string} {string}", (vehicletype, rego) => {

    let selectorX = "";

    if(vehicletype === "car")
        selectorX = "#rego-number"

    if(vehicletype === "motorcycle")
        selectorX = "#rego-number-motorcycle"

    if(vehicletype === "caravan")
        selectorX = "#rego-number-caravan"
    
    cy.get(selectorX).type(rego)

})


When("I click on vehicle type {string}", (vehicletype) => {

    let vehicleSelector = "";

    if (vehicletype === "car")
     vehicleSelector = ".is-car"

     if (vehicletype === "motorcycle")
     vehicleSelector = ".is-motorbike"

     if (vehicletype === "caravan")
     vehicleSelector = ".is-caravan"

    
    cy.get(vehicleSelector).parent().click()

}) 

When("I enter invalid rego", () => {
    cy.get('#rego-number').type('invalid')
})

Then("I should get the error under rego input", () => {
    cy.get('.error').should('contain',"The registration number you entered doesn't match our records.")
})

When("I click on vehicle identification number", () => {
    cy.get("ul[aria-labelledby='vehicle-identifier-type']")
    .find('li:nth-child(2)')
    .click()
})

When("I enter a valid VIN", () => {
    cy.get('#vin').type('KMHJC81DMNU144819')
})

