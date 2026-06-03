export class CartPage {

    constructor(page) {
        this.page = page;

        this.cartItem = page.locator('.cart-item');

        this.increaseBtn =
            page.locator('button:has-text("+")');

        this.decreaseBtn =
            page.locator('button:has-text("-")');

        this.removeBtn =
            page.locator('button').filter({
                hasText: '×'
            });

        this.proceedToCheckoutBtn =
            page.getByRole('button', {
                name: /proceed to checkout/i
            });

        this.subTotal =
            page.locator('text=Subtotal');
    }

    async increaseQuantity() {
        await this.increaseBtn.click();
    }

    async decreaseQuantity() {
        await this.decreaseBtn.click();
    }

    async removeProduct() {
        await this.removeBtn.click();
    }

    async proceedToCheckout() {
        await this.proceedToCheckoutBtn.click();
    }

    async getCartItemCount() {
        return await this.cartItem.count();
    }

    async getSubtotalText() {
        return await this.subTotal.textContent();
    }
}