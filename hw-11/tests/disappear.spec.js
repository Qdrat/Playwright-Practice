import { test, expect } from '@playwright/test'

test.describe('Задача 2. Искусство исчезновения', () => {
    test('Проверка работы ожиданий', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

        await page.getByRole('button', { name: 'Remove' }).click();

        await expect(page.locator('.loading')).toBeHidden();
        expect(await page.locator('#message').textContent()).toBe('It\'s gone!');
    })
})
