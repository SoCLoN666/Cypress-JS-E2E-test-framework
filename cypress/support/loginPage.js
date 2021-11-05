import BasePage from './basePage';

export default class LoginPage extends BasePage {
    loginElements = {
        userNameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
    };
    
    clickLogin() {
        this.loginElements.loginButton().click();
    }
}