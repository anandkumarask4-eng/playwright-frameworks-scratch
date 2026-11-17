import{test,expct, expect}from '@playwright/test';

let page;

test.beforeEach(async({browser})=>{

    page = await browser.newPage();

    await page.goto('https://www.demoblaze.com/index.html');

    //Login

    await page.locator('#login2').click();

    await page.locator('#loginusername').fill('pavanol');

    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', {name: 'Log in'}).click();

});

 test.afterEach(async() =>{
await page.locator('#logout2').click()

})

    //Home page
    test('Home page Test', async() =>{
        const products = await page.$$('.hrefch');
        console.log('Products:', products.length);
        expect(products).toHaveLength(9);
    

    });
    

    test('Add Product to cart Test', async() =>{
    await page.getByText('Samsung galaxy s6', { exact: true }).click();

    await page.getByText('Add to cart').click()

     page.on('dialog', async  dialog =>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept();

    })
});
    

   
    

