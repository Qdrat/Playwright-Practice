import { test, expect } from '@playwright/test'

test.describe('Календари / Date Picker', () => {
    test('Проверка работы календаря', async ({ page }) => {
        await page.goto('https://webdriveruniversity.com/Datepicker/index.html')

        await page.locator('.input-group-addon').click()

        await page.getByRole('columnheader', { name: '»' }).click()

        await page.getByRole('cell', { name: '15' }).click()

        await expect(page.locator('.form-control')).toHaveValue(/15/)
    })
})
