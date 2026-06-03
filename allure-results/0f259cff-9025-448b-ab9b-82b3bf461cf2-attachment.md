# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\authentication.spec.js >> AUTHENTICATION TESTS >> AUTH_16 Verify create account requires data
- Location: tests\authentication\authentication.spec.js:200:5

# Error details

```
Error: expect(locator).toBeDisabled() failed

Locator:  getByRole('button', { name: /create account/i })
Expected: disabled
Received: enabled
Timeout:  10000ms

Call log:
  - Expect "toBeDisabled" with timeout 10000ms
  - waiting for getByRole('button', { name: /create account/i })
    23 × locator resolved to <button type="submit" class="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body bg-primary text-primary-foreground font-semibold uppercase tracking-wider hover:scale-105 hover:shadow-glow rounded-none h-14 px-10 text-lg w-f…>…</button>
       - unexpected value "enabled"

```

```yaml
- button "Create Account":
  - text: Create Account
  - img
```

# Test source

```ts
  105 |     test('AUTH_08 Verify signup email accepts input',
  106 |         async () => {
  107 | 
  108 |             await auth.openSignupPage();
  109 | 
  110 |             await auth.signupEmail.fill('akhilesh@test.com');
  111 | 
  112 |             await expect(auth.signupEmail)
  113 |                 .toHaveValue('akhilesh@test.com');
  114 |         }
  115 |     );
  116 | 
  117 |     test('AUTH_09 Verify password field accepts input',
  118 |         async () => {
  119 | 
  120 |             await auth.openSignupPage();
  121 | 
  122 |             await auth.signupPassword.fill('Password123');
  123 | 
  124 |             await expect(auth.signupPassword)
  125 |                 .toHaveValue('Password123');
  126 |         }
  127 |     );
  128 | 
  129 |     test('AUTH_10 Verify confirm password field accepts input',
  130 |         async () => {
  131 | 
  132 |             await auth.openSignupPage();
  133 | 
  134 |             await auth.confirmPassword.fill('Password123');
  135 | 
  136 |             await expect(auth.confirmPassword)
  137 |                 .toHaveValue('Password123');
  138 |         }
  139 |     );
  140 | 
  141 | 
  142 |     test('AUTH_11 Verify sign in link visible on signup page',
  143 |         async () => {
  144 | 
  145 |             await auth.openSignupPage();
  146 | 
  147 |             await expect(auth.signInLink).toBeVisible();
  148 |         }
  149 |     );
  150 | 
  151 |     test('AUTH_12 Verify signup page URL',
  152 |         async ({ page }) => {
  153 | 
  154 |             await auth.openSignupPage();
  155 | 
  156 |             await expect(page).toHaveURL(/auth/i);
  157 |         }
  158 |     );
  159 | 
  160 |     test('AUTH_13 Verify login email accepts input',
  161 |         async () => {
  162 | 
  163 |             await auth.openLoginPage();
  164 | 
  165 |             await auth.loginEmail.fill('test@example.com');
  166 | 
  167 |             await expect(auth.loginEmail)
  168 |                 .toHaveValue('test@example.com');
  169 |         }
  170 |     );
  171 | 
  172 |     test('AUTH_14 Verify login password accepts input',
  173 |         async () => {
  174 | 
  175 |             await auth.openLoginPage();
  176 | 
  177 |             await auth.loginPassword.fill('Password123');
  178 | 
  179 |             await expect(auth.loginPassword)
  180 |                 .toHaveValue('Password123');
  181 |         }
  182 |     );
  183 | 
  184 | 
  185 |     test('AUTH_15 Verify Sign In navigation works',
  186 |         async () => {
  187 | 
  188 |             await auth.openSignupPage();
  189 | 
  190 |             await auth.signInLink.click();
  191 | 
  192 |             await expect(auth.loginEmail)
  193 |                 .toBeVisible();
  194 | 
  195 |             await expect(auth.loginPassword)
  196 |                 .toBeVisible();
  197 |         }
  198 |     );
  199 | 
  200 |     test('AUTH_16 Verify create account requires data',
  201 |         async () => {
  202 | 
  203 |             await auth.openSignupPage();
  204 | 
> 205 |             await expect(auth.createAccountBtn).toBeDisabled();
      |                                                 ^ Error: expect(locator).toBeDisabled() failed
  206 |         }
  207 |     );
  208 | 
  209 |     test('AUTH_17 Verify password fields are independent',
  210 |         async () => {
  211 | 
  212 |             await auth.openSignupPage();
  213 | 
  214 |             await auth.signupPassword.fill('Password123');
  215 | 
  216 |             await auth.confirmPassword.fill('Password456');
  217 | 
  218 |             await expect(auth.signupPassword).toHaveValue('Password123');
  219 | 
  220 |             await expect(auth.confirmPassword).toHaveValue('Password456');
  221 |         }
  222 |     );
  223 | 
  224 |     test('AUTH_18 Verify signup form retains entered values',
  225 |         async () => {
  226 | 
  227 |             await auth.openSignupPage();
  228 | 
  229 |             await auth.fullName.fill('Akhilesh Agashe');
  230 | 
  231 |             await auth.signupEmail.fill('akhilesh@test.com');
  232 |        
  233 |             await expect(auth.fullName).toHaveValue('Akhilesh Agashe');
  234 | 
  235 |             await expect(auth.signupEmail).toHaveValue('akhilesh@test.com');
  236 |         }
  237 |     );
  238 | 
  239 | });
```