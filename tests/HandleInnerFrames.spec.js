const { test, expect } = require('@playwright/test');

test('Handle inner farmes', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  const frames3 = page.frame({ url: /frame_3/ });
  expect(frames3).not.toBeNull();

  const childframes = frames3.childFrames();
  expect(childframes.length).toBeGreaterThan(0);

  const bodyText = await frames3.locator('body').textContent();
  expect(bodyText.length).toBeGreaterThan(0);

  await page.waitForTimeout(1000);
});