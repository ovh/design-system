import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-form-field react', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-form-field');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-form-field');

    // TODO add relevant tests

    expect(false).toBe(true);
  });
});
