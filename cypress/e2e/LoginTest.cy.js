import LoginPage from '../pages/LoginPage';

// Bypass uncaught exceptions
Cypress.on('uncaught:exception', () => false);

describe('Login Functionality', () => {

    beforeEach(function () {
        // Test data
        cy.fixture('testData').then((data) => {
            this.data = data;
        });
    });

    it('Should login successfully and validate session', function () {
        // Navigation
        LoginPage.visit();

        // Login
        LoginPage.login(Cypress.env('test_user'), Cypress.env('test_password'));

        // --- CAMBIO CLAVE AQUÍ ---
        
        // 1. Validación de Identidad (La más importante):
        // Buscamos el ID '#userName-value' que vimos en tu foto del HTML.
        // Le damos 15 segundos (15000ms) para superar el "Loading..." de DemoQA.
        // Comparamos el texto con la variable de entorno para no hardcodear nombres.
        cy.get('#userName-value', { timeout: 15000 }).should('have.text', Cypress.env('test_user'));

        // 2. Validaciones secundarias (Opcionales pero recomendadas):
        // Verificar que ya no estamos en la página de login
        cy.url().should('not.include', '/login');
        
        // Verificar que se generó la cookie de sesión (Token)
        cy.getCookie('token').should('exist');
    });
});