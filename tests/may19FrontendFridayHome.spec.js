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
  // test("has only one h1");
  test("has an h1 of 'My TodoList App'", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "My TodoList App" })
    ).toBeVisible();
  });
});

test.describe("Todo Items", () => {
  //
});
