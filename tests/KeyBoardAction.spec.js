import{test, expect} from '@playwright/test';

test('Handle keyboard actions', async({page}) =>{

    await page.goto('https://gotranscript.com/text-compare');

    // locate element 

    await page.getByPlaceholder('Paste one version of the text here.').fill('Welcome to Keyboard action');
   await page.waitForTimeout(2000);
    // CTL A  select  text
    await page.keyboard.press('Shift+A');

    // CTL C copy text
    await page.waitForTimeout(2000);

    await page.keyboard.press('Shift+C')
await page.waitForTimeout(2000);
    // move to tab
     await page.keyboard.down('Tab');
     await page.keyboard.up('Tab')
    // CTL V past text
await page.waitForTimeout(2000);
    await page.keyboard.press('Shift+V');
})