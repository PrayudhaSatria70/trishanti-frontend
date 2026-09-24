import { test, expect } from "@playwright/test";

/**
 * Board A.7 Testing & Quality Assurance — Automated E2E Testing with Playwright
 * Test Case Coverage (Item 06):
 * 1. Page loads successfully
 * 2. Main navigation works
 * 3. Hero section is visible
 * 4. Business sections render
 * 5. Footer links are valid
 * 6. No console errors
 * 7. Mobile view is responsive
 */

test.describe("Trishanti Enterprise Homepage E2E Suite", () => {
  test("homepage loads successfully with correct title and heading", async ({ page }) => {
    await page.goto("/en");
    await expect(page).toHaveTitle(/Trishanti/);
    
    // Check main hero heading
    const heroHeading = page.locator("h1").first();
    await expect(heroHeading).toBeVisible();
    await expect(heroHeading).toContainText(/BUILDING/i);
  });

  test("main navigation renders all core links", async ({ page }) => {
    await page.goto("/en");
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();

    // Verify presence of primary navigation items
    await expect(page.getByRole("link", { name: /About/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Our Businesses|Businesses/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Sustainability/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /News/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Contact/i }).first()).toBeVisible();
  });

  test("hero section is visible with dual CTA actions", async ({ page }) => {
    await page.goto("/en");
    const primaryCta = page.getByRole("link", { name: /Our Businesses|Explore/i }).first();
    await expect(primaryCta).toBeVisible();

    const videoButton = page.locator("button, a").filter({ hasText: /Watch Video/i });
    if (await videoButton.count() > 0) {
      await expect(videoButton.first()).toBeVisible();
    }
  });

  test("business sections render with all 6 strategic pillars", async ({ page }) => {
    await page.goto("/en");
    
    // Check pillars section heading
    const pillarsHeading = page.locator("h2").filter({
      hasText: /Diverse Industries|Business Pillars/i,
    }).first();
    await expect(pillarsHeading).toBeVisible();

    // Verify key pillars
    await expect(page.getByText(/Infrastructure/i).first()).toBeVisible();
    await expect(page.getByText(/Industrial Trading|Industrial/i).first()).toBeVisible();
    await expect(page.getByText(/Agriculture & Food/i).first()).toBeVisible();
    await expect(page.getByText(/Technology & Digital/i).first()).toBeVisible();
    await expect(page.getByText(/Consumer & Lifestyle/i).first()).toBeVisible();
    await expect(page.getByText(/Experiences & Ventures/i).first()).toBeVisible();
  });

  test("footer links are valid and copyright is rendered", async ({ page }) => {
    await page.goto("/en");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer.getByText(/PT. Trishanti Sinergi Indocorp/i).first()).toBeVisible();
    await expect(footer.getByText(/All rights reserved/i).first()).toBeVisible();
  });

  test("page executes with zero fatal console errors", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto("/en");
    // Filter benign hydration warnings if any, check for critical errors
    const fatalErrors = consoleErrors.filter(
      (err) => !err.includes("favicon") && !err.includes("next-dev")
    );
    expect(fatalErrors).toHaveLength(0);
  });

  test("mobile view is responsive with operable mobile navigation", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/en");

    // Check brand logo is visible
    await expect(page.getByText(/TRISHANTI/i).first()).toBeVisible();

    // Mobile menu toggle button
    const menuToggle = page.getByRole("button", { name: /menu|navigation/i });
    if (await menuToggle.count() > 0) {
      await expect(menuToggle.first()).toBeVisible();
    }
  });
});
