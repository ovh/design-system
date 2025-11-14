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
  return page.$eval('[data-ods="combobox-content"]', (el) => !!el && !el.hasAttribute('hidden'));
}

async function openContent(page: Page): Promise<void> {
  await page.click('[data-ods="combobox-control"]');
  await page.waitForSelector('[data-ods="combobox-content"]:not([hidden])');
}

async function typeOnInput(page: Page, text: string): Promise<void> {
  await page.click('[data-ods="combobox-control"] input');
  await page.type('[data-ods="combobox-control"] input', text);
}

describe('Combobox behaviour', () => {
  describe('clearable', () => {
    describe('uncontrolled', () => {
      beforeEach(async() => {
        await gotoStory(page, 'behavior/clearable');
        await page.waitForSelector('[data-ods="combobox"]');
      });

      it('should clear the input value', async() => {
        await typeOnInput(page, 'Value');

        expect(await getInputValue(page)).toBe('Value');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Enter');

        expect(await getInputValue(page)).toBe('');

        await page.click('body');

        expect(await getInputValue(page)).toBe('');
      });
    });

    describe('controlled', () => {
      beforeEach(async() => {
        await gotoStory(page, 'behavior/clearable-controlled');
        await page.waitForSelector('[data-ods="combobox"]');
      });

      it('should clear the input value', async() => {
        await typeOnInput(page, 'Value');

        expect(await getInputValue(page)).toBe('Value');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Enter');

        expect(await getInputValue(page)).toBe('');

        await page.click('body');

        expect(await getInputValue(page)).toBe('');
      });
    });
  });

  describe('on blur', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/on-blur');
      await page.waitForSelector('[data-ods="combobox"]');
    });

    it('should reset the input value to an empty value', async() => {
      await typeOnInput(page, 'Dummy');
      await page.keyboard.press('Tab');

      expect(await getInputValue(page)).toBe('');
    });

    it('should reset the input value to the current selection', async() => {
      await openContent(page);
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      expect(await getInputValue(page)).toBe('Apple');

      await typeOnInput(page, 'Dummy');
      await page.keyboard.press('Tab');

      expect(await getInputValue(page)).toBe('Apple');
    });
  });

  describe('keyboard navigation', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/keyboard-navigation');
      await page.waitForSelector('[data-ods="combobox"]');
    });

    it('should handle arrow down and enter to select item', async() => {
      await openContent(page);
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      expect(await getInputValue(page)).toBe('Apple');
    });
  });

  describe('filtering', () => {
    describe('default', () => {
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

    describe('custom', () => {
      beforeEach(async() => {
        await gotoStory(page, 'behavior/filtering-custom');
        await page.waitForSelector('[data-ods="combobox"]');
      });

      it('should filter items based on input value', async() => {
        await openContent(page);

        expect((await getItems(page)).length).toBe(4);

        await typeOnInput(page, 'yrr');

        expect((await getItems(page)).length).toBe(1);
      });

      it('should show all items when input is cleared', async() => {
        await typeOnInput(page, 'yrr');

        expect((await getItems(page)).length).toBe(1);

        await page.keyboard.press('Tab');
        await page.keyboard.press('Enter');
        await openContent(page);

        expect((await getItems(page)).length).toBe(4);
      });
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

  describe('group', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/group');
      await page.waitForSelector('[data-ods="combobox"]');
    });

    it('should select items from groups using mouse', async() => {
      await openContent(page);

      const items = await getItems(page);

      expect(items.length).toBe(7);

      await items[1].click();

      expect(await page.$eval('[data-testid="group-value"]',
        (el) => el.textContent || '')).toBe('the-banana');
    });

    it('should select items from groups using keyboard', async() => {
      await openContent(page);

      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      expect(await page.$eval('[data-testid="group-value"]',
        (el) => el.textContent || '')).toBe('the-apple');
      expect(await getInputValue(page)).toBe('Apple');
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

  describe('multiple combobox', () => {
    async function isContentOpened(element: ElementHandle | null): Promise<boolean> {
      if (!element) {
        return false;
      }
      return element?.$eval('[data-ods="combobox-content"]', (el) => !!el && !el.hasAttribute('hidden'));
    }

    async function typeOnInput(element: ElementHandle | null, text: string): Promise<void> {
      const input = await element?.$('[data-ods="combobox-control"] input');
      await input?.click();
      await input?.type(text);
      await element?.waitForSelector('[data-ods="combobox-content"]:not([hidden])');
    }

    beforeEach(async() => {
      await gotoStory(page, 'behavior/multiple-combobox');
      await page.waitForSelector('#combobox1');
      await page.waitForSelector('#combobox2');
    });

    it('should blur current one when focusing the second', async() => {
      const combobox1 = await page.waitForSelector('#combobox1');
      const combobox2 = await page.waitForSelector('#combobox2');

      await typeOnInput(combobox1, '1');

      expect(await isContentOpened(combobox1)).toBe(true);
      expect(await isContentOpened(combobox2)).toBe(false);

      await typeOnInput(combobox2, '2');

      expect(await isContentOpened(combobox1)).toBe(false);
      expect(await isContentOpened(combobox2)).toBe(true);
    });
  });
});
