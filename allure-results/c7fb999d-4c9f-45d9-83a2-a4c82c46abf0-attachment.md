# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart\cart.spec.js >> CART FUNCTIONALITY TESTS >> CART_02 Verify increase quantity button works
- Location: tests\cart\cart.spec.js:40:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button').filter({ hasText: '+' })

```

# Test source

```ts
  1  | export class CartPage {
  2  | 
  3  |     constructor(page) {
  4  |         this.page = page;
  5  | 
  6  |         this.cartItem =
  7  |             page.locator('text=Size:');
  8  | 
  9  |         this.increaseBtn =
  10 |             page.getByRole('button').filter({hasText: '+'});
  11 | 
  12 |         this.decreaseBtn =
  13 |             page.getByRole('button').filter({hasText: '-'});
  14 | 
  15 |         this.removeBtn =
  16 |             page.locator('button').filter({
  17 |                 hasText: '×'
  18 |             });
  19 | 
  20 |         this.proceedToCheckoutBtn =
  21 |             page.getByRole('link', {
  22 |                 name: /proceed to checkout/i
  23 |             });
  24 | 
  25 |         this.subTotal =
  26 |             page.locator('text=Subtotal');
  27 |     }
  28 | 
  29 |     async increaseQuantity() {
> 30 |         await this.increaseBtn.click();
     |                                ^ Error: locator.click: Target page, context or browser has been closed
  31 |     }
  32 | 
  33 |     async decreaseQuantity() {
  34 |         await this.decreaseBtn.click();
  35 |     }
  36 | 
  37 |     async removeProduct() {
  38 |         await this.removeBtn.click();
  39 |     }
  40 | 
  41 |     async proceedToCheckout() {
  42 |         await this.proceedToCheckoutBtn.click();
  43 |     }
  44 | 
  45 |     async getCartItemCount() {
  46 |         return await this.cartItem.count();
  47 |     }
  48 | 
  49 |     async getSubtotalText() {
  50 |         return await this.subTotal.textContent();
  51 |     }
  52 | }
```