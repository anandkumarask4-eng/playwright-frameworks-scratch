import{test, expect} from 'playwright/test';

test('OrangeHRM verify the web application', async({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.waitForTimeout(3000);

    await page.screenshot({path: 'tests\screenshots/'+Date.now()+'HomePage.png'});
})

test('Amazon', async({page}) =>{

    await page.goto('https://www.amazon.in/');

    await page.locator("img[loading='eager']").first().screenshot({path: 'tests\screenshots/'+Date.now()+'HomePage.png'});
})

test.only('Launched OrangeHRM', async({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //enter username and password

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('password').fill('admin123');

    await page.locator("button[type='submit']").click();

})

