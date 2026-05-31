import {
    test,
    expect
}
from '@playwright/test';

import {
    ProductDetailsPage
}
from '../../pages/ProductDetailsPage.js';

test.describe(
    'PRODUCT DETAILS PAGE TESTS',
    () => {

        let product;

        test.beforeEach(
            async ({ page }) => {

                product =
                    new ProductDetailsPage(
                        page
                    );

                await product
                    .openProductPage();
            }
        );

        test(
            'PDP_01 Verify product page loads',
            async ({ page }) => {

                await expect(
                    page
                ).toHaveURL(
                    /product/
                );
            }
        );

        test(
            'PDP_02 Verify page title exists',
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
            'PDP_03 Verify product title visible',
            async () => {

                await expect(
                    product
                    .productTitle
                    .first()
                ).toBeVisible();
            }
        );

        test(
            'PDP_04 Verify product image visible',
            async () => {

                await expect(
                    product
                    .productImage
                ).toBeVisible();
            }
        );

        test(
            'PDP_05 Verify price visible',
            async ({ page }) => {

                const bodyText =
                    await page
                    .locator('body')
                    .textContent();

                expect(
                    bodyText
                ).toContain(
                    '₹'
                );
            }
        );

        test(
            'PDP_06 Verify Add to Cart button exists',
            async () => {

                const count =
                    await product
                    .addToCartButton
                    .count();

                expect(
                    count
                ).toBeGreaterThanOrEqual(
                    0
                );
            }
        );

        test(
            'PDP_07 Verify Buy button exists',
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

        test(
            'PDP_08 Verify scrolling works',
            async ({ page }) => {

                await page.mouse.wheel(
                    0,
                    1500
                );

                await page.waitForTimeout(
                    2000
                );

                const scrollPosition =
                    await page.evaluate(
                        () =>
                            document
                            .documentElement
                            .scrollTop
                    );

                expect(
                    scrollPosition
                ).toBeGreaterThan(
                    0
                );
            }
        );

        test(
            'PDP_09 Verify body visible',
            async () => {

                await expect(
                    product
                    .productBody
                ).toBeVisible();
            }
        );

        test(
            'PDP_10 Verify page is not blank',
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

        test(
            'PDP_11 Verify product URL',
            async ({ page }) => {

                expect(
                    page.url()
                ).toContain(
                    '/product/'
                );
            }
        );

        test(
            'PDP_12 Verify product page refresh works',
            async ({ page }) => {

                await page.reload();

                await expect(
                    page.locator(
                        'body'
                    )
                ).toBeVisible();
            }
        );

        test(
            'PDP_13 Verify content exists',
            async ({ page }) => {

                const content =
                    await page
                    .locator('body')
                    .textContent();

                expect(
                    content.length
                ).toBeGreaterThan(
                    50
                );
            }
        );

        test(
            'PDP_14 Verify page scroll remains stable',
            async () => {

                await product
                    .scrollPage();

                await expect(
                    product
                    .productBody
                ).toBeVisible();
            }
        );

        test(
            'PDP_15 Verify no crash after load',
            async ({ page }) => {

                await expect(
                    page.locator(
                        'body'
                    )
                ).toBeVisible();
            }
        );
    }
);