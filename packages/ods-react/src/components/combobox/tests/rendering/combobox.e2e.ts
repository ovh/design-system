import 'jest-puppeteer';
import { type ElementHandle, type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

// TODO add more tests

// async function getInputValue(page: Page): Promise<string> {
//   return page.$eval('[data-ods="combobox-control"] input', (el) => el.value);
// }

async function getItems(page: Page): Promise<ElementHandle[]> {
  return await page.$$('[role="option"]');
}

async function openContent(page: Page): Promise<void> {
  await page.click('[data-ods="combobox-control"]');
  await page.waitForSelector('[data-ods="combobox-content"]');
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

  // it('should render the basic combobox', async() => {
  //   await gotoStory(page, 'rendering/basic');
  //   await page.waitForSelector('[data-testid="basic"]');
  //
  //   expect(await page.waitForSelector('[data-testid="basic"]')).not.toBeNull();
  //   expect(await page.waitForSelector('[data-ods="combobox"]')).not.toBeNull();
  //   expect(await page.waitForSelector('[data-ods="combobox-content"]')).not.toBeNull();
  //   expect(await page.waitForSelector('[data-ods="combobox-control"]')).not.toBeNull();
  // });
  //
  // it('should render combobox with items', async() => {
  //   await gotoStory(page, 'rendering/with-items');
  //   await page.waitForSelector('[data-testid="with-items"]');
  //
  //   await page.click('[data-testid="with-items"] input');
  //   await page.waitForSelector('[data-part="content"]');
  //
  //   const items = await page.$$('[data-part="item"]');
  //   expect(items.length).toBeGreaterThan(0);
  // });
  //
  // it('should render combobox with grouped items', async() => {
  //   await gotoStory(page, 'rendering/with-grouped-items');
  //   await page.waitForSelector('[data-testid="with-grouped-items"]');
  //
  //   await page.click('[data-testid="with-grouped-items"] input');
  //   await page.waitForSelector('[data-part="content"]');
  //
  //   const groupLabels = await page.$$('[data-part="item-group-label"]');
  //   expect(groupLabels.length).toBeGreaterThan(0);
  // });
  //
  // it('should render combobox with default value', async() => {
  //   await gotoStory(page, 'rendering/with-default-value');
  //   await page.waitForSelector('[data-testid="with-default-value"]');
  //
  //   const inputValue = await page.$eval('[data-testid="with-default-value"] input',
  //     (el) => el.value);
  //   expect(inputValue).toBe('Banana');
  //
  //   const valueDisplay = await page.$('[data-testid="value-display"]');
  //   const displayText = await page.evaluate((el) => el?.textContent || '', valueDisplay);
  //   expect(displayText).toBe('banana');
  // });
  //
  // it('should render disabled combobox', async() => {
  //   await gotoStory(page, 'rendering/disabled');
  //   await page.waitForSelector('[data-testid="disabled"]');
  //
  //   const isDisabled = await page.$eval('[data-testid="disabled"] input',
  //     (el) => el.disabled);
  //   expect(isDisabled).toBe(true);
  // });
  //
  // it('should render combobox with highlight feature', async() => {
  //   await gotoStory(page, 'rendering/with-highlight');
  //   await page.waitForSelector('[data-testid="with-highlight"]');
  //
  //   const combobox = await page.$('[data-testid="with-highlight"]');
  //   expect(combobox).not.toBeNull();
  // });
  //
  // it('should render readonly combobox', async() => {
  //   await gotoStory(page, 'rendering/readonly');
  //   await page.waitForSelector('[data-testid="readonly"]');
  //
  //   await page.click('[data-testid="readonly"] input');
  //   await page.waitForSelector('body');
  //
  //   const contentVisible = await page.evaluate(() => {
  //     const content = document.querySelector('[data-part="content"]');
  //     return content ? window.getComputedStyle(content).display !== 'none' : false;
  //   });
  //
  //   expect(contentVisible).toBe(false);
  // });
  //
  // it('should render combobox with custom items', async() => {
  //   await gotoStory(page, 'rendering/with-custom-items');
  //   await page.waitForSelector('[data-testid="with-custom-items"]');
  //
  //   await page.click('[data-testid="with-custom-items"] input');
  //   await page.waitForSelector('[data-part="content"]');
  //
  //   const customElements = await page.$$('[data-testid="custom-item"]');
  //   expect(customElements.length).toBeGreaterThan(0);
  // });
  //
  // it('should render controlled combobox', async() => {
  //   await gotoStory(page, 'rendering/controlled');
  //   await page.waitForSelector('[data-testid="controlled"]');
  //
  //   const valueDisplay = await page.$('[data-testid="controlled-value"]');
  //   const initialValue = await page.evaluate((el) => el?.textContent || '', valueDisplay);
  //   expect(initialValue).toBe('');
  //
  //   await page.click('[data-testid="controlled"] input');
  //   await page.waitForSelector('[data-part="content"]');
  //   await page.click('[data-part="item"]:nth-child(2)');
  //   await page.waitForSelector('body');
  //
  //   const updatedValue = await page.evaluate((el) => el?.textContent || '', valueDisplay);
  //   expect(updatedValue).toBe('banana');
  // });
});
