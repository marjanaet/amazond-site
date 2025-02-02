import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://order.incentivio.com/c/pureburger");
  await expect(page.locator("#address-control-label")).toContainText(
    "Where are we delivering to?"
  );

  await expect(
    page.getByRole("heading", { name: "Where are we delivering to?" })
  ).toBeVisible();
  await page.getByTestId("OrderTypeSelectors.CustomButton.Pickup").click();
  await expect(
    page.getByRole("heading", { name: "Where are we delivering to?" })
  ).not.toBeVisible();
  await page.getByLabel("Order from Fenway - PickUp").click();
  await page.getByTestId("OrderOptionSelect.Continue").click();
  await page.getByLabel("9:50 PM").click();
  await page
    .getByRole("button", { name: "Chicken Noodle $18.99 Chicken" })
    .click();
  await page
    .getByLabel(
      "Increase modifier quantity of Chicken by 1, current quantity is"
    )
    .click();
  await page.getByTestId("CatalogModal.QtyButton.Increase").click();
  await page.getByTestId("CatalogModal.CustomButton.AddToCart").click();
  await page.getByTestId("DrawerCart.Toggle").click();
  await page.getByTestId("Drawer.IconButton.Close").click();
  await expect(page.getByTestId("DrawerCart.Toggle")).toBeVisible();
  await expect(page.getByTestId("DrawerCart.Toggle")).toBeVisible();
  await page.getByTestId("Header.Container.ToolbarWrapper").click();
  await page.getByText("Schedule OrderPickupHow would").click();
  await page.getByTestId("CustomDialog.Close").click();
  await page.getByTestId("DrawerCart.Toggle").click();
  await page.getByTestId("Drawer.IconButton.Close").click();
  await expect(page.getByTestId("CatalogMenu")).toContainText("Soups");

  await expect(page.getByRole("heading", { name: "Soups" })).not.toBeVisible();
  await page.getByTestId("DrawerLoginOptions.Toggle").click();
  await page.getByPlaceholder("your@email.com").click();
  await page.getByPlaceholder("your@email.com").fill("bjhjkj");
  await page.getByPlaceholder("your@email.com").click();
  await page.getByPlaceholder("your@email.com").fill("marjan.m@incentivio.com");
  await page.getByPlaceholder("your@email.com").press("ArrowLeft");
  await page.getByPlaceholder("your@email.com").press("Tab");
  await page.getByPlaceholder("+ characters").fill("Asd123456789%");
  await page.getByTestId("SignInFields.CustomButton.Submit").click();
  await page.getByTestId("spinner").dblclick();
  await page.getByTestId("Drawer.IconButton.Close").click();
  await page.getByTestId("DrawerLoginOptions.Toggle").click();
  await page.getByText("Email*").click();
  await page.getByPlaceholder("your@email.com").click();
  await page.getByPlaceholder("your@email.com").fill("asdasdasd.com");

  await page.getByPlaceholder("your@email.com").click();
});

