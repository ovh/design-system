import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-modal behaviour', () => {
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

  describe('events', () => {
    describe('odsClose', () => {
      it('should trigger when closing', async() => {
        await setup('<ods-modal is-open><ods-text>Hello, world!</ods-text></ods-modal>');
        const closeSpy = await page.spyOnEvent('odsClose');
        const modal = await page.find('ods-modal');

        await modal.callMethod('close');
        await waitForAnimationEnd();

        expect(closeSpy).toHaveReceivedEventTimes(1);
      });

      it('should trigger not when unmounting', async() => {
        await setup('<ods-modal is-open><ods-text>Hello, world!</ods-text></ods-modal>');
        const modalHandle = await page.waitForSelector('ods-modal');
        const modal = await page.find('ods-modal');
        const closeSpy = await modal.spyOnEvent('odsClose');

        await modalHandle?.evaluate((element) => element.remove());
        await page.waitForChanges();

        expect(closeSpy).not.toHaveReceivedEvent();
      });

      it('should not trigger when unmounting if closed', async() => {
        await setup('<ods-modal><ods-text>Hello, world!</ods-text></ods-modal>');
        const modalHandle = await page.waitForSelector('ods-modal');
        const modal = await page.find('ods-modal');
        const closeSpy = await modal.spyOnEvent('odsClose');

        await modalHandle?.evaluate((element) => element.remove());
        await page.waitForChanges();

        expect(closeSpy).not.toHaveReceivedEvent();
      });
    });

    describe('odsOpen', () => {
      it('should trigger when opening', async() => {
        await setup('<ods-modal><ods-text>Hello, world!</ods-text></ods-modal>');
        const openSpy = await page.spyOnEvent('odsOpen');
        const modal = await page.find('ods-modal');

        await modal.callMethod('open');

        expect(openSpy).toHaveReceivedEventTimes(1);
      });
    });
  });

  describe('methods', () => {
    describe('close', () => {
      it('should add a close animation on element close method call', async() => {
        await setup('<ods-modal is-open><ods-text>Hello, world!</ods-text></ods-modal>');
        const modal = await page.find('ods-modal');

        await modal.callMethod('close');
        await page.waitForChanges();

        const closeAnimation = await page.find('ods-modal >>> .ods-modal__dialog--close-animation');

        expect(closeAnimation).not.toBeNull();
      });
    });

    describe('open', () => {
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
    });
  });
});
