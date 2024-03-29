import type { SpecPage } from '@stencil/core/testing';

import { newSpecPage } from '@stencil/core/testing';

import { OsdsCartItemOption } from './osds-cart-item-option';

describe('spec:osds-cart-item-option', () => {
  let page: SpecPage;
  let slotSubhead: HTMLElement | null | undefined;
  let slotTitle: HTMLElement | null | undefined;
  let slotPrice: HTMLElement | null | undefined;
  let slotExtra: HTMLElement | null | undefined;

  async function setup() {
    page = await newSpecPage({
      components: [OsdsCartItemOption],
      html: '<osds-cart-item-option></osds-cart-item-option>',
    });

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotSubhead = page.root?.shadowRoot?.querySelector('slot[name=subhead]');
    slotTitle = page.root?.shadowRoot?.querySelector('slot[name=title]');
    slotPrice = page.root?.shadowRoot?.querySelector('slot[name=price]');
    slotExtra = page.root?.shadowRoot?.querySelector('slot[name=extra]');
  }

  it('should render', async() => {
    await setup();
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });


  describe('contents', () => {
    it('should have a subhead slot', async() => {
      await setup();
      expect(slotSubhead).toBeTruthy();
    });

    it('should have an title slot', async() => {
      await setup();
      expect(slotTitle).toBeTruthy();
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
