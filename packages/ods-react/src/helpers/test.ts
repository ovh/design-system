import { type Page } from 'puppeteer';

async function gotoStory(page: Page, story: string): Promise<void> {
  const uriPart = story.replace('/', '--');

  // waitForNavigation after goto is a race: it waits for a navigation that may already
  // have happened, hanging 30s on slow machines. networkidle0 gives the same settling
  // deterministically.
  await page.goto(`http://localhost:3000/iframe.html?args=&id=tests-${uriPart}&viewMode=story`, { waitUntil: ['load', 'networkidle0'] });
}

export {
  gotoStory,
};
