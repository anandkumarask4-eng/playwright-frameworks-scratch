import { test, expect } from '@playwright/test';

// iframe is a HTML document that embeds another webpage inside the current page.
// Elements inside an iframe belong to a different document, so we must use frameLocator() or frame().

test('handle is frame', async ({ page }) => {
  await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');

  const frames = page.frames();
  expect(frames.length).toBeGreaterThan(0);

  const frame = frames[0];
  await expect(frame.locator('body')).toBeVisible();
});