import {test, expect} from '@playwright/test';

test('Launch the Youtube browser', async ({page}) =>{

    await page.goto("https://www.youtube.com/")

    await page.locator("input[name='search_query']").fill("Hindi Songs");
    await page.locator("button[title='Search']").click();

    // await expect(page).toHaveTitle("youtube");

    const skipButton = page.locator('.ytp-skip-ad-button');

    if(await skipButton.isVisible().catch(() =>false)){
        await skipButton.click();
    }
    await page.locator('#title-wrapper').first().click();

    //wait for 10 seconds while play a song
    await page.waitForTimeout(10000);
})