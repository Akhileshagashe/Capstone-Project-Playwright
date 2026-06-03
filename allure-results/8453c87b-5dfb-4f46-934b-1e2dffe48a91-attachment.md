# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout\checkout.spec.js >> CHECKOUT FUNCTIONALITY TESTS >> CHECKOUT_03 Verify last name field visible
- Location: tests\checkout\checkout.spec.js:45:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#lastName')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('#lastName')

```

```yaml
- region "Notifications alt+T":
  - list:
    - listitem:
      - img
      - text: Adidas Court Platform 'Ivory Cloud' added to cart!
- dialog "YOUR BAG":
  - heading "YOUR BAG" [level=2]:
    - img
    - text: YOUR BAG
  - paragraph: 1 item
  - img "Adidas Court Platform 'Ivory Cloud'"
  - paragraph: Mens Sneakers
  - heading "Adidas Court Platform 'Ivory Cloud'" [level=4]
  - paragraph: "Size: UK 9"
  - button:
    - img
  - button:
    - img
  - text: "1"
  - button:
    - img
  - text: ₹1,800 Subtotal ₹1,800 Shipping FREE Total ₹1,800
  - link "Proceed to Checkout":
    - /url: /checkout
  - button "Continue Shopping"
  - button "Close":
    - img
    - text: Close
```

# Test source

```ts
  1   | import { test, expect} from '@playwright/test';
  2   | import { CheckoutPage } from '../../pages/CheckoutPage';
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
> 51  |                 ).toBeVisible();
      |                   ^ Error: expect(locator).toBeVisible() failed
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
  81  |                 ).toBeVisible();
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
```