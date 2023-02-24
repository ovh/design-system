import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsCartFooterItem } from './osds-cart-footer-item';
import {
  OdsCartAttributes,
  odsCartFooterItemDefaultAttributes,
  OdsComponentAttributes2StringAttributes
} from '@ovhcloud/ods-core';
import { OdsStringAttributes2Str } from '@ovhcloud/ods-testing';

describe('spec:osds-cart-footer-item', () => {
  let page: SpecPage;
  let slotSubhead: HTMLElement;
  let slotTitle: HTMLElement;
  let slotPrice: HTMLElement;
  let slotExtra: HTMLElement;

  async function setup({ attributes }: { attributes: Partial<OdsCartAttributes> }) {
    //const minimalAttributes: OdsCartAttributes = OdsCartCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartAttributes>(attributes, odsCartFooterItemDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsCartFooterItem],
      html: `<osds-cart-footer-item ${OdsStringAttributes2Str(stringAttributes)}></osds-cart-footer-item>`,
    });

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotSubhead = page.root.shadowRoot.querySelector('slot[name=subhead]');
    slotTitle = page.root.shadowRoot.querySelector('slot[name=title]');
    slotPrice = page.root.shadowRoot.querySelector('slot[name=price]');
    slotExtra = page.root.shadowRoot.querySelector('slot[name=extra]');
  }

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

});
