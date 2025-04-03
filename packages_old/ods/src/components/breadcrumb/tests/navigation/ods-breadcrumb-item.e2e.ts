import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-breadcrumb-item navigation', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      const element = document.querySelector('ods-breadcrumb-item');
      return document.activeElement === element;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-breadcrumb-item');
  }

  beforeEach(jest.clearAllMocks);

  it('should be focused on tabulation', async() => {
    await setup('<ods-breadcrumb-item label="Dummy item"></ods-breadcrumb-item>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should not be focusable if disabled', async() => {
    await setup('<ods-breadcrumb-item is-disabled label="Dummy item"></ods-breadcrumb-item>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(false);
  });

  it('should emit an event on click', async() => {
    await setup('<ods-breadcrumb-item label="Dummy item"></ods-breadcrumb-item>');
    const eventSpy = await el.spyOnEvent('odsClick');

    await Promise.all([el.waitForEvent('odsClick'), el.click()]);

    expect(eventSpy).toHaveReceivedEventTimes(1);
  });

  it('should not be clickable if disabled', async() => {
    await setup('<ods-breadcrumb-item is-disabled label="Dummy item"></ods-breadcrumb-item>');
    const eventSpy = await el.spyOnEvent('odsClick');

    await el.click();
    await page.waitForChanges();

    expect(eventSpy).not.toHaveReceivedEvent();
  });
});
