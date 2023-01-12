import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('Gebruiker {string} logt in bij Consult', (gebruiker: string) => {
    cy.get('button').contains('Alles toestaan').click();
    cy.contains('Ik heb al een account').click();
    cy.fixture(`Design/users/${gebruiker}`).then((TestAccount) => {
        cy.get('#username').type(TestAccount.username);
        cy.get('#password').type(TestAccount.password);
    });
    cy.get('#kc-login').click();
});

Given('Gebruiker {string} logt in bij Digidok', (gebruiker: string) => {
    cy.fixture(`Digidok/users/${gebruiker}`).then((userJson) => {
        cy.get(`#username`).type(userJson.username);
        cy.get(`#password`).type(userJson.password);
        cy.get(`#organisatie`).type(userJson.organization);
        cy.get(`#loginButton`).click();
    })
});

Given('Gebruiker pauzeert de test', () => {
    cy.pause()
});

Given('Gebruiker {string} start het behandeltraject', (gebruiker: string) => {
    cy.fixture(`users/Digidok/${gebruiker}`).then((userJson) => {
    cy.contains('h2', userJson.behandeltraject).find('button').invoke('attr', 'data-monitor-program-id').then((dataID) => {
            cy.visit(`/index.cfm?event=dspClientOverzichtQuickStart&monitorProgramID=${dataID}`);
        });
    });
});