import {LOGIN_PAGE, constants} from "../Locators/loginlocators";

class LoginPage {
    open() {
        cy.visit(constants.url);
    }

   login() {
        cy.get(LOGIN_PAGE.username).type(constants.userName);
        cy.get(LOGIN_PAGE.password).type(constants.Password);
   }

    clickLogin() {
        cy.get(LOGIN_PAGE.loginButton).click();
    }

    assertLoginSuccess() {
        cy.contains('Dashboard').should('be.visible')
    }
}
export default LoginPage

