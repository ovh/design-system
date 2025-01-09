import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-drawer react', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-drawer');
  });

  it('renders the drawer on button click', async() => {
    const dialog = await page.$('ods-drawer >>> dialog');
    let boundingBox = await dialog?.boundingBox();

    expect(boundingBox?.height).toBe(undefined);
    expect(boundingBox?.width).toBe(undefined);

    const button = await page.$('ods-button');
    await button?.click();

    // Small delay to ensure Modal animation has the time to play
    await new Promise((resolve) => setTimeout(resolve, 400));

    boundingBox = await dialog?.boundingBox();

    expect(boundingBox?.height).toBeGreaterThan(0);
    expect(boundingBox?.width).toBeGreaterThan(0);
  })
});
