import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsCartItemAttributes,
  OdsComponentAttributes2StringAttributes,
  OdsLogger,
  odsCartItemDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsCartItemBaseAttributes } from '@ovhcloud/ods-testing';

const logger = new OdsLogger('osds-cart-item-e2e');

describe('e2e:osds-cart-item', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes, html }: { attributes: Partial<OdsCartItemAttributes>, html: string }) {
    const minimalAttributes: OdsCartItemAttributes = OdsCreateAttributes(attributes, odsCartItemBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartItemAttributes>(minimalAttributes, odsCartItemDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-cart-item ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-cart-item>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-cart-item');

    const root = await page.find('osds-cart-item');
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
