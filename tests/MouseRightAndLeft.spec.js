import{test, expect} from '@playwright/test';

test('Handle Mouse Right and Left',async({page}) =>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const button = page.locator('span.context-menu-one')

    await button.click({button: 'right'});

    //visible button

    const visible = page.locator('.context-menu-list')
    await expect(visible).toBeVisible();

    await page.waitForTimeout(5000);
})