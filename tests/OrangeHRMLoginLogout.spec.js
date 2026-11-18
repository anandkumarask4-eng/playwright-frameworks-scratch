
import { test, expect } from '@playwright/test';

test('launched OrangeHRM', async ({ page }) => {

    // Launch OrangeHRM application
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Verify login page URL
    await expect(page).toHaveURL(/auth\/login/);

    // Enter username
    await page.getByPlaceholder('Username').fill('Admin');

    // Enter password
    await page.getByPlaceholder('Password').fill('admin123');

    // Click on Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify dashboard URL
    await expect(page).toHaveURL(/dashboard/);

    // Verify Dashboard heading is visible
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

});
