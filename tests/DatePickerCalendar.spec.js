import { test, expect } from '@playwright/test';

test('Hablde the datePicker_Calendar', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('#datepicker').scrollIntoViewIfNeeded();
  await page.locator('#datepicker').fill('09/09/2025');
  await page.locator('#datepicker').press('Tab');

  await expect(page.locator('#datepicker')).toHaveValue('09/09/2025');
});