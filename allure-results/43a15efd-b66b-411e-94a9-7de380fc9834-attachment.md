# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout\checkout.spec.js >> CHECKOUT FUNCTIONALITY TESTS >> CHECKOUT_12 Verify last name accepts input
- Location: tests\checkout\checkout.spec.js:141:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: /add to cart/i }).first()

```

# Test source

```ts
  1  | export class CheckoutPage {
  2  | 
  3  |     constructor(page) {
  4  | 
  5  |         this.page = page;
  6  |     }
  7  | 
  8  |     async openCheckoutForm() {
  9  | 
  10 |         await this.page.goto(
  11 |             'https://justyourkicks.in/shop'
  12 |         );
  13 | 
  14 |         await this.page
  15 |             .getByRole('button', {
  16 |                 name: /add to cart/i
  17 |             })
  18 |             .first()
> 19 |             .click();
     |              ^ Error: locator.click: Target page, context or browser has been closed
  20 | 
  21 |         await this.page
  22 |             .getByRole('link', {
  23 |                 name: /proceed to checkout/i
  24 |             })
  25 |             .click();
  26 |     }
  27 | }
```