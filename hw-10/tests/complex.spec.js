import { test, expect } from '@playwright/test'

test.describe('Радио-баттоны и классические Dropdown', () => {
    test('Проверка работы радио-баттона', async ({ page }) => {
        await page.goto(
            'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'
        )

        await page.locator('#dropdowm-menu-1').selectOption('python')

        await page.locator('input[type="radio"][value="yellow"]').check()

        await expect(
            page.locator('input[type="radio"][value="yellow"]')
        ).toBeChecked()
        await expect(
            page.locator('input[type="radio"][value="cabbage"]')
        ).toBeDisabled()
        // добавил проверку значения выбранного элемента в Dropdown
        await expect(page.locator('#dropdowm-menu-1')).toHaveValue('python')
    })
})
