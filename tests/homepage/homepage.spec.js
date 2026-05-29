import { test, expect }
from '@playwright/test';

import HomePage
from '../../pages/HomePage.js';

let home;

test.beforeEach(
async ({ page }) => {

    home =
        new HomePage(page);

    await home.openWebsite();
});


test(
'HOME_01 Verify homepage loads',

async ({ page }) => {

    await expect(page)
        .toHaveURL(
            /justyourkicks/i
        );
});


test(
'HOME_02 Verify page title exists',

async ({ page }) => {

    await expect(page)
        .toHaveTitle(
            /Just Your Kicks/i
        );
});


test(
'HOME_03 Verify logo is visible',

async ({ page }) => {

    await expect(
        page.locator(
            home.logo
        ).first()
    ).toBeVisible();
});


test(
'HOME_04 Verify navigation menu visible',

async ({ page }) => {

    await expect(
        page.locator(
            home.navigationMenu
        )
    ).toBeVisible();
});


test(
'HOME_05 Verify homepage scroll works',

async ({ page }) => {

    await home.scrollToBottom();

    const scrollPosition =
        await page.evaluate(
            () => window.scrollY
        );

    expect(
        scrollPosition
    ).toBeGreaterThan(
        100
    );
});


test(
'HOME_06 Verify search bar is visible',

async ({ page }) => {

    await expect(
        page.locator(
            home.searchBar
        ).first()
    ).toBeVisible();
});


test(
'HOME_07 Verify footer visible',

async ({ page }) => {

    await home.scrollToBottom();

    await expect(
        page.locator(
            home.footer
        )
    ).toBeVisible();
});


test(
'HOME_08 Verify homepage refresh works',

async ({ page }) => {

    await home.refreshPage();

    await expect(page)
        .toHaveURL(
            /justyourkicks/i
        );
});


test(
'HOME_09 Verify clickable links exist',

async ({ page }) => {

    const links =
        await page.locator(
            'a'
        ).count();

    expect(links)
        .toBeGreaterThan(
            5
        );
});


test(
'HOME_10 Verify product cards visible',

async ({ page }) => {

    await expect(
        page.locator(
            home.productCards
        ).first()
    ).toBeVisible();
});


test(
'HOME_11 Verify hero banner visible',

async ({ page }) => {

    await expect(
        page.locator(
            'img'
        ).first()
    ).toBeVisible();
});


test(
'HOME_12 Verify homepage images loaded',

async ({ page }) => {

    const images =
        await page.locator(
            'img'
        ).count();

    expect(images)
        .toBeGreaterThan(
            0
        );
});


test(
'HOME_13 Verify current URL',

async ({ page }) => {

    expect(
        page.url()
    ).toContain(
        'justyourkicks'
    );
});


test(
'HOME_14 Verify responsive mobile view',

async ({ page }) => {

    await page.setViewportSize({

        width: 375,
        height: 812
    });

    await page.reload();

    await expect(page)
        .toHaveURL(
            /justyourkicks/i
        );
});


test(
'HOME_15 Verify homepage loads within timeout',

async ({ page }) => {

    await page.waitForLoadState(
        'domcontentloaded'
    );

    await expect(page)
        .toHaveURL(
            /justyourkicks/i
        );
});