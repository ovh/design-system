import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-textarea react', () => {
  const setup = setupBrowser();
  let page: Page;

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-textarea');
  });

  it('render the component correctly', async () => {
    const elem = await page.$('ods-textarea');
    const boundingBox = await elem?.boundingBox();

    expect(boundingBox?.height).toBeGreaterThan(0);
    expect(boundingBox?.width).toBeGreaterThan(0);
  });

  it('trigger the odsChange handler on type', async () => {
    const elem = await page.$('ods-textarea:not([is-disabled]) >>> textarea');
    let consoleLog = '';
    page.on('console', (consoleObj) => {
      consoleLog = consoleObj.text();
    });

    await elem?.type('a');
    // Small delay to ensure page console event has been resolved
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(consoleLog).toBe('React textarea odsChange');
  });

  it('does not trigger the odsChange handler on type if disabled', async () => {
    const elem = await page.$('ods-textarea[is-disabled] >>> textarea');
    let consoleLog = '';
    page.on('console', (consoleObj) => {
      consoleLog = consoleObj.text();
    });

    await elem?.type('a');
    // Small delay to ensure page console event has been resolved
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(consoleLog).toBe('');
  });

  it('should not do an infinite loop', async () => {
    const elem = await page.$('ods-textarea[name="ods-textarea-formik"] >>> textarea');
    let consoleLog = '';
    page.on('console', (consoleObj) => {
      console.log('consoleObj', consoleObj.text())
      consoleLog += consoleObj.text();
    });

    await elem?.type('a');
    // Small delay to ensure page console event has been resolved
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(consoleLog).toBe('React textarea odsChangeReact textarea odsChange');
  });
});
