import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-meter react', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-meter');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-meter');

    // TODO add relevant tests

    expect(false).toBe(true);
  });
});
