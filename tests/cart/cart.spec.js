import { test, expect } from '@playwright/test';
import { CartPage } from '../../pages/cartPage';

test.describe('CART FUNCTIONALITY TESTS', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://justyourkicks.in/shop');

        await page.locator('button')
            .filter({ hasText: /add to cart/i })
            .first()
            .click();

        await page.waitForTimeout(2000);

        await page.getByRole('button', {
            name: /cart/i
        }).click();
    });

    test('CART_01 Verify cart contains product', async ({ page }) => {

        const cart = new CartPage(page);

        const count =
            await cart.getCartItemCount();

        expect(count).toBeGreaterThan(0);
    });

    test('CART_02 Verify increase quantity button works', async ({ page }) => {

        const cart = new CartPage(page);

        await cart.increaseQuantity();

        await page.waitForTimeout(1000);
    });

    test('CART_03 Verify decrease quantity button works', async ({ page }) => {

        const cart = new CartPage(page);

        await cart.decreaseQuantity();

        await page.waitForTimeout(1000);
    });

    test('CART_04 Verify subtotal visible', async ({ page }) => {

        const cart = new CartPage(page);

        const subtotal =
            await cart.getSubtotalText();

        expect(subtotal).toContain('Subtotal');
    });

    test('CART_05 Verify proceed to checkout button visible', async ({ page }) => {

        await expect(
            page.getByRole('button', {
                name: /proceed to checkout/i
            })
        ).toBeVisible();
    });
});