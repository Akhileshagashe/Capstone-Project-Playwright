export class ProductCatalogPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.pageTitle = page.locator('h1');
        this.productCards = page.locator('a[href*="/product/"]');
        this.searchInput = page.locator('input[type="search"]');
        this.sortDropdown = page.locator('select');
        this.filterSidebar = page.locator('aside');
        this.priceElements = page.locator(
            'span:has-text("₹")'
        );
    }

    async openShopPage() {
        await this.page.goto(
            'https://justyourkicks.in/shop',
            {
                waitUntil: 'domcontentloaded'
            }
        );

        await this.page.waitForTimeout(
            3000
        );
    }

    async scrollPage() {
        await this.page.evaluate(
            () => {
                window.scrollBy(
                    0,
                    1000
                );
            }
        );
    }
}