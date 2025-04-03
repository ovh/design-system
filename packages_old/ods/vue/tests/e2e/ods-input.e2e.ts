import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-input vue', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-input');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-input');
    const boundingBox = await elem?.boundingBox();

    expect(boundingBox?.height).toBeGreaterThan(0);
    expect(boundingBox?.width).toBeGreaterThan(0);
  });
});
