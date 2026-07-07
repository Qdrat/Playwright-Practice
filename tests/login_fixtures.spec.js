import { test, expect } from '../fixtures.js'

test('with fixtures', async ({ loginPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce')
    await expect(page).toHaveURL('./inventory.html')
})
