import { test, expect } from "allure-playwright";
import { stat } from "node:fs";

test('Handle Radio button ', async({page}) =>{

    await page.goto('https://www.hyrtutorials.com/p/basic-controls.html');

    const firstName = await page.locator('#firstName');
    await firstName.fill('Anand');
    await page.waitForTimeout(5000);

    // Enter Last Name

    const lastName = await page.locator('#lastName');
    await lastName.fill('Kumar');
    await page.waitForTimeout(5000);

    // check radio button Gender
    const feMale = await page.locator('#femalerb');
    await feMale.click();
    await page.waitForTimeout(5000);
    console.log('feMale is passed')

    // check box
    const checkBox = await page.locator('#englishchbx')
    
    // check the checkBox
    await checkBox.check();

    //verify the checkbox is checked
    await expect(checkBox).toBeChecked();

    //verify usig boolean
    const status = await checkBox.isChecked();
    expect(status).toBeTruthy();

    await page.waitForTimeout(5000);

    console.log('checkbox is checked sucessful')

})