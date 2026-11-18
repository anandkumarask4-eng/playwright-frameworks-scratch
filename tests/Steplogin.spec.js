import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('Verify the test login', async ({ page }) => {
    const loggedIn = new LoginPage(page);
    await loggedIn.gotoLoginPage();
    await loggedIn.login('pavanol', 'test@123');

    const home = new HomePage(page);
    await home.addProductToCart('Nexus 6');
    await home.gotoAddCart();
    await page.waitForURL(/cart\.html/, { timeout: 15000 });

    await expect(page.locator('#tbodyid')).toBeVisible({ timeout: 15000 });

    const cart = new CartPage(page);
    await expect.poll(
        () => cart.checkProductInCart('Nexus 6'),
        { timeout: 15000, intervals: [500, 1000] }
    ).toBe(true);
});