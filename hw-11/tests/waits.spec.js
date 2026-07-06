import { test, expect } from '@playwright/test'

test.describe('Задача 1. Кастомные таймауты', () => {
    test('Проверка работы ожиданий', async ({ page }) => {
        await page.goto('http://uitestingplayground.com/ajax')
        await page
            .getByRole('button', { name: 'Button Triggering AJAX Request' })
            .click()
        await expect(page.locator('.bg-success')).toBeVisible({
            timeout: 20000,
        })
    })
})
