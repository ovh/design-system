import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-timepicker react', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-timepicker');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-timepicker');
    const boundingBox = await elem?.boundingBox();

    expect(boundingBox?.height).toBeGreaterThan(0);
    expect(boundingBox?.width).toBeGreaterThan(0);
  });

  it('trigger the odsChange handler on type', async () => {
    const elem = await page.$('ods-timepicker:not([is-disabled]) >>> input');
    let consoleLog = '';
    page.on('console', (consoleObj) => {
      consoleLog = consoleObj.text();
    });

    await elem?.type('11111');

    // Small delay to ensure page console event has been resolved
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(consoleLog).toBe('React timepicker odsChange');
  });

  it('does not trigger the odsChange handler on type if disabled', async () => {
    const elem = await page.$('ods-timepicker[is-disabled] >>> input');
    let consoleLog = '';
    page.on('console', (consoleObj) => {
      consoleLog = consoleObj.text();
    });

    await elem?.type('11111');
    // Small delay to ensure page console event has been resolved
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(consoleLog).toBe('');
  });
});
