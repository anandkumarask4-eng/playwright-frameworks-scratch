import { test, expect } from '@playwright/test';

test('MouseEvent', async({page}) =>{

    await page.goto('https://www.amazon.in/');

    const sellers = await page.getByText('Bestsellers');
    const mobile = await page.getByText('Mobiles');

    //mouse over
    await sellers.hover
    await page.waitForTimeout(1000);
    await mobile.hover()

    await page.waitForTimeout(5000);
})