import { test, expect } from '@playwright/test';
import { AuthenticationPage } from '../../pages/AuthenticationPage';

test.describe('AUTHENTICATION TESTS', () => {

    let auth;

    test.beforeEach(async ({ page }) => {

        auth = new AuthenticationPage(page);

        await auth.openLoginPage();
    });

    test(
        'AUTH_01 Verify login page loads',
        async () => {

            await expect(
                auth.signInBtn
            ).toBeVisible();
        }
    );

    test(
        'AUTH_02 Verify email field visible',
        async () => {

            await expect(
                auth.loginEmail
            ).toBeVisible();
        }
    );

    test(
        'AUTH_03 Verify password field visible',
        async () => {

            await expect(
                auth.loginPassword
            ).toBeVisible();
        }
    );

    test(
        'AUTH_04 Verify Sign Up navigation',
        async () => {

            await auth.signUpLink.click();

            await expect(
                auth.createAccountBtn
            ).toBeVisible();
        }
    );

    test(
        'AUTH_05 Verify signup page fields',
        async () => {

            await auth.openSignupPage();

            await expect(
                auth.fullName
            ).toBeVisible();

            await expect(
                auth.signupEmail
            ).toBeVisible();

            await expect(
                auth.signupPassword
            ).toBeVisible();

            await expect(
                auth.confirmPassword
            ).toBeVisible();
        }
    );

    test(
        'AUTH_06 Verify create account button visible',
        async () => {

            await auth.openSignupPage();

            await expect(
                auth.createAccountBtn
            ).toBeVisible();
        }
    );

    test('AUTH_07 Verify full name field accepts input',
        async () => {

            await auth.openSignupPage();

            await auth.fullName.fill('Akhilesh Agashe');

            await expect(auth.fullName)
                .toHaveValue('Akhilesh Agashe');
        }
    );

    test('AUTH_08 Verify signup email accepts input',
        async () => {

            await auth.openSignupPage();

            await auth.signupEmail.fill('akhilesh@test.com');

            await expect(auth.signupEmail)
                .toHaveValue('akhilesh@test.com');
        }
    );

    test('AUTH_09 Verify password field accepts input',
        async () => {

            await auth.openSignupPage();

            await auth.signupPassword.fill('Password123');

            await expect(auth.signupPassword)
                .toHaveValue('Password123');
        }
    );

    test('AUTH_10 Verify confirm password field accepts input',
        async () => {

            await auth.openSignupPage();

            await auth.confirmPassword.fill('Password123');

            await expect(auth.confirmPassword)
                .toHaveValue('Password123');
        }
    );


    test('AUTH_11 Verify sign in link visible on signup page',
        async () => {

            await auth.openSignupPage();

            await expect(auth.signInLink).toBeVisible();
        }
    );

    test('AUTH_12 Verify signup page URL',
        async ({ page }) => {

            await auth.openSignupPage();

            await expect(page).toHaveURL(/auth/i);
        }
    );

    test('AUTH_13 Verify login email accepts input',
        async () => {

            await auth.openLoginPage();

            await auth.loginEmail.fill('test@example.com');

            await expect(auth.loginEmail)
                .toHaveValue('test@example.com');
        }
    );

    test('AUTH_14 Verify login password accepts input',
        async () => {

            await auth.openLoginPage();

            await auth.loginPassword.fill('Password123');

            await expect(auth.loginPassword)
                .toHaveValue('Password123');
        }
    );


    test('AUTH_15 Verify Sign In navigation works',
        async () => {

            await auth.openSignupPage();

            await auth.signInLink.click();

            await expect(auth.loginEmail)
                .toBeVisible();

            await expect(auth.loginPassword)
                .toBeVisible();
        }
    );

    test('AUTH_16 Verify signup form cannot submit empty fields',
        async ({ page }) => {

            await auth.openSignupPage();

            await auth.createAccountBtn.click();

            await expect(auth.fullName).toBeVisible();

            await expect(page)
                .toHaveURL(/auth/i);
        }
    );

    test('AUTH_17 Verify password fields are independent',
        async () => {

            await auth.openSignupPage();

            await auth.signupPassword.fill('Password123');

            await auth.confirmPassword.fill('Password456');

            await expect(auth.signupPassword).toHaveValue('Password123');

            await expect(auth.confirmPassword).toHaveValue('Password456');
        }
    );

    test('AUTH_18 Verify signup form retains entered values',
        async () => {

            await auth.openSignupPage();

            await auth.fullName.fill('Akhilesh Agashe');

            await auth.signupEmail.fill('akhilesh@test.com');
       
            await expect(auth.fullName).toHaveValue('Akhilesh Agashe');

            await expect(auth.signupEmail).toHaveValue('akhilesh@test.com');
        }
    );

});