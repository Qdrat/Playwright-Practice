import { test, expect } from '@playwright/test'

test.describe('Внедрение в iFrame', () => {

    test('Проверка работы iframe', async ({ page }) => {
        await page.goto(
            'https://letcode.in/frame/'
        )

        const frame = page.frame({ name: 'firstFr' })

        await frame.fill('input[name="fname"]', 'Hfdsf');
        await frame.fill('input[name="lname"]', 'dasdasd')
        
        await expect(frame.getByRole('paragraph')).toContainText('You have entered Hfdsf dasdasd')
    })
})