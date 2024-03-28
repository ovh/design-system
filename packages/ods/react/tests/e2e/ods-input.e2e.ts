import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-input react', () => {
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

    // TODO add relevant tests

    expect(false).toBe(true);
  });
});
