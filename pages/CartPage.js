exports.CartPage = class CartPage {

    constructor(page){
        this.page = page;
        this.noOfProducts = '#tbodyid tr td:nth-child(2)';
    }

    async checkProductInCart(productName) {
        const expectedName = (productName || '').trim();
        const matchingRow = this.page.locator('#tbodyid tr').filter({
            hasText: expectedName
        });

        try {
            await matchingRow.first().waitFor({ state: 'visible', timeout: 15000 });
            const count = await matchingRow.count();

            for (let i = 0; i < count; i++) {
                const text = ((await matchingRow.nth(i).locator('td').nth(1).textContent()) || '')
                    .replace(/\s+/g, ' ')
                    .trim();
                console.log('Cart item:', text);

                if (text === expectedName) {
                    return true;
                }
            }
        } catch (error) {
            const visibleItems = this.page.locator(this.noOfProducts);
            const count = await visibleItems.count();

            for (let i = 0; i < count; i++) {
                const text = ((await visibleItems.nth(i).textContent()) || '')
                    .replace(/\s+/g, ' ')
                    .trim();
                console.log('Cart item:', text);
                if (text === expectedName) {
                    return true;
                }
            }
        }

        return false;
    }
}