import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('Gebruiker klikt op de {string} knop', (buttonText: string) => {
    cy.contains(`${buttonText}`).click();
});