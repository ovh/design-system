import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-accordion react', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-accordion');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-accordion');
    const boundingBox = await elem?.boundingBox();

    expect(boundingBox?.height).toBeGreaterThan(0);
    expect(boundingBox?.width).toBeGreaterThan(0);
  });

  it('should open accordion', async () => {
    const elem = await page.$('ods-accordion');
    await elem?.click();

    const detail = await page.$('ods-accordion >>> .ods-accordion__details');
    const openProperty = await detail?.getProperty('open');
    expect(await openProperty?.jsonValue()).toBe(true);
  });

  it('trigger the odsClick handler on summary button inside accordion', async () => {
    const elem = await page.$('ods-accordion #summary-button');
    let consoleLog = '';
    page.on('console', (consoleObj) => {
      consoleLog = consoleObj.text();
    });

    await elem?.click();
    // Small delay to ensure page console event has been resolved
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(consoleLog).toBe('click on summary button');
  });

  it('trigger the odsClick handler on detail button inside accordion', async () => {
    const elem = await page.$('ods-accordion #detail-button');
    let consoleLog = '';
    page.on('console', (consoleObj) => {
      consoleLog = consoleObj.text();
    });

    await elem?.click();
    // Small delay to ensure page console event has been resolved
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(consoleLog).toBe('click on detail button');
  });
});
