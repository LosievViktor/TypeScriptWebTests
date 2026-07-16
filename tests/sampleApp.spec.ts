import { test, expect } from './fixtures';
import { Strings } from '../pages/strings';

test.describe('Sample App Tests', () => {
  test('Login form - positive case', async ({ loadPage, sampleAppPage, params }) => {
    // This test goes to the web site and tests the login page in the Positive case.
    await loadPage(Strings.SampleApp);

    await sampleAppPage.login(params.login, params.password);

    await expect(sampleAppPage.statusLabel).toHaveText(`${Strings.WelcomeUserMessage} ${params.login}!`);
  });

  test('Login form - negative case', async ({ loadPage, sampleAppPage, params }) => {
    // This test goes to the web site and tests the login page in the Negative case.
    await loadPage(Strings.SampleApp);

    await sampleAppPage.login(params.login, params.wrongPassword);

    await expect(sampleAppPage.statusLabel).toHaveText(Strings.WrongPasswordMessage);
  });
});
