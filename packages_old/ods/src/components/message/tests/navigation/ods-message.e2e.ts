import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-message navigation', () => {
  const focusableButtonId = 'focusable-button-id';
  let closeButton: E2EElement;
  let el: E2EElement;
  let page: E2EPage;

  async function getFocusedElementId(): Promise<string | undefined> {
    return page.evaluate(() => {
      return document.activeElement?.id;
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-message');
    closeButton = await page.find('ods-message >>> .ods-message__message__close');
  }

  async function odsMessageFocusedElementClassName(): Promise<string | undefined> {
    return await page.evaluate(() => {
      const message = document.querySelector('ods-message');
      return message?.shadowRoot?.activeElement?.className;
    });
  }

  beforeEach(jest.clearAllMocks);

  it('should focus interactive element on tabulation', async() => {
    await setup(`
      <ods-message>
        <div>
          <p>I am not focusable</p>
          <button id="${focusableButtonId}">I am focusable</button>
        </div>
      </ods-message>
`);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await getFocusedElementId()).toBe(focusableButtonId);
  });

  it('should focus close button on tabulation', async() => {
    await setup('<ods-message></ods-message>');

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await odsMessageFocusedElementClassName()).toContain('ods-message__message__close');
  });

  it('should trigger odsRemove event on "Enter" when close button is focused', async() => {
    await setup('<ods-message></ods-message>');
    const eventSpy = await el.spyOnEvent('odsRemove');

    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEventTimes(1);
  });

  it('should trigger odsRemove event on "Space" when close button is focused', async() => {
    await setup('<ods-message></ods-message>');
    const eventSpy = await el.spyOnEvent('odsRemove');

    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');
    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEventTimes(1);
  });

  it('should trigger odsRemove on close button click', async() => {
    await setup('<ods-message></ods-message>');
    const eventSpy = await el.spyOnEvent('odsRemove');

    await closeButton.click();
    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEventTimes(1);
  });
});
