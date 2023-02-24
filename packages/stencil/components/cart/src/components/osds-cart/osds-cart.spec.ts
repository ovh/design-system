jest.mock('@ovhcloud/ods-core/src/components/cart/ods-cart-controller'); // keep jest.mock before any

import {
  OdsCartAttributes,
  OdsCartController,
  OdsCartRoundedList,
  OdsCartSizeList,
  OdsComponentAttributes2StringAttributes,
  odsCartDefaultAttributes
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsCartBaseAttributes,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OsdsCart } from './osds-cart';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-cart', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let slotHeader: HTMLElement | null | undefined;
  let slotEmpty: HTMLElement | null | undefined;
  let slotUnnamed: HTMLElement | null | undefined;
  let instance: OsdsCart;
  let controller: OdsCartController;

  async function setup({ attributes, html }: { attributes?: Partial<OdsCartAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsCartAttributes = OdsCreateAttributes(attributes, odsCartBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartAttributes>(minimalAttributes, odsCartDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsCart],
      html: `<osds-cart ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-cart>`,
    });

    root = page.root;
    instance = page.rootInstance;

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotHeader = page.root.shadowRoot.querySelector('slot[name=header]');
    slotEmpty = page.root.shadowRoot.querySelector('slot[name=empty]');
    slotUnnamed = page.root.shadowRoot.querySelector('slot:not([name])');
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
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('size', () => {
      odsUnitTestAttribute<OdsCartAttributes, 'size'>({
        ...getAttributeContextOptions<OdsCartAttributes, OsdsCart, 'size'>({
          name: 'size',
          list: OdsCartSizeList,
          defaultValue: odsCartDefaultAttributes.size,
          ...config
        })
      });
    });
    describe('flex', () => {
      odsUnitTestAttribute<OdsCartAttributes, 'flex'>({
        ...getAttributeContextOptions<OdsCartAttributes, OsdsCart, 'flex'>({
          name: 'flex',
          list: [false, true],
          defaultValue: odsCartDefaultAttributes.flex,
          ...config
        })
      });
    });
    describe('rounded', () => {
      odsUnitTestAttribute<OdsCartAttributes, 'rounded'>({
        ...getAttributeContextOptions<OdsCartAttributes, OsdsCart, 'rounded'>({
          name: 'rounded',
          list: OdsCartRoundedList,
          defaultValue: odsCartDefaultAttributes.rounded,
          ...config
        })
      });
    });
    describe('collapsed', () => {
      odsUnitTestAttribute<OdsCartAttributes, 'collapsed'>({
        ...getAttributeContextOptions<OdsCartAttributes, OsdsCart, 'collapsed'>({
          name: 'collapsed',
          list: [true, false],
          defaultValue: odsCartDefaultAttributes.collapsed,
          ...config
        })
      });
    });
    describe('collapsible', () => {
      odsUnitTestAttribute<OdsCartAttributes, 'collapsible'>({
        ...getAttributeContextOptions<OdsCartAttributes, OsdsCart, 'collapsible'>({
          name: 'collapsible',
          list: [true, false],
          defaultValue: odsCartDefaultAttributes.collapsible,
          ...config
        })
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
