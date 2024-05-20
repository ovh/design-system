import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-toggle react', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-toggle');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-toggle');
    const boundingBox = await elem?.boundingBox();

    expect(boundingBox?.height).toBeGreaterThan(0);
    expect(boundingBox?.width).toBeGreaterThan(0);
  });

  it('trigger the odsChange handler on click', async () => {
    const elem = await page.$('ods-toggle:not([is-disabled])');
    let consoleLog = ''
    page.on('console', (consoleObj) => {
      consoleLog = consoleObj.text()
    });

    await elem?.click();
    // Small delay to ensure page console event has been resolved
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(consoleLog).toBe('React toggle click');
  });

  it('does not trigger the odsChange handler on click if disabled', async () => {
    const elem = await page.$('ods-toggle[is-disabled]');
    let consoleLog = ''
    page.on('console', (consoleObj) => {
      consoleLog = consoleObj.text()
    });

    await elem?.click();
    // Small delay to ensure page console event has been resolved
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(consoleLog).toBe('');
  });
});