import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-modal behaviour', () => {
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

  it('should trigger open event when opening', async() => {
    await setup('<ods-modal><ods-text>Hello, world!</ods-text></ods-modal>');
    const openSpy = await page.spyOnEvent('odsOpen');

    const modal = await page.find('ods-modal');
    await modal.callMethod('open');

    expect(openSpy).toHaveReceivedEventTimes(1);
  });

  it('should trigger close event when closing', async() => {
    await setup('<ods-modal is-open><ods-text>Hello, world!</ods-text></ods-modal>');
    const closeSpy = await page.spyOnEvent('odsClose');

    const modal = await page.find('ods-modal');
    await modal.callMethod('close');

    expect(closeSpy).toHaveReceivedEventTimes(1);
  });

  it('should open on element open method call', async() => {
    await setup('<ods-modal><ods-text>Hello, world!</ods-text></ods-modal>');

    const modal = await page.find('ods-modal');
    await modal.callMethod('open');
    await page.waitForChanges();

    const isOpen = await page.evaluate(() => {
      const dialog = document.querySelector('ods-modal')?.shadowRoot?.querySelector('.ods-modal__dialog') as HTMLDialogElement;
      return dialog && dialog.hasAttribute('open');
    });

    expect(isOpen).toBe(true);
  });

  it('should close on element close method call', async() => {
    await setup('<ods-modal is-open><ods-text>Hello, world!</ods-text></ods-modal>');

    const modal = await page.find('ods-modal');
    await modal.callMethod('close');

    await page.waitForChanges();

    const closeAnimation = await page.find('ods-modal >>> .ods-modal__dialog--close-animation');

    expect(closeAnimation).not.toBeNull();
  });
});
