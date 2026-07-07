export class Header {
    constructor(page) {
        this.page = page

        this.shoppingCart = page.locator('[data-test="shopping-cart-link"]')
        this.shoppingCartBadge = page.locator(
            '[data-test="shopping-cart-badge"]'
        )
    }

    async getCartItemCount() {
        if (await this.shoppingCartBadge.isVisible()) {
            const countItem = await this.shoppingCartBadge.innerText()
            return countItem
        }
        return 0
    }
}
