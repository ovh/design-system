import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';

import { OsdsCartTotal } from './osds-cart-total';

describe('spec:osds-cart-total', () => {
  let page: SpecPage;
  let slotTotal: HTMLElement | null | undefined;
  let slotInfo: HTMLElement | null | undefined;
  let slotPrice: HTMLElement | null | undefined;
  let slotExtra: HTMLElement | null | undefined;

  async function setup() {
    page = await newSpecPage({
      components: [OsdsCartTotal],
      html: '<osds-cart-total></osds-cart-total>',
    });

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotTotal = page.root?.shadowRoot?.querySelector('slot[name=total]');
    slotInfo = page.root?.shadowRoot?.querySelector('slot[name=info]');
    slotPrice = page.root?.shadowRoot?.querySelector('slot[name=price]');
    slotExtra = page.root?.shadowRoot?.querySelector('slot[name=extra]');
  }

  it('should render', async() => {
    await setup();
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a total slot', async() => {
      await setup();
      expect(slotTotal).toBeTruthy();
    });

    it('should have an info slot', async() => {
      await setup();
      expect(slotInfo).toBeTruthy();
    });

    it('should have a price slot', async() => {
      await setup();
      expect(slotPrice).toBeTruthy();
    });

    it('should have an extra slot', async() => {
      await setup();
      expect(slotExtra).toBeTruthy();
    });
  });
});
