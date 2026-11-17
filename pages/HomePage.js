exports.HomePage =
class HomePage{

    constructor(page){
    this.page = page;
    this.productList = '//div[@id="tbodyid"]/div/div/div/h4/a';
    this.addCard     = '//a[normalize-space()="Add to cart"]';
    this.carClick = '#cartur';
    
    }

    async addProductToCart(productName){
        const product = this.page.locator(this.productList).filter({ hasText: productName }).first();
        await product.waitFor({ state: 'visible', timeout: 15000 });
        await product.click();

        this.page.once('dialog', async dialog => {
            if (dialog.message().includes('Product added')) {
                await dialog.accept();
            }
        });

        const addToCartBtn = this.page.locator(this.addCard);
        await addToCartBtn.waitFor({ state: 'visible', timeout: 15000 });
        await addToCartBtn.click();
    }

    async gotoAddCart(){
        await this.page.locator(this.carClick).waitFor({ state: 'visible', timeout: 15000 });
        await this.page.locator(this.carClick).click();
    }

    async confirmAddedProduct(productName){
        const product = this.page.getByText(productName, { exact: true });
        await product.waitFor({ state: 'visible' });
        return product;
    }

    async addProductAndGoToCart(productName){
        const product = await this.confirmAddedProduct(productName);
        if (await product.isVisible()) {
            await this.gotoAddCart();
        }
    }
}