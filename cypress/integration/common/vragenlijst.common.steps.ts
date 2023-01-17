import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('Gebruiker vult {string} in bij de {string} vraag', (antwoord: string, vraagTitel: string) => {
    cy.contains(vraagTitel).should("be.visible");
    cy.get('body').then($body => {
        if ($body.find('ds-input input').length > 0) {
            cy.get('ds-input input').clear().type(antwoord);
        } else if ($body.find('ds-textarea textarea').length > 0) {
            cy.get('ds-textarea textarea').clear().type(antwoord);
        }
    });
});

Given('Gebruiker kiest de {string} antwoorden bij de {string} vraag', (meerdereAntwoorden: string, vraagTitel: string) => {
    cy.contains(vraagTitel).should("be.visible");
    for (const antwoord of meerdereAntwoorden.split(' & ')) {
        cy.get(`app-keuze-optie:contains("${antwoord}")`).each((element) => {
            cy.wrap(element)
                .invoke('text')
                .then((textFromElement) => {
                    if (textFromElement.trim() === antwoord && element.find('.mat-radio-checked').length > 0) {
                        cy.contains('button', 'volgende', { matchCase: false }).click();
                    } else if (textFromElement.trim() === antwoord){
                        cy.wrap(element).click();
                    }
                });
        });
    }
});

Given('Gebruiker upload de {string} afbeelding bij de {string} vraag bij Consult', (bestand: string, vraagTitel: string) => {
    cy.contains(vraagTitel).should("be.visible");
    cy.get('input[id="mediaUpload"]').selectFile(`cypress/fixtures/Design/afbeeldingen/${bestand}`, { force: true })
})

Given('Gebruiker controleert het {string} antwoord bij de {string} vraag', (enkelAntwoord: string, vraagTitel: string) => {
    cy.contains(vraagTitel).should("be.visible");
    cy.get('app-keuze-optie').contains(enkelAntwoord).should("be.visible");
});

Given('Gebruiker controleert de {string} vraag titel', (vraagTitel: string) => {
    cy.get('app-vraag-tekst').contains(vraagTitel).should("be.visible");
});