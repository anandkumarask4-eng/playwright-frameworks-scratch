import { test, expect } from '@playwright/test';

test('alert handle frames', async ({ page }) => {
  await page.goto('https://www.hyrtutorials.com/p/alertsdemo.html');

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.dismiss();
  });
  await page.locator('#alertBox').click();

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Press a button!');
    await dialog.dismiss();
  });
  await page.locator('#confirmBox').click();

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Please enter your name:');
    await dialog.accept('Anand');
  });
  await page.locator('#promptBox').click();

  await page.waitForTimeout(1000);
});