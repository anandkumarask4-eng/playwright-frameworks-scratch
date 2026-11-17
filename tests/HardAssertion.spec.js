import { expect, test } from 'allure-playwright';

test('Hard Assertion Test case', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await expect(page).toHaveTitle('OrangeHRM');
  console.log('Step-1 passed');

  const userName = page.getByPlaceholder('Username');
  await expect(userName).toBeVisible();
  console.log('step -2 passes');

  await expect(page).toHaveTitle('OrangeHRM');
  console.log('step - 3 passed');

  await userName.fill('Admin');
  console.log('step -4 passed');
});