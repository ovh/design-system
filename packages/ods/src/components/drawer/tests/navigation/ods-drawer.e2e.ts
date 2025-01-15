import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';
import { type OdsDrawer } from '../../src';

describe('ods-drawer navigation', () => {
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();
    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    await page.waitForChanges();
  }

  async function getFocusElement(): Promise<Pick<Element, 'tagName' | 'id'>> {
    return await page.evaluate(() => {
      return {
        id: document.activeElement?.id ?? '',
        tagName: document.activeElement?.tagName ?? '',
      };
    });
  }

  describe('focus', () => {
    it('should focus on focusable element in the drawer', async() => {
      await setup(`
        <ods-drawer is-open>
          <button>Default button</button>
          <input name="input"></input>
        </ods-drawer>`);

      expect((await getFocusElement())?.tagName).toBe('BUTTON');

      await page.keyboard.press('Tab');
      await page.waitForChanges();
      expect((await getFocusElement())?.tagName).toBe('INPUT');
    });

    it('should focus on focusable element in the drawer with a trigger button', async() => {
      await setup(`
        <button id="button-trigger-drawer">Trigger Drawer</button>
        <ods-drawer>
          <button id="button-inner-drawer">Default button</button>
          <input name="input"></input>
        </ods-drawer>`);

      await page.evaluate(() => {
        const drawer = document.querySelector('ods-drawer') as HTMLElement & OdsDrawer| null;
        document.querySelector('#button-trigger-drawer')?.addEventListener('click', () => {
          if (drawer?.isOpen) {
            drawer.close();
          } else {
            drawer?.open();
          }
        });
      });

      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForChanges();

      await page.keyboard.press('Tab');
      await page.waitForChanges();

      expect((await getFocusElement())?.tagName).toBe('BUTTON');
      expect((await getFocusElement())?.id).toBe('button-inner-drawer');

      await page.keyboard.press('Tab');
      await page.waitForChanges();
      expect((await getFocusElement())?.tagName).toBe('INPUT');
    });
  });
});
