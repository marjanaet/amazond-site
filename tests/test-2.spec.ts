import { test, expect } from '@playwright/test';

test('order from incentivio', async ({ page }) => {
  await page.goto('https://order.incentivio.com/c/puravidamiami');
  await page.getByTestId('OrderTypeSelectors.CustomButton.Pickup').click();
  await page.getByLabel('Order from NOMAD').click();
  await page.getByTestId('OrderOptionSelect.Continue').click();
  await page.getByLabel('9:05 AM').click();
  await page.goto('https://order.incentivio.com/c/puravidamiami/locations/nomad/menu');
  await page.getByRole('button', { name: 'SPICY SALMON $18.95 oven-' }).first().click();
  await page.getByTestId('CatalogModal.CustomButton.AddToCart').click();
  await page.getByLabel('WHOLE WHEAT WRAP').check();
  await page.locator('div').filter({ hasText: 'QTY.1Add to Cart' }).nth(3).click();
});