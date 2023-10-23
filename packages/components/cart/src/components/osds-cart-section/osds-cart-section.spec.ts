import type {SpecPage} from '@stencil/core/testing';
import {newSpecPage} from '@stencil/core/testing';
import {OsdsCartSection} from './osds-cart-section';

describe('spec:osds-cart-section', () => {
  let page: SpecPage;
  let slotSection: HTMLElement | null | undefined;

  async function setup() {
    page = await newSpecPage({
      components: [OsdsCartSection],
      html: '<osds-cart-section></osds-cart-section>',
    });

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotSection = page.root?.shadowRoot?.querySelector('slot:not([name])');
  }

  it('should render', async() => {
    await setup();
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have an unnamed slot', async() => {
      await setup();
      expect(slotSection).toBeTruthy();
    });
  });
});
