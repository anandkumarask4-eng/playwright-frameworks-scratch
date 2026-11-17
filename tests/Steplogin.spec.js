import{test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('Verify the test login', async({page}) =>{

    const loged = new LoginPage(page);
    await loged.gotoLoginPage();
    await loged.login('pavanol', 'test@123');

    const home = new HomePage(page);
    await home.addProductToCart('Nexus 6');
    await home.gotoAddCart();
    await page.waitForURL(/cart\.html/, { timeout: 15000 });

    const cart = new CartPage(page);
    await expect(page.locator('#tbodyid')).toBeVisible();
    const status = await cart.checkProductInCart('Nexus 6');
    expect(status).toBe(true);

})