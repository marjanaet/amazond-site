import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://order.incentivio.com/c/puravidamiami');
  await page.getByTestId('OrderTypeSelectors.CustomButton.Pickup').click();
  await page.getByLabel('Order from NOMAD').click();
  await page.getByTestId('OrderOptionSelect.Continue').click();
  await page.getByLabel('1:10 PM').click();
  await page.getByRole('button', { name: 'SPICY SALMON $18.95 oven-' }).first().click();
  await page.getByLabel('GLUTEN-FREE WRAP').check();
  await page.getByTestId('CatalogModal.CustomButton.AddToCart').click();
  await page.getByTestId('DrawerCart.Toggle').click({
    button: 'right'
  });
  await expect(page.getByTestId('Drawer.CustomBadge').locator('span')).toContainText('1');
});