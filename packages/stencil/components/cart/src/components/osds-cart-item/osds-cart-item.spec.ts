jest.mock('@ovhcloud/ods-core/src/components/cart-item/ods-cart-item-controller'); // keep jest.mock before any

import {
  OdsCartItemAttributes,
  OdsCartItemController,
  OdsComponentAttributes2StringAttributes,
  odsCartItemDefaultAttributes
} from '@ovhcloud/ods-core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsStringAttributes2Str } from '@ovhcloud/ods-testing';
import { OsdsCartItem } from './osds-cart-item';

describe('spec:osds-cart-item', () => {
  let page: SpecPage;
  let slotSubhead: HTMLElement;
  let slotTitle: HTMLElement;
  let slotPrice: HTMLElement;
  let slotExtra: HTMLElement;
  let controller: OdsCartItemController;

  async function setup({ attributes }: { attributes?: Partial<OdsCartItemAttributes> }) {
    //const minimalAttributes: OdsCartItemAttributes = OdsCartItemCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartItemAttributes>(attributes, odsCartItemDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsCartItem],
      html: `<osds-cart-item ${OdsStringAttributes2Str(stringAttributes)}></osds-cart-item>`,
    });

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotSubhead = page.root.shadowRoot.querySelector('slot[name=subhead]');
    slotTitle = page.root.shadowRoot.querySelector('slot[name=title]');
    slotPrice = page.root.shadowRoot.querySelector('slot[name=price]');
    slotExtra = page.root.shadowRoot.querySelector('slot[name=extra]');
    controller = (OdsCartItemController as unknown as jest.SpyInstance<OdsCartItemController, unknown[]>).mock.instances[0];
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });


  describe('contents', () => {
    it('should have a subhead slot', async () => {
      await setup({ attributes: {} });
      expect(slotSubhead).toBeTruthy();
    });

    it('should have a title slot', async () => {
      await setup({ attributes: {} });
      expect(slotTitle).toBeTruthy();
    });

    it('should have a price slot', async () => {
      await setup({ attributes: {} });
      expect(slotPrice).toBeTruthy();
    });

    it('should have an extra slot', async () => {
      await setup({ attributes: {} });
      expect(slotExtra).toBeTruthy();
    });
  });

  describe('controller', () => {
    it('should call initCart on init', async () => {
      await setup({ attributes: {} });
      expect(controller.initCart).toHaveBeenCalledTimes(1);
      expect(controller.initCart).toHaveBeenCalledWith();
    });

    it('should call refreshCart on destroy', async () => {
      await setup({ attributes: {} });
      page.root?.remove();
      expect(controller.refreshCart).toHaveBeenCalledTimes(1);
      expect(controller.refreshCart).toHaveBeenCalledWith();
    });
  });
});
