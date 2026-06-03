# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout\checkout.spec.js >> CHECKOUT FUNCTIONALITY TESTS >> CHECKOUT_02 Verify last name field accepts input
- Location: tests\checkout\checkout.spec.js:25:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('textbox', { name: 'Last Name *' })

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { CheckoutPage } from '../../pages/checkout';
  3   | 
  4   | test.describe('CHECKOUT FUNCTIONALITY TESTS', () => {
  5   | 
  6   |     test.beforeEach(async ({ page }) => {
  7   | 
  8   |         await page.goto(
  9   |             'https://justyourkicks.in/checkout'
  10  |         );
  11  |     });
  12  | 
  13  |     test('CHECKOUT_01 Verify first name field accepts input', async ({ page }) => {
  14  | 
  15  |         const checkout =
  16  |             new CheckoutPage(page);
  17  | 
  18  |         await checkout.firstName.fill('John');
  19  | 
  20  |         await expect(
  21  |             checkout.firstName
  22  |         ).toHaveValue('John');
  23  |     });
  24  | 
  25  |     test('CHECKOUT_02 Verify last name field accepts input', async ({ page }) => {
  26  | 
  27  |         const checkout =
  28  |             new CheckoutPage(page);
  29  | 
> 30  |         await checkout.lastName.fill('Doe');
      |                                 ^ Error: locator.fill: Target page, context or browser has been closed
  31  | 
  32  |         await expect(
  33  |             checkout.lastName
  34  |         ).toHaveValue('Doe');
  35  |     });
  36  | 
  37  |     test('CHECKOUT_03 Verify email field accepts input', async ({ page }) => {
  38  | 
  39  |         const checkout =
  40  |             new CheckoutPage(page);
  41  | 
  42  |         await checkout.email.fill(
  43  |             'john@test.com'
  44  |         );
  45  | 
  46  |         await expect(
  47  |             checkout.email
  48  |         ).toHaveValue(
  49  |             'john@test.com'
  50  |         );
  51  |     });
  52  | 
  53  |     test('CHECKOUT_04 Verify phone field accepts input', async ({ page }) => {
  54  | 
  55  |         const checkout =
  56  |             new CheckoutPage(page);
  57  | 
  58  |         await checkout.phone.fill(
  59  |             '9876543210'
  60  |         );
  61  | 
  62  |         await expect(
  63  |             checkout.phone
  64  |         ).toHaveValue(
  65  |             '9876543210'
  66  |         );
  67  |     });
  68  | 
  69  |     test('CHECKOUT_05 Verify address field accepts input', async ({ page }) => {
  70  | 
  71  |         const checkout =
  72  |             new CheckoutPage(page);
  73  | 
  74  |         await checkout.address.fill(
  75  |             '123 Main Street'
  76  |         );
  77  | 
  78  |         await expect(
  79  |             checkout.address
  80  |         ).toHaveValue(
  81  |             '123 Main Street'
  82  |         );
  83  |     });
  84  | 
  85  |     test('CHECKOUT_06 Verify city field accepts input', async ({ page }) => {
  86  | 
  87  |         const checkout =
  88  |             new CheckoutPage(page);
  89  | 
  90  |         await checkout.city.fill(
  91  |             'Mumbai'
  92  |         );
  93  | 
  94  |         await expect(
  95  |             checkout.city
  96  |         ).toHaveValue(
  97  |             'Mumbai'
  98  |         );
  99  |     });
  100 | 
  101 |     test('CHECKOUT_07 Verify state field accepts input', async ({ page }) => {
  102 | 
  103 |         const checkout =
  104 |             new CheckoutPage(page);
  105 | 
  106 |         await checkout.state.fill(
  107 |             'Maharashtra'
  108 |         );
  109 | 
  110 |         await expect(
  111 |             checkout.state
  112 |         ).toHaveValue(
  113 |             'Maharashtra'
  114 |         );
  115 |     });
  116 | 
  117 |     test('CHECKOUT_08 Verify pin code field accepts input', async ({ page }) => {
  118 | 
  119 |         const checkout =
  120 |             new CheckoutPage(page);
  121 | 
  122 |         await checkout.pinCode.fill(
  123 |             '400001'
  124 |         );
  125 | 
  126 |         await expect(
  127 |             checkout.pinCode
  128 |         ).toHaveValue(
  129 |             '400001'
  130 |         );
```