import{test, expect} from '@playwright/test';

const Registration_URL = 'https://www.hyrtutorials.com/p/basic-controls.html';

const testUser ={
    firstName: "Anand",
    lastName: "Kumar",
    gender: "female",
    email:"anandkumar12@gmail.com",
    password:"lenovo@987",

};

test.describe('User Registration', ()=>{
    test('should register with validate input details', async({page}) =>{

        await page.goto(Registration_URL);
        await expect(page).toHaveURL(Registration_URL);

        // field the mandatory details

        await page.locator('#firstName').fill(testUser.firstName);
        await page.locator('#lastName').fill(testUser.lastName);
        await page.locator('#femalerb').check();

        await page.waitForTimeout(5000);
        
        // checkBox

        const checkBox = page.locator('#englishchbx');

        await checkBox.check();
        await expect(checkBox).toBeChecked();

        // Enter email id
        await page.locator('#email').fill(testUser.email);
        await page.waitForTimeout(5000);
        await page.locator('#password').fill(testUser.password);

        await page.locator('#registerbtn').click();

        await page.waitForTimeout(5000);

        await expect(page.getByText(('Registration is Successful'))).toBeVisible();
    })
})