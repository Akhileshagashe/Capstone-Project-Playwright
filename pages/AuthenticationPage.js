import { expect } from '@playwright/test';

export class AuthenticationPage {

    constructor(page) {
        this.page = page;

        // Login Page
        this.loginEmail = page.locator('input[type="email"]').first();

        this.loginPassword = page
            .locator('input[type="password"]')
            .first();

        this.signInBtn = page.getByRole('button', {
            name: /sign in/i
        });

        this.signUpLink = page.getByRole('button', {
            name: /sign up/i
        });

        this.forgotPasswordLink = page.getByText(
            /forgot password/i
        );

        // Signup Page
        this.fullName = page.getByRole('textbox', {
            name: 'John Doe'
        });

        this.signupEmail = page.getByRole('textbox', {
            name: 'you@example.com'
        });

        this.signupPassword = page.getByRole('textbox', {
            name: '••••••••'
        }).first();

        this.confirmPassword = page.getByRole('textbox', {
            name: '••••••••'
        }).nth(1);

        this.createAccountBtn = page.getByRole('button', {
            name: /create account/i
        });

        this.signInLink = page.getByRole('button', {
            name: /sign in/i
        });
    }

    async openLoginPage() {

        await this.page.goto(
            'https://justyourkicks.in/auth'
        );

        await this.page.waitForLoadState(
            'networkidle'
        );
    }

    async openSignupPage() {

        await this.openLoginPage();

        await this.signUpLink.click();

        await expect(
            this.fullName
        ).toBeVisible();
    }

    async login(email, password) {

        await this.loginEmail.fill(email);

        await this.loginPassword.fill(password);

        await this.signInBtn.click();
    }

    async signup(
        fullName,
        email,
        password
    ) {

        await this.fullName.fill(fullName);

        await this.signupEmail.fill(email);

        await this.signupPassword.fill(password);

        await this.confirmPassword.fill(password);

        await this.createAccountBtn.click();
    }
}