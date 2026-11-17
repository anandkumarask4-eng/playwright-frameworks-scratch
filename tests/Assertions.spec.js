import { test, expect } from '@playwright/test';

test('sort Assertion validate test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await expect.soft(page).toHaveTitle('OrangeHRM');
  console.log('step -1 executed');

  const username = page.getByPlaceholder('Username');
  await expect.soft(username).toBeVisible();
  console.log('step -2 executed');

  await expect.soft(username).toBeEnabled();
  console.log('step -3 executed');

  await username.fill('Admin');
  console.log('step 4 executed');
});