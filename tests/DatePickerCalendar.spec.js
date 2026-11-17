import{test, expect} from '@playwright/test';
import { title } from 'node:process';
// test used for define test case
// expect used for assertion
// arguments callback function and object
test('Hablde the datePicker_Calendar', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //window scroll down

     await page.evaluate(() =>{
        window.scrollTo(0, 1000);

     });

    //await page.locator('#datepicker').click();

    const year = "2025"
    const month = "September"
    const date = "09"

    await page.click('#datepicker');

    while(true)
    {
        const CurrentYear = await page.locator('.ui-datepicker-year').textContent();
        const CurrentMonth = await page.locator('.ui-datepicker-month').textContent();

        if(CurrentYear == year && CurrentMonth == month)
        {
            break;
        }
         //await page.locator('a[title="Prev"]') .click()
        await page.locator('a[title="Next"]').click();
    }

    //   const dates = await page.$$('a.ui-state-default.ui-state-highlight');

    //   // date selecting using for loop
    //   for(const dt of dates)
    //   {
    //     if(await dt.textContent()==dates)
    //     {
    //         await dt.click();
    //         break;
    //    }
  //    }

   // direct direct select date
   await page.locator('a.ui-state-default.ui-state-highlight', { hasText: '8' }).click();
    await page.waitForTimeout(5000);

    
})