describe("Prueba página login", ()=>{
  let datos: any;
  before(()=>{
    cy.fixture('datos.json').then((data) =>{
      datos = data;
    });
  });
  beforeEach(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  })

  it('verificación de formulario', ()=>{
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
  it('Campos vacíos', ()=>{
    cy.location('pathname').should('eq', '/web/index.php/auth/login');
    cy.get('button[type="submit"]').contains('Login').click();
    cy.get('input[name="username"].oxd-input--error');
    cy.get('input[name="password"].oxd-input--error');
    cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message').contains('Required');
  });

  it('inicio de sesión fallido', ()=>{
    cy.location('pathname').should('eq', '/web/index.php/auth/login');
    cy.get('input[name="username"]').type(datos.userError);
    cy.get('input[name="password"]').type(datos.passError);
    cy.get('button[type="submit"]').click();
    cy.get('div[role="alert"].oxd-alert.oxd-alert--error');
    cy.get('i.oxd-icon.bi-exclamation-circle.oxd-alert-content-icon').should('be.visible');
    cy.get('p.oxd-text.oxd-text--p.oxd-alert-content-text').contains('Invalid credentials');
    cy.intercept('POST','/web/index.php/auth/validate',{
      statusCode: 302,
    });
  });

  it('Ingreso al software', ()=>{
    cy.location('pathname').should('eq', '/web/index.php/auth/login');

    cy.get('input[name="username"]').should('be.visible').type(datos.username);
    cy.get('input[name="password"]').should('be.visible').type(datos.password);
    cy.get('.oxd-button').click();

    cy.location('pathname').should('eq','/web/index.php/dashboard/index');
    cy.get('a.oxd-main-menu-item.active > span').should('be.visible').contains('Dashboard');
  });
});