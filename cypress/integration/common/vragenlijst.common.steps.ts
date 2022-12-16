import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('Gebruiker vult {string} in bij de {string} vraag', (antwoord: string, vraagTitel: string) => {
    cy.contains(vraagTitel).should("be.visible");
    cy.get('input').clear().type(antwoord);
});

Given('Gebruiker kiest de {string} antwoorden bij de {string} vraag', (meerdereAntwoorden: string, vraagTitel: string) => {
    cy.contains(vraagTitel).should("be.visible");
    for (const antwoord of meerdereAntwoorden.split(' & ')) {
        cy.get('app-keuze-optie').contains(antwoord).click();
    }
});

Given('Gebruiker controleert het {string} antwoord bij de {string} vraag', (enkelAntwoord: string, vraagTitel: string) => {
    cy.contains(vraagTitel).should("be.visible");
    cy.get('app-keuze-optie').contains(enkelAntwoord).should('be.visible');
});

Given('Gebruiker controleert de {string} vraag titel', (vraagTitel: string) => {
    cy.get('app-vraag-tekst').contains(vraagTitel).should("be.visible");
});