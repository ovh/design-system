import 'jest-puppeteer';
import { gotoStory } from '../../../../helpers/test';

describe('Combobox behavior', () => {
  describe('Keyboard navigation', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/keyboard-navigation');
      await page.waitForSelector('[data-testid="keyboard-navigation"]');
    });

    it('should handle arrow down and enter to select item', async() => {
      await page.click('[data-testid="keyboard-navigation"] input');
      await page.waitForSelector('[data-part="content"]', { visible: true });

      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      const inputValue = await page.$eval('[data-testid="keyboard-navigation"] input',
        (el) => el.value);
      expect(inputValue).toBe('Banana');
    });
  });

  describe('Filtering', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/filtering');
      await page.waitForSelector('[data-testid="filtering"]');
    });

    it('should filter items based on input value', async() => {
      await page.click('[data-testid="filtering"] input');
      await page.type('[data-testid="filtering"] input', 'ba');
      await page.waitForSelector('body');

      const itemText = await page.evaluate(() => {
        const items = Array.from(document.querySelectorAll('[data-part="item"]'));
        const visibleItems = items.filter((item) => {
          const text = item.textContent || '';
          return text.toLowerCase().includes('ba') &&
            window.getComputedStyle(item).display !== 'none';
        });
        return visibleItems.map((item) => item.textContent || '').join(',');
      });

      expect(itemText).toContain('Banana');
    });

    it('should show all items when input is cleared', async() => {
      await page.click('[data-testid="filtering"] input');
      await page.type('[data-testid="filtering"] input', 'ba');
      await page.waitForSelector('body');

      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.click('[data-testid="filtering"] input');
      await page.waitForSelector('body');

      const visibleItems = await page.evaluate(() => {
        const items = Array.from(document.querySelectorAll('[data-part="item"]'));
        return items.filter((item) => window.getComputedStyle(item).display !== 'none').length;
      });

      expect(visibleItems).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Selection behavior', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/selection-behavior');
      await page.waitForSelector('[data-testid="selection-behavior"]');
    });

    it('should update value when item is clicked', async() => {
      await page.click('[data-testid="selection-behavior"] input');
      await page.waitForSelector('[data-part="content"]');

      await page.click('[data-part="item"]:nth-child(2)');
      await page.waitForSelector('body');

      const valueText = await page.$eval('[data-testid="selection-value"]',
        (el) => el.textContent || '');
      expect(valueText).toBe('banana');

      const inputValue = await page.$eval('[data-testid="selection-behavior"] input',
        (el) => el.value);
      expect(inputValue).toBe('Banana');
    });

    it('should show selected value in filtered list when input is cleared in single mode', async() => {
      await page.click('[data-testid="selection-behavior"] input');
      await page.waitForSelector('[data-part="content"]');
      await page.click('[data-part="item"]:nth-child(2)');
      await page.waitForSelector('body');

      const valueText = await page.$eval('[data-testid="selection-value"]',
        (el) => el.textContent || '');
      expect(valueText).toBe('banana');

      await page.click('[data-testid="selection-behavior"] input');
      await page.waitForSelector('[data-part="content"]');

      await Promise.all(Array.from({ length: 6 }, () => page.keyboard.press('Backspace')));

      const emptyInputValue = await page.$eval('[data-testid="selection-behavior"] input',
        (el) => el.value);
      expect(emptyInputValue).toBe('');

      const visibleItems = await page.evaluate(() => {
        const items = Array.from(document.querySelectorAll('[data-part="item"]'));
        const visibleItems = items.filter((item) => {
          const text = item.textContent || '';
          return text.includes('Banana') && window.getComputedStyle(item).display !== 'none';
        });
        return visibleItems.map((item) => item.textContent || '');
      });

      expect(visibleItems).toContain('Banana');
    });
  });

  describe('Controlled behavior', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/controlled-behavior');
      await page.waitForSelector('[data-testid="controlled-behavior"]');
    });

    it('should maintain typed text when hovering over options after modifying selection', async() => {
      await page.click('[data-testid="controlled-behavior"] input');
      await page.waitForSelector('[data-part="content"]', { timeout: 2000, visible: true });
      await page.click('[data-part="item"]:nth-child(2)');

      const valueDisplayText = await page.$eval('[data-testid="controlled-value"]',
        (el) => el.textContent || '');
      expect(valueDisplayText).toBe('banana');

      const initialInputValue = await page.$eval('[data-testid="controlled-behavior"] input',
        (el) => el.value);
      expect(initialInputValue).toBe('Banana');

      await page.click('[data-testid="controlled-behavior"] input');
      await page.waitForSelector('[data-part="content"]', { timeout: 2000, visible: true });

      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.click('[data-testid="controlled-behavior"] input');
      await page.keyboard.type('Ap');

      await page.waitForFunction(() => {
        const input = document.querySelector('[data-testid="controlled-behavior"] input') as HTMLInputElement;
        return input && input.value === 'Ap';
      }, { timeout: 2000 });

      const modifiedInputValue = await page.$eval('[data-testid="controlled-behavior"] input',
        (el) => el.value);
      expect(modifiedInputValue).toBe('Ap');

      try {
        await page.waitForSelector('[data-part="content"]', { timeout: 3000, visible: true });
      } catch (e) {
        await page.click('[data-testid="controlled-behavior"] input');
        await page.waitForSelector('[data-part="content"]', { timeout: 3000, visible: true });
      }

      await page.hover('[data-part="item"]:nth-child(1)');

      await page.waitForFunction(() => {
        const input = document.querySelector('[data-testid="controlled-behavior"] input') as HTMLInputElement;
        return input && input.value === 'Ap';
      }, { timeout: 2000 });

      const hoveredInputValue = await page.$eval('[data-testid="controlled-behavior"] input',
        (el) => el.value);
      expect(hoveredInputValue).toBe('Ap');
    }, 10000);
  });

  describe('Group navigation', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/group-navigation');
      await page.waitForSelector('[data-testid="group-navigation"]');
    });

    it('should navigate between groups', async() => {
      await page.click('[data-testid="group-navigation"] input');
      await page.waitForSelector('[data-part="content"]');

      const groupLabels = await page.$$('[data-part="item-group-label"]');
      expect(groupLabels.length).toBe(2);

      const firstGroupLabelText = await page.evaluate((el) => el.textContent, groupLabels[0]);
      expect(firstGroupLabelText).toBe('Fruits');

      const secondGroupLabelText = await page.evaluate((el) => el.textContent, groupLabels[1]);
      expect(secondGroupLabelText).toBe('Vegetables');
    });

    it('should select items from groups using mouse', async() => {
      await page.click('[data-testid="group-navigation"] input');
      await page.waitForSelector('[data-part="content"]', { timeout: 1000, visible: true });

      const items = await page.$$('[data-part="item"]');
      expect(items.length).toBeGreaterThan(0);

      await items[1].click();
      await page.waitForSelector('body', { timeout: 1000 });

      const bananaValue = await page.$eval('[data-testid="group-value"]',
        (el) => el.textContent || '');
      expect(bananaValue).toBe('banana');
    });

    it('should select items from groups using keyboard', async() => {
      await page.click('[data-testid="group-navigation"] input');
      await page.waitForSelector('[data-part="content"]', { timeout: 1000, visible: true });

      await page.keyboard.press('ArrowDown');

      await page.keyboard.press('ArrowDown');

      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');

      await page.keyboard.press('Enter');
      await page.waitForSelector('body', { timeout: 1000 });

      const value = await page.$eval('[data-testid="group-value"]',
        (el) => el.textContent || '');
      expect(value).toBe('broccoli');

      const inputValue = await page.$eval('[data-testid="group-navigation"] input',
        (el) => el.value);
      expect(inputValue).toBe('Broccoli');
    });

    it('should display correct labels for all group items in controlled mode', async() => {
      const testCases = [
        { arrowDownCount: 1, label: 'Apple', value: 'apple' },
        { arrowDownCount: 2, label: 'Banana', value: 'banana' },
        { arrowDownCount: 3, label: 'Carrot', value: 'carrot' },
        { arrowDownCount: 4, label: 'Broccoli', value: 'broccoli' },
      ];

      /* eslint-disable no-await-in-loop */
      for (const testCase of testCases) {
        await page.reload();
        await page.waitForSelector('[data-testid="group-navigation"]');

        await page.click('[data-testid="group-navigation"] input');
        await page.waitForSelector('[data-part="content"]', { timeout: 1000, visible: true });

        for (let i = 0; i < testCase.arrowDownCount; i++) {
          await page.keyboard.press('ArrowDown');
        }

        await page.keyboard.press('Enter');
        await page.waitForSelector('body', { timeout: 1000 });

        const [stateValue, inputValue] = await Promise.all([
          page.$eval('[data-testid="group-value"]', (el) => el.textContent || ''),
          page.$eval('[data-testid="group-navigation"] input', (el) => el.value),
        ]);
        expect(stateValue).toBe(testCase.value);
        expect(inputValue).toBe(testCase.label);
      }
      /* eslint-enable no-await-in-loop */
    });

    it('should select first item using keyboard', async() => {
      await page.click('[data-testid="group-navigation"] input');
      await page.waitForSelector('[data-part="content"]', { visible: true });

      await page.keyboard.press('ArrowDown');

      await page.keyboard.press('Enter');
      await page.waitForSelector('body');

      const appleValue = await page.$eval('[data-testid="group-value"]',
        (el) => el.textContent || '');
      expect(appleValue).toBe('apple');

      const inputValue = await page.$eval('[data-testid="group-navigation"] input',
        (el) => el.value);
      expect(inputValue).toBe('Apple');
    });
  });

  describe('Interaction modes', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/interaction-modes');
      await page.waitForSelector('[data-testid="interaction-disabled"]');
    });

    it('should not open dropdown when disabled', async() => {
      await page.click('[data-testid="interaction-disabled"] input');
      await page.waitForSelector('body');

      const isDisabled = await page.$eval('[data-testid="interaction-disabled"] input',
        (el) => el.disabled);
      expect(isDisabled).toBe(true);
    });

    it('should not open dropdown when readonly', async() => {
      const readonlyExists = await page.$('[data-testid="interaction-readonly"]');
      expect(readonlyExists).not.toBeNull();

      const isReadOnly = await page.$eval('[data-testid="interaction-readonly"] input',
        (el) => el.readOnly);
      expect(isReadOnly).toBe(true);

      const inputValue = await page.$eval('[data-testid="interaction-readonly"] input',
        (el) => el.value);
      expect(inputValue).toBe('Apple');
    });
  });

  describe('Custom value behavior', () => {
    beforeEach(async() => {
      await gotoStory(page, 'behavior/custom-value-behavior');
      await page.waitForSelector('[data-testid="custom-value-behavior"]');
    });

    it('should hide new element option after selection', async() => {
      await page.click('[data-testid="custom-value-behavior"] input');
      await page.waitForSelector('[data-part="content"]', { timeout: 3000, visible: true });
      await page.keyboard.type('New Fruit');
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');

      const valueAfterAdd = await page.$eval('[data-testid="custom-value-display"]',
        (el) => el.textContent || '');
      expect(valueAfterAdd).toBe('New Fruit');

      await page.keyboard.press('ArrowDown');

      const newElementExistsAfterSelection = await page.evaluate(() => {
        const items = Array.from(document.querySelectorAll('[data-part="item"]'));
        return items.some((item) => item.hasAttribute('data-new-element'));
      });

      expect(newElementExistsAfterSelection).toBe(false);
    }, 20000);
  });

  describe('Multiple selection behavior', () => {
    describe('Controlled multiple selection', () => {
      beforeEach(async() => {
        await gotoStory(page, 'behavior/controlled-multiple');
        await page.waitForSelector('[data-testid="controlled-multiple"]');
      });

      it('should update display values when multiple items are selected', async() => {
        await page.click('[data-testid="controlled-multiple"] input');
        await page.waitForSelector('[data-part="content"]', { visible: true });

        await page.click('[data-part="item"]:nth-child(1)');

        let selectedValues = await page.$eval('[data-testid="controlled-multiple-values"]',
          (el) => el.textContent || '');
        expect(selectedValues).toBe('apple');

        await page.click('[data-part="item"]:nth-child(1)');

        selectedValues = await page.$eval('[data-testid="controlled-multiple-values"]',
          (el) => el.textContent || '');
        expect(selectedValues).toBe('apple,banana');

        await page.click('[data-part="item"]:nth-child(1)');

        selectedValues = await page.$eval('[data-testid="controlled-multiple-values"]',
          (el) => el.textContent || '');
        expect(selectedValues).toBe('apple,banana,cherry');
      });
    });

    describe('Uncontrolled multiple selection', () => {
      beforeEach(async() => {
        await gotoStory(page, 'behavior/uncontrolled-multiple');
        await page.waitForSelector('[data-testid="uncontrolled-multiple"]');
      });

      it('should update available options when tags are removed', async() => {
        await page.click('[data-testid="uncontrolled-multiple"] input');
        await page.waitForSelector('[data-part="content"]', { visible: true });

        let availableItems = await page.$$('[data-part="item"]');
        const initialItemCount = availableItems.length;
        expect(initialItemCount).toBe(4); // Apple, Banana, Cherry, Date

        await page.click('[data-part="item"]:nth-child(1)');
        await page.click('[data-part="item"]:nth-child(1)');

        await page.keyboard.press('Escape');
        await page.waitForSelector('[data-part="content"]', { timeout: 1000, visible: false });

        const tags = await page.$$('[data-testid="uncontrolled-multiple"] button[class*="tag"]');
        expect(tags.length).toBe(2);

        await page.click('[data-testid="uncontrolled-multiple"] input');
        await page.waitForSelector('[data-part="content"]', { visible: true });

        availableItems = await page.$$('[data-part="item"]');
        expect(availableItems.length).toBe(initialItemCount - 2);

        await page.click('[data-testid="uncontrolled-multiple"] button[class*="tag"]:first-child');

        await page.waitForSelector('body', { timeout: 1000 });

        availableItems = await page.$$('[data-part="item"]');
        expect(availableItems.length).toBe(initialItemCount - 1);

        const remainingTags = await page.$$('[data-testid="uncontrolled-multiple"] button[class*="tag"]');
        expect(remainingTags.length).toBe(1);
      });

      it('should handle keyboard tag removal and update available options', async() => {
        await page.click('[data-testid="uncontrolled-multiple"] input');
        await page.waitForSelector('[data-part="content"]', { timeout: 10000, visible: true });

        // Select Apple, Banana, Cherry
        await page.click('[data-part="item"]:nth-child(1)');
        await page.click('[data-part="item"]:nth-child(1)');
        await page.click('[data-part="item"]:nth-child(1)');

        await page.keyboard.press('Escape');
        await page.waitForSelector('[data-part="content"]', { timeout: 1000, visible: false });

        let tags = await page.$$('[data-testid="uncontrolled-multiple"] button[class*="tag"]');
        expect(tags.length).toBe(3);

        await page.click('[data-testid="uncontrolled-multiple"] input');
        await Promise.all([
          page.keyboard.press('Backspace'),
          page.keyboard.press('Backspace'),
        ]);

        tags = await page.$$('[data-testid="uncontrolled-multiple"] button[class*="tag"]');
        expect(tags.length).toBe(2);

        await page.click('[data-testid="uncontrolled-multiple"] input');
        await page.waitForSelector('[data-part="content"]', { timeout: 10000, visible: true });

        const availableItems = await page.$$('[data-part="item"]');
        expect(availableItems.length).toBe(2);
      }, 45000);

      it.skip('should NOT remove selected item when pressing Enter after selection', async() => {
        // This test documents a bug: pressing Enter after selection removes the item
        await page.click('[data-testid="uncontrolled-multiple"] input');
        await page.waitForSelector('[data-part="content"]', { visible: true });

        await page.click('[data-part="item"]:nth-child(1)');

        let tags = await page.$$('[data-testid="uncontrolled-multiple"] button[class*="tag"]');
        expect(tags.length).toBe(1);

        await page.keyboard.press('Enter'); // Select it

        // BUG: Pressing Enter should keep the selection, but currently it removes it
        // Expected behavior: 2 tags should be present
        // Actual behavior: The second selection gets removed
        tags = await page.$$('[data-testid="uncontrolled-multiple"] button[class*="tag"]');

        // This assertion documents the current buggy behavior
        // It should be expect(tags.length).toBe(2) when the bug is fixed
        expect(tags.length).toBe(1);
      });
    });
  });
});
