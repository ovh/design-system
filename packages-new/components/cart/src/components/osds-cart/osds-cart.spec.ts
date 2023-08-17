jest.mock('./core/controller'); // keep jest.mock before any

import type { SpecPage } from '@stencil/core/testing';
import type { OdsCartAttribute } from './interfaces/attributes';
import { newSpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_CART_ROUNDED } from './constants/cart-rounded';
import { ODS_CART_SIZE } from './constants/cart-size';
import { OdsCartController } from './core/controller';
import { OsdsCart } from './osds-cart';

describe('spec:osds-cart', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let slotHeader: HTMLElement | null | undefined;
  let slotEmpty: HTMLElement | null | undefined;
  let slotUnnamed: HTMLElement | null | undefined;
  let instance: OsdsCart;
  let controller: OdsCartController;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsCartAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCartAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsCart],
      html: `<osds-cart ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-cart>`,
    });

    root = page.root;
    instance = page.rootInstance;

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotHeader = page.root?.shadowRoot?.querySelector('slot[name=header]');
    slotEmpty = page.root?.shadowRoot?.querySelector('slot[name=empty]');
    slotUnnamed = page.root?.shadowRoot?.querySelector('slot:not([name])');
    controller = (OdsCartController as unknown as jest.SpyInstance<OdsCartController, unknown[]>).mock.instances[0];
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    await setup({ attributes: {}, html: '' });
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a header slot', async () => {
      await setup({ attributes: {}, html: '' });
      expect(slotHeader).toBeTruthy();
    });

    it('should have an empty slot if no sections specified', async () => {
      await setup({ attributes: {}, html: '' });
      expect(slotEmpty).toBeTruthy();
    });

    it('should have content in unnamed slot if specified content is in slot without name', async () => {
      await setup({
        attributes: {}, html: `
        <osds-cart-section>
            <osds-cart-item></osds-cart-item>
        </osds-cart-section>
      `
      });

      expect(slotUnnamed).toBeTruthy();
    });
  });


  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('size', () => {
      odsUnitTestAttribute<OdsCartAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_CART_SIZE.sm,
        value: ODS_CART_SIZE.sm,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsCartAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        ...config,
      });
    });

    describe('rounded', () => {
      odsUnitTestAttribute<OdsCartAttribute, 'rounded'>({
        name: 'rounded',
        defaultValue: DEFAULT_ATTRIBUTE.rounded,
        newValue: ODS_CART_ROUNDED.all,
        value: ODS_CART_ROUNDED.top,
        setup: (value) => setup({ attributes: { ['rounded']: value } }),
        ...config,
      });
    });

    describe('collapsed', () => {
      odsUnitTestAttribute<OdsCartAttribute, 'collapsed'>({
        name: 'collapsed',
        defaultValue: DEFAULT_ATTRIBUTE.collapsed,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['collapsed']: value } }),
        ...config,
      });
    });

    describe('collapsible', () => {
      odsUnitTestAttribute<OdsCartAttribute, 'collapsible'>({
        name: 'collapsible',
        defaultValue: DEFAULT_ATTRIBUTE.collapsible,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['collapsible']: value } }),
        ...config,
      });
    });
  });

  describe('controller', () => {
    it('should call updateCartHeaderState when collapsible change', async () => {
      await setup();
      expect(controller.updateCartHeaderState).not.toHaveBeenCalled();

      root?.setAttribute('collapsible', '');

      await page.waitForChanges();
      expect(controller.updateCartHeaderState).toHaveBeenCalledTimes(1);
      expect(controller.updateCartHeaderState).toHaveBeenCalledWith();
    });

    it('should call computeItemQuantity from getItemQuantity method', async () => {
      await setup();
      await instance.getItemQuantity();
      // Called twice (1 from method, 1 from template conditional display)
      expect(controller.computeItemQuantity).toHaveBeenCalledTimes(2);
      expect(controller.computeItemQuantity).toHaveBeenCalledWith();
    });
  });
});
