import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'

test.describe('Задача 1. Базовый Page Object and Задача 2. Компонентный подход', () => {
    test('login saudemo', async ({ page }) => {
        const loginPage = new LoginPage(page)

        await loginPage.navigate()
        await loginPage.fillUsername('standard_user')
        await loginPage.fillPassword('secret_sauce')
        await loginPage.submit()

        await expect(page).toHaveURL('./inventory.html')
    })

    test('add to cart saudemo', async ({ page }) => {
        const loginPage = new LoginPage(page)

        await loginPage.navigate()
        await loginPage.login('standard_user', 'secret_sauce')

        const inventoryPage = new InventoryPage(page)
        expect(await inventoryPage.header.getCartItemCount()).toBe(0)

        await inventoryPage.addItemToCart('Sauce Labs Bike Light')
        expect(await inventoryPage.header.getCartItemCount()).not.toBe(0)
    })
})
