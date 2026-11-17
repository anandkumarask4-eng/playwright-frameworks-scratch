import{test, expect} from '@playwright/test';

test('Handle check box', async ({page}) =>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // single check box
    const checkBox = await page.locator('input#checkBoxOption1').check();
    console.log('checked is successfull')

    expect(await page.locator('input#checkBoxOption1')).toBeChecked();
    expect(await page.locator('input#checkBoxOption1').isChecked()).toBeTruthy();
})