import { test, expect } from '@playwright/test'

test.describe('Охота в Web-таблицах', () => {
    test('Проверка содержимого строки', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/tables')

        const correct_line = await page
            .locator('table#table1 tbody tr')
            .filter({ hasText: 'Doe' })

        await expect(
            correct_line.getByRole('cell', { name: 'Jason' })
        ).toHaveText('Jason')
        await expect(
            correct_line.getByRole('cell', { name: '$100.00' })
        ).toHaveText('$100.00')
    })
})
