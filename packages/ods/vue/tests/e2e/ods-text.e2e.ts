import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-text vue', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-text');
  });

  it('render the component correctly', async () => {
    const text = await page.$eval('ods-text', (e) => e.textContent);

    expect(text).toBe('Ods Text Vue');
  });
});
