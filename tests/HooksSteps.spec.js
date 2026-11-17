import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://www.demoblaze.com/index.html');

  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#logout2')).toBeVisible();
});

test.afterEach(async () => {
  await page.locator('#logout2').click();
  await expect(page.locator('#login2')).toBeVisible();
});

test('Home page Test', async () => {
  await expect(page.locator('.card')).toHaveCount(9);
  console.log('Products:', await page.locator('.card').count());
});

test('Add Product to cart Test', async () => {
  const card = page.locator('.card').filter({ hasText: 'Samsung galaxy s6' }).first();
  await card.click();

  const addToCart = page.locator('a:has-text("Add to cart")');
  await expect(addToCart).toBeVisible();

  const dialogPromise = page.waitForEvent('dialog');
  await addToCart.click();

  const dialog = await dialogPromise;
  expect(dialog.message()).toContain('Product added.');
  await dialog.accept();
});
