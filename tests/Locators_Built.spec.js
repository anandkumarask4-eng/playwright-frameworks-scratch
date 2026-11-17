/*
page.getByAltText() -to locate an element usally image by its text alternative
page.getByPlaceholder()- to locate an input by placeholder
page.getByRole()- to locate by explicit and implicit accessbility attributes
page.getByText()- to locate by text content.
*/

import { test, expect } from '@playwright/test';

test('Navigate to OrangeHrm webPage', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const logo = page.getByAltText('company-branding');
  await expect(logo).toBeVisible();

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});