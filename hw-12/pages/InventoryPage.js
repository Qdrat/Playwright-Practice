import { Header } from '../components/Header'

export class InventoryPage {
    constructor(page) {
        this.page = page

        this.header = new Header(page)
        this.inventoryItem = page.locator('[data-test="inventory-item"]')
        this.cartLink = page.locator('[data-test="shopping-cart-link"]')
    }

    async addItemToCart(itemName) {
        const itemContainer = this.inventoryItem.filter({
            hasText: itemName,
        })
        await itemContainer.getByRole('button', { name: 'Add to cart' }).click()
    }

    async gotoCart() {
        await this.cartLink.click()
    }
}
