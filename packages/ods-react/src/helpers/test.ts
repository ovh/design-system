import { type Page } from 'puppeteer';

async function gotoStory(page: Page, story: string): Promise<void> {
  const uriPart = story.replace('/', '--');

  await page.goto(`http://localhost:3000/iframe.html?args=&id=tests-${uriPart}&viewMode=story`);
  await page.waitForNavigation();
}

export {
  gotoStory,
};
