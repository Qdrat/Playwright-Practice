import { test, expect } from '@playwright/test'

test.describe('DemoQA', () => {
    test('has title', async ({ page }) => {
        await page.goto('https://demoqa.com/', {
            waitUntil: 'domcontentloaded',
        })

        await expect(page).toHaveTitle('demosite')
    })

    test('Проверка выбора чекбоксов', async ({ page }) => {
        await page.goto('https://demoqa.com/checkbox')

        await page.locator('.rc-tree-switcher').click()
        await page.getByRole('checkbox', { name: 'Select Desktop' }).check()

        await expect(
            page.getByRole('checkbox', { name: 'Select Desktop' })
        ).toBeChecked()

        const resultText = await page.locator('#result').innerText()
        for (const expectedText of ['desktop', 'notes', 'commands']) {
            expect(resultText).toContain(expectedText)
        }
    })
})
