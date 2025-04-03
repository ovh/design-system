import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-tag react', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-tag');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-tag');
    const boundingBox = await elem?.boundingBox();

    expect(boundingBox?.height).toBeGreaterThan(0);
    expect(boundingBox?.width).toBeGreaterThan(0);
  });

  it('emit an event on click', async () => {
    const tagId = 'my-tag';
    const elem = await page.$(`#${tagId}`);
    let consoleLog = ''
    page.on('console', (consoleObj) => {
      consoleLog = consoleObj.text()
    });

    await elem?.click();
    // Small delay to ensure page console event has been resolved
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(consoleLog).toBe(`React tag remove event: ${tagId}`);
  });

  it('does not emit an event on click if disabled', async () => {
    const tagId = 'my-disabled-tag';
    const elem = await page.$(`#${tagId}`);
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
