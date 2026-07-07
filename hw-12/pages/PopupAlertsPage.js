export class PopupAlertsPage {
    constructor(page) {
        this.page = page

        this.clickMeButton = page.locator('#button2')
        this.closeButton = page.getByRole('button', { name: 'Close' })

        this.modal = page.locator('.modal-content')
        this.modalTitle = page.locator('.modal-title')
        this.modalText = page.locator('.modal-body')
    }

    async open() {
        await this.page.goto(
            'https://webdriveruniversity.com/Popup-Alerts/index.html'
        )
    }

    async openModal() {
        await this.clickMeButton.click()
    }

    async waitForModal() {
        await this.modal.waitFor({ state: 'visible' })
    }

    async getModalText() {
        await this.waitForModal()
        return await this.modalText.innerText()
    }

    async closeModal() {
        await this.closeButton.click()
    }
}
