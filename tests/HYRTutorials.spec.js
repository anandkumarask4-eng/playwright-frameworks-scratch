
import { test, expect } from '@playwright/test';

const Registration_URL = 'https://www.hyrtutorials.com/p/basic-controls.html';

const testUser = {
    firstName: 'Anand',
    lastName: 'Kumar',
    email: 'anandkumar12@gmail.com',
    password: 'lenovo@987',
};

test.describe('User Registration', () => {

    test('should register with validated input details', async ({ page }) => {

        // Step 1: Navigate to registration page
        await page.goto(Registration_URL);

        // Step 2: Enter first name
        await page.locator('#firstName').fill(testUser.firstName);

        // Step 3: Enter last name
        await page.locator('#lastName').fill(testUser.lastName);

        // Step 4: Select gender
        const femaleRadio = page.locator('#femalerb');

        await femaleRadio.check();
        await expect(femaleRadio).toBeChecked();

        // Step 5: Select language checkbox
        const checkBox = page.locator('#englishchbx');

        await checkBox.check();
        await expect(checkBox).toBeChecked();

        // Step 6: Enter email
        await page.locator('#email').fill(testUser.email);

        // Step 7: Enter password
        await page.locator('#password').fill(testUser.password);

        // Step 8: Validate entered details
        await expect(page.locator('#firstName'))
            .toHaveValue(testUser.firstName);

        await expect(page.locator('#lastName'))
            .toHaveValue(testUser.lastName);

        await expect(page.locator('#email'))
            .toHaveValue(testUser.email);

        await expect(page.locator('#password'))
            .toHaveValue(testUser.password);

        // Step 9: Click register button
        const registerButton = page.locator('#registerbtn');

        await expect(registerButton).toBeEnabled();

        await registerButton.click();

    });

});
