import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-ods-meter vue', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-ods-meter');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-ods-meter');

    // TODO add relevant tests

    expect(false).toBe(true);
  });
});
