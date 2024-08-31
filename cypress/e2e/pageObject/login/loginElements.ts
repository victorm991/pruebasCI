class LoginPage {
    visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    get inputUsername(){
        return cy.get('input[name="username"]');
    }

    get inputPassword(){
        return cy.get('input[name="password"]');
    }

    get buttonLogin(){
        return cy.get('button[type="submit"]');
    }

    EstilosFormulario(){
        //Verificación de ruta
        cy.location('pathname').should('eq', '/web/index.php/auth/login');
        cy.get('h5.oxd-text--h5').contains('Login');

        cy.get('i.oxd-icon.bi-person').should('be.visible');
        cy.get('label.oxd-label').contains('Username');
        this.inputUsername;

        cy.get('i.oxd-icon.bi-key').should('be.visible');
        cy.get('label.oxd-label').contains('Password');
        this.inputPassword;

        this.buttonLogin.contains('Login');
        cy.get('p.oxd-text.oxd-text--p').contains('Forgot your password?');
    }

    EnvioCamposVacios(){
        cy.location('pathname').should('eq', '/web/index.php/auth/login');
        this.buttonLogin.contains('Login').click();
        this.inputUsername.should('have.class', 'oxd-input--error');
        this.inputPassword.should('have.class', 'oxd-input--error');
        cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message').contains('Required');
    }

    InicioSesionFallido(username: string, password: string){
        cy.location('pathname').should('eq', '/web/index.php/auth/login');
        this.inputUsername.type(username);
        this.inputPassword.type(password);
        this.buttonLogin.click();
        cy.get('div[role="alert"].oxd-alert.oxd-alert--error');
        cy.get('i.oxd-icon.bi-exclamation-circle.oxd-alert-content-icon').should('be.visible');
        cy.get('p.oxd-text.oxd-text--p.oxd-alert-content-text').contains('Invalid credentials');
        cy.intercept('POST','/web/index.php/auth/validate',{
          statusCode: 302,
        });
    }

    InicioSesion(username: string, password: string){
        cy.location('pathname').should('eq', '/web/index.php/auth/login');
        this.inputUsername.type(username);
        this.inputPassword.type(password);
        this.buttonLogin.click();
        cy.location('pathname').should('eq','/web/index.php/dashboard/index');
        cy.get('a.oxd-main-menu-item.active > span').should('be.visible').contains('Dashboard');
    }
}

export default LoginPage;