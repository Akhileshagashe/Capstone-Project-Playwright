# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\authentication.spec.js >> AUTHENTICATION TESTS >> AUTH_01 Verify login page loads
- Location: tests\authentication\authentication.spec.js:15:5

# Error details

```
TimeoutError: page.waitForLoadState: Timeout 30000ms exceeded.
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
          - heading "WELCOME BACK" [level=1] [ref=e87]
          - paragraph [ref=e88]: Sign in to access your account and orders
        - generic [ref=e89]:
          - generic [ref=e90]:
            - generic [ref=e91]:
              - text: Email
              - generic [ref=e92]:
                - img [ref=e93]
                - textbox "you@example.com" [ref=e96]
            - generic [ref=e97]:
              - text: Password
              - generic [ref=e98]:
                - img [ref=e99]
                - textbox "••••••••" [ref=e102]
                - button [ref=e103] [cursor=pointer]:
                  - img [ref=e104]
            - link "Forgot password?" [ref=e108] [cursor=pointer]:
              - /url: /forgot-password
            - button "Sign In" [ref=e109] [cursor=pointer]:
              - text: Sign In
              - img
          - paragraph [ref=e111]:
            - text: Don't have an account?
            - button "Sign Up" [ref=e112] [cursor=pointer]
    - contentinfo [ref=e113]:
      - generic [ref=e114]:
        - generic [ref=e115]:
          - generic [ref=e116]:
            - link "Logo JUST YOUR KICKS" [ref=e117] [cursor=pointer]:
              - /url: /
              - img "Logo" [ref=e118]
              - text: JUST YOUR KICKS
            - paragraph [ref=e119]: Premium sneakers for those who dare to stand out. Comfort meets cutting-edge design in every step.
            - generic [ref=e120]:
              - paragraph [ref=e121]: Join the Kicks Club
              - generic [ref=e122]:
                - textbox "Enter your email" [ref=e123]
                - button [ref=e124] [cursor=pointer]:
                  - img
          - generic [ref=e125]:
            - heading "Shop" [level=4] [ref=e126]
            - list [ref=e127]:
              - listitem [ref=e128]:
                - link "Shop All" [ref=e129] [cursor=pointer]:
                  - /url: /shop
              - listitem [ref=e130]:
                - link "New Arrivals" [ref=e131] [cursor=pointer]:
                  - /url: /new
              - listitem [ref=e132]:
                - link "Sale" [ref=e133] [cursor=pointer]:
                  - /url: /sale
          - generic [ref=e134]:
            - heading "Support" [level=4] [ref=e135]
            - list [ref=e136]:
              - listitem [ref=e137]:
                - link "Contact Us" [ref=e138] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e139]:
                - link "About Us" [ref=e140] [cursor=pointer]:
                  - /url: /about
          - generic [ref=e141]:
            - heading "Company" [level=4] [ref=e142]
            - list [ref=e143]:
              - listitem [ref=e144]:
                - link "About Us" [ref=e145] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e146]:
                - link "Contact" [ref=e147] [cursor=pointer]:
                  - /url: /contact
        - generic [ref=e148]:
          - paragraph [ref=e149]: © 2026 Just Your Kicks. All rights reserved.
          - link "Join the Community @JustYourKicks" [ref=e151] [cursor=pointer]:
            - /url: https://www.instagram.com/justyourkicks?igsh=MThlbWowZTFsancyMw==
            - img [ref=e155]
            - generic [ref=e157]:
              - generic [ref=e158]: Join the Community
              - generic [ref=e159]: "@JustYourKicks"
```

# Test source

```ts
  1   | import { expect } from '@playwright/test';
  2   | 
  3   | export class AuthenticationPage {
  4   | 
  5   |     constructor(page) {
  6   |         this.page = page;
  7   | 
  8   |         // Login Page
  9   |         this.loginEmail = page.locator('input[type="email"]').first();
  10  | 
  11  |         this.loginPassword = page
  12  |             .locator('input[type="password"]')
  13  |             .first();
  14  | 
  15  |         this.signInBtn = page.getByRole('button', {
  16  |             name: /sign in/i
  17  |         });
  18  | 
  19  |         this.signUpLink = page.getByRole('button', {
  20  |             name: /sign up/i
  21  |         });
  22  | 
  23  |         this.forgotPasswordLink = page.getByText(
  24  |             /forgot password/i
  25  |         );
  26  | 
  27  |         // Signup Page
  28  |         this.fullName = page.getByRole('textbox', {
  29  |             name: 'John Doe'
  30  |         });
  31  | 
  32  |         this.signupEmail = page.getByRole('textbox', {
  33  |             name: 'you@example.com'
  34  |         });
  35  | 
  36  |         this.signupPassword = page.getByRole('textbox', {
  37  |             name: '••••••••'
  38  |         }).first();
  39  | 
  40  |         this.confirmPassword = page.getByRole('textbox', {
  41  |             name: '••••••••'
  42  |         }).nth(1);
  43  | 
  44  |         this.createAccountBtn = page.getByRole('button', {
  45  |             name: /create account/i
  46  |         });
  47  | 
  48  |         this.signInLink = page.getByRole('button', {
  49  |             name: /sign in/i
  50  |         });
  51  |     }
  52  | 
  53  |     async openLoginPage() {
  54  | 
  55  |         await this.page.goto(
  56  |             'https://justyourkicks.in/auth'
  57  |         );
  58  | 
> 59  |         await this.page.waitForLoadState(
      |                         ^ TimeoutError: page.waitForLoadState: Timeout 30000ms exceeded.
  60  |             'networkidle'
  61  |         );
  62  |     }
  63  | 
  64  |     async openSignupPage() {
  65  | 
  66  |         await this.openLoginPage();
  67  | 
  68  |         await this.signUpLink.click();
  69  | 
  70  |         await expect(
  71  |             this.fullName
  72  |         ).toBeVisible();
  73  |     }
  74  | 
  75  |     async login(email, password) {
  76  | 
  77  |         await this.loginEmail.fill(email);
  78  | 
  79  |         await this.loginPassword.fill(password);
  80  | 
  81  |         await this.signInBtn.click();
  82  |     }
  83  | 
  84  |     async signup(
  85  |         fullName,
  86  |         email,
  87  |         password
  88  |     ) {
  89  | 
  90  |         await this.fullName.fill(fullName);
  91  | 
  92  |         await this.signupEmail.fill(email);
  93  | 
  94  |         await this.signupPassword.fill(password);
  95  | 
  96  |         await this.confirmPassword.fill(password);
  97  | 
  98  |         await this.createAccountBtn.click();
  99  |     }
  100 | }
```