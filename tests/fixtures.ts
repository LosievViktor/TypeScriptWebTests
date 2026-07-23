import { test as base, expect, Page } from '@playwright/test';
import { Locators } from '../pages/locators';
import { SampleAppPage } from '../pages/sampleAppPage';
import { ProgressBarPage } from '../pages/progressBarPage';
import { FileUploadPage } from '../pages/fileUploadPage';


export type TestParams = {
  login: string;
  password: string;
  wrongPassword: string;
};

type Fixtures = {
  params: TestParams;
  loadMainPage: () => Promise<void>;
  loadPage: (chapter: string) => Promise<void>;
  sampleAppPage: SampleAppPage;
  progressBarPage: ProgressBarPage;
  fileUploadPage: FileUploadPage;
};

export const test = base.extend<Fixtures>({
  params: async ({}, use) => {
    await use({
      login: process.env.LOGIN ?? 'Viktor',
      password: process.env.PASSWORD ?? 'pwd',
      wrongPassword: process.env.WRONG_PASSWORD ?? 'pwd123',
    });
  },

  loadMainPage: async ({ page }: { page: Page }, use) => {
    await use(async () => {
      await page.goto('/');
    });
  },

  loadPage: async ({ page }: { page: Page }, use) => {
    const clickLinkByText = async (linkText: string) => {
      await page.getByRole('link', { name: linkText, exact: true }).click();
    };
    const isPageLoaded = async (headerText: string) => {
      await expect(page.locator(Locators.headerTag)).toHaveText(headerText);
    };
    await use(async (chapter: string) => {
      await page.goto('/');
      await clickLinkByText(chapter);
      await isPageLoaded(chapter);
    });
  },

  sampleAppPage: async ({ page }, use) => {
    await use(new SampleAppPage(page));
  },

  progressBarPage: async ({ page }, use) => {
    await use(new ProgressBarPage(page));
  },

  fileUploadPage: async ({ page }, use) => {
    await use(new FileUploadPage(page));
  },
});

export { expect };
