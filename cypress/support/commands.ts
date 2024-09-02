import  cypress = require("cypress");
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
/*declare global {
    namespace Cypress{
        interface Chainable {
            inicioSesion(user: string, pass: string): Chainable <JQuery<Element>>
        }
    }
}
Cypress.Commands.add<any>('inicioSesion', (user: string, pass: string) =>{
    cy.location('pathname').should('eq', '/web/index.php/auth/login');
    cy.get('input[name="username"]').should('be.visible').type(user);
    cy.get('input[name="password"]').should('be.visible').type(pass);
    cy.get('.oxd-button').click();
});*/