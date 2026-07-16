import { test, expect } from './fixtures';
import { Strings, Links } from '../pages/strings';

test.describe('Main Page Tests', () => {
  for (const pageName of Links) {
    test(`Main page link: ${pageName}`, async ({ loadPage }) => {
      // This test goes to the web site and visits each chapter link.
      await loadPage(pageName);
    });
  }

  test('Main page attributes - checks page title', async ({ page, loadMainPage }) => {
    // This test checks the main page Title.
    await loadMainPage();
    await expect(page).toHaveTitle(Strings.PageTitle);
  });
});
