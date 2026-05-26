import 'jest-puppeteer';
import { type ElementHandle, type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

async function getOptions(page: Page): Promise<ElementHandle[]> {
  return page.$$('[data-ods="command-option"]');
}

async function getGroups(page: Page): Promise<ElementHandle[]> {
  return page.$$('[data-ods="command-group"]');
}

describe('Command rendering', () => {
  it('should render command content when open', async() => {
    await gotoStory(page, 'rendering/default');

    expect(await page.waitForSelector('[data-ods="command-content"]')).not.toBeNull();
  });

  it('should render the filter input', async() => {
    await gotoStory(page, 'rendering/default');
    await page.waitForSelector('[data-ods="command-content"]');

    expect(await page.waitForSelector('[data-ods="command-filter"]')).not.toBeNull();
  });

  it('should render the list', async() => {
    await gotoStory(page, 'rendering/default');
    await page.waitForSelector('[data-ods="command-content"]');

    expect(await page.waitForSelector('[data-ods="command-list"]')).not.toBeNull();
  });

  it('should render all options', async() => {
    await gotoStory(page, 'rendering/default');
    await page.waitForSelector('[data-ods="command-content"]');

    const options = await getOptions(page);

    expect(options.length).toBe(3);
  });

  it('should not render empty state when options are present', async() => {
    await gotoStory(page, 'rendering/default');
    await page.waitForSelector('[data-ods="command-content"]');

    expect(await page.$('[data-ods="command-empty"]')).toBeNull();
  });

  it('should render groups with headings', async() => {
    await gotoStory(page, 'rendering/with-groups');
    await page.waitForSelector('[data-ods="command-content"]');

    const groups = await getGroups(page);

    expect(groups.length).toBe(2);
  });

  it('should render all options across groups', async() => {
    await gotoStory(page, 'rendering/with-groups');
    await page.waitForSelector('[data-ods="command-content"]');

    const options = await getOptions(page);

    expect(options.length).toBe(4);
  });

  it('should render group headings', async() => {
    await gotoStory(page, 'rendering/with-groups');
    await page.waitForSelector('[data-ods="command-content"]');

    const headings = await page.$$eval('[data-ods="command-group"] [aria-hidden="true"]', (els) =>
      els.map((el) => el.textContent?.trim()),
    );

    expect(headings).toContain('File');
    expect(headings).toContain('Edit');
  });

  it('should render empty state when no options are registered', async() => {
    await gotoStory(page, 'rendering/with-empty');
    await page.waitForSelector('[data-ods="command-content"]');

    expect(await page.waitForSelector('[data-ods="command-empty"]')).not.toBeNull();
  });

  it('should render disabled option in the DOM', async() => {
    await gotoStory(page, 'rendering/with-disabled-option');
    await page.waitForSelector('[data-ods="command-content"]');

    expect(await page.$('[data-ods="command-option"][aria-disabled="true"]')).not.toBeNull();
  });

  it('should not highlight disabled option', async() => {
    await gotoStory(page, 'rendering/with-disabled-option');
    await page.waitForSelector('[data-ods="command-content"]');

    const disabledSelected = await page.$('[data-ods="command-option"][aria-disabled="true"][aria-selected="true"]');

    expect(disabledSelected).toBeNull();
  });

  it('should render the trigger when command is closed', async() => {
    await gotoStory(page, 'rendering/with-trigger');

    expect(await page.waitForSelector('[data-ods="command-trigger"]')).not.toBeNull();

    const isContentHidden = await page.$eval('[data-ods="command-content"]',
      (el) => getComputedStyle(el).display === 'none',
    );

    expect(isContentHidden).toBe(true);
  });

  it('should render with custom style applied', async() => {
    await gotoStory(page, 'rendering/custom-style');
    const content = await page.waitForSelector('[data-ods="command-content"]');
    const bgColor = await content?.evaluate((el: Element) => getComputedStyle(el).backgroundColor);

    expect(bgColor).toBe('rgb(255, 0, 0)');
  });
});
