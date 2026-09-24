import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright Configuration — Board A.7 Testing & Quality Assurance
 * Responsive Breakpoints:
 * - Desktop: >= 1024px (1920x1080)
 * - Tablet: 768-1023px (768x1024)
 * - Mobile: <= 767px (375x812)
 *
 * Browsers Supported: Google Chrome, Mozilla Firefox, WebKit/Safari, Microsoft Edge
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  ...(process.env.CI ? { workers: 1 } : {}),
  reporter: "html",
  use: {
    baseURL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1920, height: 1080 } },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"], viewport: { width: 1920, height: 1080 } },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], viewport: { width: 1920, height: 1080 } },
    },
    {
      name: "tablet",
      use: { ...devices["iPad Pro 11"], viewport: { width: 768, height: 1024 } },
    },
    {
      name: "mobile",
      use: { ...devices["iPhone 13"], viewport: { width: 375, height: 812 } },
    },
  ],
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
