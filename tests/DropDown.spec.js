
import { expect, test } from '@playwright/test';

test('Handle Drop down', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

   // await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // select drop down

    // await page.locator('#dropdown-class-example').selectOption({label: 'Option1'});
    // console.log('Select option 1');
    // await page.waitForTimeout(2000);

    // // select option 2
    // await page.locator('#dropdown-class-example').selectOption({label: 'Option2'});
    // console.log("select option 2");
    // await page.waitForTimeout(2000);

    // // select option -3
    // await page.locator('#dropdown-class-example').selectOption({label: 'Option3'});
    // console.log('Select option 3');
    // await page.waitForTimeout(2000);

   // await page.locator('#dropdown-class-example','Option1');// by text.

   //assertion

//    const options = await page.locator('#country option')

//    await expect(options).toHaveCount(10);

// check number option in dropdwon approach-2
// const options = await page.$$('#country option');
// //console.log("number options:", options.length);
// await expect(options.length).toBe(10);

// check presence in value of dropdown approach-1
// const content = await page.locator('#country').textContent()
// await expect(content.includes).toBeTruthy();

const options = await page.$$('#country option');


for(const option of options){

    console.log(await option.textContent());
}

})
