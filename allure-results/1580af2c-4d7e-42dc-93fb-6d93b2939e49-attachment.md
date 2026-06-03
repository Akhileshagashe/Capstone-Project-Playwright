# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout\checkout.spec.js >> CHECKOUT FUNCTIONALITY TESTS >> CHECKOUT_06 Verify address field visible
- Location: tests\checkout\checkout.spec.js:75:9

# Error details

```
Error: toBeVisible can be only used with Locator object, was called with undefined
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - region "Notifications (F8)":
    - list
  - region "Notifications alt+T":
    - list:
      - listitem [ref=e3]:
        - img [ref=e5]
        - generic [ref=e8]: Adidas Court Platform 'Ivory Cloud' added to cart!
  - generic [ref=e9]:
    - banner [ref=e10]:
      - generic [ref=e12]:
        - generic [ref=e13]:
          - generic [ref=e14]:
            - img [ref=e15]
            - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
            - img [ref=e17]
          - generic [ref=e19]: COP YOUR GRAILS NOW
          - generic [ref=e20]:
            - img [ref=e21]
            - text: "LIMITED TIME ONLY: 70% OFF"
            - img [ref=e23]
          - generic [ref=e25]: DON'T MISS OUT
        - generic [ref=e26]:
          - generic [ref=e27]:
            - img [ref=e28]
            - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
            - img [ref=e30]
          - generic [ref=e32]: COP YOUR GRAILS NOW
          - generic [ref=e33]:
            - img [ref=e34]
            - text: "LIMITED TIME ONLY: 70% OFF"
            - img [ref=e36]
          - generic [ref=e38]: DON'T MISS OUT
        - generic [ref=e39]:
          - generic [ref=e40]:
            - img [ref=e41]
            - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
            - img [ref=e43]
          - generic [ref=e45]: COP YOUR GRAILS NOW
          - generic [ref=e46]:
            - img [ref=e47]
            - text: "LIMITED TIME ONLY: 70% OFF"
            - img [ref=e49]
          - generic [ref=e51]: DON'T MISS OUT
        - generic [ref=e52]:
          - generic [ref=e53]:
            - img [ref=e54]
            - text: "MEGA SALE IS LIVE: UP TO 70% OFF"
            - img [ref=e56]
          - generic [ref=e58]: COP YOUR GRAILS NOW
          - generic [ref=e59]:
            - img [ref=e60]
            - text: "LIMITED TIME ONLY: 70% OFF"
            - img [ref=e62]
          - generic [ref=e64]: DON'T MISS OUT
      - navigation [ref=e65]:
        - generic [ref=e67]:
          - link "Logo JUST YOUR KICKS" [ref=e68] [cursor=pointer]:
            - /url: /
            - img "Logo" [ref=e69]
            - generic [ref=e70]: JUST YOUR KICKS
          - generic [ref=e71]:
            - link "Shop" [ref=e72] [cursor=pointer]:
              - /url: /shop
            - link "Mens Sports" [ref=e73] [cursor=pointer]:
              - /url: /shop?category=Mens+Sports
            - link "Mens Sneakers" [ref=e74] [cursor=pointer]:
              - /url: /shop?category=Mens+Sneakers
            - link "Flippers" [ref=e75] [cursor=pointer]:
              - /url: /shop?category=Flippers
            - link "New Arrivals" [ref=e76] [cursor=pointer]:
              - /url: /new
            - link "Sale" [ref=e77] [cursor=pointer]:
              - /url: /sale
          - generic [ref=e80]:
            - img [ref=e81]
            - textbox "Search products, brands..." [ref=e84]
          - generic [ref=e85]:
            - link [ref=e86] [cursor=pointer]:
              - /url: /wishlist
              - img
            - link [ref=e87] [cursor=pointer]:
              - /url: /auth
              - img
            - button "1" [ref=e88] [cursor=pointer]:
              - img
              - generic [ref=e89]: "1"
    - main [ref=e90]:
      - generic [ref=e91]:
        - link "Continue Shopping" [ref=e92] [cursor=pointer]:
          - /url: /shop
          - img [ref=e93]
          - text: Continue Shopping
        - heading "CHECKOUT" [level=1] [ref=e95]
        - generic [ref=e97]:
          - generic [ref=e98]:
            - generic [ref=e99]:
              - heading "CONTACT INFORMATION" [level=2] [ref=e100]
              - generic [ref=e101]:
                - generic [ref=e102]:
                  - text: First Name *
                  - textbox "First Name *" [ref=e103]:
                    - /placeholder: John
                - generic [ref=e104]:
                  - text: Last Name *
                  - textbox "Last Name *" [ref=e105]:
                    - /placeholder: Doe
                - generic [ref=e106]:
                  - text: Email *
                  - textbox "Email *" [ref=e107]:
                    - /placeholder: john@example.com
                - generic [ref=e108]:
                  - text: Phone *
                  - textbox "Phone *" [ref=e109]:
                    - /placeholder: "9876543210"
            - generic [ref=e110]:
              - heading "SHIPPING ADDRESS" [level=2] [ref=e111]
              - generic [ref=e112]:
                - generic [ref=e113]:
                  - text: Street Address *
                  - textbox "Street Address *" [ref=e114]:
                    - /placeholder: 123 Main Street, Apartment 4B
                - generic [ref=e115]:
                  - generic [ref=e116]:
                    - text: City *
                    - textbox "City *" [ref=e117]:
                      - /placeholder: Mumbai
                  - generic [ref=e118]:
                    - text: State *
                    - textbox "State *" [ref=e119]:
                      - /placeholder: Maharashtra
                  - generic [ref=e120]:
                    - text: PIN Code *
                    - textbox "PIN Code *" [ref=e121]:
                      - /placeholder: "400001"
            - generic [ref=e122]:
              - heading "PAYMENT METHOD" [level=2] [ref=e123]
              - generic [ref=e124]:
                - generic [ref=e125] [cursor=pointer]:
                  - radio "UPI Pay using any UPI app" [checked] [ref=e126]
                  - generic [ref=e127]:
                    - paragraph [ref=e128]: UPI
                    - paragraph [ref=e129]: Pay using any UPI app
                  - img [ref=e130]
                - generic [ref=e132] [cursor=pointer]:
                  - radio "Credit/Debit Card All major cards accepted" [ref=e133]
                  - generic [ref=e134]:
                    - paragraph [ref=e135]: Credit/Debit Card
                    - paragraph [ref=e136]: All major cards accepted
                  - img [ref=e137]
          - generic [ref=e140]:
            - heading "ORDER SUMMARY" [level=2] [ref=e141]
            - generic [ref=e143]:
              - img "Adidas Court Platform 'Ivory Cloud'" [ref=e145]
              - generic [ref=e146]:
                - heading "Adidas Court Platform 'Ivory Cloud'" [level=4] [ref=e147]
                - paragraph [ref=e148]: "Size: UK 9 • Qty: 1"
                - paragraph [ref=e149]: ₹1,800
            - generic [ref=e150]:
              - generic [ref=e151]: Have a Coupon Code?
              - generic [ref=e152]:
                - textbox "Have a Coupon Code?" [ref=e153]:
                  - /placeholder: Enter code
                - button "Apply" [disabled]:
                  - img
                  - text: Apply
            - generic [ref=e154]:
              - generic [ref=e155]:
                - generic [ref=e156]: Subtotal
                - generic [ref=e157]: ₹1,800
              - generic [ref=e158]:
                - generic [ref=e159]: Shipping
                - generic [ref=e160]: FREE
              - generic [ref=e161]:
                - generic [ref=e162]: Total
                - generic [ref=e163]: ₹1,800
            - button "Place Order" [ref=e164] [cursor=pointer]:
              - img
              - text: Place Order
            - generic [ref=e165]:
              - img [ref=e167]
              - generic [ref=e172]:
                - img [ref=e173]
                - generic [ref=e175]: Secure checkout with SSL encryption
    - contentinfo [ref=e176]:
      - generic [ref=e177]:
        - generic [ref=e178]:
          - generic [ref=e179]:
            - link "Logo JUST YOUR KICKS" [ref=e180] [cursor=pointer]:
              - /url: /
              - img "Logo" [ref=e181]
              - text: JUST YOUR KICKS
            - paragraph [ref=e182]: Premium sneakers for those who dare to stand out. Comfort meets cutting-edge design in every step.
            - generic [ref=e183]:
              - paragraph [ref=e184]: Join the Kicks Club
              - generic [ref=e185]:
                - textbox "Enter your email" [ref=e186]
                - button [ref=e187] [cursor=pointer]:
                  - img
          - generic [ref=e188]:
            - heading "Shop" [level=4] [ref=e189]
            - list [ref=e190]:
              - listitem [ref=e191]:
                - link "Shop All" [ref=e192] [cursor=pointer]:
                  - /url: /shop
              - listitem [ref=e193]:
                - link "New Arrivals" [ref=e194] [cursor=pointer]:
                  - /url: /new
              - listitem [ref=e195]:
                - link "Sale" [ref=e196] [cursor=pointer]:
                  - /url: /sale
          - generic [ref=e197]:
            - heading "Support" [level=4] [ref=e198]
            - list [ref=e199]:
              - listitem [ref=e200]:
                - link "Contact Us" [ref=e201] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e202]:
                - link "About Us" [ref=e203] [cursor=pointer]:
                  - /url: /about
          - generic [ref=e204]:
            - heading "Company" [level=4] [ref=e205]
            - list [ref=e206]:
              - listitem [ref=e207]:
                - link "About Us" [ref=e208] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e209]:
                - link "Contact" [ref=e210] [cursor=pointer]:
                  - /url: /contact
        - generic [ref=e211]:
          - paragraph [ref=e212]: © 2026 Just Your Kicks. All rights reserved.
          - link "Join the Community @JustYourKicks" [ref=e214] [cursor=pointer]:
            - /url: https://www.instagram.com/justyourkicks?igsh=MThlbWowZTFsancyMw==
            - img [ref=e218]
            - generic [ref=e220]:
              - generic [ref=e221]: Join the Community
              - generic [ref=e222]: "@JustYourKicks"
```

