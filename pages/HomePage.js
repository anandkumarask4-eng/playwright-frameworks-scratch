exports.HomePage =
class HomePage{

    constructor(page){
    this.page = page;
    this.productList = '.card-title a';
    this.addCard     = 'text=Add to cart';
    this.carClick = '#cartur';
    
    }

    async addProductToCart(productName){
        const product = this.page.locator(this.productList).filter({ hasText: productName }).first();
        await product.waitFor({ state: 'visible', timeout: 15000 });
        await product.click();

        await this.page.waitForURL(/prod\.html/, { timeout: 15000 });

        const addToCartBtn = this.page.getByText('Add to cart', { exact: true });
        await addToCartBtn.waitFor({ state: 'visible', timeout: 15000 });

        const dialogPromise = this.page.waitForEvent('dialog');
        await addToCartBtn.click();

        const dialog = await dialogPromise;
        if (dialog.message().includes('Product added')) {
            await dialog.accept();
        }
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