import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-select react', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-select');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-select');

    // TODO add relevant tests

    expect(false).toBe(true);
  });
});
