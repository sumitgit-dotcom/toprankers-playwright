
const { test, expect } = require('@playwright/test');

test('CLAT 2027 - Filter English batch and explore first course', async ({ page }) => {
  // 1. Open the homepage
  await page.goto('https://www.toprankers.com/');
  await expect(page).toHaveTitle(/Toprankers/i);

  // 2. Open the Online Courses menu
  await page.getByText('Online Courses', { exact: true }).first().hover();

  // 3. Wait for the CLAT link and click it
  const clatLink = page.locator('a[href="https://www.toprankers.com/clat"]');

  await expect(clatLink).toBeVisible({ timeout: 10000 });
  await clatLink.click({ force: true });

  // 4. Wait for the course listing page
  await expect(page).toHaveURL(/toprankers\.com\/clat/);

  // 5. Wait for the Batch Type filter
  await page.getByText('Batch Type', { exact: true }).waitFor({
    state: 'visible',
    timeout: 20000
  });

  // 6. Select English batch type
  await page.getByText('English', { exact: true }).last().click();

  // 7. Wait for the filtered results
  await page.waitForTimeout(2000);

  // 8. Click Explore on the first course
  await page.getByText('Explore', { exact: true }).first().click();

  // 9. Verify that navigation occurred
  await expect(page).not.toHaveURL(/toprankers\.com\/clat\/?$/);
});
