import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OdsCartAttributes, odsCartFooterDefaultAttributes, OdsComponentAttributes2StringAttributes } from '@ovhcloud/ods-core';
import { OdsStringAttributes2Str } from '@ovhcloud/ods-testing';
import { OsdsCartFooter } from './osds-cart-footer';

describe('spec:osds-cart-footer', () => {
  let page: SpecPage;
  let slotFooter: HTMLElement;

  async function setup({ attributes }: { attributes: Partial<OdsCartAttributes> }) {
    // const minimalAttributes: OdsCartAttributes = OdsCartCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartAttributes>(attributes, odsCartFooterDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsCartFooter],
      html: `<osds-cart-footer ${OdsStringAttributes2Str(stringAttributes)}></osds-cart-footer>`,
    });

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotFooter = page.root.shadowRoot.querySelector('slot:not([name])');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });


  describe('contents', () => {
    it('should have an unnamed slot', async () => {
      await setup({ attributes: {} });
      expect(slotFooter).toBeTruthy();
    });
  });

});
