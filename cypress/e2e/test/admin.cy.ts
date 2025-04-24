describe('Casos de prueba Admin', ()=>{
    let datos: any;
    before(()=>{
      cy.fixture('datos.json').then((data) =>{
        datos = data;
      });
    }); 
    beforeEach(()=>{
        cy.session('sesión', ()=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/logi');
            cy.inicioSesion(datos.username, datos.password);
        });
    });
    it('Acceso admin', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com');
        cy.get('a.oxd-main-menu-item > span').should('be.visible').contains('Admin').click();
        cy.location('pathname').should('eq', '/web/index.php/admin/viewSystemUsers');
        cy.get('a.oxd-main-menu-item.active');
        cy.log('La selección esta activa');
    });
});