import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-combobox react', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-combobox');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-combobox');
    const boundingBox = await elem?.boundingBox();

    expect(boundingBox?.height).toBeGreaterThan(0);
    expect(boundingBox?.width).toBeGreaterThan(0);
  });
});
