import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';

import { OsdsCartFooter } from './osds-cart-footer';

describe('spec:osds-cart-footer', () => {
  let page: SpecPage;
  let slotFooter: HTMLElement | null | undefined;

  async function setup() {
    page = await newSpecPage({
      components: [OsdsCartFooter],
      html: '<osds-cart-footer></osds-cart-footer>',
    });

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotFooter = page.root?.shadowRoot?.querySelector('slot:not([name])');
  }

  it('should render', async() => {
    await setup();
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have an unnamed slot', async() => {
      await setup();
      expect(slotFooter).toBeTruthy();
    });
  });
});
