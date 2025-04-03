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
    await page.waitForSelector('ods-text[preset]');
    const preset = await page.$eval('ods-text', (el) => el?.getAttribute('preset'));
    expect(preset).toBe('paragraph');
  });
});
