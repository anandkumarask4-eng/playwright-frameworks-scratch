import { test, expect } from '@playwright/test';

test('Input field assertion', async ({ page }) => {
  await page.goto('https://www.hyrtutorials.com/p/basic-controls.html');

  const firstName = page.locator('#firstName');

  await expect(firstName).toBeVisible();
  await expect(firstName).toBeEmpty();
  await expect(firstName).toBeEditable();
  await expect(firstName).toBeEnabled();

  await firstName.fill('Anand Kumar');
  await expect(firstName).toHaveValue('Anand Kumar');
});