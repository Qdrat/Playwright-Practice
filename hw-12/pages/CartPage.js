export class CartPage {
    constructor(page) {
        this.page = page

        this.cartItemName = page.locator('[data-test="inventory-item-name"]')
    }

    async navigate() {
        await this.page.goto('/cart.html')
    }

    getFirstItemName() {
        return this.cartItemName.first()
    }
}
