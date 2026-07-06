import { test, expect } from '@playwright/test'

test.describe('Радио-баттоны и классические Dropdown', () => {
    test('Проверка работы радио-баттона', async ({ page }) => {
        await page.goto(
            'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'
        )

        await page.locator('#dropdowm-menu-1').selectOption('python')

        await page.locator('input[type="radio"][value="yellow"]').check()

        expect(
            page.locator('input[type="radio"][value="yellow"]')
        ).toBeChecked()
        expect(
            page.locator('input[type="radio"][value="cabbage"]')
        ).toBeDisabled()
        // добавил проверку значения выбранного элемента в Dropdown
        expect(await page.locator('#dropdowm-menu-1').inputValue()).toBe(
            'python'
        )
    })
})
