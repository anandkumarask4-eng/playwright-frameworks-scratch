import { test, expect } from '@playwright/test';

test('handle the Multiple drop_downn',async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // handles multiple drop_down elements

   // const colors = await page.locator('#colors',['red, blue,green,yellow,red,white,green'])
   // console.log(colors);
  // await page.selectOption('#colors',['red', 'blue','green','yellow',]);

   //assertion

   //const option = page.locator('#colors option');
   //await expect(option).toHaveCount(7);

   const content = await page.locator('#colors').textContent();

   await expect(content.includes('Blue')).toBeTruthy();

   await page.waitForTimeout(5000);
})