import { defineConfig, devices } from '@playwright/test';

/**
 * Runtime parameters, equivalent to the C# project's live.runsettings file.
 * Override via environment variables, e.g.:
 *   ENVIRONMENT=http://uitestingplayground.com/ LOGIN=Viktor PASSWORD=pwd WRONG_PASSWORD=pwd123 HEADLESS=false npx playwright test
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',

  use: {
    baseURL: process.env.ENVIRONMENT || 'http://uitestingplayground.com/',
    headless: process.env.HEADLESS ? process.env.HEADLESS === 'true' : false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
