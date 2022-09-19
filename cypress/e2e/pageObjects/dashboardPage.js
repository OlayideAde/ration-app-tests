class DashboardPage {
    getLogoutButton() {
        return cy.get('#asider > .mt-auto')
    }
    
    userLogout() {
        this.getLogoutButton().click()
    }
}
export default DashboardPage