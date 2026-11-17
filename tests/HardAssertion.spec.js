import { expect, test } from "allure-playwright";

test('Hard Assertion Test case', async ({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // test case 1  passed

    await expect(page).toHaveTitle('OrangeHRM')
    console.log('Step-1 passed');

    // test case -2 passed

    const userName = await page.getByPlaceholder('Username');
    await expect(userName).toBeVisible();
    console.log('step -2 passes');

    // test case -3 faile
    await expect(page).toHaveTitle('google');
    console.log('step - 3 failed')

    // test case -4 will not execute 

    await userName.fill('Admin');
    console.log('step -4 passed')
})