import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-tooltip react', () => {
  const setup = setupBrowser();
  let page: Page;

  async function isTooltipVisible(): Promise<boolean> {
    return page.evaluate(() => {
      return document.querySelector<HTMLElement>('ods-tooltip')?.style.display === 'block';
    });
  }

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-tooltip');
  });

  it('render the component correctly', async () => {
    const trigger = await page.$('#trigger');

    expect(await isTooltipVisible()).toBe(false);

    await trigger?.hover();

    expect(await isTooltipVisible()).toBe(true);
  });
});
