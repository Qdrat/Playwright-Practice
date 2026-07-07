export class LoginPage {
    constructor(page) {
        this.page = page

        this.username = page.locator('[data-test="username"]')
        this.password = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
    }

    async navigate() {
        await this.page.goto('/')
    }

    async fillUsername(name) {
        await this.username.fill(name)
    }

    async fillPassword(pass) {
        await this.password.fill(pass)
    }

    async submit() {
        await this.loginButton.click()
    }

    async login(username, password) {
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.submit()
    }
}
