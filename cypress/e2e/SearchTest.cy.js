import BookStorePage from '../pages/BookStorePage';

// Bypass uncaught exceptions
Cypress.on('uncaught:exception', () => false);

describe('Search Functionality', () => {

    beforeEach(function () {
        // Load data
        cy.fixture('testData').then((data) => {
            this.data = data;
        });
    });

    it('Should search for a book successfully without login', function () {
        // 1. Go directly to Book Store
        BookStorePage.visit();

        // 2. Search
        BookStorePage.searchBook(this.data.searchQuery);

        // 3. Assertion
        BookStorePage.searchResult.should('contain.text', this.data.searchQuery);
    });
});