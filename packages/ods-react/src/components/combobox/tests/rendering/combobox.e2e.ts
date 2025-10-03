import 'jest-puppeteer';
import { type ElementHandle, type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

async function getInputValue(page: Page): Promise<string> {
  return page.$eval('[data-ods="combobox-control"] input', (el) => el.value);
}

async function getItems(page: Page): Promise<ElementHandle[]> {
  return await page.$$('[role="option"]');
}

async function openContent(page: Page): Promise<void> {
  await page.click('[data-ods="combobox-control"]');
  await page.waitForSelector('[data-ods="combobox-content"]:not([hidden])');
}

describe('Combobox rendering', () => {
  it('should render default combobox', async() => {
    await gotoStory(page, 'rendering/default');
    await page.waitForSelector('[data-ods="combobox"]');

    expect(await page.waitForSelector('[data-ods="combobox"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="combobox-control"]')).not.toBeNull();

    await openContent(page);

    const items = await getItems(page);

    expect(items.length).toBeGreaterThan(0);
  });

  it('should render an empty combobox', async() => {
    await gotoStory(page, 'rendering/empty');
    await page.waitForSelector('[data-ods="combobox"]');

    await openContent(page);

    const items = await getItems(page);

    expect(items.length).toBe(0);
  });

  it('should render combobox with grouped items', async() => {
    await gotoStory(page, 'rendering/group');
    await page.waitForSelector('[data-ods="combobox"]');

    await openContent(page);

    const groups = await page.$$('[role="listbox"] > :not([role="option"])');

    expect(groups.length).toBeGreaterThan(0);
  });

  it('should render disabled combobox', async() => {
    await gotoStory(page, 'rendering/disabled');
    await page.waitForSelector('[data-ods="combobox"]');

    const isInputDisabled = await page.$eval('[data-ods="combobox-control"] input',
      (el) => el.disabled);

    expect(isInputDisabled).toBe(true);
  });

  it('should render readonly combobox', async() => {
    await gotoStory(page, 'rendering/readonly');
    await page.waitForSelector('[data-ods="combobox"]');

    const isInputReadonly = await page.$eval('[data-ods="combobox-control"] input',
      (el) => el.readOnly);

    expect(isInputReadonly).toBe(true);
  });

  it('should render custom items', async() => {
    await gotoStory(page, 'rendering/custom-option-renderer');
    await page.waitForSelector('[data-ods="combobox"]');

    await openContent(page);

    const customItems = await page.$$('[data-testid="custom-item"]');

    expect(customItems.length).toBeGreaterThan(0);
  });

  it('should render controlled combobox', async() => {
    await gotoStory(page, 'rendering/controlled');
    await page.waitForSelector('[data-ods="combobox"]');

    expect(await getInputValue(page)).toBe('');

    await openContent(page);
    await page.click('[role="option"]:nth-child(2)');

    expect(await getInputValue(page)).toBe('Banana');
  });

  describe('default value', () => {
    it('should render combobox with default value', async() => {
      await gotoStory(page, 'rendering/default-value');
      await page.waitForSelector('[data-ods="combobox"]');

      expect(await getInputValue(page)).toBe('Apple');
    });

    it('should render combobox with multiple default values', async() => {
      await gotoStory(page, 'rendering/default-value-multiple');
      await page.waitForSelector('[data-ods="combobox"]');

      expect(await getInputValue(page)).toBe('');

      const tags = await page.$$('[data-ods="combobox-control"] [data-ods="tag"]');

      expect(tags.length).toBe(2);
    });
  });
});
