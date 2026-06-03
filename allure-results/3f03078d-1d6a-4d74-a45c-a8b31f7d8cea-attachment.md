# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\authentication.spec.js >> AUTHENTICATION TESTS >> AUTH_05 Verify signup page fields
- Location: tests\authentication\authentication.spec.js:57:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByPlaceholder('you@example.com').nth(1)
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByPlaceholder('you@example.com').nth(1)

```

```yaml
- region "Notifications (F8)":
  - list
- region "Notifications alt+T"
- banner:
  - img
  - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
  - img
  - text: COP YOUR GRAILS NOW
  - img
  - text: "LIMITED TIME ONLY: 70% OFF"
  - img
  - text: DON'T MISS OUT
  - img
  - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
  - img
  - text: COP YOUR GRAILS NOW
  - img
  - text: "LIMITED TIME ONLY: 70% OFF"
  - img
  - text: DON'T MISS OUT
  - img
  - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
  - img
  - text: COP YOUR GRAILS NOW
  - img
  - text: "LIMITED TIME ONLY: 70% OFF"
  - img
  - text: DON'T MISS OUT
  - img
  - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
  - img
  - text: COP YOUR GRAILS NOW
  - img
  - text: "LIMITED TIME ONLY: 70% OFF"
  - img
  - text: DON'T MISS OUT
  - navigation:
    - link "Logo JUST YOUR KICKS":
      - /url: /
      - img "Logo"
      - text: JUST YOUR KICKS
    - link "Shop":
      - /url: /shop
    - link "Mens Sports":
      - /url: /shop?category=Mens+Sports
    - link "Mens Sneakers":
      - /url: /shop?category=Mens+Sneakers
    - link "Flippers":
      - /url: /shop?category=Flippers
    - link "New Arrivals":
      - /url: /new
    - link "Sale":
      - /url: /sale
    - img
    - textbox "Search products, brands..."
    - link:
      - /url: /wishlist
      - img
    - link:
      - /url: /auth
      - img
    - button:
      - img
- main:
  - heading "JOIN THE CREW" [level=1]
  - paragraph: Create an account for exclusive benefits
  - text: Full Name
  - img
  - textbox "John Doe"
  - text: Email
  - img
  - textbox "you@example.com"
  - text: Password
  - img
  - textbox "••••••••"
  - button:
    - img
  - text: Confirm Password
  - img
  - textbox "••••••••"
  - button "Create Account":
    - text: Create Account
    - img
  - paragraph:
    - text: Already have an account?
    - button "Sign In"
  - paragraph: Track Orders
  - paragraph: Real-time updates
  - paragraph: Save Favorites
  - paragraph: Build your wishlist
  - paragraph: Exclusive Deals
  - paragraph: Member only offers
  - paragraph: Fast Checkout
  - paragraph: Saved addresses
- contentinfo:
  - link "Logo JUST YOUR KICKS":
    - /url: /
    - img "Logo"
    - text: JUST YOUR KICKS
  - paragraph: Premium sneakers for those who dare to stand out. Comfort meets cutting-edge design in every step.
  - paragraph: Join the Kicks Club
  - textbox "Enter your email"
  - button:
    - img
  - heading "Shop" [level=4]
  - list:
    - listitem:
      - link "Shop All":
        - /url: /shop
    - listitem:
      - link "New Arrivals":
        - /url: /new
    - listitem:
      - link "Sale":
        - /url: /sale
  - heading "Support" [level=4]
  - list:
    - listitem:
      - link "Contact Us":
        - /url: /contact
    - listitem:
      - link "About Us":
        - /url: /about
  - heading "Company" [level=4]
  - list:
    - listitem:
      - link "About Us":
        - /url: /about
    - listitem:
      - link "Contact":
        - /url: /contact
  - paragraph: © 2026 Just Your Kicks. All rights reserved.
  - link "Join the Community @JustYourKicks":
    - /url: https://www.instagram.com/justyourkicks?igsh=MThlbWowZTFsancyMw==
    - img
    - text: Join the Community @JustYourKicks
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { AuthenticationPage } from '../../pages/AuthenticationPage';
  3  | 
  4  | test.describe('AUTHENTICATION TESTS', () => {
  5  | 
  6  |     let auth;
  7  | 
  8  |     test.beforeEach(async ({ page }) => {
  9  | 
  10 |         auth = new AuthenticationPage(page);
  11 | 
  12 |         await auth.openLoginPage();
  13 |     });
  14 | 
  15 |     test(
  16 |         'AUTH_01 Verify login page loads',
  17 |         async () => {
  18 | 
  19 |             await expect(
  20 |                 auth.signInBtn
  21 |             ).toBeVisible();
  22 |         }
  23 |     );
  24 | 
  25 |     test(
  26 |         'AUTH_02 Verify email field visible',
  27 |         async () => {
  28 | 
  29 |             await expect(
  30 |                 auth.loginEmail
  31 |             ).toBeVisible();
  32 |         }
  33 |     );
  34 | 
  35 |     test(
  36 |         'AUTH_03 Verify password field visible',
  37 |         async () => {
  38 | 
  39 |             await expect(
  40 |                 auth.loginPassword
  41 |             ).toBeVisible();
  42 |         }
  43 |     );
  44 | 
  45 |     test(
  46 |         'AUTH_04 Verify Sign Up navigation',
  47 |         async () => {
  48 | 
  49 |             await auth.signUpLink.click();
  50 | 
  51 |             await expect(
  52 |                 auth.createAccountBtn
  53 |             ).toBeVisible();
  54 |         }
  55 |     );
  56 | 
  57 |     test(
  58 |         'AUTH_05 Verify signup page fields',
  59 |         async () => {
  60 | 
  61 |             await auth.openSignupPage();
  62 | 
  63 |             await expect(
  64 |                 auth.fullName
  65 |             ).toBeVisible();
  66 | 
  67 |             await expect(
  68 |                 auth.signupEmail
> 69 |             ).toBeVisible();
     |               ^ Error: expect(locator).toBeVisible() failed
  70 | 
  71 |             await expect(
  72 |                 auth.signupPassword
  73 |             ).toBeVisible();
  74 | 
  75 |             await expect(
  76 |                 auth.confirmPassword
  77 |             ).toBeVisible();
  78 |         }
  79 |     );
  80 | 
  81 |     test(
  82 |         'AUTH_06 Verify create account button visible',
  83 |         async () => {
  84 | 
  85 |             await auth.openSignupPage();
  86 | 
  87 |             await expect(
  88 |                 auth.createAccountBtn
  89 |             ).toBeVisible();
  90 |         }
  91 |     );
  92 | });
```