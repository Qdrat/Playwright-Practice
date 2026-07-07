import { test, expect } from '@playwright/test'
import { PopupAlertsPage } from '../pages/PopupAlertsPage'

test.describe('Задача 3. Работа со сложным UI', () => {
    test('модальные окна', async ({ page }) => {
        const popupAlertsPage = new PopupAlertsPage(page)

        await popupAlertsPage.open()

        await popupAlertsPage.openModal()
        await expect(popupAlertsPage.modal).toBeVisible()

        expect(await popupAlertsPage.getModalText()).not.toBe('')

        await popupAlertsPage.closeModal()
        await expect(popupAlertsPage.modal).toBeHidden()
    })
})
