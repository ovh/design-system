import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
// TODO diff is that it opens on first type instead on click => not anymore TODO update all tests
describe('ods-combobox navigation', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      const element = document.querySelector('ods-combobox');
      return document.activeElement === element;
    });
  }

  async function isOpen(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.querySelector('ods-combobox')?.shadowRoot?.querySelector<HTMLElement>('.ts-dropdown')?.style.display !== 'none';
    });
  }

  async function setup(content: string, additionalProperties?: Record<string, unknown>): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    el = await page.find('ods-combobox');

    additionalProperties && Object.entries(additionalProperties).forEach(([key, value]) => {
      el.setProperty(key, value);
    });
    await page.waitForChanges();
  }

  it('should be focused on tabulation', async() => {
    await setup('<ods-combobox><option value="1">1</option></ods-combobox>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should not be focusable if disabled', async() => {
    await setup('<ods-combobox is-disabled><option value="1">1</option></ods-combobox>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(false);
  });

  it('should be focused on associated label click', async() => {
    await setup('<label for="ods-combobox">Dummy label</label><ods-combobox id="ods-combobox"><option value="1">1</option></ods-combobox>');
    const labelElement = await page.find('label');

    expect(await isFocused()).toBe(false);

    await labelElement.click();
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should be focused on tabulation if readonly', async() => {
    await setup('<ods-combobox is-readonly><option value="1">1</option></ods-combobox>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should open the option list on first type', async() => {
    await setup('<ods-combobox><option value="1">1</option></ods-combobox>');

    expect(await isOpen()).toBe(false);

    await el.type('a', { delay: 500 });
    await page.waitForChanges();

    expect(await isOpen()).toBe(true);
  });

  it('should not open the option list on combobox click if empty', async() => {
    await setup('<ods-combobox><option value="1">1</option></ods-combobox>');

    expect(await isOpen()).toBe(false);

    await (await page.find('ods-combobox >>> .ts-control')).click();
    await page.waitForChanges();

    expect(await isOpen()).toBe(false);
  });

  // TODO does it?
  // it('should open the option list on combobox click if not empty', async() => {
  //   await setup('<ods-combobox value="1"><option value="1">1</option></ods-combobox>');
  //
  //   expect(await isOpen()).toBe(false);
  //
  //   await (await page.find('ods-combobox >>> .ts-control')).click();
  //   await page.waitForChanges();
  //
  //   expect(await isOpen()).toBe(true);
  // });
  // it('should not open the option list on combobox click if disabled', async() => {
  //   await setup('<ods-combobox is-disabled value="1"><option value="1">1</option></ods-combobox>');
  //
  //   expect(await isOpen()).toBe(false);
  //
  //   await (await page.find('ods-combobox >>> .ts-control')).click();
  //   await page.waitForChanges();
  //
  //   expect(await isOpen()).toBe(false);
  // });

  it('should open the option list on arrow down press when select is focused', async() => {
    await setup('<ods-combobox><option value="1">1</option></ods-combobox>');

    expect(await isOpen()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    await page.keyboard.press('ArrowDown');
    await page.waitForChanges();

    expect(await isOpen()).toBe(true);
  });

  it('should close the option list on escape press', async() => {
    await setup('<ods-combobox><option value="1">1</option></ods-combobox>');
    await el.type('a', { delay: 500 });
    await page.waitForChanges();

    expect(await isOpen()).toBe(true);

    await page.keyboard.press('Escape');
    await page.waitForChanges();

    expect(await isOpen()).toBe(false);
  });

  describe('single selection', () => {
    it('should select an option on click', async() => {
      await setup('<ods-combobox><option value="1">1</option></ods-combobox>');
      await el.type('1', { delay: 500 });
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);

      await (await page.find('ods-combobox >>> .option')).click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect((await page.find('ods-combobox')).getAttribute('value')).toBe('1');
    });

    // TODO if open when value set
    // it('should not select a disabled option on click', async() => {
    //   await setup('<ods-combobox><option disabled value="1">1</option></ods-combobox>');
    //   await (await page.find('ods-combobox >>> .ts-control')).click();
    //   await page.waitForChanges();
    //
    //   expect(await isOpen()).toBe(true);
    //
    //   await (await page.find('ods-combobox >>> .option')).click();
    //   await page.waitForChanges();
    //
    //   expect(await isOpen()).toBe(true);
    //   expect((await page.find('ods-combobox')).getAttribute('value')).toBeNull();
    // });

    it('should select an option on Enter press', async() => {
      await setup('<ods-combobox><option value="1">1</option></ods-combobox>');
      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);

      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect((await page.find('ods-combobox')).getAttribute('value')).toBe('1');
    });

    it('should select an option on Tab press', async() => {
      await setup('<ods-combobox><option value="1">1</option></ods-combobox>');
      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);

      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect((await page.find('ods-combobox')).getAttribute('value')).toBe('1');
    });
  });

  describe('multiple selection', () => {
    it('should select and remove options on click', async() => {
      await setup('<ods-combobox allow-multiple><option value="1">1</option><option value="2">2</option><option value="3">3</option></ods-combobox>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);

      let options = await page.findAll('ods-combobox >>> .option');
      expect(options.length).toBe(3);

      await options[0].click();
      await page.waitForChanges();
      options = await page.findAll('ods-combobox >>> .option');

      expect(await isOpen()).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventDetail({ previousValue: null, validity: {}, value: '1' });
      expect(options.length).toBe(2);

      await options[0].click();
      await page.waitForChanges();
      options = await page.findAll('ods-combobox >>> .option');

      expect(await isOpen()).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventDetail({ previousValue: '1', validity: {}, value: '1,2' });
      expect(options.length).toBe(1);
    });

    it('should select and remove options on Enter press', async() => {
      await setup('<ods-combobox allow-multiple><option value="1">1</option><option value="2">2</option><option value="3">3</option></ods-combobox>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);

      let options = await page.findAll('ods-combobox >>> .option');
      expect(options.length).toBe(3);

      await page.keyboard.press('Enter');
      await page.waitForChanges();
      options = await page.findAll('ods-combobox >>> .option');

      expect(await isOpen()).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventDetail({ previousValue: null, validity: {}, value: '1' });
      expect(options.length).toBe(2);

      await page.keyboard.press('Enter');
      await page.waitForChanges();
      options = await page.findAll('ods-combobox >>> .option');

      expect(await isOpen()).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventDetail({ previousValue: '1', validity: {}, value: '1,2' });
      expect(options.length).toBe(1);
    });

    it('should select and remove options on Tab press', async() => {
      await setup('<ods-combobox allow-multiple><option value="1">1</option><option value="2">2</option><option value="3">3</option></ods-combobox>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);

      let options = await page.findAll('ods-combobox >>> .option');
      expect(options.length).toBe(3);

      await page.keyboard.press('Tab');
      await page.waitForChanges();
      options = await page.findAll('ods-combobox >>> .option');

      expect(await isOpen()).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventDetail({ previousValue: null, validity: {}, value: '1' });
      expect(options.length).toBe(2);

      await page.keyboard.press('Tab');
      await page.waitForChanges();
      options = await page.findAll('ods-combobox >>> .option');

      expect(await isOpen()).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventDetail({ previousValue: '1', validity: {}, value: '1,2' });
      expect(options.length).toBe(1);
    });

    // fit('should tab through selected options', async() => {
    //   await setup('<ods-combobox allow-multiple><option value="1">1</option><option value="2">2</option><option value="3">3</option></ods-combobox>', {
    //     value: ['1', '2'],
    //   });
    //
    //   await new Promise((resolve) => setTimeout(resolve, 100000));
    // });
  });
});
