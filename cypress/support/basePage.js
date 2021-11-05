export default class BasePage {
    constructor(page) {
        this.page = page;
    }
    visit(url, endpoint = '') {
        cy.visit(url + endpoint);
        return this;
    }

    shouldBeOpened(value) {
        cy.url().should('eq', value);
        return this;
    }
}