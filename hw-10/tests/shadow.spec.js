import { test, expect } from '@playwright/test'

test.describe('Пробиваем Shadow DOM', () => {
    test('Проверка работы Shadow DOM', async ({ page }) => {
        await page.goto('http://uitestingplayground.com/shadowdom')

        await page.locator('#buttonGenerate').click()

        await expect(page.locator('#editField.edit-field')).not.toHaveValue('')
    })
})
