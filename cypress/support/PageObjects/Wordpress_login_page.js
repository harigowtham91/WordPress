/// <reference types="Cypress" />
export default class Login {
    constructor() {
        this.userName = '#usernameOrEmail';
        this.passWord = '#password';
        this.continue = 'button.button.form-button.is-primary';
        this.heading = ':nth-child(2) > .section-header__label > .section-header__label-text';
        this.logoutButt = '.sidebar__me-signout > .button';
    }

    login(user, pass) {
        cy.get(this.userName).type(user);
        cy.get(this.continue).click()
        cy.get(this.passWord).type(pass);
        cy.get(this.continue).click()
    }

    logout(){
        cy.get(this.logoutButt).click();
        cy.wait(2000);
    }
}