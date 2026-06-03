# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout\checkout.spec.js >> CHECKOUT FUNCTIONALITY TESTS >> CHECKOUT_01 Verify checkout page loads
- Location: tests\checkout\checkout.spec.js:23:9

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /add to cart/i }).first()

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
      - generic [ref=e84]:
        - generic [ref=e85]:
          - heading "ALL KICKS" [level=1] [ref=e86]
          - paragraph [ref=e87]: Loading...
        - generic [ref=e88]:
          - generic [ref=e89]:
            - button "All" [ref=e91] [cursor=pointer]
            - generic [ref=e92]:
              - generic [ref=e93]: "Brand:"
              - button "All" [ref=e94] [cursor=pointer]
            - generic [ref=e96]:
              - generic [ref=e97]:
                - generic [ref=e98]: Price Range
                - generic [ref=e99]: ₹0 - ₹15,000
              - slider "Minimum" [ref=e104]
          - combobox [ref=e105]:
            - option "Newest" [selected]
            - 'option "Price: Low to High"'
            - 'option "Price: High to Low"'
            - option "Most Popular"
        - paragraph [ref=e108]: Loading products...
    - contentinfo [ref=e109]:
      - generic [ref=e110]:
        - generic [ref=e111]:
          - generic [ref=e112]:
            - link "Logo JUST YOUR KICKS" [ref=e113] [cursor=pointer]:
              - /url: /
              - img "Logo" [ref=e114]
              - text: JUST YOUR KICKS
            - paragraph [ref=e115]: Premium sneakers for those who dare to stand out. Comfort meets cutting-edge design in every step.
            - generic [ref=e116]:
              - paragraph [ref=e117]: Join the Kicks Club
              - generic [ref=e118]:
                - textbox "Enter your email" [ref=e119]
                - button [ref=e120] [cursor=pointer]:
                  - img
          - generic [ref=e121]:
            - heading "Shop" [level=4] [ref=e122]
            - list [ref=e123]:
              - listitem [ref=e124]:
                - link "Shop All" [ref=e125] [cursor=pointer]:
                  - /url: /shop
              - listitem [ref=e126]:
                - link "New Arrivals" [ref=e127] [cursor=pointer]:
                  - /url: /new
              - listitem [ref=e128]:
                - link "Sale" [ref=e129] [cursor=pointer]:
                  - /url: /sale
          - generic [ref=e130]:
            - heading "Support" [level=4] [ref=e131]
            - list [ref=e132]:
              - listitem [ref=e133]:
                - link "Contact Us" [ref=e134] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e135]:
                - link "About Us" [ref=e136] [cursor=pointer]:
                  - /url: /about
          - generic [ref=e137]:
            - heading "Company" [level=4] [ref=e138]
            - list [ref=e139]:
              - listitem [ref=e140]:
                - link "About Us" [ref=e141] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e142]:
                - link "Contact" [ref=e143] [cursor=pointer]:
                  - /url: /contact
        - generic [ref=e144]:
          - paragraph [ref=e145]: © 2026 Just Your Kicks. All rights reserved.
          - link "Join the Community @JustYourKicks" [ref=e147] [cursor=pointer]:
            - /url: https://www.instagram.com/justyourkicks?igsh=MThlbWowZTFsancyMw==
            - img [ref=e151]
            - generic [ref=e153]:
              - generic [ref=e154]: Join the Community
              - generic [ref=e155]: "@JustYourKicks"
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
     |              ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  20 | 
  21 |         await this.page
  22 |             .getByRole('link', {
  23 |                 name: /proceed to checkout/i
  24 |             })
  25 |             .click();
  26 |     }
  27 | }
```