import loginElements from "./loginElements";

class loginMethods {
    static insertarUsername(username) {
        loginElements.inputsLogin.username.type(username);
    }

    static insertarPassword(password) {
        loginElements.inputsLogin.password.type(password);
    }

    static clickLogin() {
        loginElements.buttonLogin.click();
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate', {
            statusCode: 304,
        }).as('Log in');
    }

    static clickForgotPassword(){
        loginElements.linkForgotPassword.click();
    }

    static verificarMensajeRequired() {
        loginElements.requiredMessage;
    }

    static verificarFormulario() {
        loginElements.labelsLogin.labelUsername;
        loginElements.iconsLogin.iconUsername;
        loginElements.labelsLogin.labelPassword;
        loginElements.iconsLogin.iconPassword;

    }

    static MensajeCredencialesInvalidas(){
        loginElements.invalidCredentialsMessage.should('be.visible');
    }
}
export default loginMethods;