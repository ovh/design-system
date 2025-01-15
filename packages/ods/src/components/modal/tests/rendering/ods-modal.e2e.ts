import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-modal rendering', () => {
  let el: E2EElement;
  let dialog: E2EElement;
  let page: E2EPage;
  const MOBILE_WIDTH = 360;
  const MOBILE_HEIGHT = 800;

  async function handlerSetup(content: string, customStyle?: string): Promise<void> {
    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    await page.waitForChanges();

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-modal');
    dialog = await page.find('ods-modal >>> dialog');

    await page.evaluate(() => {
      const dialog = document.querySelector('ods-modal')?.shadowRoot?.querySelector('.ods-modal__dialog') as HTMLDialogElement;
      dialog.style.setProperty('animation', 'none');
    });

    await page.waitForChanges();
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await handlerSetup(content, customStyle);
  }

  async function setupMobile(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setViewport({
      height: MOBILE_HEIGHT,
      width: MOBILE_WIDTH,
    });

    await handlerSetup(content, customStyle);
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

    it('should not have a bounding box if unset', async() => {
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

  describe('modal size', () => {
    const MODAL_MARGIN = 16;
    describe('mobile', () => {

      it('should render modal on mobile', async() => {
        await setupMobile(`
          <ods-modal is-open>
          <div class="test-content">Content</div>
          </ods-modal>
          `);
        const computedStyle = await dialog.getComputedStyle();
        expect(computedStyle.height).toBe('100px');
        expect(computedStyle.width).toBe(`${MOBILE_WIDTH - (MODAL_MARGIN * 2)}px`);
      });

      it('should render modal on mobile with scroll', async() => {
        /* eslint-disable max-len */
        await setupMobile(`
          <ods-modal is-open>
            <div class="test-content">Lorem ipsum odor amet, consectetuer adipiscing elit. Lacus placerat metus fames tellus; porta senectus. Ad fringilla libero purus ante vulputate sollicitudin felis interdum nam. Etiam lacus porta egestas leo fringilla ligula volutpat. Semper imperdiet pharetra porta auctor massa finibus malesuada. Nam non litora maximus vestibulum lacinia porta; mauris mattis imperdiet.
            Massa mus hac eros vitae semper hendrerit mollis taciti. Blandit montes congue diam ante magna faucibus semper. Et montes rutrum; laoreet molestie fermentum efficitur. Vulputate mus odio nam placerat malesuada curabitur placerat justo. Per ornare etiam suspendisse efficitur senectus dui cras. Nibh nibh sit dis mollis amet nam dolor sollicitudin. Elit odio nostra montes dictum per.
            Semper habitasse interdum morbi proin enim interdum proin varius. Netus dictumst semper duis rutrum metus placerat eu. Pulvinar mus interdum aenean lectus habitasse fringilla? Dolor ex netus sapien tempus tincidunt conubia. Nec vestibulum praesent dolor porttitor malesuada primis. Cursus vestibulum curae nullam sodales lacinia lacus. Mi fringilla adipiscing mus eleifend luctus bibendum litora. Ullamcorper penatibus nec eget tincidunt magna.
            Torquent lacus etiam; duis montes pulvinar consectetur eu eros. Dictum auctor enim semper dictumst curabitur imperdiet pretium feugiat. Ornare lobortis tempus fames commodo tempus nulla vehicula. Litora senectus netus neque convallis diam posuere. Consequat etiam aenean rhoncus tristique montes hendrerit porta odio magnis. Habitant finibus turpis habitasse class quam ultricies. Quam nascetur convallis ornare sapien pretium porttitor. Massa etiam laoreet litora semper nascetur. Potenti vel accumsan, natoque arcu aenean vehicula.
            Habitant finibus nostra suspendisse ridiculus commodo. Semper sit euismod himenaeos volutpat tristique elementum. Nam senectus curae iaculis massa morbi natoque? Cras mus erat nulla facilisis natoque dapibus. Magnis ex himenaeos netus aliquam, ornare vitae lobortis inceptos interdum. Aaliquam lorem nisi primis ad pulvinar. Orci placerat curabitur lobortis tellus cras lacus vel enim.</div>
          </ods-modal>
          `);
        /* eslint-enable max-len*/

        const computedStyle = await dialog.getComputedStyle();
        expect(computedStyle.height).toBe(`${MOBILE_HEIGHT - (MODAL_MARGIN * 2)}px`);
        expect(computedStyle.width).toBe(`${MOBILE_WIDTH - (MODAL_MARGIN * 2)}px`);
      });
    });

    const MODAL_DEFAULT_SIZE = '512px';
    describe('destop', () => {
      it('should render modal', async() => {
        await setup(`
          <ods-modal is-open>
            <div class="test-content">Content</div>
          </ods-modal>
        `);
        const computedStyle = await dialog.getComputedStyle();
        expect(computedStyle.height).toBe('100px');
        expect(computedStyle.width).toBe(MODAL_DEFAULT_SIZE);
      });

      it('should render modal with scroll', async() => {
        /* eslint-disable max-len */
        await setup(`
          <ods-modal is-open>
          <div class="test-content">Lorem ipsum odor amet, consectetuer adipiscing elit. Lacus placerat metus fames tellus; porta senectus. Ad fringilla libero purus ante vulputate sollicitudin felis interdum nam. Etiam lacus porta egestas leo fringilla ligula volutpat. Semper imperdiet pharetra porta auctor massa finibus malesuada. Nam non litora maximus vestibulum lacinia porta; mauris mattis imperdiet.
          Massa mus hac eros vitae semper hendrerit mollis taciti. Blandit montes congue diam ante magna faucibus semper. Et montes rutrum; laoreet molestie fermentum efficitur. Vulputate mus odio nam placerat malesuada curabitur placerat justo. Per ornare etiam suspendisse efficitur senectus dui cras. Nibh nibh sit dis mollis amet nam dolor sollicitudin. Elit odio nostra montes dictum per.
          Semper habitasse interdum morbi proin enim interdum proin varius. Netus dictumst semper duis rutrum metus placerat eu. Pulvinar mus interdum aenean lectus habitasse fringilla? Dolor ex netus sapien tempus tincidunt conubia. Nec vestibulum praesent dolor porttitor malesuada primis. Cursus vestibulum curae nullam sodales lacinia lacus. Mi fringilla adipiscing mus eleifend luctus bibendum litora. Ullamcorper penatibus nec eget tincidunt magna.
          Torquent lacus etiam; duis montes pulvinar consectetur eu eros. Dictum auctor enim semper dictumst curabitur imperdiet pretium feugiat. Ornare lobortis tempus fames commodo tempus nulla vehicula. Litora senectus netus neque convallis diam posuere. Consequat etiam aenean rhoncus tristique montes hendrerit porta odio magnis. Habitant finibus turpis habitasse class quam ultricies. Quam nascetur convallis ornare sapien pretium porttitor. Massa etiam laoreet litora semper nascetur. Potenti vel accumsan, natoque arcu aenean vehicula.
          Habitant finibus nostra suspendisse ridiculus commodo. Semper sit euismod himenaeos volutpat tristique elementum. Nam senectus curae iaculis massa morbi natoque? Cras mus erat nulla facilisis natoque dapibus. Magnis ex himenaeos netus aliquam, ornare vitae lobortis inceptos interdum. Aaliquam lorem nisi primis ad pulvinar. Orci placerat curabitur lobortis tellus cras lacus vel enim.</div>
          </ods-modal>
          `);
        /* eslint-enable max-len*/

        const computedStyle = await dialog.getComputedStyle();
        expect(computedStyle.height).toBe(MODAL_DEFAULT_SIZE);
        expect(computedStyle.width).toBe(MODAL_DEFAULT_SIZE);
      });

      it('should render modal with min width', async() => {
        await setup(`
          <ods-modal is-open class="my-modal">
            <div class="test-content">Content</div>
          </ods-modal>
        `, '.my-modal::part(dialog) { width: 100px; }');
        const computedStyle = await dialog.getComputedStyle();
        expect(computedStyle.height).toBe('100px');
        expect(computedStyle.width).toBe('320px');
      });

      it('should render modal with big width', async() => {
        await setup(`
          <ods-modal is-open class="my-modal">
            <div class="test-content">Content</div>
          </ods-modal>
        `, '.my-modal::part(dialog) { width: 100000px; }');
        const computedStyle = await dialog.getComputedStyle();
        expect(computedStyle.height).toBe('100px');
        expect(computedStyle.width).toBe(MODAL_DEFAULT_SIZE);
      });

      it('should render modal with custom css height', async() => {
        await setup(`
          <ods-modal is-open class="my-modal">
            <div class="test-content">Content</div>
          </ods-modal>
        `, '.my-modal::part(dialog) { height: 200px; }');
        const computedStyle = await dialog.getComputedStyle();
        expect(computedStyle.height).toBe('200px');
        expect(computedStyle.width).toBe(MODAL_DEFAULT_SIZE);
      });

      it('should render modal with big height', async() => {
        await setup(`
          <ods-modal is-open class="my-modal">
            <div class="test-content">Content</div>
          </ods-modal>
        `, '.my-modal::part(dialog) { height: 10000px; }');
        const computedStyle = await dialog.getComputedStyle();
        expect(computedStyle.height).toBe(MODAL_DEFAULT_SIZE);
        expect(computedStyle.width).toBe(MODAL_DEFAULT_SIZE);
      });
    });
  });
});
