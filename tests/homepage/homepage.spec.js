import { test, expect } from '@playwright/test';

test(
'HOME_01 Verify AJIO homepage loads',
async ({ page }) => {

  await page.goto('/');

  await expect(page)
  .toHaveURL(/ajio/i);

});