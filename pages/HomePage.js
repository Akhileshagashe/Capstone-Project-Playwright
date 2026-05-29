class HomePage {

    constructor(page) {

        this.page = page;

        this.logo =
            'img';

        this.searchBar =
            'input[placeholder*="Search"]';

        this.navigationMenu =
            'header';

        this.footer =
            'footer';

        this.productCards =
            'a[href*="/product"]';

        this.heroBanner =
            'section';
    }

    async openWebsite() {

        await this.page.goto(
            'https://justyourkicks.in',
            {
                waitUntil:
                    'domcontentloaded'
            }
        );
    }

    async scrollToBottom() {

        await this.page.mouse.wheel(
            0,
            3000
        );

        await this.page.waitForTimeout(
            2000
        );
    }

    async refreshPage() {

        await this.page.reload();
    }
}

export default HomePage;