describe("Prueba página login", ()=>{
  let datos: any;
  before(()=>{
    cy.fixture('datos.json').then((data) =>{
      datos = data;
    });
  });
  
  it('verificación de formulario', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.location('pathname').should('eq', '/web/index.php/auth/login');
    cy.get('h5.oxd-text--h5').contains('Login');

    cy.get('i.oxd-icon.bi-person').should('be.visible');
    cy.get('label.oxd-label').contains('Username');
    cy.get('input[name="username"]');

    cy.get('i.oxd-icon.bi-key').should('be.visible');
    cy.get('label.oxd-label').contains('Password');
    cy.get('input[name="password"]');

    cy.get('button[type="submit"]').contains('Login');
    cy.get('p.oxd-text.oxd-text--p').contains('Forgot your password?');
  });

  it('Ingreso al software', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.location('pathname').should('eq', '/web/index.php/auth/login');

    cy.get('input[name="username"]').should('be.visible').type(datos.username);
    cy.get('input[name="password"]').should('be.visible').type(datos.password);
    cy.get('.oxd-button').click();
  });
});