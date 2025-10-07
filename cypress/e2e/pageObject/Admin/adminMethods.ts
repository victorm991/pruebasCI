class adminMethods{

    visitAdminPage(){
        cy.log(process.env.URL);
        cy.visit('/web/index.php/admin/viewSystemUsers');
        cy.url().should('include', '/admin/viewSystemUsers');
    }
}

export default new adminMethods();