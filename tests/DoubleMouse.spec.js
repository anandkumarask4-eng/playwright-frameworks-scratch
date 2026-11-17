import{test, expect} from '@playwright/test';

test('Handle double mouse over', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.evaluate(() =>{

        window.scrollTo(0,500)
    });

    // click double

    const doublebtn = await page.getByText('Copy Text');

    await doublebtn.dblclick();

    const field2 = await page.locator('#field2');
    await expect(field2).toHaveValue('Hello World!');

    await page.waitForTimeout(5000);
})