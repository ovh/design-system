import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';
import { type ElementHandle } from 'puppeteer';
import { type OdsDrawer } from '../../src';

describe('ods-drawer behaviour', () => {
  let drawer: E2EElement;
  let drawerHandle: ElementHandle<HTMLElement & OdsDrawer>;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();
    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    await page.waitForChanges();

    drawerHandle = await page.waitForSelector('ods-drawer') as unknown as ElementHandle<HTMLElement & OdsDrawer>;
    drawer = await page.find('ods-drawer');
  }

  function isOpen(): Promise<boolean> {
    return page.evaluate(() => {
      const dialog = document.querySelector('ods-drawer')?.shadowRoot?.querySelector('.ods-drawer__dialog') as HTMLDialogElement;
      return dialog && dialog.hasAttribute('open');
    });
  }

  async function waitForAnimationEnd(): Promise<void> {
    await page.evaluate(async() => {
      const dialogElement = document.querySelector('ods-drawer')?.shadowRoot?.querySelector('dialog');

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
        await setup('<ods-drawer is-open><ods-text>Hello, world!</ods-text></ods-drawer>');
        const closeSpy = await page.spyOnEvent('odsClose');

        await drawer.callMethod('close');
        await waitForAnimationEnd();

        expect(closeSpy).toHaveReceivedEventTimes(1);
      });

      it('should trigger not when unmounting', async() => {
        await setup('<ods-drawer is-open><ods-text>Hello, world!</ods-text></ods-drawer>');
        const closeSpy = await drawer.spyOnEvent('odsClose');

        await drawerHandle?.evaluate((element) => element.remove());
        await page.waitForChanges();

        expect(closeSpy).not.toHaveReceivedEvent();
      });

      it('should not trigger when unmounting if closed', async() => {
        await setup('<ods-drawer><ods-text>Hello, world!</ods-text></ods-drawer>');
        const closeSpy = await drawer.spyOnEvent('odsClose');

        await drawerHandle?.evaluate((element) => element.remove());
        await page.waitForChanges();

        expect(closeSpy).not.toHaveReceivedEvent();
      });
    });

    describe('odsOpen', () => {
      it('should trigger when opening', async() => {
        await setup('<ods-drawer><ods-text>Hello, world!</ods-text></ods-drawer>');
        const openSpy = await page.spyOnEvent('odsOpen');

        await drawer.callMethod('open');

        expect(openSpy).toHaveReceivedEventTimes(1);
      });
    });
  });

  describe('methods', () => {
    describe('close', () => {
      it('should add a close animation on element close method call', async() => {
        await setup('<ods-drawer position="left" is-open><ods-text>Hello, world!</ods-text></ods-drawer>');

        await drawer.callMethod('close');
        await page.waitForChanges();

        const closeAnimation = await page.find('ods-drawer >>> .ods-drawer__dialog--close-animation--left');

        expect(closeAnimation).not.toBeNull();
      });
    });

    describe('open', () => {
      it('should open on element open method call', async() => {
        await setup('<ods-drawer><ods-text>Hello, world!</ods-text></ods-drawer>');

        await drawer.callMethod('open');
        await page.waitForChanges();

        expect(await isOpen()).toBe(true);
      });
    });
  });

  describe('backdrop', () => {
    it('should open & close trigger click', async() => {
      await setup('<button id="button-trigger-drawer">Trigger Drawer</button><ods-drawer position="right"><ods-text>Hello, world!</ods-text></ods-drawer>');

      await page.evaluate(() => {
        const drawer = document.querySelector('ods-drawer') as HTMLElement & OdsDrawer | null;
        document.querySelector('#button-trigger-drawer')?.addEventListener('click', () => {
          if (drawer?.isOpen) {
            drawer.close();
          } else {
            drawer?.open();
          }
        });
      });
      const button = await page.find('#button-trigger-drawer');

      await button.click();
      await page.waitForChanges();

      expect(await isOpen()).toBe(true);

      await button.click();
      await waitForAnimationEnd();

      expect(await isOpen()).toBe(false);
    });
  });
});
