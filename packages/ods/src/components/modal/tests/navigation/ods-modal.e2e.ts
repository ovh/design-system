import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-modal navigation', () => {
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();
    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    await page.waitForChanges();
  }

  async function waitForAnimationEnd(): Promise<void> {
    await page.evaluate(async() => {
      const dialogElement = document.querySelector('ods-modal')?.shadowRoot?.querySelector('dialog');

      return new Promise<void>((resolve) => {
        function onEnd(): void {
          dialogElement?.removeEventListener('animationend', onEnd);
          resolve();
        }

        dialogElement?.addEventListener('animationend', onEnd);
      });
    });
  }

  it('should focus each interactive element in content on "Tab" press', async() => {
    await setup(`
      <ods-modal is-open>
        <input type="text" id="input1" />
        <button id="button1">Button 1</button>
      </ods-modal>
    `);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    expect(await page.evaluate(() => document.activeElement?.id)).toBe('input1');

    await page.keyboard.press('Tab');

    expect(await page.evaluate(() => document.activeElement?.id)).toBe('button1');
  });

  it('should loop focus inside the modal when tabbing last interactive element', async() => {
    await setup(`
      <ods-modal is-open is-dismissible="false">
        <input type="text" id="input1" />
        <button id="button1">Button 1</button>
      </ods-modal>
      <button id="button2">Button 2</button>
    `);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    expect(await page.evaluate(() => document.activeElement?.id)).not.toBe('button2');
  });

  it('should focus the dismissible button first if set', async() => {
    await setup('<ods-modal is-open is-dismissible="true"><ods-text>Hello, world!</ods-text></ods-modal>');

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await page.evaluate(() => {
      return document.activeElement?.shadowRoot?.activeElement?.getAttribute('icon') === 'xmark';
    })).toBe(true);
  });

  it('should close the modal on dismissible button click', async() => {
    await setup(`
      <ods-modal is-open>
        <ods-text>Hello, world!</ods-text>
      </ods-modal>
    `);
    const closeSpy = await page.spyOnEvent('odsClose');

    const dismissButton = await page.find('ods-modal >>> .ods-modal__dialog__header__close');
    await dismissButton.click();
    await waitForAnimationEnd();

    expect(closeSpy).toHaveReceivedEventTimes(1);
  });

  it('should close the modal on dismissible button "Enter" press', async() => {
    await setup('<ods-modal is-open is-dismissible="true"><ods-text>Hello, world!</ods-text></ods-modal>');
    const closeSpy = await page.spyOnEvent('odsClose');

    await page.keyboard.press('Tab');

    const dismissButton = await page.find('ods-modal >>> .ods-modal__dialog__header__close');
    await dismissButton.press('Enter');
    await waitForAnimationEnd();

    expect(closeSpy).toHaveReceivedEventTimes(1);
  });

  it('should close the modal on dismissible button "Space" press', async() => {
    await setup('<ods-modal is-open is-dismissible="true"><ods-text>Hello, world!</ods-text></ods-modal>');
    const closeSpy = await page.spyOnEvent('odsClose');

    await page.keyboard.press('Tab');

    const dismissButton = await page.find('ods-modal >>> .ods-modal__dialog__header__close');
    await dismissButton.press('Space');
    await waitForAnimationEnd();

    expect(closeSpy).toHaveReceivedEventTimes(1);
  });

  it('shoud close the modal on Escape press', async() => {
    await setup('<ods-modal is-open is-dismissible="true"><ods-text>Hello, world!</ods-text></ods-modal>');

    await page.keyboard.press('Escape');
    await waitForAnimationEnd();

    const isModalOpen = await page.evaluate(() => {
      const dialogElement = document.querySelector('ods-modal')?.shadowRoot?.querySelector('dialog');
      return dialogElement?.hasAttribute('open');
    });

    expect(isModalOpen).toBe(false);
  });

  it('shoud not close the modal on Escape press', async() => {
    await setup('<ods-modal is-open is-dismissible="false"><ods-text>Hello, world!</ods-text></ods-modal>');

    await page.keyboard.press('Escape');
    await waitForAnimationEnd();

    const isModalOpen = await page.evaluate(() => {
      const dialogElement = document.querySelector('ods-modal')?.shadowRoot?.querySelector('dialog');
      return dialogElement?.hasAttribute('open');
    });

    expect(isModalOpen).toBe(true);
  });
});
