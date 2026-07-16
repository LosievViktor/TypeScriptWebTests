import { Page, FrameLocator, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { Locators } from './locators';
import { Strings } from './strings';

export class FileUploadPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private get iFrame(): FrameLocator {
    return this.page.frameLocator(Locators.iFrame);
  }

  private get fileInput(): Locator {
    return this.iFrame.locator(Locators.inputFile);
  }

  async upload(filePath: string): Promise<void> {
    await expect(this.fileInput).toBeAttached();
    await this.fileInput.setInputFiles(filePath);
  }

  async assertUploaded(): Promise<void> {
    await expect(this.iFrame.locator('p', { hasText: Strings.MessageOfUpload })).toBeVisible();
  }
}
