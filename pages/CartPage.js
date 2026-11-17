exports.CartPage = class CartPage {

    constructor(page){

        this.page = page;
        this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]'

    }

    async checkProductInCart(productName){
        const productInCart = await this.page.$$(this.noOfProducts);
        for (const product of productInCart) {
            const text = ((await product.textContent()) || '').replace(/\s+/g, ' ').trim();
            console.log(text);
            if (productName.trim() === text) {
                return true;
            }
        }
        return false;
    }
}