const { test, expect } = require('@playwright/test');

test('Open Toprankers homepage', async ({ page }) => {
  await page.goto('https://www.toprankers.com/');
  await expect(page).toHaveURL(/toprankers\.com/);
  console.log('Page title:', await page.title());
});
