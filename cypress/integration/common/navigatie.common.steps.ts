import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('Gebruiker navigeert naar de {string} pagina', (pagina: string) => {
    cy.visit(pagina);
});
