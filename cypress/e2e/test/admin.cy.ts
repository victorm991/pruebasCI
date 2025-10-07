import loginData from "../pageObject/login/loginData";
import loginMethods from "../pageObject/login/loginMethods";
import adminMethods from "../pageObject/Admin/adminMethods";

const datos = loginData.validCredentiasl;

describe('Casos de prueba Admin', () => {
  it('Acceso admin', () => {
    loginMethods.login(datos.username, datos.password);
    cy.wait(2000);
    adminMethods.visitAdminPage();
    cy.get('a.oxd-main-menu-item > span').should('be.visible').contains('Admin').click();
    cy.location('pathname').should('eq', '/web/index.php/admin/viewSystemUsers');
    cy.get('a.oxd-main-menu-item.active');
    cy.log('La selección esta activa');
  });
});