# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart\cart.spec.js >> CART FUNCTIONALITY TESTS >> CART_02 Verify increase quantity button works
- Location: tests\cart\cart.spec.js:40:5

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('button:has-text("+")')

```

# Page snapshot

```yaml
- generic:
  - generic:
    - list
    - region "Notifications alt+T"
    - generic:
      - banner:
        - generic:
          - generic:
            - generic:
              - generic:
                - img
                - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
                - img
              - generic: COP YOUR GRAILS NOW
              - generic:
                - img
                - text: "LIMITED TIME ONLY: 70% OFF"
                - img
              - generic: DON'T MISS OUT
            - generic:
              - generic:
                - img
                - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
                - img
              - generic: COP YOUR GRAILS NOW
              - generic:
                - img
                - text: "LIMITED TIME ONLY: 70% OFF"
                - img
              - generic: DON'T MISS OUT
            - generic:
              - generic:
                - img
                - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
                - img
              - generic: COP YOUR GRAILS NOW
              - generic:
                - img
                - text: "LIMITED TIME ONLY: 70% OFF"
                - img
              - generic: DON'T MISS OUT
            - generic:
              - generic:
                - img
                - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
                - img
              - generic: COP YOUR GRAILS NOW
              - generic:
                - img
                - text: "LIMITED TIME ONLY: 70% OFF"
                - img
              - generic: DON'T MISS OUT
        - navigation:
          - generic:
            - generic:
              - link:
                - /url: /
                - img
                - generic: JUST YOUR KICKS
              - generic:
                - link:
                  - /url: /shop
                  - text: Shop
                - link:
                  - /url: /shop?category=Mens+Sports
                  - text: Mens Sports
                - link:
                  - /url: /shop?category=Mens+Sneakers
                  - text: Mens Sneakers
                - link:
                  - /url: /shop?category=Flippers
                  - text: Flippers
                - link:
                  - /url: /new
                  - text: New Arrivals
                - link:
                  - /url: /sale
                  - text: Sale
              - generic:
                - generic:
                  - generic:
                    - img
                    - textbox:
                      - /placeholder: Search products, brands...
              - generic:
                - link:
                  - /url: /wishlist
                  - img
                - link:
                  - /url: /auth
                  - img
                - button:
                  - img
                  - generic: "1"
      - main:
        - generic:
          - generic:
            - heading [level=1]: ALL KICKS
            - paragraph: 13 products
          - generic:
            - generic:
              - generic:
                - button: All
                - button: Mens Sneakers
                - button: Mens Sports
              - generic:
                - generic: "Brand:"
                - button: All
                - button: Adidas
                - button: Puma
              - generic:
                - generic:
                  - generic:
                    - generic: Price Range
                    - generic: ₹1,400 - ₹1,800
                  - generic:
                    - generic:
                      - slider
            - combobox
          - generic:
            - link:
              - /url: /product/6984466f5ff1717d0f2fc795
              - generic:
                - generic:
                  - img
                  - generic:
                    - generic: New
                    - generic: Sale
                  - generic:
                    - button:
                      - img
                  - generic:
                    - button:
                      - img
                      - text: Add to Cart
                - generic:
                  - paragraph: Mens Sneakers
                  - heading [level=3]: Adidas Court Platform 'Ivory Cloud'
                  - generic:
                    - generic: ₹1,800
                    - generic: ₹5,000
                    - generic: 64% OFF
            - link:
              - /url: /product/697a4b357deefc90a724f8d0
              - generic:
                - generic:
                  - img
                  - generic:
                    - generic: New
                    - generic: Sale
                  - generic:
                    - button:
                      - img
                  - generic:
                    - button:
                      - img
                      - text: Add to Cart
                - generic:
                  - paragraph: Mens Sports
                  - heading [level=3]: Adidas running shoe
                  - generic:
                    - generic: ₹1,700
                    - generic: ₹5,000
                    - generic: 66% OFF
            - link:
              - /url: /product/69769a3a8b1636d6f66aac54
              - generic:
                - generic:
                  - img
                  - generic:
                    - generic: New
                    - generic: Sale
                  - generic:
                    - button:
                      - img
                  - generic:
                    - button:
                      - img
                      - text: Add to Cart
                - generic:
                  - paragraph: Mens Sports
                  - heading [level=3]: Puma FTR Connect running shoe
                  - generic:
                    - generic: ₹1,400
                    - generic: ₹5,000
                    - generic: 72% OFF
            - link:
              - /url: /product/697699b48b1636d6f66aac41
              - generic:
                - generic:
                  - img
                  - generic:
                    - generic: New
                    - generic: Sale
                  - generic:
                    - button:
                      - img
                  - generic:
                    - button:
                      - img
                      - text: Add to Cart
                - generic:
                  - paragraph: Mens Sports
                  - heading [level=3]: Puma Evoflex Power Tread lace-up running shoes
                  - generic:
                    - generic: ₹1,400
                    - generic: ₹5,000
                    - generic: 72% OFF
            - link:
              - /url: /product/697698f38b1636d6f66aac2f
              - generic:
                - generic:
                  - img
                  - generic:
                    - generic: New
                    - generic: Sale
                  - generic:
                    - button:
                      - img
                  - generic:
                    - button:
                      - img
                      - text: Add to Cart
                - generic:
                  - paragraph: Mens Sports
                  - heading [level=3]: Puma Alfarun Pro
                  - generic:
                    - generic: ₹1,400
                    - generic: ₹4,600
                    - generic: 70% OFF
            - link:
              - /url: /product/697698258b1636d6f66aac1e
              - generic:
                - generic:
                  - img
                  - generic:
                    - generic: New
                    - generic: Sale
                  - generic:
                    - button:
                      - img
                  - generic:
                    - button:
                      - img
                      - text: Add to Cart
                - generic:
                  - paragraph: Mens Sports
                  - heading [level=3]: Puma Alfarun
                  - generic:
                    - generic: ₹1,400
                    - generic: ₹5,000
                    - generic: 72% OFF
            - link:
              - /url: /product/6976974d8b1636d6f66aabd7
              - generic:
                - generic:
                  - img
                  - generic:
                    - generic: New
                    - generic: Sale
                  - generic:
                    - button:
                      - img
                  - generic:
                    - button:
                      - img
                      - text: Add to Cart
                - generic:
                  - paragraph: Mens Sports
                  - heading [level=3]: Puma StrideX
                  - generic:
                    - generic: ₹1,400
                    - generic: ₹4,500
                    - generic: 69% OFF
            - link:
              - /url: /product/697696948b1636d6f66aabc8
              - generic:
                - generic:
                  - img
                  - generic:
                    - generic: New
                    - generic: Sale
                  - generic:
                    - button:
                      - img
                  - generic:
                    - button:
                      - img
                      - text: Add to Cart
                - generic:
                  - paragraph: Mens Sports
                  - heading [level=3]: Adidas Velocity Grand M men's tennis shoe
                  - generic:
                    - generic: ₹1,700
                    - generic: ₹4,000
                    - generic: 57% OFF
            - link:
              - /url: /product/697695d18b1636d6f66aabba
              - generic:
                - generic:
                  - img
                  - generic:
                    - generic: New
                    - generic: Sale
                  - generic:
                    - button:
                      - img
                  - generic:
                    - button:
                      - img
                      - text: Add to Cart
                - generic:
                  - paragraph: Mens Sports
                  - heading [level=3]: Adidas Runesy M running shoe
                  - generic:
                    - generic: ₹1,700
                    - generic: ₹4,600
                    - generic: 63% OFF
            - link:
              - /url: /product/697693db8b1636d6f66aab9a
              - generic:
                - generic:
                  - img
                  - generic:
                    - generic: New
                    - generic: Sale
                  - generic:
                    - button:
                      - img
                  - generic:
                    - button:
                      - img
                      - text: Add to Cart
                - generic:
                  - paragraph: Mens Sneakers
                  - heading [level=3]: Adidas 90s Cut Pro running shoe
                  - generic:
                    - generic: ₹1,700
                    - generic: ₹5,600
                    - generic: 70% OFF
            - link:
              - /url: /product/697692bb8b1636d6f66aab7d
              - generic:
                - generic:
                  - img
                  - generic:
                    - generic: New
                    - generic: Sale
                  - generic:
                    - button:
                      - img
                  - generic:
                    - button:
                      - img
                      - text: Add to Cart
                - generic:
                  - paragraph: Mens Sneakers
                  - heading [level=3]: Adidas Cosmio
                  - generic:
                    - generic: ₹1,800
                    - generic: ₹5,000
                    - generic: 64% OFF
            - link:
              - /url: /product/697692058b1636d6f66aab6c
              - generic:
                - generic:
                  - img
                  - generic:
                    - generic: New
                    - generic: Sale
                  - generic:
                    - button:
                      - img
                  - generic:
                    - button:
                      - img
                      - text: Add to Cart
                - generic:
                  - paragraph: Mens Sneakers
                  - heading [level=3]: Adidas Cosmio
                  - generic:
                    - generic: ₹1,700
                    - generic: ₹5,000
                    - generic: 66% OFF
      - contentinfo:
        - generic:
          - generic:
            - generic:
              - link:
                - /url: /
                - img
                - text: JUST YOUR KICKS
              - paragraph: Premium sneakers for those who dare to stand out. Comfort meets cutting-edge design in every step.
              - generic:
                - paragraph: Join the Kicks Club
                - generic:
                  - textbox:
                    - /placeholder: Enter your email
                  - button:
                    - img
            - generic:
              - heading [level=4]: Shop
              - list:
                - listitem:
                  - link:
                    - /url: /shop
                    - text: Shop All
                - listitem:
                  - link:
                    - /url: /new
                    - text: New Arrivals
                - listitem:
                  - link:
                    - /url: /sale
                    - text: Sale
            - generic:
              - heading [level=4]: Support
              - list:
                - listitem:
                  - link:
                    - /url: /contact
                    - text: Contact Us
                - listitem:
                  - link:
                    - /url: /about
                    - text: About Us
            - generic:
              - heading [level=4]: Company
              - list:
                - listitem:
                  - link:
                    - /url: /about
                    - text: About Us
                - listitem:
                  - link:
                    - /url: /contact
                    - text: Contact
          - generic:
            - paragraph: © 2026 Just Your Kicks. All rights reserved.
            - generic:
              - link:
                - /url: https://www.instagram.com/justyourkicks?igsh=MThlbWowZTFsancyMw==
                - generic:
                  - img
                - generic:
                  - generic: Join the Community
                  - generic: "@JustYourKicks"
  - dialog "YOUR BAG" [ref=e2]:
    - generic [ref=e3]:
      - heading "YOUR BAG" [level=2] [ref=e4]:
        - img [ref=e5]
        - text: YOUR BAG
      - paragraph [ref=e8]: 1 item
    - generic [ref=e10]:
      - img "Adidas Court Platform 'Ivory Cloud'" [ref=e12]
      - generic [ref=e13]:
        - generic [ref=e14]:
          - generic [ref=e15]:
            - paragraph [ref=e16]: Mens Sneakers
            - heading "Adidas Court Platform 'Ivory Cloud'" [level=4] [ref=e17]
            - paragraph [ref=e18]: "Size: UK 9"
          - button [active] [ref=e19] [cursor=pointer]:
            - img
        - generic [ref=e20]:
          - generic [ref=e21]:
            - button [ref=e22] [cursor=pointer]:
              - img
            - generic [ref=e23]: "1"
            - button [ref=e24] [cursor=pointer]:
              - img
          - generic [ref=e26]: ₹1,800
    - generic [ref=e27]:
      - generic [ref=e28]:
        - generic [ref=e29]:
          - generic [ref=e30]: Subtotal
          - generic [ref=e31]: ₹1,800
        - generic [ref=e32]:
          - generic [ref=e33]: Shipping
          - generic [ref=e34]: FREE
        - generic [ref=e35]:
          - generic [ref=e36]: Total
          - generic [ref=e37]: ₹1,800
      - generic [ref=e38]:
        - link "Proceed to Checkout" [ref=e39] [cursor=pointer]:
          - /url: /checkout
        - button "Continue Shopping" [ref=e40] [cursor=pointer]
    - button "Close" [ref=e41] [cursor=pointer]:
      - img [ref=e42]
      - generic [ref=e45]: Close
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
  10 |             page.locator('button:has-text("+")');
  11 | 
  12 |         this.decreaseBtn =
  13 |             page.locator('button:has-text("-")');
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
     |                                ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
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