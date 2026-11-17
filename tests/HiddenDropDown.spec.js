import { test, expect } from '@playwright/test';

test('Handle Hidden drpDown', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: 'Add' }).click();

  const userRoleDropdown = page.locator('.oxd-select-text').first();
  await userRoleDropdown.click();
  await page.getByRole('option', { name: 'Admin' }).click();

  await expect(userRoleDropdown).toContainText('Admin');
});