# Test source

```ts
  1   | import { test, expect} from '@playwright/test';
  2   | import { CheckoutPage } from '../../pages/checkout';
  3   | 
  4   | test.describe(
  5   |     'CHECKOUT FUNCTIONALITY TESTS',
  6   |     () => {
  7   | 
  8   |         let checkout;
  9   | 
  10  |         test.beforeEach(
  11  |             async ({ page }) => {
  12  | 
  13  |                 checkout =
  14  |                     new CheckoutPage(
  15  |                         page
  16  |                     );
  17  | 
  18  |                 await checkout
  19  |                     .openCheckoutForm();
  20  |             }
  21  |         );
  22  | 
  23  |         test(
  24  |             'CHECKOUT_01 Verify checkout page loads',
  25  |             async ({ page }) => {
  26  | 
  27  |                 await expect(
  28  |                     page
  29  |                 ).toHaveURL(
  30  |                     /checkout/
  31  |                 );
  32  |             }
  33  |         );
  34  | 
  35  |         test(
  36  |             'CHECKOUT_02 Verify first name field visible',
  37  |             async () => {
  38  | 
  39  |                 await expect(
  40  |                     checkout.firstName
  41  |                 ).toBeVisible();
  42  |             }
  43  |         );
  44  | 
  45  |         test(
  46  |             'CHECKOUT_03 Verify last name field visible',
  47  |             async () => {
  48  | 
  49  |                 await expect(
  50  |                     checkout.lastName
  51  |                 ).toBeVisible();
  52  |             }
  53  |         );
  54  | 
  55  |         test(
  56  |             'CHECKOUT_04 Verify email field visible',
  57  |             async () => {
  58  | 
  59  |                 await expect(
  60  |                     checkout.email
  61  |                 ).toBeVisible();
  62  |             }
  63  |         );
  64  | 
  65  |         test(
  66  |             'CHECKOUT_05 Verify phone field visible',
  67  |             async () => {
  68  | 
  69  |                 await expect(
  70  |                     checkout.phone
  71  |                 ).toBeVisible();
  72  |             }
  73  |         );
  74  | 
  75  |         test(
  76  |             'CHECKOUT_06 Verify address field visible',
  77  |             async () => {
  78  | 
  79  |                 await expect(
  80  |                     checkout.address
> 81  |                 ).toBeVisible();
      |                   ^ Error: toBeVisible can be only used with Locator object, was called with undefined
  82  |             }
  83  |         );
  84  | 
  85  |         test(
  86  |             'CHECKOUT_07 Verify city field visible',
  87  |             async () => {
  88  | 
  89  |                 await expect(
  90  |                     checkout.city
  91  |                 ).toBeVisible();
  92  |             }
  93  |         );
  94  | 
  95  |         test(
  96  |             'CHECKOUT_08 Verify state field visible',
  97  |             async () => {
  98  | 
  99  |                 await expect(
  100 |                     checkout.state
  101 |                 ).toBeVisible();
  102 |             }
  103 |         );
  104 | 
  105 |         test(
  106 |             'CHECKOUT_09 Verify pin code field visible',
  107 |             async () => {
  108 | 
  109 |                 await expect(
  110 |                     checkout.pinCode
  111 |                 ).toBeVisible();
  112 |             }
  113 |         );
  114 | 
  115 |         test(
  116 |             'CHECKOUT_10 Verify place order button visible',
  117 |             async () => {
  118 | 
  119 |                 await expect(
  120 |                     checkout.placeOrderBtn
  121 |                 ).toBeVisible();
  122 |             }
  123 |         );
  124 | 
  125 |         test(
  126 |             'CHECKOUT_11 Verify first name accepts input',
  127 |             async () => {
  128 | 
  129 |                 await checkout.firstName.fill(
  130 |                     'Akhilesh'
  131 |                 );
  132 | 
  133 |                 await expect(
  134 |                     checkout.firstName
  135 |                 ).toHaveValue(
  136 |                     'Akhilesh'
  137 |                 );
  138 |             }
  139 |         );
  140 | 
  141 |         test(
  142 |             'CHECKOUT_12 Verify last name accepts input',
  143 |             async () => {
  144 | 
  145 |                 await checkout.lastName.fill(
  146 |                     'Agashe'
  147 |                 );
  148 | 
  149 |                 await expect(
  150 |                     checkout.lastName
  151 |                 ).toHaveValue(
  152 |                     'Agashe'
  153 |                 );
  154 |             }
  155 |         );
  156 | 
  157 |         test(
  158 |             'CHECKOUT_13 Verify email accepts input',
  159 |             async () => {
  160 | 
  161 |                 await checkout.email.fill(
  162 |                     'akhilesh@test.com'
  163 |                 );
  164 | 
  165 |                 await expect(
  166 |                     checkout.email
  167 |                 ).toHaveValue(
  168 |                     'akhilesh@test.com'
  169 |                 );
  170 |             }
  171 |         );
  172 | 
  173 |         test(
  174 |             'CHECKOUT_14 Verify phone accepts input',
  175 |             async () => {
  176 | 
  177 |                 await checkout.phone.fill(
  178 |                     '9876543210'
  179 |                 );
  180 | 
  181 |                 await expect(
```