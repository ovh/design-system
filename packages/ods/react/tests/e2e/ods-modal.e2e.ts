import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-modal react', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-modal');
  });

  it('renders the modal on button click', async() => {
    const modal = await page.$('ods-modal');
    let boundingBox = await modal?.boundingBox();

    expect(boundingBox?.height).toBe(undefined);
    expect(boundingBox?.width).toBe(undefined);

    const button = await page.$('ods-button:not(:disabled)');

    await button?.click();
    // Small delay to ensure page console event has been resolved
    await new Promise((resolve) => setTimeout(resolve, 100));

    boundingBox = await modal?.boundingBox();

    expect(boundingBox?.height).toBeGreaterThan(0);
    expect(boundingBox?.width).toBeGreaterThan(0);
  })
});
