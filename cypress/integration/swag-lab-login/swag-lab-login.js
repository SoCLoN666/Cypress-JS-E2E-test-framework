import { Given, And, Then , When} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/loginPage";

//Object Creation for PageObject Page Class and assigning it to a constant variable
const loginPage = new LoginPage();

//test steps
Given('I am in the Swag Labs login page', () => {
    loginPage.visit(Cypress.env('BASE_URL'));
})

And ('I do assertion of an url', () => {
    loginPage.shouldBeOpened(Cypress.env('BASE_URL'))
})

When('I do a registration for my user by entering valid username and valid password', () => {
    loginPage.loginElements.userNameInput().type(Cypress.env('LOGIN'));
    loginPage.loginElements.passwordInput().type(Cypress.env('PASSWORD'));
    loginPage.loginElements.loginButton().click();
})

Then('I do login successfully', () => {
    loginPage.shouldBeOpened(Cypress.env('BASE_URL') + Cypress.env('INVENTORY_ENDPOINT'))
})