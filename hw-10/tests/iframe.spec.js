import { test, expect } from '@playwright/test'

test.describe('Внедрение в iFrame', () => {
    test('Проверка работы iframe', async ({ page }) => {
        await page.goto('https://letcode.in/frame/')

        const frame = page.frame({ name: 'firstFr' })

        await frame.locator('input[name="fname"]').fill('Hfdsf')
        await frame.locator('input[name="lname"]').fill('dasdasd')

        await expect(frame.getByRole('paragraph')).toContainText(
            'You have entered Hfdsf dasdasd'
        )
    })
})
