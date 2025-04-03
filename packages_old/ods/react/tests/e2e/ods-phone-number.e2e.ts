import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-phone-number react', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-phone-number');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-phone-number');
    const boundingBox = await elem?.boundingBox();

    expect(boundingBox?.height).toBeGreaterThan(0);
    expect(boundingBox?.width).toBeGreaterThan(0);
  });

  it('trigger the odsChange handler on type', async () => {
    const elem = await page.$('ods-phone-number:not([is-disabled]) >>> input');
    let consoleLog = '';
    page.on('console', (consoleObj) => {
      consoleLog = consoleObj.text();
    });

    await elem?.type('a');
    // Small delay to ensure page console event has been resolved
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(consoleLog).toBe('React phone number odsChange');
  });

  it('does not trigger the odsChange handler on type if disabled', async () => {
    const elem = await page.$('ods-phone-number[is-disabled] >>> input');
    let consoleLog = '';
    page.on('console', (consoleObj) => {
      consoleLog = consoleObj.text();
    });

    await elem?.type('a');
    // Small delay to ensure page console event has been resolved
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(consoleLog).toBe('');
  });
});
