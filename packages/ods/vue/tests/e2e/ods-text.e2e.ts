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
    const elem = await page.$('ods-text');

    // TODO add relevant tests

    expect(false).toBe(true);
  });
});
