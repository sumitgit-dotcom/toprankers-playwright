const { test, expect } = require('@playwright/test');

test('Enter phone number and click Join', async ({ page }) => {
  await page.goto('https://www.toprankers.com/');

  const phoneInput = page.getByPlaceholder(/phone number/i).first();

  await phoneInput.fill('8871220199');

  await expect(phoneInput).toHaveValue('8871220199');

  const joinButton = page.getByRole('button', {
    name: /join(?:\s+for\s+free)?/i
  }).first();

  await joinButton.click();

  console.log('Current URL:', page.url());
  console.log('Page title:', await page.title());
});
