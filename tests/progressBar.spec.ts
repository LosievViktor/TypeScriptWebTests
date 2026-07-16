import { test, expect } from './fixtures';
import { Strings } from '../pages/strings';

test.describe('Progress Bar Tests', () => {
  test('Progress bar reaches 75 and stops', async ({ loadPage, progressBarPage }) => {
    // This test goes to the web site and tests the Progress Bar.
    await loadPage(Strings.ProgressBar);

    await progressBarPage.startButton.click();

    await expect
      .poll(async () => progressBarPage.getValueOfProgressBar(), { timeout: 30_000 })
      .toBeGreaterThanOrEqual(75);

    await progressBarPage.stopButton.click();

    expect(await progressBarPage.getValueOfProgressBar()).toBe(75);
  });
});
