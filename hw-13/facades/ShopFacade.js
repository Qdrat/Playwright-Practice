import { LoginPage } from '../../hw-12/pages/LoginPage'
import { InventoryPage } from '../../hw-12/pages/InventoryPage'

export class ShopFacade {
    constructor(page) {
        this.page = page
        this.loginPage = new LoginPage(page)
        this.inventoryPage = new InventoryPage(page)
    }
    async loginAndAddItemToCart(username, password) {
        await this.loginPage.navigate()
        await this.loginPage.login(username, password)
        await this.inventoryPage.addItemToCart('Sauce Labs Bike Light')
    }
}
