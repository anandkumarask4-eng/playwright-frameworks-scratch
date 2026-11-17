import { test, expect } from '@playwright/test';

test('Multple web Element', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  await page.waitForSelector("//div[@id='tbodyid']//h4/a");
  const products = await page.$$("//div[@id='tbodyid']//h4/a");

  expect(products.length).toBeGreaterThan(0);

  for (const product of products) {
    const productName = await product.textContent();
    console.log(productName);
  }
});