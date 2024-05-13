import type { Page } from 'puppeteer';
import { goToComponentPage, setupBrowser } from '../setup';

describe('ods-popover vue', () => {
  const setup = setupBrowser();
  let page: Page;

  async function isPopoverOpened(): Promise<boolean> {
    return page.evaluate(() => {
      return document.querySelector<HTMLElement>('ods-popover')?.style.display === 'block';
    });
  }

  beforeAll(async () => {
    page = setup().page;
  });

  beforeEach(async () => {
    await goToComponentPage(page, 'ods-popover');
  });

  it('render the component correctly', async () => {
    const trigger = await page.$('#trigger');

    expect(await isPopoverOpened()).toBe(false);

    await trigger?.click();

    expect(await isPopoverOpened()).toBe(true);
  });
});
