import { test, expect} from '@playwright/test';
import { CheckoutPage } from '../../pages/checkout';

test.describe(
    'CHECKOUT FUNCTIONALITY TESTS',
    () => {

        let checkout;

        test.beforeEach(
            async ({ page }) => {

                checkout =
                    new CheckoutPage(
                        page
                    );

                await checkout
                    .openCheckoutForm();
            }
        );

        test(
            'CHECKOUT_01 Verify checkout page loads',
            async ({ page }) => {

                await expect(
                    page
                ).toHaveURL(
                    /checkout/
                );
            }
        );

        test(
            'CHECKOUT_02 Verify first name field visible',
            async () => {

                await expect(
                    checkout.firstName
                ).toBeVisible();
            }
        );

        test(
            'CHECKOUT_03 Verify last name field visible',
            async () => {

                await expect(
                    checkout.lastName
                ).toBeVisible();
            }
        );

        test(
            'CHECKOUT_04 Verify email field visible',
            async () => {

                await expect(
                    checkout.email
                ).toBeVisible();
            }
        );

        test(
            'CHECKOUT_05 Verify phone field visible',
            async () => {

                await expect(
                    checkout.phone
                ).toBeVisible();
            }
        );

        test(
            'CHECKOUT_06 Verify address field visible',
            async () => {

                await expect(
                    checkout.address
                ).toBeVisible();
            }
        );

        test(
            'CHECKOUT_07 Verify city field visible',
            async () => {

                await expect(
                    checkout.city
                ).toBeVisible();
            }
        );

        test(
            'CHECKOUT_08 Verify state field visible',
            async () => {

                await expect(
                    checkout.state
                ).toBeVisible();
            }
        );

        test(
            'CHECKOUT_09 Verify pin code field visible',
            async () => {

                await expect(
                    checkout.pinCode
                ).toBeVisible();
            }
        );

        test(
            'CHECKOUT_10 Verify place order button visible',
            async () => {

                await expect(
                    checkout.placeOrderBtn
                ).toBeVisible();
            }
        );

        test(
            'CHECKOUT_11 Verify first name accepts input',
            async () => {

                await checkout.firstName.fill(
                    'Akhilesh'
                );

                await expect(
                    checkout.firstName
                ).toHaveValue(
                    'Akhilesh'
                );
            }
        );

        test(
            'CHECKOUT_12 Verify last name accepts input',
            async () => {

                await checkout.lastName.fill(
                    'Agashe'
                );

                await expect(
                    checkout.lastName
                ).toHaveValue(
                    'Agashe'
                );
            }
        );

        test(
            'CHECKOUT_13 Verify email accepts input',
            async () => {

                await checkout.email.fill(
                    'akhilesh@test.com'
                );

                await expect(
                    checkout.email
                ).toHaveValue(
                    'akhilesh@test.com'
                );
            }
        );

        test(
            'CHECKOUT_14 Verify phone accepts input',
            async () => {

                await checkout.phone.fill(
                    '9876543210'
                );

                await expect(
                    checkout.phone
                ).toHaveValue(
                    '9876543210'
                );
            }
        );

        test(
            'CHECKOUT_15 Verify complete checkout form can be filled',
            async () => {

                await checkout.fillContactInfo(
                    'Akhilesh',
                    'Agashe',
                    'akhilesh@test.com',
                    '9876543210'
                );

                await checkout.fillAddress(
                    '123 Main Street',
                    'Mumbai',
                    'Maharashtra',
                    '400001'
                );

                await expect(
                    checkout.placeOrderBtn
                ).toBeVisible();
            }
        );
    }
);