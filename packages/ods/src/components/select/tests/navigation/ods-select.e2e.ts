import { type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-select navigation', () => {
  let page: E2EPage;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      const element = document.querySelector('ods-select');
      return document.activeElement === element;
    });
  }

  async function isOpen(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.querySelector('ods-select')?.shadowRoot?.querySelector<HTMLElement>('.ts-dropdown')?.style.display !== 'none';
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  it('should be focused on tabulation', async() => {
    await setup('<ods-select><option value="1">1</option></ods-select>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should not be focusable if disabled', async() => {
    await setup('<ods-select is-disabled><option value="1">1</option></ods-select>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(false);
  });

  it('should be focused on associated label click', async() => {
    await setup('<label for="ods-select">Dummy label</label><ods-select id="ods-select"><option value="1">1</option></ods-select>');
    const labelElement = await page.find('label');

    expect(await isFocused()).toBe(false);

    await labelElement.click();
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should be focused on tabulation if readonly', async() => {
    await setup('<ods-select is-readonly><option value="1">1</option></ods-select>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should open the option list on select click', async() => {
    await setup('<ods-select><option value="1">1</option></ods-select>');

    expect(await isOpen()).toBe(false);

    await (await page.find('ods-select >>> .ts-control')).click();
    await page.waitForChanges();

    expect(await isOpen()).toBe(true);
  });

  it('should not open the option list on select click if disabled', async() => {
    await setup('<ods-select is-disabled><option value="1">1</option></ods-select>');

    expect(await isOpen()).toBe(false);

    await (await page.find('ods-select >>> .ts-control')).click();
    await page.waitForChanges();

    expect(await isOpen()).toBe(false);
  });

  it('should open the option list on arrow down press when select is focused', async() => {
    await setup('<ods-select><option value="1">1</option></ods-select>');

    expect(await isOpen()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    await page.keyboard.press('ArrowDown');
    await page.waitForChanges();

    expect(await isOpen()).toBe(true);
  });

  it('should close the option list on escape press', async() => {
    await setup('<ods-select><option value="1">1</option></ods-select>');
    await (await page.find('ods-select >>> .ts-control')).click();
    await page.waitForChanges();

    expect(await isOpen()).toBe(true);

    await page.keyboard.press('Escape');
    await page.waitForChanges();

    expect(await isOpen()).toBe(false);
  });

  describe('single selection', () => {
    it('should select an option on click', async() => {
      await setup('<ods-select><option value="1">1</option></ods-select>');
      await (await page.find('ods-select >>> .ts-control')).click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);

      await (await page.find('ods-select >>> .option')).click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect((await page.find('ods-select')).getAttribute('value')).toBe('1');
    });

    it('should not select a disabled option on click', async() => {
      await setup('<ods-select><option disabled value="1">1</option></ods-select>');
      await (await page.find('ods-select >>> .ts-control')).click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);

      await (await page.find('ods-select >>> .option')).click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      expect((await page.find('ods-select')).getAttribute('value')).toBeNull();
    });

    it('should select an option on Enter press', async() => {
      await setup('<ods-select><option value="1">1</option></ods-select>');
      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);

      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect((await page.find('ods-select')).getAttribute('value')).toBe('1');
    });

    it('should select an option on Tab press', async() => {
      await setup('<ods-select><option value="1">1</option></ods-select>');
      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);

      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(await isOpen()).toBe(false);
      expect((await page.find('ods-select')).getAttribute('value')).toBe('1');
    });
  });

  describe('multiple selection', () => {
    it('should toggle options on click', async() => {
      await setup('<ods-select allow-multiple><option value="1">1</option><option value="2">2</option></ods-select>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await (await page.find('ods-select >>> .ts-control')).click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);

      const options = await page.findAll('ods-select >>> .option');
      expect(options.length).toBe(2);

      await options[0].click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventDetail({ previousValue: null, validity: {}, value: '1' });

      await options[1].click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventDetail({ previousValue: '1', validity: {}, value: '1,2' });

      await options[0].click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventDetail({ previousValue: '1,2', validity: {}, value: '2' });
    });

    it('should toggle options on Enter press', async() => {
      await setup('<ods-select allow-multiple><option value="1">1</option><option value="2">2</option></ods-select>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);

      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventDetail({ previousValue: null, validity: {}, value: '1' });

      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventDetail({ previousValue: '1', validity: {}, value: '1,2' });

      await page.keyboard.press('ArrowUp');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventDetail({ previousValue: '1,2', validity: {}, value: '2' });
    });

    it('should toggle options on Tab press', async() => {
      await setup('<ods-select allow-multiple><option value="1">1</option><option value="2">2</option></ods-select>');
      const odsChangeSpy = await page.spyOnEvent('odsChange');
      await page.keyboard.press('Tab');
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);

      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventDetail({ previousValue: null, validity: {}, value: '1' });

      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventDetail({ previousValue: '1', validity: {}, value: '1,2' });

      await page.keyboard.press('ArrowUp');
      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);
      expect(odsChangeSpy).toHaveReceivedEventDetail({ previousValue: '1,2', validity: {}, value: '2' });
    });
  });
});
