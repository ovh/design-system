import { type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-phone-number navigation', () => {
  let page: E2EPage;

  async function isInputFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement?.tagName === 'ODS-PHONE-NUMBER' &&
        document.activeElement?.shadowRoot?.activeElement?.tagName === 'ODS-INPUT';
    });
  }

  async function isSelectFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement?.tagName === 'ODS-PHONE-NUMBER' &&
        document.activeElement?.shadowRoot?.activeElement?.tagName === 'ODS-SELECT';
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  beforeEach(jest.clearAllMocks);

  it('should focus input on tabulation if no countries', async() => {
    await setup('<ods-phone-number></ods-phone-number>');

    expect(await isInputFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isInputFocused()).toBe(true);
  });

  it('should not focus input on tabulation if no countries and disabled', async() => {
    await setup('<ods-phone-number is-disabled></ods-phone-number>');

    expect(await isInputFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isInputFocused()).toBe(false);
  });

  it('should focus input on associated label click if no countries', async() => {
    await setup('<label for="ods-phone-number">Dummy label</label><ods-phone-number id="ods-phone-number"></ods-phone-number>');
    const labelElement = await page.find('label');

    expect(await isInputFocused()).toBe(false);

    await labelElement.click();
    await page.waitForChanges();

    expect(await isInputFocused()).toBe(true);
  });

  it('should focus select then input on tabulation if countries are set', async() => {
    await setup('<ods-phone-number countries="all"></ods-phone-number>');

    expect(await isInputFocused()).toBe(false);
    expect(await isSelectFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isInputFocused()).toBe(false);
    expect(await isSelectFocused()).toBe(true);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isInputFocused()).toBe(true);
    expect(await isSelectFocused()).toBe(false);
  });

  it('should not focus select or input on tabulation if disabled', async() => {
    await setup('<ods-phone-number countries="all" is-disabled></ods-phone-number>');

    expect(await isInputFocused()).toBe(false);
    expect(await isSelectFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isInputFocused()).toBe(false);
    expect(await isSelectFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isInputFocused()).toBe(false);
    expect(await isSelectFocused()).toBe(false);
  });

  it('should focus select on associated label click if countries are set', async() => {
    await setup('<label for="ods-phone-number">Dummy label</label><ods-phone-number countries="all" id="ods-phone-number"></ods-phone-number>');
    const labelElement = await page.find('label');

    expect(await isInputFocused()).toBe(false);
    expect(await isSelectFocused()).toBe(false);

    await labelElement.click();
    await page.waitForChanges();

    expect(await isInputFocused()).toBe(false);
    expect(await isSelectFocused()).toBe(true);
  });

  it('should go on option when type a letter', async() => {
    await setup('<ods-phone-number countries="all"></ods-phone-number>');

    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');
    await page.waitForChanges();

    const scrollBeforeType = await page.evaluate(() => {
      return document.querySelector('ods-phone-number')
        ?.shadowRoot?.querySelector('ods-select')
        ?.shadowRoot?.querySelector('.ts-dropdown-content')?.scrollTop;
    });

    expect(await isSelectFocused()).toBe(true);

    await page.keyboard.type('k');
    await page.waitForChanges();
    // wait for scroll animation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const scrollAfterType = await page.evaluate(() => {
      return document.querySelector('ods-phone-number')
        ?.shadowRoot?.querySelector('ods-select')
        ?.shadowRoot?.querySelector('.ts-dropdown-content')?.scrollTop;
    });

    expect(scrollBeforeType).toBeLessThan(scrollAfterType ?? 0);
  });
});
