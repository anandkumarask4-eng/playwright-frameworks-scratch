import { test, expect } from '@playwright/test';

test('Handle Auto-Suggestion_DropDown', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.evaluate(() => {
        window.scrollBy(0, 200);
    });

    await page.locator('#autocomplete').fill('ana');
   
    await page.waitForSelector("//ul[contains(@id,'ui-id-1')]//li[1]");

    const fromcityOptions = await page.$$("//ul[contains(@id,'ui-id-1')]//li[1]");

    for(let option of fromcityOptions)
    {
        const value = await option.textContent();
        //console.log(value);

        if(value.includes('Botswana'))
        {
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(5000);
});