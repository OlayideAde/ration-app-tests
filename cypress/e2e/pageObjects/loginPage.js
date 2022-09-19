class LoginPage {
    getUsername() {
        return cy.get('#user_username')
    }

    getPassword() {
        return cy.get('#user_password')
    }

    getLoginButton() {
        return cy.get('button').contains('Log in')
    }

    getForgotPasswordLink() {
        return cy.get('a').contains('Forgot Password?')
    }

    getSignUpLink() {
        return cy.get('a').contains('Register')
    }

    userLogin(username, password) {
        this.getUsername().type(username)
        this.getPassword().type((password), { log: false })
        this.getLoginButton().click()
    }
    
}
export default LoginPage