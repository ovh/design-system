import 'jest-puppeteer';
import { type ElementHandle, type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';

async function getInputValue(page: Page): Promise<string> {
  return page.$eval('[data-ods="combobox-control"] input', (el) => el.value);
}

async function getItems(page: Page): Promise<ElementHandle[]> {
  return await page.$$('[role="option"]');
}

async function getTags(page: Page): Promise<ElementHandle[]> {
  return page.$$('[data-ods="combobox-control"] [data-ods="tag"]');
}

async function isContentOpened(page: Page): Promise<boolean> {
  return !!(await page.$('[data-ods="combobox-content"]'));
}

async function openContent(page: Page): Promise<void> {
  await page.click('[data-ods="combobox-control"]');
  await page.waitForSelector('[data-ods="combobox-content"]');
}

async function typeOnInput(page: Page, text: string): Promise<void> {
  await page.click('[data-ods="combobox-control"] input');
  await page.type('[data-ods="combobox-control"] input', text);
}

describe('Combobox behaviour', () => {
  describe('keyboard navigation', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/keyboard-navigation');
      await page.waitForSelector('[data-ods="combobox"]');
    });

    it('should handle arrow down and enter to select item', async() => {
      await openContent(page);
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      expect(await getInputValue(page)).toBe('Banana');
    });
  });

  describe('filtering', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/filtering');
      await page.waitForSelector('[data-ods="combobox"]');
    });

    it('should filter items based on input value', async() => {
      await openContent(page);

      expect((await getItems(page)).length).toBe(4);

      await typeOnInput(page, 'ba');

      expect((await getItems(page)).length).toBe(1);
    });

    it('should show all items when input is cleared', async() => {
      await typeOnInput(page, 'ba');

      expect((await getItems(page)).length).toBe(1);

      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await openContent(page);

      expect((await getItems(page)).length).toBe(4);
    });
  });

  describe('interaction', () => {
    it('should not open dropdown when disabled', async() => {
      await gotoStory(page, 'behavior/disabled');
      await page.waitForSelector('[data-ods="combobox"]');

      await page.click('[data-ods="combobox-control"]');

      expect(await isContentOpened(page)).toBe(false);
    });

    it('should not open dropdown when readonly', async() => {
      await gotoStory(page, 'behavior/readonly');
      await page.waitForSelector('[data-ods="combobox"]');

      await page.click('[data-ods="combobox-control"]');

      expect(await isContentOpened(page)).toBe(false);
    });
  });

  describe('multiple selection', () => {
    describe('controlled', () => {
      beforeEach(async() => {
        await gotoStory(page, 'behavior/multiple-controlled');
        await page.waitForSelector('[data-ods="combobox"]');
      });

      it('should update display values when multiple items are selected', async() => {
        await openContent(page);
        await page.click('[role="option"]:nth-child(1)');

        expect((await getTags(page)).length).toBe(1);

        await page.click('[role="option"]:nth-child(1)');

        expect((await getTags(page)).length).toBe(2);
      });
    });

    describe('uncontrolled', () => {
      beforeEach(async() => {
        await gotoStory(page, 'behavior/multiple-uncontrolled');
        await page.waitForSelector('[data-ods="combobox"]');
      });

      it('should update display values when multiple items are selected', async() => {
        await openContent(page);
        await page.click('[role="option"]:nth-child(1)');

        expect((await getTags(page)).length).toBe(1);

        await page.click('[role="option"]:nth-child(1)');

        expect((await getTags(page)).length).toBe(2);
      });
    });
  });
});
