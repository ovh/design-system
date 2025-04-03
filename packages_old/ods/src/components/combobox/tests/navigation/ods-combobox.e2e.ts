import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-combobox navigation', () => {
  let input: E2EElement;
  let page: E2EPage;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      const element = document.querySelector('ods-combobox');
      return document.activeElement === element;
    });
  }

  async function isInputFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      const input = document.querySelector('ods-combobox')?.shadowRoot?.querySelector('ods-input');
      return input?.shadowRoot?.activeElement?.tagName === 'INPUT';
    });
  }

  async function isOpen(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.querySelector('ods-combobox')?.getAttribute('aria-expanded') === 'true';
    });
  }

  async function openList(): Promise<void> {
    await input.click();
    await page.waitForChanges();
  }

  async function openListFocused(): Promise<void> {
    await page.keyboard.press('Tab');
    await page.waitForChanges();
    await page.keyboard.press('ArrowDown');
    await page.waitForChanges();
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    input = await page.find('ods-combobox >>> ods-input');
  }

  it('should be focused on tabulation', async() => {
    await setup('<ods-combobox><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should not be focusable if disabled', async() => {
    await setup('<ods-combobox is-disabled><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(false);
  });

  it('should be focused on associated label click', async() => {
    await setup('<label for="ods-combobox">Dummy label</label><ods-combobox id="ods-combobox"><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox>');
    const labelElement = await page.find('label');

    expect(await isFocused()).toBe(false);

    await labelElement.click();
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should be focused on tabulation if readonly', async() => {
    await setup('<ods-combobox is-readonly><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should focus on Tab the clearable button if set', async() => {
    await setup('<ods-combobox is-clearable value="Dummy"><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox>');

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await page.evaluate(() => {
      const input = document.querySelector('ods-combobox')?.shadowRoot?.querySelector('ods-input');
      return input?.shadowRoot?.activeElement?.classList.contains('ods-button');
    })).toBe(true);
  });

  it('should open the list on input click', async() => {
    await setup('<ods-combobox><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox>');

    expect(await isOpen()).toBe(false);

    await openList();

    expect(await isOpen()).toBe(true);
  });

  it('should open the list on input click if disabled', async() => {
    await setup('<ods-combobox is-disabled><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox>');

    expect(await isOpen()).toBe(false);

    await openList();

    expect(await isOpen()).toBe(false);
  });

  it('should open the list on arrow down when input is focused', async() => {
    await setup('<ods-combobox><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox>');

    expect(await isOpen()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    await page.keyboard.press('ArrowDown');
    await page.waitForChanges();

    expect(await isOpen()).toBe(true);
  });

  it('should not open the list on arrow up when input is focused', async() => {
    await setup('<ods-combobox><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox>');

    expect(await isOpen()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    await page.keyboard.press('ArrowUp');
    await page.waitForChanges();

    expect(await isOpen()).toBe(false);
  });

  it('should close the list on escape press', async() => {
    await setup('<ods-combobox><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox>');
    await openList();

    expect(await isOpen()).toBe(true);

    await page.keyboard.press('Escape');
    await page.waitForChanges();

    expect(await isOpen()).toBe(false);
  });

  it('should close the list on focus out', async() => {
    await setup('<ods-combobox><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox><button>Focusable element</button>');
    await openList();

    expect(await isOpen()).toBe(true);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isOpen()).toBe(false);
  });

  it('should close the list on outside click', async() => {
    await setup('<ods-combobox><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox><p>Non focusable element</p>');
    await openList();

    expect(await isOpen()).toBe(true);

    await (await page.find('p')).click();
    await page.waitForChanges();

    expect(await isOpen()).toBe(false);
  });

  describe('list navigation', () => {
    async function getItemSelectedIndex(): Promise<number> {
      return (await page.findAll('ods-combobox-item')).findIndex((el) => el.getAttribute('aria-selected') !== null);
    }

    beforeEach(async() => {
      await setup(`
        <ods-combobox>
          <ods-combobox-item value="value1">Item 1</ods-combobox-item>
          <ods-combobox-item value="value2">Item 2</ods-combobox-item>
          <ods-combobox-item value="value3">Item 3</ods-combobox-item>
        </ods-combobox>
      `);
    });

    it('should not focus first item when list opens using input click', async() => {
      await openList();

      expect(await getItemSelectedIndex()).toBe(-1);
    });

    it('should focus first item when list opens using arrow down', async() => {
      await openListFocused();

      expect(await getItemSelectedIndex()).toBe(0);
    });

    it('should focus next item on arrow down until last', async() => {
      await openListFocused();

      expect(await getItemSelectedIndex()).toBe(0);

      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect(await getItemSelectedIndex()).toBe(1);

      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect(await getItemSelectedIndex()).toBe(2);

      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect(await getItemSelectedIndex()).toBe(2);
    });

    it('should focus previous item on arrow down until first', async() => {
      await openListFocused();
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect(await getItemSelectedIndex()).toBe(2);

      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await getItemSelectedIndex()).toBe(1);

      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await getItemSelectedIndex()).toBe(0);

      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await getItemSelectedIndex()).toBe(0);
    });
  });

  describe('single selection', () => {
    it('should select an item on click', async() => {
      const dummyValue = 'Dummy value';
      await setup(`<ods-combobox><ods-combobox-item value="dummy-value">${dummyValue}</ods-combobox-item></ods-combobox>`);
      await openList();

      expect(await isOpen()).toBe(true);

      await (await page.find('ods-combobox-item')).click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect((await page.find('ods-combobox >>> ods-input')).getAttribute('value')).toBe(dummyValue);
      expect(await isFocused()).toBe(true);
    });

    it('should select an item on Enter press', async() => {
      const dummyValue = 'Dummy value';
      await setup(`<ods-combobox><ods-combobox-item value="dummy-value">${dummyValue}</ods-combobox-item></ods-combobox>`);
      await openListFocused();

      expect(await isOpen()).toBe(true);

      await page.keyboard.press('Enter', { delay: 100 });
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect((await page.find('ods-combobox >>> ods-input')).getAttribute('value')).toBe(dummyValue);
      expect(await isFocused()).toBe(true);
    });

    it('should select an item on Tab press then change focus', async() => {
      const dummyValue = 'Dummy value';
      await setup(`<ods-combobox><ods-combobox-item value="dummy-value">${dummyValue}</ods-combobox-item></ods-combobox><button id="focused-button">Focusable element</button>`);

      await openListFocused();

      expect(await isOpen()).toBe(true);

      await page.keyboard.press('Tab', { delay: 100 });
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect((await page.find('ods-combobox >>> ods-input')).getAttribute('value')).toBe(dummyValue);
      expect(await isFocused()).toBe(false);
      expect(await page.evaluate(() => {
        const element = document.querySelector('#focused-button');
        return document.activeElement === element;
      })).toBe(true);
    });

    it('should do nothing on arrow left press when focus on input', async() => {
      await setup('<ods-combobox><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox>');
      await openList();

      expect(await isOpen()).toBe(true);
      expect(await isInputFocused()).toBe(true);

      await page.keyboard.press('ArrowLeft');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      expect(await isInputFocused()).toBe(true);
    });

    it('should do nothing on arrow right press when focus on input', async() => {
      await setup('<ods-combobox><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox>');
      await openList();

      expect(await isOpen()).toBe(true);
      expect(await isInputFocused()).toBe(true);

      await page.keyboard.press('ArrowRight');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      expect(await isInputFocused()).toBe(true);
    });
  });

  describe('multiple selection', () => {
    async function countTag(): Promise<number> {
      return (await page.findAll('ods-combobox >>> ods-tag')).length;
    }

    async function getTagFocusedIndex(): Promise<number> {
      return await page.evaluate(() => {
        const shadowDomActiveElement = document.querySelector('ods-combobox')?.shadowRoot?.activeElement;

        return Array.from(document.querySelector('ods-combobox')?.shadowRoot?.querySelectorAll('ods-tag') || [])
          .findIndex((el) => el === shadowDomActiveElement);
      });
    }

    it('should select an item on click', async() => {
      const dummyValue = 'Dummy value';
      await setup(`<ods-combobox allow-multiple><ods-combobox-item value="dummy-value">${dummyValue}</ods-combobox-item></ods-combobox>`);
      await openList();

      expect(await isOpen()).toBe(true);
      expect(await countTag()).toBe(0);

      await (await page.find('ods-combobox-item')).click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect(await countTag()).toBe(1);
      expect(await isFocused()).toBe(true);
    });

    it('should select an item on Enter press', async() => {
      const dummyValue = 'Dummy value';
      await setup(`<ods-combobox allow-multiple><ods-combobox-item value="dummy-value">${dummyValue}</ods-combobox-item></ods-combobox>`);
      await openListFocused();

      expect(await isOpen()).toBe(true);
      expect(await countTag()).toBe(0);

      await page.keyboard.press('Enter', { delay: 100 });
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect(await countTag()).toBe(1);
      expect(await isFocused()).toBe(true);
    });

    it('should select an item on Tab press then change focus', async() => {
      const dummyValue = 'Dummy value';
      await setup(`<ods-combobox allow-multiple><ods-combobox-item value="dummy-value">${dummyValue}</ods-combobox-item></ods-combobox><button id="focused-button">Focusable element</button>`);
      await openListFocused();

      expect(await isOpen()).toBe(true);
      expect(await countTag()).toBe(0);

      await page.keyboard.press('Tab', { delay: 100 });
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect(await countTag()).toBe(1);
      expect(await isFocused()).toBe(false);
      expect(await page.evaluate(() => {
        const element = document.querySelector('#focused-button');
        return document.activeElement === element;
      })).toBe(true);
    });

    it('should do nothing on arrow left press when focus on input and no selection', async() => {
      await setup('<ods-combobox allow-multiple><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox>');
      await openList();

      expect(await isOpen()).toBe(true);
      expect(await isInputFocused()).toBe(true);

      await page.keyboard.press('ArrowLeft');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      expect(await isInputFocused()).toBe(true);
    });

    it('should do nothing on arrow right press when focus on input and no selection', async() => {
      await setup('<ods-combobox allow-multiple><ods-combobox-item value="value">Item 1</ods-combobox-item></ods-combobox>');
      await openList();

      expect(await isOpen()).toBe(true);
      expect(await isInputFocused()).toBe(true);

      await page.keyboard.press('ArrowRight');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      expect(await isInputFocused()).toBe(true);
    });

    it('should move through tags using left and right arrow until last, then focus back input', async() => {
      await setup('<ods-combobox allow-multiple value="Item 1,Item 2"></ods-combobox>');
      await openList();

      expect(await isOpen()).toBe(true);
      expect(await countTag()).toBe(2);
      expect(await isInputFocused()).toBe(true);

      await page.keyboard.press('ArrowLeft');
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect(await isInputFocused()).toBe(false);
      expect(await getTagFocusedIndex()).toBe(1);

      await page.keyboard.press('ArrowLeft');
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect(await isInputFocused()).toBe(false);
      expect(await getTagFocusedIndex()).toBe(0);

      await page.keyboard.press('ArrowLeft');
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect(await isInputFocused()).toBe(false);
      expect(await getTagFocusedIndex()).toBe(0);

      await page.keyboard.press('ArrowRight');
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect(await isInputFocused()).toBe(false);
      expect(await getTagFocusedIndex()).toBe(1);

      await page.keyboard.press('ArrowRight');
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect(await isInputFocused()).toBe(true);
      expect(await getTagFocusedIndex()).toBe(-1);
    });

    it('should do nothing on arrow up or down press when focus on a tag', async() => {
      await setup('<ods-combobox allow-multiple value="Item 1"></ods-combobox>');
      await openList();

      expect(await isOpen()).toBe(true);
      expect(await isInputFocused()).toBe(true);

      await page.keyboard.press('ArrowLeft');
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect(await isInputFocused()).toBe(false);
      expect(await getTagFocusedIndex()).toBe(0);

      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect(await isInputFocused()).toBe(false);
      expect(await getTagFocusedIndex()).toBe(0);

      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect(await isInputFocused()).toBe(false);
      expect(await getTagFocusedIndex()).toBe(0);
    });

    it('should remove a tag on click, focus input and open list', async() => {
      await setup('<ods-combobox allow-multiple value="Item 1,Item2"></ods-combobox>');
      await openList();

      expect(await isOpen()).toBe(true);
      expect(await isInputFocused()).toBe(true);
      expect(await countTag()).toBe(2);

      await (await page.find('ods-combobox >>> ods-tag')).click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      expect(await isInputFocused()).toBe(true);
      expect(await countTag()).toBe(1);
    });

    it('should remove a tag on Enter press and focus next tag or input', async() => {
      await setup('<ods-combobox allow-multiple value="Item 1,Item2"></ods-combobox>');
      await openList();
      await page.keyboard.press('ArrowLeft');
      await page.keyboard.press('ArrowLeft');
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect(await isInputFocused()).toBe(false);
      expect(await getTagFocusedIndex()).toBe(0);

      await page.keyboard.press('Enter', { delay: 100 });
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect(await isInputFocused()).toBe(false);
      expect(await getTagFocusedIndex()).toBe(0);

      await page.keyboard.press('Enter', { delay: 100 });
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect(await isInputFocused()).toBe(true);
      expect(await getTagFocusedIndex()).toBe(-1);
    });

    it('should do nothing on tag click if disabled', async() => {
      await setup('<ods-combobox allow-multiple is-disabled value="Item 1,Item2"></ods-combobox>');

      expect(await countTag()).toBe(2);

      await (await page.find('ods-combobox >>> ods-tag')).click();
      await page.waitForChanges();

      expect(await countTag()).toBe(2);
    });

    it('should do nothing on tag click if readonly', async() => {
      await setup('<ods-combobox allow-multiple is-readonly value="Item 1,Item2"></ods-combobox>');

      expect(await countTag()).toBe(2);

      await (await page.find('ods-combobox >>> ods-tag')).click();
      await page.waitForChanges();

      expect(await countTag()).toBe(2);
    });
  });
});
