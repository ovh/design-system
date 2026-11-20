import { type Page } from 'puppeteer';

async function gotoStory(page: Page, story: string): Promise<void> {
  const uriPart = story.replace('/', '--');

  // waitForNavigation after goto is a race: it waits for a navigation that may already
  // have happened, hanging 30s on slow machines. networkidle0 gives the same settling
  // deterministically.
  await page.goto(`http://localhost:3000/iframe.html?args=&id=tests-${uriPart}&viewMode=story`, { waitUntil: ['load', 'networkidle0'] });
}

/* Headless Chrome denies clipboard writes even with the permission granted, and the rejected
   promise fails the test. Call before gotoStory: the stub must be in place when the page loads. */
async function stubClipboardWrite(page: Page): Promise<void> {
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: (): Promise<void> => Promise.resolve() },
    });
  });
}

const STATUS_STYLE_PROPERTIES = ['background-color', 'border-color', 'color'];

async function getStatusStyle(page: Page, testId: string): Promise<string> {
  const element = await page.waitForSelector(`[data-testid="${testId}"]`);

  return element!.evaluate((el: Element, properties: string[]) => {
    const style = getComputedStyle(el);
    return properties.map((property) => style.getPropertyValue(property)).join(' | ');
  }, STATUS_STYLE_PROPERTIES);
}

/* The color a token resolves to, in the form getComputedStyle returns. */
async function getTokenColor(page: Page, token: string): Promise<string> {
  return page.evaluate((name: string) => {
    const probe = document.createElement('div');
    probe.style.backgroundColor = `var(${name})`;
    document.body.appendChild(probe);
    const color = getComputedStyle(probe).backgroundColor;
    probe.remove();
    return color;
  }, token);
}

export {
  getStatusStyle,
  getTokenColor,
  gotoStory,
  stubClipboardWrite,
};
