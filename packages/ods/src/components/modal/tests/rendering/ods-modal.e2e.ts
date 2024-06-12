import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-modal rendering', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    await page.waitForChanges();

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-modal');

    await page.evaluate(() => {
      const dialog = document.querySelector('ods-modal')?.shadowRoot?.querySelector('.ods-modal__dialog') as HTMLDialogElement;
      dialog.style.setProperty('animation', 'none');
    });

    await page.waitForChanges();
  }

  it('should render the web component', async() => {
    await setup(`
      <ods-modal is-open>
        <ods-text>Hello, world!</ods-text>
      </ods-modal>
    `);

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('color', () => {
    it('should render with different headline color', async() => {
      await setup(`
        <ods-modal is-open color="warning">
          <ods-text>Hello, world!</ods-text>
        </ods-modal>
      `);

      const header = await page.find('ods-modal >>> .ods-modal__dialog__header--warning');

      expect(header).not.toBeNull();
    });
  });

  describe('isDismissible', () => {
    it('should render with close button by default', async() => {
      await setup(`
        <ods-modal is-open>
          <ods-text>Hello, world!</ods-text>
        </ods-modal>
      `);

      const closeButton = await page.find('ods-modal >>> .ods-modal__dialog__header__close');

      expect(closeButton).not.toBeNull();
    });

    it('should render without close button if set to false', async() => {
      await setup(`
        <ods-modal is-open is-dismissible="false">
          <ods-text>Hello, world!</ods-text>
        </ods-modal>
      `);

      const closeButton = await page.find('ods-modal >>> .ods-modal__dialog__header__close');

      expect(closeButton).toBeNull();
    });
  });

  describe('isOpen', () => {
    it('should not display modal by default', async() => {
      await setup(`
        <ods-modal>
          <ods-text>Hello, world!</ods-text>
        </ods-modal>
      `);

      const isVisible = await page.evaluate(() => {
        const dialog = document.querySelector('ods-modal')?.shadowRoot?.querySelector('.ods-modal__dialog') as HTMLDialogElement;
        return dialog && dialog.hasAttribute('open');
      });

      expect(isVisible).toBe(false);
    });

    it('should display modal if set to true', async() => {
      await setup(`
        <ods-modal is-open>
          <ods-text>Hello, world!</ods-text>
        </ods-modal>
      `);

      const isVisible = await page.evaluate(() => {
        const dialog = document.querySelector('ods-modal')?.shadowRoot?.querySelector('.ods-modal__dialog') as HTMLDialogElement;
        return dialog && dialog.hasAttribute('open');
      });

      expect(isVisible).toBe(true);
    });

    it('should set body overflow to hidden if set to true', async() => {
      await setup(`
        <ods-modal is-open>
          <ods-text>Hello, world!</ods-text>
        </ods-modal>
      `);

      const hasOverflowHiden = await page.evaluate(() => {
        const body = document.querySelector('body') as HTMLElement;
        return body && body.style.overflow === 'hidden';
      });

      expect(hasOverflowHiden).toBe(true);
    });

    it('should have not a bounding box if unset', async() => {
      await setup(`
        <ods-modal>
          <ods-text>Hello, world!</ods-text>
        </ods-modal>
      `);

      const boundingBox = await page.evaluate(() => {
        const dialog = document.querySelector('ods-modal')?.shadowRoot?.querySelector('.ods-modal__dialog') as HTMLDialogElement;
        const rect = dialog?.getBoundingClientRect();
        return rect ? { height: rect.height, width: rect.width } : null;
      });

      expect(boundingBox?.height).toBe(0);
      expect(boundingBox?.width).toBe(0);
    });

    it('should have a bounding box if set to true', async() => {
      await setup(`
        <ods-modal is-open>
          <ods-text>Hello, world!</ods-text>
        </ods-modal>
      `);

      const boundingBox = await page.evaluate(() => {
        const dialog = document.querySelector('ods-modal')?.shadowRoot?.querySelector('.ods-modal__dialog') as HTMLDialogElement;
        const rect = dialog?.getBoundingClientRect();
        return rect ? { height: rect.height, width: rect.width } : null;
      });

      expect(boundingBox?.height).toBeGreaterThan(0);
      expect(boundingBox?.width).toBeGreaterThan(0);
    });
  });

  describe('slots', () => {
    it('should render content slot', async() => {
      await setup(`
        <ods-modal>
          <div class="test-content">Content</div>
        </ods-modal>
      `);

      const content = await el.find('.test-content');
      expect(content).not.toBeNull();
    });

    it('should not render actions slot if not set', async() => {
      await setup(`
        <ods-modal>
          <div class="test-content">Content</div>
        </ods-modal>
      `);

      const actionsSlot = await el.find('slot[name="actions"]');
      expect(actionsSlot).toBeNull();
    });

    it('should render actions slot if set', async() => {
      await setup(`
        <ods-modal>
          <button slot="actions" class="test-actions">Actions</button>
        </ods-modal>
      `);

      const actions = await el.find('.test-actions');
      expect(actions).not.toBeNull();
    });
  });
});
