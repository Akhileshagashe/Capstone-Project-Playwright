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

Locator: locator('input[type="email"]')
Expected: visible
Error: strict mode violation: locator('input[type="email"]') resolved to 2 elements:
    1) <input value="" required="" type="email" placeholder="you@example.com" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-11"/> aka getByRole('textbox', { name: 'you@example.com' })
    2) <input value="" required="" type="email" placeholder="Enter your email" class="flex w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-secondary border-border h-12"/> aka getByRole('textbox', { name: 'Enter your email' })

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('input[type="email"]')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - region "Notifications (F8)":
    - list
  - region "Notifications alt+T"
  - generic [ref=e3]:
    - banner [ref=e4]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - generic [ref=e8]:
            - img [ref=e9]
            - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
            - img [ref=e11]
          - generic [ref=e13]: COP YOUR GRAILS NOW
          - generic [ref=e14]:
            - img [ref=e15]
            - text: "LIMITED TIME ONLY: 70% OFF"
            - img [ref=e17]
          - generic [ref=e19]: DON'T MISS OUT
        - generic [ref=e20]:
          - generic [ref=e21]:
            - img [ref=e22]
            - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
            - img [ref=e24]
          - generic [ref=e26]: COP YOUR GRAILS NOW
          - generic [ref=e27]:
            - img [ref=e28]
            - text: "LIMITED TIME ONLY: 70% OFF"
            - img [ref=e30]
          - generic [ref=e32]: DON'T MISS OUT
        - generic [ref=e33]:
          - generic [ref=e34]:
            - img [ref=e35]
            - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
            - img [ref=e37]
          - generic [ref=e39]: COP YOUR GRAILS NOW
          - generic [ref=e40]:
            - img [ref=e41]
            - text: "LIMITED TIME ONLY: 70% OFF"
            - img [ref=e43]
          - generic [ref=e45]: DON'T MISS OUT
        - generic [ref=e46]:
          - generic [ref=e47]:
            - img [ref=e48]
            - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
            - img [ref=e50]
          - generic [ref=e52]: COP YOUR GRAILS NOW
          - generic [ref=e53]:
            - img [ref=e54]
            - text: "LIMITED TIME ONLY: 70% OFF"
            - img [ref=e56]
          - generic [ref=e58]: DON'T MISS OUT
      - navigation [ref=e59]:
        - generic [ref=e61]:
          - link "Logo JUST YOUR KICKS" [ref=e62] [cursor=pointer]:
            - /url: /
            - img "Logo" [ref=e63]
            - generic [ref=e64]: JUST YOUR KICKS
          - generic [ref=e65]:
            - link "Shop" [ref=e66] [cursor=pointer]:
              - /url: /shop
            - link "Mens Sports" [ref=e67] [cursor=pointer]:
              - /url: /shop?category=Mens+Sports
            - link "Mens Sneakers" [ref=e68] [cursor=pointer]:
              - /url: /shop?category=Mens+Sneakers
            - link "Flippers" [ref=e69] [cursor=pointer]:
              - /url: /shop?category=Flippers
            - link "New Arrivals" [ref=e70] [cursor=pointer]:
              - /url: /new
            - link "Sale" [ref=e71] [cursor=pointer]:
              - /url: /sale
          - generic [ref=e74]:
            - img [ref=e75]
            - textbox "Search products, brands..." [ref=e78]
          - generic [ref=e79]:
            - link [ref=e80] [cursor=pointer]:
              - /url: /wishlist
              - img
            - link [ref=e81] [cursor=pointer]:
              - /url: /auth
              - img
            - button [ref=e82] [cursor=pointer]:
              - img
    - main [ref=e83]:
      - generic [ref=e85]:
        - generic [ref=e86]:
          - heading "JOIN THE CREW" [level=1] [ref=e87]
          - paragraph [ref=e88]: Create an account for exclusive benefits
        - generic [ref=e89]:
          - generic [ref=e90]:
            - generic [ref=e91]:
              - text: Full Name
              - generic [ref=e92]:
                - img [ref=e93]
                - textbox "John Doe" [ref=e96]
            - generic [ref=e97]:
              - text: Email
              - generic [ref=e98]:
                - img [ref=e99]
                - textbox "you@example.com" [ref=e102]
            - generic [ref=e103]:
              - text: Password
              - generic [ref=e104]:
                - img [ref=e105]
                - textbox "••••••••" [ref=e108]
                - button [ref=e109] [cursor=pointer]:
                  - img [ref=e110]
            - generic [ref=e113]:
              - text: Confirm Password
              - generic [ref=e114]:
                - img [ref=e115]
                - textbox "••••••••" [ref=e118]
            - button "Create Account" [ref=e119] [cursor=pointer]:
              - text: Create Account
              - img
          - paragraph [ref=e121]:
            - text: Already have an account?
            - button "Sign In" [active] [ref=e122] [cursor=pointer]
        - generic [ref=e123]:
          - generic [ref=e124]:
            - paragraph [ref=e125]: Track Orders
            - paragraph [ref=e126]: Real-time updates
          - generic [ref=e127]:
            - paragraph [ref=e128]: Save Favorites
            - paragraph [ref=e129]: Build your wishlist
          - generic [ref=e130]:
            - paragraph [ref=e131]: Exclusive Deals
            - paragraph [ref=e132]: Member only offers
          - generic [ref=e133]:
            - paragraph [ref=e134]: Fast Checkout
            - paragraph [ref=e135]: Saved addresses
    - contentinfo [ref=e136]:
      - generic [ref=e137]:
        - generic [ref=e138]:
          - generic [ref=e139]:
            - link "Logo JUST YOUR KICKS" [ref=e140] [cursor=pointer]:
              - /url: /
              - img "Logo" [ref=e141]
              - text: JUST YOUR KICKS
            - paragraph [ref=e142]: Premium sneakers for those who dare to stand out. Comfort meets cutting-edge design in every step.
            - generic [ref=e143]:
              - paragraph [ref=e144]: Join the Kicks Club
              - generic [ref=e145]:
                - textbox "Enter your email" [ref=e146]
                - button [ref=e147] [cursor=pointer]:
                  - img
          - generic [ref=e148]:
            - heading "Shop" [level=4] [ref=e149]
            - list [ref=e150]:
              - listitem [ref=e151]:
                - link "Shop All" [ref=e152] [cursor=pointer]:
                  - /url: /shop
              - listitem [ref=e153]:
                - link "New Arrivals" [ref=e154] [cursor=pointer]:
                  - /url: /new
              - listitem [ref=e155]:
                - link "Sale" [ref=e156] [cursor=pointer]:
                  - /url: /sale
          - generic [ref=e157]:
            - heading "Support" [level=4] [ref=e158]
            - list [ref=e159]:
              - listitem [ref=e160]:
                - link "Contact Us" [ref=e161] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e162]:
                - link "About Us" [ref=e163] [cursor=pointer]:
                  - /url: /about
          - generic [ref=e164]:
            - heading "Company" [level=4] [ref=e165]
            - list [ref=e166]:
              - listitem [ref=e167]:
                - link "About Us" [ref=e168] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e169]:
                - link "Contact" [ref=e170] [cursor=pointer]:
                  - /url: /contact
        - generic [ref=e171]:
          - paragraph [ref=e172]: © 2026 Just Your Kicks. All rights reserved.
          - link "Join the Community @JustYourKicks" [ref=e174] [cursor=pointer]:
            - /url: https://www.instagram.com/justyourkicks?igsh=MThlbWowZTFsancyMw==
            - img [ref=e178]
            - generic [ref=e180]:
              - generic [ref=e181]: Join the Community
              - generic [ref=e182]: "@JustYourKicks"
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