import{test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('Verify the test login', async({page}) =>{

    //create object
    const loged = new LoginPage(page);
    await loged.gotoLoginPage();
    await loged.login('pavanol', 'test@123');
    await page.waitForTimeout(3000);


    // HomePage
    const home = new HomePage(page);
    await home.addProductToCart("Nexus 6");
    await page.waitForTimeout(3000);
    await home.gotoAddCart();

    // cart
  const cart = new CartPage(page);
  await page.waitForTimeout(3000);
  const status = await cart.checkProductInCart('Nexus 6');
  expect(status).toBe(true);

})