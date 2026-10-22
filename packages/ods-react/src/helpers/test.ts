import { type ConsoleMessage, type Page } from 'puppeteer';

async function gotoStory(page: Page, story: string): Promise<void> {
  const uriPart = story.replace('/', '--');

  // waitForNavigation after goto is a race: it waits for a navigation that may already
  // have happened, hanging 30s on slow machines. networkidle0 gives the same settling
  // deterministically.
  await page.goto(`http://localhost:3000/iframe.html?args=&id=tests-${uriPart}&viewMode=story`, { waitUntil: ['load', 'networkidle0'] });
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

async function gotoStoryAndCollectDeprecations(page: Page, story: string): Promise<string[]> {
  const warnings: string[] = [];
  const onConsole = (message: ConsoleMessage): void => {
    if (message.text().includes('[DEPRECATED]')) {
      warnings.push(message.text());
    }
  };

  page.on('console', onConsole);
  await gotoStory(page, story);
  page.off('console', onConsole);

  return warnings;
}

export {
  getStatusStyle,
  getTokenColor,
  gotoStory,
  gotoStoryAndCollectDeprecations,
};
