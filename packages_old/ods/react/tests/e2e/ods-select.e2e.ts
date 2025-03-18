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
    const boundingBox = await elem?.boundingBox();

    expect(boundingBox?.height).toBeGreaterThan(0);
    expect(boundingBox?.width).toBeGreaterThan(0);
  });

  it('trigger the odsChange handler on option selection', async () => {
    const control = await page.$('ods-select:not([is-disabled]) >>> .ts-control');
    let consoleLog = '';
    page.on('console', (consoleObj) => {
      consoleLog = consoleObj.text();
    });

    await control?.click();

    const option = await page.$('ods-select:not([is-disabled]) >>> .option');
    await option?.click();

    // Small delay to ensure page console event has been resolved
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(consoleLog).toBe('React select odsChange');
  });

  it('does not open the option list if disabled', async () => {
    const control = await page.$('ods-select[is-disabled] >>> .ts-control');

    await control?.click();
    const option = await page.$('ods-select:not([is-disabled]) >>> .option');

    expect(option).toBeNull();
  });
});
