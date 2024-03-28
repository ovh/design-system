import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-button react', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-button');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-button');
    const boundingBox = await elem?.boundingBox();

    expect(boundingBox?.height).toBeGreaterThan(0);
    expect(boundingBox?.width).toBeGreaterThan(0);
  });

  it('trigger the click handler on click', async () => {
    const elem = await page.$('ods-button:not(:disabled)');
    let consoleLog = ''
    page.on('console', (consoleObj) => {
      consoleLog = consoleObj.text()
    });

    await elem?.click();
    // Small delay to ensure page console event has been resolved
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(consoleLog).toBe('React button click');
  });

  it('does not trigger the click handler on click if disabled', async () => {
    const elem = await page.$('ods-button:disabled');
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
