const { test, expect } = require("@playwright/test");

// Go to the home page before each test.
test.beforeEach(async ({ page }) => {
  await page.goto("https://frontend-friday-05-19-2023.onrender.com/");
});

test.describe("Homepage", () => {
  test("has title containing substring of Frontend Friday", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(/Frontend Friday/);
  });

  test("has only one h1", async ({ page }) => {
    //
  });

  test("has an h1 of 'My TodoList App'", async ({ page }) => {
    await expect(
      // the 'name' is the text inside of the heading.
      page.getByRole("heading", { name: "My TodoList App" })
    ).toBeVisible();
  });
});

test.describe("Todo Items", () => {
  test("View more details should start with a plus before clicked.", async ({
    page,
  }) => {
    const detailsDivWithPlus = page.getByText("+ View more details", {
      exact: true,
    });
    // The above locator is multiple divs, let's make sure one is visible.
    const firstDetail = detailsDivWithPlus.first();
    await expect(firstDetail).toBeVisible();
    // const secondDetails = detailsDivWithPlus.nth(0);
    // await expect(secondDetails).toBeVisible();
  });

  test("View more details should start with a - after being clicked.", async ({
    page,
  }) => {
    // Get locator to first detail.
    const firstDetail = page.getByText("View more details").first();

    // Before clicking, assert it starts with a +
    await expect(firstDetail).toHaveText("+ View more details");

    // Click
    await firstDetail.click();

    // Assert it now starts with a -
    await expect(firstDetail).toHaveText("- View more details");
  });
});

test.describe("Plus Button ", () => {
  test("Plus button is enabled", async ({ page }) => {
    const plusButton = page.getByRole("button", { name: "+" });
    await expect(plusButton).toBeEnabled();
  });
});
