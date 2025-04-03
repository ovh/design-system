import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-clipboard navigation', () => {
  let page: E2EPage;
  let copyButton: E2EElement;

  async function isCopyButtonFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement?.shadowRoot?.activeElement?.tagName === 'ODS-BUTTON';
    });
  }

  async function isInputFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      return document.activeElement?.shadowRoot?.activeElement?.tagName === 'ODS-INPUT';
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    copyButton = await page.find('ods-clipboard >>> #clipboard-copy');
  }

  it('should be focus the input then the button on tabulation', async() => {
    await setup('<ods-clipboard></ods-clipboard>');

    expect(await isInputFocused()).toBe(false);
    expect(await isCopyButtonFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isInputFocused()).toBe(true);
    expect(await isCopyButtonFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isInputFocused()).toBe(false);
    expect(await isCopyButtonFocused()).toBe(true);
  });

  it('should not be focusable if disabled', async() => {
    await setup('<ods-clipboard is-disabled></ods-clipboard>');

    expect(await isInputFocused()).toBe(false);
    expect(await isCopyButtonFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isInputFocused()).toBe(false);
    expect(await isCopyButtonFocused()).toBe(false);
  });

  it('should copy on action button click', async() => {
    const dummyValue = 'dummy value';
    await setup(`<ods-clipboard value="${dummyValue}"></ods-clipboard>`);
    const copySpy = await page.spyOnEvent( 'odsCopy' );

    await copyButton.click();
    await page.waitForChanges();

    expect(copySpy).toHaveReceivedEventTimes(1);
    expect(copySpy).toHaveReceivedEventDetail(dummyValue);
  });

  it('should copy the value when masked on action button click', async() => {
    const dummyValue = 'dummy value';
    await setup(`<ods-clipboard value="${dummyValue}" is-masked></ods-clipboard>`);
    const copySpy = await page.spyOnEvent( 'odsCopy' );

    await page.waitForChanges();
    await copyButton.click();
    await page.waitForChanges();

    expect(copySpy).toHaveReceivedEventTimes(1);
    expect(copySpy).toHaveReceivedEventDetail(dummyValue);
  });

  it('should not copy on action button click if disabled', async() => {
    const dummyValue = 'dummy value';
    await setup(`<ods-clipboard is-disabled value="${dummyValue}"></ods-clipboard>`);
    const copySpy = await page.spyOnEvent( 'odsCopy' );

    await copyButton.click();
    await page.waitForChanges();

    expect(copySpy).not.toHaveReceivedEvent();
  });
});
