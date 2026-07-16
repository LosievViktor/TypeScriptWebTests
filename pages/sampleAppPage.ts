import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { Locators } from './locators';

export class SampleAppPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private get loginTextField(): Locator {
    return this.page.locator(Locators.txtLogin);
  }

  private get passwordTextField(): Locator {
    return this.page.locator(Locators.txtPassword);
  }

  private get loginButton(): Locator {
    return this.page.locator(Locators.btnLogin);
  }

  get statusLabel(): Locator {
    return this.page.locator(Locators.lblStatus);
  }

  async login(user: string, pass: string): Promise<void> {
    await this.loginTextField.fill(user);
    await this.passwordTextField.fill(pass);
    await this.loginButton.click();
  }
}
