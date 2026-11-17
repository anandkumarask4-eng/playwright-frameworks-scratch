import { test, expect } from '@playwright/test';

test('OrangeHRM login and logout flow', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await expect(page).toHaveURL(/\/auth\/login/);

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/\/dashboard/);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  await page.locator('.oxd-userdropdown-tab').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  await expect(page).toHaveURL(/\/auth\/login/);
});
