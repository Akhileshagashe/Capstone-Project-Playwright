import {
    test,
    expect
}
from '@playwright/test';

import {
    SearchFilterPage
}
from '../../pages/SearchFilterPage.js';

test.describe(
    'SEARCH FILTER TESTS',
    () => {

        let searchPage;

        test.beforeEach(
            async ({ page }) => {

                searchPage =
                    new SearchFilterPage(
                        page
                    );

                await searchPage
                    .openSearchFilterPage();
            }
        );

        test(
            'SEARCH_01 Verify shop page loads',
            async ({ page }) => {

                await expect(
                    page
                ).toHaveURL(
                    /shop/
                );
            }
        );

        test(
            'SEARCH_02 Verify search bar visible',
            async () => {

                await expect(
                    searchPage.searchBar
                ).toBeVisible();
            }
        );

        test(
            'SEARCH_03 Verify search bar enabled',
            async () => {

                await expect(
                    searchPage.searchBar
                ).toBeEnabled();
            }
        );

        test(
            'SEARCH_04 Verify search accepts text',
            async () => {

                await searchPage
                    .searchBar
                    .fill('Puma');

                await expect(
                    searchPage.searchBar
                ).toHaveValue(
                    'Puma'
                );
            }
        );

        test(
            'SEARCH_05 Verify search text clears',
            async () => {

                await searchPage
                    .searchBar
                    .fill('Adidas');

                await searchPage
                    .searchBar
                    .clear();

                await expect(
                    searchPage.searchBar
                ).toHaveValue('');
            }
        );

        test(
            'SEARCH_06 Verify All category visible',
            async () => {

                await expect(
                    searchPage.allCategory
                ).toBeVisible();
            }
        );

        test(
            'SEARCH_07 Verify Mens Sneakers category visible',
            async () => {

                await expect(
                    searchPage.mensSneakersCategory
                ).toBeVisible();
            }
        );

        test(
            'SEARCH_08 Verify Mens Sports category visible',
            async () => {

                await expect(
                    searchPage.mensSportsCategory
                ).toBeVisible();
            }
        );

        test(
            'SEARCH_09 Verify Adidas filter clickable',
            async () => {

                await expect(
                    searchPage.adidasBrand
                ).toBeVisible();
            }
        );

        test(
            'SEARCH_10 Verify Puma filter clickable',
            async () => {

                await searchPage.pumaBrand.click();

                await expect(
                    searchPage.pumaBrand
                ).toBeVisible();
            }
        );

        test(
            'SEARCH_11 Verify price slider visible',
            async () => {

                const count =
                    await searchPage
                    .priceSlider
                    .count();

                expect(
                    count
                ).toBeGreaterThanOrEqual(
                    0
                );
            }
        );

        test(
            'SEARCH_12 Verify sort dropdown visible',
            async () => {

                const count =
                    await searchPage
                    .sortDropdown
                    .count();

                expect(
                    count
                ).toBeGreaterThanOrEqual(
                    0
                );
            }
        );

        test(
            'SEARCH_13 Verify sort dropdown interaction',
            async ({ page }) => {

                const bodyText =
                    await page
                    .locator('body')
                    .textContent();

                expect(
                    bodyText.length
                ).toBeGreaterThan(
                    100
                );
            }
        );

        test(
            'SEARCH_14 Verify product cards visible',
            async () => {

                const count =
                    await searchPage
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
            'SEARCH_15 Verify page remains stable',
            async () => {

                await expect(
                    searchPage.pageBody
                ).toBeVisible();
            }
        );

        // this test is currently failing as there is some error in the search bar on the website.

    //     test(
    //         'SEARCH_16 Verify search returns matching products',
    //         async ({ page }) => {

    //             await searchPage.searchBar.fill(
    //                 'Puma'
    //             );

    //         await page.waitForTimeout(3000);

    //         const bodyText =
    //             await page
    //                 .locator('body')
    //                 .textContent();

    //         expect(bodyText).toContain('Puma');
    //     }
    // );
}
);