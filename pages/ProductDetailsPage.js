export class ProductDetailsPage {

    constructor(page) {

        this.page = page;

        // Locators
        this.productTitle =
            page.locator('h1');

        this.productPrice =
            page.locator('text=₹').first();

        this.productImage =
            page.locator('img').first();

        this.addToCartButton =
            page.locator(
                'button:has-text("Add to Cart")'
            );

        this.buyNowButton =
            page.locator(
                'button:has-text("Buy")'
            );

        this.sizeOptions =
            page.locator(
                'button, input[type="radio"]'
            );

        this.descriptionSection =
            page.locator(
                'body'
            );

        this.productBody =
            page.locator(
                'body'
            );
    }

    async openProductPage() {

        await this.page.goto(
            'https://justyourkicks.in/product/697692bb8b1636d6f66aab7d',
            {
                waitUntil:
                    'domcontentloaded'
            }
        );

        await this.page.waitForTimeout(
            3000
        );
    }

    async scrollPage() {

        await this.page.mouse.wheel(
            0,
            1500
        );

        await this.page.waitForTimeout(
            2000
        );
    }
}