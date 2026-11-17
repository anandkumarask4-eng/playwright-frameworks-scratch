import {test, expect} from '@playwright/test';

test('Handle auto_Suggestion', async ({page}) =>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // window scroll down
    // await page.evaluate(() => {
    //     window.scrollBy(0, 500);
    // });

    // use a visible input that supports typing

    await page.locator('#autocomplete').fill('United');

    await page.waitForSelector("//ul[@id='ui-id-1']/li[1]")

   const fromCountryOption = await page.$$("//ul[@id='ui-id-1']/li[1]");

   for(let option of fromCountryOption )
    {
           const value = await option.textContent()

          // console.log(value);

          if(value.includes('Tanzania, United Republic of'))
          {
              await option.click();
              break;
          }
   }
    
    await page.waitForTimeout(5000);
})