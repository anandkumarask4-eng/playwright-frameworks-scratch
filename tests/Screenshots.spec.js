import{test, expect} from 'playwright/test';

test('Launched OrangeHRM', async({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('password').fill('admin123');

    await page.locator("button[type='submit']").click();

})

