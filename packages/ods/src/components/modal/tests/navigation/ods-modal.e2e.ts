import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-modal navigation', () => {
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();
    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    await page.waitForChanges();

    await page.evaluate(() => {
      const dialog = document.querySelector('ods-modal')?.shadowRoot?.querySelector('.ods-modal__dialog') as HTMLDialogElement;
      if (dialog) {
        dialog.style.setProperty('animation', 'none');
      }
    });

    await page.waitForChanges();
  }

  it('should focus each interactive element in content on "Tab" press', async() => {
    await setup(`
      <ods-modal is-open>
        <input type="text" id="input1" />
        <button id="button1">Button 1</button>
      </ods-modal>
    `);

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
    `);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    expect(await page.evaluate(() => document.activeElement?.id)).toBe('input1');
  });

  it('should focus the dismissible button first if set', async() => {
    await setup('<ods-modal is-open is-dismissible="true"><ods-text>Hello, world!</ods-text></ods-modal>');

    await page.waitForChanges();

    expect(await page.evaluate(() => {
      return document.activeElement?.shadowRoot?.activeElement?.className === 'ods-modal__dialog__header__close ods-modal__dialog__header__close--information';
    })).toBe(true);
  });

  it('should close the modal on dismissible button click', async() => {
    await setup(`
      <ods-modal is-open>
        <ods-text>Hello, world!</ods-text>
      </ods-modal>
    `);
    const closeSpy = await page.spyOnEvent('odsModalClose');

    const dismissButton = await page.find('ods-modal >>> .ods-modal__dialog__header__close');
    await dismissButton.click();

    await page.waitForChanges();

    expect(closeSpy).toHaveReceivedEventTimes(1);
  });

  it('should close the modal on dismissible button "Enter" press', async() => {
    await setup('<ods-modal is-open is-dismissible="true"><ods-text>Hello, world!</ods-text></ods-modal>');
    const closeSpy = await page.spyOnEvent('odsModalClose');

    const dismissButton = await page.find('ods-modal >>> .ods-modal__dialog__header__close');
    await dismissButton.press('Enter');

    await page.waitForChanges();

    expect(closeSpy).toHaveReceivedEventTimes(1);
  });

  it('should close the modal on dismissible button "Space" press', async() => {
    await setup('<ods-modal is-open is-dismissible="true"><ods-text>Hello, world!</ods-text></ods-modal>');
    const closeSpy = await page.spyOnEvent('odsModalClose');

    const dismissButton = await page.find('ods-modal >>> .ods-modal__dialog__header__close');
    await dismissButton.press('Space');

    expect(closeSpy).toHaveReceivedEventTimes(1);
  });
});
