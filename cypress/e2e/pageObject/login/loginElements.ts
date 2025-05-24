class loginElements {

    static get titleLogin() {
        return cy.get('h5.oxd-text--h5').contains('Login');
    }

    static get inputsLogin() {
        return {
            get username() {
                return cy.get('input[name="username"]');
            },
            get password() {
                return cy.get('input[name="password"]');
            }
        }
    }

    static get labelsLogin() {
        return {
            get labelUsername() {
                return cy.get('label.oxd-label').contains('Username');
            },
            get labelPassword() {
                return cy.get('label.oxd-label').contains('Password');
            }
        }
    }

    static get buttonLogin() {
        return cy.get('button[type="submit"]');
    }

    static get iconsLogin() {
        return {
            get iconUsername() {
                return cy.get('i.oxd-icon.bi-person').should('be.visible');
            },
            get iconPassword() {
                return cy.get('i.oxd-icon.bi-key').should('be.visible');
            }
        }
    }

    static get linkForgotPassword() {
        return cy.get('p.oxd-text.oxd-text--p').contains('Forgot your password?');
    }
    static get requiredMessage(){
         return cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message').contains('Required');
    }

    static get invalidCredentialsMessage(){
        return cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credentials');
    }
}    
export default loginElements;