import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsCartFooterItemAttributes,
  OdsComponentAttributes2StringAttributes,
  OdsLogger,
  odsCartFooterItemDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsCartFooterItemBaseAttributes } from '@ovhcloud/ods-testing';

const logger = new OdsLogger('osds-cart-footer-item-e2e');

describe('e2e:osds-cart-footer-item', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes, html }: { attributes: Partial<OdsCartFooterItemAttributes>, html: string }) {
    const minimalAttributes: OdsCartFooterItemAttributes = OdsCreateAttributes(attributes, odsCartFooterItemBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartFooterItemAttributes>(minimalAttributes, odsCartFooterItemDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-cart-footer-item ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-cart-footer-item>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-cart-footer-item');

    const root = await page.find('osds-cart-footer-item');
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
