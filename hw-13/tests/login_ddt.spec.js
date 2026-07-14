import { test, expect } from '../../hw-12/fixtures'
import { createRandomUser } from '../factories/userFactory'
import { getFormattedDate } from '../utils/dateHelper'

const credentials = [
    {
        username: 'locked_out_user',
        password: 'secret_sauce',
        expectedError: 'Epic sadface: Sorry, this user has been locked out.',
    },
    {
        username: 'standard_user',
        password: 'wrong_password',
        expectedError:
            'Epic sadface: Username and password do not match any user in this service',
    },
    {
        username: '',
        password: 'secret_sauce',
        expectedError: 'Epic sadface: Username is required',
    },
]

test.describe(`hw-13`, () => {
    for (const data of credentials) {
        test(`Задание 1: Тест логина для пользователя: ${data.username}`, async ({
            loginPage,
        }) => {
            // Ваш код с использованием data.username, data.password и data.expectedError
            await loginPage.login(data.username, data.password)
            await expect(loginPage.getActualError()).toContainText(
                data.expectedError
            )
        })
    }

    test(`Задание 2: Тест логина для пользователя ${getFormattedDate()}`, async ({
        loginPage,
    }) => {
        const newUser = createRandomUser()
        await loginPage.login(newUser.username, newUser.password)
        await expect(loginPage.getActualError()).toContainText(
            credentials[1].expectedError
        )
    })

    test(`Задание 2: Проверка функции getFormattedDate()`, () => {
        expect(getFormattedDate()).toMatch(/^\d{2}-\d{2}-\d{4}$/);
    })
})
