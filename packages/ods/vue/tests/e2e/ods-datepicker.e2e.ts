import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-datepicker vue', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-datepicker');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-datepicker');

    // TODO add relevant tests

    expect(false).toBe(true);
  });
});
