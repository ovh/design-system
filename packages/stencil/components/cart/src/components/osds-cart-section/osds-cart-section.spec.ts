import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsCartSection } from './osds-cart-section';
import {
  OdsCartSectionAttributes,
  odsCartSectionDefaultAttributes,
  OdsComponentAttributes2StringAttributes
} from '@ovhcloud/ods-core';
import { OdsStringAttributes2Str } from '@ovhcloud/ods-testing';

describe('spec:osds-cart-section', () => {
  let page: SpecPage;
  let slotSection: HTMLElement;

  async function setup({ attributes }: { attributes: Partial<OdsCartSectionAttributes> }) {
    // const minimalAttributes: OdsCartSectionAttributes = OdsCartSectionCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartSectionAttributes>(attributes, odsCartSectionDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsCartSection],
      html: `<osds-cart-section ${OdsStringAttributes2Str(stringAttributes)}></osds-cart-section>`,
    });

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotSection = page.root.shadowRoot.querySelector('slot:not([name])');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });


  describe('contents', () => {
    it('should have an unnamed slot', async () => {
      await setup({ attributes: {} });
      expect(slotSection).toBeTruthy();
    });
  });

});
