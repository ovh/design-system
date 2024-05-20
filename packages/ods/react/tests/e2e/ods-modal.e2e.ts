import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-modal react', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-modal');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-modal');

    // TODO add relevant tests

    expect(false).toBe(true);
  });
});
