import {test, expect} from '@playwright/test';

test('sort Assertion validate test', async({page}) =>{

     // Open URL
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    
    //step -1
    await expect.soft(page).toHaveTitle('google')
    console.log('step -1 executed')

    // step -2
    const username = await page.getByPlaceholder('Username')
    await expect.soft(username).toBeVisible();
    console.log('step -2 executed')

    // step -3 
    await expect.soft(username).toBeEnabled();
    console.log('step -3 executed')


    //step -4 
     await username.fill('Admin');
     console.log('step 4 executed')
    

});