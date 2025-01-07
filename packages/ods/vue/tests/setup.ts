import puppeteer, { Browser, Page } from 'puppeteer';

type Option = {
  extraWaitTime?: number,
}

async function goToComponentPage(page: Page, componentName: string, option: Option = {}): Promise<void> {
  await page.goto(`http://localhost:3000/#/${componentName}`);
  await page.evaluate((component) => {
    return window.customElements.whenDefined(component);
  }, componentName);

  // customElements.whenDefined does not cover all the file loading time for large component
  // (like phone-number) so we add extra waiting time to avoid errors
  await new Promise((resolve) => setTimeout(resolve, option.extraWaitTime || 300));
}

function setupBrowser() {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  return () => ({ browser, page });
}

export {
  goToComponentPage,
  setupBrowser,
};
