import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://order.incentivio.com/c/puravidamiami');
  await page.getByTestId('OrderTypeSelectors.CustomButton.Pickup').click();
  await expect(page.getByTestId('LocationsListForm')).toContainText('NOMAasdD');
});