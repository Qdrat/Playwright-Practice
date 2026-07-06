import { test, expect } from '@playwright/test'

test.describe('Работа с saucedemo', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test('Логин с успешным результатом', async ({ page }) => {
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.locator('[data-test="login-button"]').click()

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        await expect(
            page.locator('[data-test="inventory-item-description"]').first()
        ).toBeVisible()
    })

    test('Логин с неверным паролем', async ({ page }) => {
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill('wrong_password')
        await page.locator('[data-test="login-button"]').click()

        await expect(page.locator('[data-test="error"]')).toContainText(
            'Username and password do not match any user in this service'
        )
    })
})
