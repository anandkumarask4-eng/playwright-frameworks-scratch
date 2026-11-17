import{test, expect} from '@playwright/test';

test('Lanuch the playwright test', async({page}) =>{

    await page.goto('https://playwright.dev/');

    // expect title to content substring

    await expect(page).toHaveTitle(/Playwright/);

});

test('get started link', async({page}) =>{

    await page.goto('https://playwright.dev/');

    await page.getByRole('link', {name:'Get started'}).click();

    await expect(page.getByRole('heading', {name:'Installation'})).toBeVisible();
})