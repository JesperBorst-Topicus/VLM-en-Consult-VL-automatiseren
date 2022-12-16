import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('Gebruiker {string} logt in', (gebruiker: string) => {
    cy.fixture(`users/${gebruiker}`).then((TestAccount) => {
        cy.get('#username').type(TestAccount.username);
        cy.get('#password').type(TestAccount.password);
    });
    cy.get('#kc-login').click();
});

Given('Gebruiker klikt op de {string} knop', (buttonText: string) => {
    cy.contains(`${buttonText}`).click();
});