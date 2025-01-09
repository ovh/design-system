import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-drawer navigation', () => {
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();
    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    await page.waitForChanges();
  }

  async function getFocusTagName(): Promise<string | undefined> {
    return await page.evaluate(() => {
      return document.activeElement?.tagName;
    });
  }

  describe('focus', () => {
    it('should focus on focusable element in the drawer', async() => {
      await setup(`
        <ods-drawer is-open>
          <button>Default button</button>
          <input name="input"></input>
        </ods-drawer>`);

      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      expect(await getFocusTagName()).toBe('BUTTON');

      await page.keyboard.press('Tab');
      expect(await getFocusTagName()).toBe('INPUT');
    });
  });
});
