import LoginPage from "../pageObjects/loginPage";
import DashboardPage from "../pageObjects/dashboardPage"

let loginPage
let dashboardPage

describe('Login tests', () => {
    before(() => {
        loginPage = new LoginPage()
        dashboardPage = new DashboardPage()
        cy.visit(Cypress.env('base_url'))
    })   

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('_ration_key')
    })
     
    describe('Login page UI test', () => {
        it('should verify login page UI', () => {
            //verify login form elements
            loginPage.getUsername().should('be.visible')
            loginPage.getPassword().should('be.visible')
            loginPage.getLoginButton().should('be.visible')
            loginPage.getForgotPasswordLink().should('be.visible')
            loginPage.getSignUpLink().should('be.visible')
            cy.task('log', 'Login form elements are displayed successfully')
        })
    })
    
    describe('Login functionality tests', () => {
        it('should verify that user can login with valid credentials', () => {
            //verify user is on login page
            cy.url().should('include', '/users/log_in')
            //login
            loginPage.userLogin((Cypress.env('valid_credentials').user_name), (Cypress.env('valid_credentials').user_password))
            //verify user is no longer on login page
            cy.url().should('not.include', 'users/log_in')
            cy.task('log', 'Login successful')
            //Logout for next test
            dashboardPage.userLogout()
        })
    
        it('should verify that user cannot login with invalid credentials', () => {
            //verify user is on login page
            cy.url().should('include', '/users/log_in')
            //login
            loginPage.userLogin((Cypress.env('invalid_credentials').user_name), (Cypress.env('invalid_credentials').user_password))
            //verify user is still on login page
            cy.url().should('include', 'users/log_in')
            //verify error message is displayed
            cy.get('form').should('contain', 'Invalid email or password')
        })
        
    })
    

})

