import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-tag navigation', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isFocused(): Promise<boolean> {
    return await page.evaluate(() => {
      const element = document.querySelector('ods-tag');
      return document.activeElement === element;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-tag');
  }

  beforeEach(jest.clearAllMocks);

  it('should be focused on tabulation', async() => {
    await setup('<ods-tag label="Dummy tag"></ods-tag>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(true);
  });

  it('should not be focusable if disabled', async() => {
    await setup('<ods-tag is-disabled label="Dummy tag"></ods-tag>');

    expect(await isFocused()).toBe(false);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await isFocused()).toBe(false);
  });

  it('should trigger on "Enter" when focused with empty id', async() => {
    await setup('<ods-tag label="Dummy tag"></ods-tag>');
    const eventSpy = await el.spyOnEvent('odsRemove');

    await page.keyboard.press('Tab');
    await page.waitForChanges();
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEventTimes(1);
    expect(eventSpy).toHaveReceivedEventDetail({ id: '' });
  });

  it('should trigger on "Enter" when focused with element id', async() => {
    const dummyId = 'dummy-id';
    await setup(`<ods-tag label="Dummy tag" id="${dummyId}"></ods-tag>`);
    const eventSpy = await el.spyOnEvent('odsRemove');

    await page.keyboard.press('Tab');
    await page.waitForChanges();
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEventTimes(1);
    expect(eventSpy).toHaveReceivedEventDetail({ id: dummyId });
  });

  it('should trigger on "Space" when focused with empty id', async() => {
    await setup('<ods-tag label="Dummy tag"></ods-tag>');
    const eventSpy = await el.spyOnEvent('odsRemove');

    await page.keyboard.press('Tab');
    await page.waitForChanges();
    await page.keyboard.press('Space');
    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEventTimes(1);
    expect(eventSpy).toHaveReceivedEventDetail({ id: '' });
  });

  it('should trigger on "Space" when focused with element id', async() => {
    const dummyId = 'dummy-id';
    await setup(`<ods-tag label="Dummy tag" id="${dummyId}"></ods-tag>`);
    const eventSpy = await el.spyOnEvent('odsRemove');

    await page.keyboard.press('Tab');
    await page.waitForChanges();
    await page.keyboard.press('Space');
    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEventTimes(1);
    expect(eventSpy).toHaveReceivedEventDetail({ id: dummyId });
  });

  it('should emit an event on click with empty id', async() => {
    await setup('<ods-tag label="Dummy tag"></ods-tag>');
    const eventSpy = await el.spyOnEvent('odsRemove');

    await Promise.all([el.waitForEvent('odsRemove'), el.click()]);

    expect(eventSpy).toHaveReceivedEventTimes(1);
    expect(eventSpy).toHaveReceivedEventDetail({ id: '' });
  });

  it('should emit an event on click with element id', async() => {
    const dummyId = 'dummy-id';
    await setup(`<ods-tag label="Dummy tag" id="${dummyId}"></ods-tag>`);
    const eventSpy = await el.spyOnEvent('odsRemove');

    await Promise.all([el.waitForEvent('odsRemove'), el.click()]);

    expect(eventSpy).toHaveReceivedEventTimes(1);
    expect(eventSpy).toHaveReceivedEventDetail({ id: dummyId });
  });

  it('should not be clickable if disabled', async() => {
    await setup('<ods-tag is-disabled label="Dummy tag"></ods-tag>');
    const eventSpy = await el.spyOnEvent('odsRemove');

    await el.click();
    await page.waitForChanges();

    expect(eventSpy).not.toHaveReceivedEvent();
  });
});
