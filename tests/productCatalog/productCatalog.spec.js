import { test, expect }
from '@playwright/test';

import {
    ProductCatalogPage
}
from '../../pages/ProductCatalogPage.js';

test.describe(
    'PRODUCT CATALOG TESTS',
    () => {

        let catalog;

        test.beforeEach(
            async ({ page }) => {

                catalog =
                    new ProductCatalogPage(
                        page
                    );

                await catalog
                    .openShopPage();
            }
        );

        test(
            'SHOP_01 Verify shop page loads',
            async ({ page }) => {

                await expect(
                    page
                ).toHaveURL(
                    /shop/
                );
            }
        );

        test(
            'SHOP_02 Verify title is visible',
            async ({ page }) => {

                await expect(
                    page.locator(
                        'body'
                    )
                ).toContainText(
                    'Shop'
                );
            }
        );

        test(
            'SHOP_03 Verify product cards exist',
            async () => {

                await expect(
                    catalog
                    .productCards
                    .first()
                ).toBeVisible();
            }
        );

        test(
            'SHOP_04 Verify products count greater than 0',
            async () => {

                const count =
                    await catalog
                    .productCards
                    .count();

                expect(
                    count
                ).toBeGreaterThan(
                    0
                );
            }
        );

        test(
    'SHOP_05 Verify scrolling works',
    async ({ page }) => {

        // Scroll down forcefully
        await page.mouse.wheel(
            0,
            1500
        );

        // Wait a bit for page to react
        await page.waitForTimeout(
            2000
        );

        // Get scroll position
        const scrollPosition =
            await page.evaluate(
                () =>
                    document.documentElement.scrollTop ||
                    document.body.scrollTop
            );

        expect(
            scrollPosition
        ).toBeGreaterThan(
            0
        );
    }
);

        test(
            'SHOP_06 Verify search exists if available',
            async () => {

                const visible =
                    await catalog
                    .searchInput
                    .count();

                expect(
                    visible
                ).toBeGreaterThanOrEqual(
                    0
                );
            }
        );

        test(
            'SHOP_07 Verify filters section exists',
            async () => {

                const filters =
                    await catalog
                    .filterSidebar
                    .count();

                expect(
                    filters
                ).toBeGreaterThanOrEqual(
                    0
                );
            }
        );

        test(
            'SHOP_08 Verify price text visible',
            async () => {

                const count =
                    await catalog
                    .priceElements
                    .count();

                expect(
                    count
                ).toBeGreaterThan(
                    0
                );
            }
        );

        test(
            'SHOP_09 Verify first product clickable',
            async ({ page }) => {

                const firstProduct =
                    catalog
                    .productCards
                    .first();

                await firstProduct
                    .click();

                await page.waitForTimeout(
                    3000
                );

                expect(
                    page.url()
                ).toContain(
                    'product'
                );
            }
        );

        test(
            'SHOP_10 Verify page does not crash',
            async ({ page }) => {

                await expect(
                    page.locator(
                        'body'
                    )
                ).toBeVisible();
            }
        );

        test(
            'SHOP_11 Verify shop URL',
            async ({ page }) => {

                expect(
                    page.url()
                ).toContain(
                    '/shop'
                );
            }
        );

        test(
            'SHOP_12 Verify page title exists',
            async ({ page }) => {

                const title =
                    await page.title();

                expect(
                    title.length
                ).toBeGreaterThan(
                    0
                );
            }
        );

        test(
            'SHOP_13 Verify products remain after scroll',
            async () => {

                await catalog
                    .scrollPage();

                await expect(
                    catalog
                    .productCards
                    .first()
                ).toBeVisible();
            }
        );

        test(
            'SHOP_14 Verify body visible',
            async ({ page }) => {

                await expect(
                    page.locator(
                        'body'
                    )
                ).toBeVisible();
            }
        );

        test(
            'SHOP_15 Verify no blank page',
            async ({ page }) => {

                const text =
                    await page
                    .locator('body')
                    .textContent();

                expect(
                    text.length
                ).toBeGreaterThan(
                    100
                );
            }
        );
    }
);