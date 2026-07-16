import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { Locators } from './locators';

export class ProgressBarPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get startButton(): Locator {
    return this.page.locator(Locators.btnStart);
  }

  get stopButton(): Locator {
    return this.page.locator(Locators.btnStop);
  }

  private get bar(): Locator {
    return this.page.locator(Locators.progressBar);
  }

  async getValueOfProgressBar(): Promise<number> {
    const value = await this.bar.getAttribute(Locators.progressBarValue);
    return value !== null ? parseInt(value, 10) : 0;
  }
}
