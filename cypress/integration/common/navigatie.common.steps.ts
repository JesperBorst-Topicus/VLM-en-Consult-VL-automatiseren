import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('Gebruiker navigeert naar de {string} pagina', (pagina: string) => {
    cy.visit(pagina);
});

Given('Gebruiker klikt op de Volgende knop bij de {string} vraag', (vraagTitel: string) => {
    cy.contains(vraagTitel).should("be.visible");
    cy.contains('button', 'volgende', { matchCase: false }).click();
});

Given('Gebruiker klikt op de Terug knop bij Digidok', () => {
    cy.contains('button', 'TERUG').click();
});

Given('Gebruiker klikt op de Terug knop bij Consult', () => {
    cy.get('[data-test="vragenlijst-back-button"]').click();
});
