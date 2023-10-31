import type { Browser, Page } from 'puppeteer';
import puppeteer from 'puppeteer';

describe('osds-text-react:e2e', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(() => {
    browser.close();
  });

  it('contains the expected text', async () => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('osds-text');

    const text = await page.$eval('osds-text', (e) => e.textContent);

    expect(text).toBe('Osds Text React');
  });
});
