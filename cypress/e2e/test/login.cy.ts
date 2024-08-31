import LoginPage from '../pageObject/login/loginElements';
const loginPage = new LoginPage();

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
    loginPage.EstilosFormulario();
  });

  it('Campos vacíos', ()=>{
    loginPage.EnvioCamposVacios();
  });

  it('inicio de sesión fallido', ()=>{
    loginPage.InicioSesionFallido(datos.userError, datos.passError);
  });

  it('Ingreso al software', ()=>{
    loginPage.InicioSesion(datos.username, datos.password)
  });
});