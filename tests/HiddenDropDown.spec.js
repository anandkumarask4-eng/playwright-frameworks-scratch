import{test, expect} from '@playwright/test';

test("Handle Hidden drpDown", async({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('username').fill('Admin');
    await page.getByPlaceholder('password').fill('admin123');

    await page.getByRole('button', {name:' Login '}).click();

     await page.getByText('PIM', { exact: true }).click();

    // //click on drop
     await page.locator("//div[contains(@class,'oxd-select-text-input') and contains(text(),'Automation Job Title 1785838510761188')]").click();

   
})


