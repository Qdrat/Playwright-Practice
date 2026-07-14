import { test, expect } from '@playwright/test'
import { ShopFacade } from '../facades/ShopFacade'
import { CartPage } from '../../hw-12/pages/CartPage'

test.describe(`hw-13`, () => {
    test(`Задание 3: Проверка корзины после добавления товара`, async ({ page }) => {
        const shopFacade = new ShopFacade(page)
        await shopFacade.loginAndAddItemToCart('standard_user', 'secret_sauce')

        const cartPage = new CartPage(page)
        await cartPage.navigate()
        const firstCartItem = cartPage.getFirstItemName()
        await expect(firstCartItem).toHaveText('Sauce Labs Bike Light')
    })
})
