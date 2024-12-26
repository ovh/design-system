import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-drawer behaviour', () => {
  let dialog: E2EElement;
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();
    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    await page.waitForChanges();

    el = await page.find('ods-drawer');
    dialog = await page.find('ods-drawer >>> dialog');
  }

  it('should render the web component', async() => {
    await setup(`
      <ods-drawer is-open>
        <ods-text>Hello, world!</ods-text>
      </ods-drawer>
    `);

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('isOpen', () => {
    it('should not display drawer by default', async() => {
      await setup(`
        <ods-drawer>
          <ods-text>Hello, world!</ods-text>
        </ods-drawer>
      `);

      expect(await dialog.getProperty('open')).toBe(false);
    });

    it('should display drawer if set to true', async() => {
      await setup(`
        <ods-drawer is-open>
          <ods-text>Hello, world!</ods-text>
        </ods-drawer>
      `);

      expect(await dialog.getProperty('open')).toBe(true);
    });
  });

  describe('position', () => {
    it('should render drawer on the left by default', async() => {
      await setup(`
        <ods-drawer is-open>
          <ods-text>Hello, world!</ods-text>
        </ods-drawer>
      `);

      expect(dialog.classList.contains('ods-drawer__dialog--left')).toBe(true);
    });

    it('should render drawer on the left', async() => {
      await setup(`
        <ods-drawer is-open position="left">
          <ods-text>Hello, world!</ods-text>
        </ods-drawer>
      `);

      expect(dialog.classList.contains('ods-drawer__dialog--left')).toBe(true);
    });

    it('should render drawer on the right', async() => {
      await setup(`
        <ods-drawer is-open position="right">
          <ods-text>Hello, world!</ods-text>
        </ods-drawer>
      `);

      expect(dialog.classList.contains('ods-drawer__dialog--right')).toBe(true);
    });

    it('should render drawer on the top', async() => {
      await setup(`
        <ods-drawer is-open position="top">
          <ods-text>Hello, world!</ods-text>
        </ods-drawer>
      `);

      expect(dialog.classList.contains('ods-drawer__dialog--top')).toBe(true);
    });

    it('should render drawer on the bottom', async() => {
      await setup(`
        <ods-drawer is-open position="bottom">
          <ods-text>Hello, world!</ods-text>
        </ods-drawer>
      `);

      expect(dialog.classList.contains('ods-drawer__dialog--bottom')).toBe(true);
    });
  });
  describe('slots', () => {
    it('should render content slot', async() => {
      await setup(`
        <ods-drawer>
          <div class="test-content">Content</div>
        </ods-drawer>
      `);

      const content = await el.find('.test-content');
      expect(content).not.toBeNull();
    });
  });

});
