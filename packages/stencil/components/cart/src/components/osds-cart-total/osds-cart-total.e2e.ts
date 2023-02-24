import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsCartTotalAttributes,
  OdsComponentAttributes2StringAttributes,
  OdsLogger,
  odsCartTotalDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsCartTotalBaseAttributes } from '@ovhcloud/ods-testing';

const logger = new OdsLogger('osds-cart-total-e2e');

describe('e2e:osds-cart-total', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes, html }: { attributes: Partial<OdsCartTotalAttributes>, html: string }) {
    const minimalAttributes: OdsCartTotalAttributes = OdsCreateAttributes(attributes, odsCartTotalBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartTotalAttributes>(minimalAttributes, odsCartTotalDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-cart-total ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-cart-total>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-cart-total');

    const root = await page.find('osds-cart-total');
    const activeElId = await page.evaluate(() => document);
    logger.log(activeElId);
    logger.log(root);
  }

  it('should render', async () => {
    await setup({ attributes: { }, html: `` })
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

});
