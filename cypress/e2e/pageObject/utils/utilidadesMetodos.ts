export const navegacion = {
    url: () =>{
        const urlBase = Cypress.env('URL');
        cy.visit(`${urlBase}`);

    }
}