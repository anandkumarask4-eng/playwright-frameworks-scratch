exports.CartPage = class CartPage {

    constructor(page){
        this.page = page;
        this.noOfProducts = '#tbodyid tr td:nth-child(2)';
    }

    async checkProductInCart(productName) {
        const expectedName = (productName || '').trim().toLowerCase();
        const rows = this.page.locator('#tbodyid tr');

        await rows.first().waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});

        for (let attempt = 0; attempt < 20; attempt++) {
            const count = await rows.count();

            for (let i = 0; i < count; i++) {
                const text = ((await rows.nth(i).textContent()) || '').replace(/\s+/g, ' ').trim().toLowerCase();
                console.log('Cart item:', text);
                if (text.includes(expectedName)) {
                    return true;
                }
            }

            if (count > 0) {
                await this.page.waitForTimeout(500);
            } else {
                await this.page.waitForTimeout(500);
            }
        }

        return false;
    }
}