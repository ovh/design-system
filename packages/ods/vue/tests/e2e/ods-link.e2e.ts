import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-link vue', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-link');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-link');

    // TODO add relevant tests

    expect(false).toBe(true);
  });
});
