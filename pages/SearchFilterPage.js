export class SearchFilterPage {

    constructor(page) {

        this.page = page;

        this.searchBar =
            page.locator(
                'input[placeholder*="Search"]'
            );

        this.allCategory =
            page.locator(
                'text=ALL'
            ).first();

        this.mensSneakersCategory =
            page.getByRole(
                'button',
                {
                    name: 'Mens Sneakers'
                }
            );

        this.mensSportsCategory =
            page.getByRole(
                'button',
                {
                    name: 'Mens Sports'
                }
            );

        this.adidasBrand =
            page.getByRole(
                'button',
                {
                    name: 'Adidas'
                }
            );

        this.pumaBrand =
            page.getByRole(
                'button',
                {
                    name: 'Puma'
                }
            );

        this.priceSlider =
            page.locator(
                'input[type="range"]'
            );

        this.sortDropdown =
            page.locator(
                'select'
            );

        this.productCards =
            page.locator(
                'a[href*="/product/"]'
            );

        this.pageBody =
            page.locator(
                'body'
            );
    }

    async openSearchFilterPage() {

        await this.page.goto(
            'https://justyourkicks.in/shop',
            {
                waitUntil:
                    'domcontentloaded'
            }
        );

        await this.page.waitForTimeout(
            3000
        );
    }
}