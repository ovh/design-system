import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-link react', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-link');
  });

  it('should navigate on click', async () => {
    const elem = await page.$('ods-link');

    await elem?.click();
    await page.waitForNavigation();

    expect(page.url()).toBe('https://www.ovhcloud.com/fr/');
  });
});
