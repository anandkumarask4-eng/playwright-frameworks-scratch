import { test, expect } from "allure-playwright";

test('Input field assertion', async ({page}) =>{

    await page.goto('https://www.hyrtutorials.com/p/basic-controls.html');

    const firstName = page.locator('#firstName');

    // verify visible

    await expect(firstName).toBeVisible();
    await page.waitForTimeout(5000);

    // verify empty
    await expect(firstName).toBeEmpty();
    await page.waitForTimeout(5000);

    // verify editable
    await expect(firstName).toBeEditable();
    await page.waitForTimeout(5000);

    //verify Enable
    await expect(firstName).toBeEnabled();
    await page.waitForTimeout(5000);

    //Enter text
    await firstName.fill('Anand Kumar');
    await page.waitForTimeout(5000);
})