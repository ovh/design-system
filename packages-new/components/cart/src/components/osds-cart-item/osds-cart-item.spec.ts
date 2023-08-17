jest.mock('./core/controller'); // keep jest.mock before any

import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsCartItemController } from './core/controller';
import { OsdsCartItem } from './osds-cart-item';

describe('spec:osds-cart-item', () => {
  let page: SpecPage;
  let slotSubhead: HTMLElement | null | undefined;
  let slotTitle: HTMLElement | null | undefined;
  let slotPrice: HTMLElement | null | undefined;
  let slotExtra: HTMLElement | null | undefined;
  let controller: OdsCartItemController;

  async function setup() {
    page = await newSpecPage({
      components: [OsdsCartItem],
      html: `<osds-cart-item></osds-cart-item>`,
    });

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotSubhead = page.root?.shadowRoot?.querySelector('slot[name=subhead]');
    slotTitle = page.root?.shadowRoot?.querySelector('slot[name=title]');
    slotPrice = page.root?.shadowRoot?.querySelector('slot[name=price]');
    slotExtra = page.root?.shadowRoot?.querySelector('slot[name=extra]');
    controller = (OdsCartItemController as unknown as jest.SpyInstance<OdsCartItemController, unknown[]>).mock.instances[0];
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    await setup();
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });


  describe('contents', () => {
    it('should have a subhead slot', async () => {
      await setup();
      expect(slotSubhead).toBeTruthy();
    });

    it('should have a title slot', async () => {
      await setup();
      expect(slotTitle).toBeTruthy();
    });

    it('should have a price slot', async () => {
      await setup();
      expect(slotPrice).toBeTruthy();
    });

    it('should have an extra slot', async () => {
      await setup();
      expect(slotExtra).toBeTruthy();
    });
  });

  describe('controller', () => {
    it('should call initCart on init', async () => {
      await setup();
      expect(controller.initCart).toHaveBeenCalledTimes(1);
      expect(controller.initCart).toHaveBeenCalledWith();
    });

    it('should call refreshCart on destroy', async () => {
      await setup();
      page.root?.remove();
      expect(controller.refreshCart).toHaveBeenCalledTimes(1);
      expect(controller.refreshCart).toHaveBeenCalledWith();
    });
  });
});
