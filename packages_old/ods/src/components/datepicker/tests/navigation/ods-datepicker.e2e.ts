import { type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-datepicker navigation', () => {
  let page: E2EPage;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement === document.querySelector('ods-datepicker');
    });
  }

  async function isOpen(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.querySelector('ods-datepicker')?.shadowRoot?.querySelector<HTMLElement>('.datepicker')?.classList.contains('active') || false;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  it('should be focused on tabulation', async() => {
    await setup('<ods-datepicker></ods-datepicker>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should not be focusable if disabled', async() => {
    await setup('<ods-datepicker is-disabled></ods-datepicker>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(false);
  });

  it('should be focused on associated label click', async() => {
    await setup('<label for="ods-datepicker">Dummy label</label><ods-datepicker id="ods-datepicker"></ods-datepicker>');
    const labelElement = await page.find('label');

    expect(await isFocused()).toBe(false);

    await labelElement.click();
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should open the datepicker on input click', async() => {
    await setup('<ods-datepicker></ods-datepicker>');

    expect(await isOpen()).toBe(false);

    await (await page.find('ods-datepicker >>> input')).click();
    await page.waitForChanges();

    expect(await isOpen()).toBe(true);
  });

  it('should open the datepicker on icon click', async() => {
    await setup('<ods-datepicker></ods-datepicker>');

    expect(await isOpen()).toBe(false);

    await (await page.find('ods-datepicker >>> .ods-datepicker__actions__icon')).click();
    await page.waitForChanges();

    expect(await isOpen()).toBe(true);
  });

  it('should not open the datepicker on input click if disabled', async() => {
    await setup('<ods-datepicker is-disabled></ods-datepicker>');

    expect(await isOpen()).toBe(false);

    await (await page.find('ods-datepicker >>> input')).click();
    await page.waitForChanges();

    expect(await isOpen()).toBe(false);
  });

  it('should not open the datepicker on icon click if disabled', async() => {
    await setup('<ods-datepicker is-disabled></ods-datepicker>');

    expect(await isOpen()).toBe(false);

    await (await page.find('ods-datepicker >>> .ods-datepicker__actions__icon')).click();
    await page.waitForChanges();

    expect(await isOpen()).toBe(false);
  });

  it('should open the datepicker on arrow down press when input is focused', async() => {
    await setup('<ods-datepicker></ods-datepicker>');

    expect(await isOpen()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    await page.keyboard.press('ArrowDown');
    await page.waitForChanges();

    expect(await isOpen()).toBe(true);
  });

  it('should close the datepicker on escape press', async() => {
    await setup('<ods-datepicker></ods-datepicker>');
    await (await page.find('ods-datepicker >>> input')).click();
    await page.waitForChanges();

    expect(await isOpen()).toBe(true);

    await page.keyboard.press('Escape');
    await page.waitForChanges();

    expect(await isOpen()).toBe(false);
  });

  it('should select a date on click', async() => {
    await setup('<ods-datepicker></ods-datepicker>');
    await (await page.find('ods-datepicker >>> input')).click();
    await page.waitForChanges();

    expect(await isOpen()).toBe(true);
    expect(await (await page.find('ods-datepicker >>> input')).getProperty('value')).toBe('');

    await (await page.find('ods-datepicker >>> .datepicker .day')).click();
    await page.waitForChanges();

    expect(await isOpen()).toBe(false);
    expect((await page.find('ods-datepicker >>> input')).getProperty('value')).not.toBe('');
  });

  it('should select a date on Enter press', async() => {
    await setup('<ods-datepicker></ods-datepicker>');
    await (await page.find('ods-datepicker >>> input')).click();
    await page.waitForChanges();

    expect(await isOpen()).toBe(true);
    expect(await (await page.find('ods-datepicker >>> input')).getProperty('value')).toBe('');

    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(await isOpen()).toBe(false);
    expect((await page.find('ods-datepicker >>> input')).getProperty('value')).not.toBe('');
  });
});
