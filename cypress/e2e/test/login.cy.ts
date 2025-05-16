import loginData from "../pageObject/login/loginData";
import loginMethods from "../pageObject/login/loginMethods";

//Instanciamiento de los datos de prueba en loginData.ts
const datos = loginData.validCredentiasl;
const datosError = loginData.invalidCredentials;

describe("Set de pruebas Login Page", () => {

  it('Test 1: Verificar Estilos formulario', ()=>{
    loginMethods.verificarFormulario();
  });

  it('Test 2: Ingreso con credenciales invalidas', () =>{
    loginMethods.insertarUsername(datosError.username);
    loginMethods.insertarPassword(datosError.password);
    loginMethods.clickLogin();
    loginMethods.MensajeCredencialesInvalidas();
  });

  it('Test 3: Inicio de sesión éxitoso', () => {
    loginMethods.insertarUsername(datos.username);
    loginMethods.insertarPassword(datos.password);
    loginMethods.clickLogin();
  });
});