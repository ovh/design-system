import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-tab navigation', () => {
  let page: E2EPage;
  let tab: E2EElement;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      const element = document.querySelector('ods-tab');
      return document.activeElement === element;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    tab = await page.find('ods-tab');
  }

  beforeEach(jest.clearAllMocks);

  it('should be focused on tabulation', async() => {
    await setup('<ods-tab>Tab</ods-tab>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should not be focusable if disabled', async() => {
    await setup('<ods-tab is-disabled>Tab</ods-tab>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(false);
  });

  it('should emit an odsTabSelected event on Enter press when focused', async() => {
    await setup('<ods-tab>Tab</ods-tab>');
    const odsTabSelectedSpy = await page.spyOnEvent('odsTabSelected');

    await page.keyboard.press('Tab');
    await page.waitForChanges();
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(odsTabSelectedSpy).toHaveReceivedEventTimes(1);
  });

  it('should emit an odsTabSelected event on Space press when focused', async() => {
    await setup('<ods-tab>Tab</ods-tab>');
    const odsTabSelectedSpy = await page.spyOnEvent('odsTabSelected');

    await page.keyboard.press('Tab');
    await page.waitForChanges();
    await page.keyboard.press('Space');
    await page.waitForChanges();

    expect(odsTabSelectedSpy).toHaveReceivedEventTimes(1);
  });

  it('should emit an odsTabSelected event on click', async() => {
    await setup('<ods-tab>Tab</ods-tab>');
    const odsTabSelectedSpy = await page.spyOnEvent('odsTabSelected');

    await tab.click();
    await page.waitForChanges();

    expect(odsTabSelectedSpy).toHaveReceivedEventTimes(1);
  });

  it('should not emit an odsTabSelected event on click if disabled', async() => {
    await setup('<ods-tab is-disabled>Tab</ods-tab>');
    const odsTabSelectedSpy = await page.spyOnEvent('odsTabSelected');

    await tab.click();
    await page.waitForChanges();

    expect(odsTabSelectedSpy).toHaveReceivedEventTimes(0);
  });
});
