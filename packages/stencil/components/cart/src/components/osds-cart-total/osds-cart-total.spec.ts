import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsCartTotal } from './osds-cart-total';
import {
  OdsCartTotalAttributes,
  odsCartTotalDefaultAttributes,
  OdsComponentAttributes2StringAttributes
} from '@ovhcloud/ods-core';
import { OdsStringAttributes2Str } from '@ovhcloud/ods-testing';

describe('spec:osds-cart-total', () => {
  let page: SpecPage;
  let slotTotal: HTMLElement;
  let slotInfo: HTMLElement;
  let slotPrice: HTMLElement;
  let slotExtra: HTMLElement;

  async function setup({ attributes }: { attributes: Partial<OdsCartTotalAttributes> }) {
    // const minimalAttributes: OdsCartTotalAttributes = OdsCartTotalCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartTotalAttributes>(attributes, odsCartTotalDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsCartTotal],
      html: `<osds-cart-total ${OdsStringAttributes2Str(stringAttributes)}></osds-cart-total>`,
    });

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotTotal = page.root.shadowRoot.querySelector('slot[name=total]');
    slotInfo = page.root.shadowRoot.querySelector('slot[name=info]');
    slotPrice = page.root.shadowRoot.querySelector('slot[name=price]');
    slotExtra = page.root.shadowRoot.querySelector('slot[name=extra]');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });


  describe('contents', () => {
    it('should have a total slot', async () => {
      await setup({ attributes: {} });
      expect(slotTotal).toBeTruthy();
    });
    it('should have an info slot', async () => {
      await setup({ attributes: {} });
      expect(slotInfo).toBeTruthy();
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
