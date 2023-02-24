import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsCartItemOptionAttributes,
  OdsComponentAttributes2StringAttributes,
  OdsLogger,
  odsCartItemOptionDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsCartItemOptionBaseAttributes } from '@ovhcloud/ods-testing';

const logger = new OdsLogger('osds-cart-item-option-e2e');

describe('e2e:osds-cart-item-option', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes, html }: { attributes: Partial<OdsCartItemOptionAttributes>, html: string }) {
    const minimalAttributes: OdsCartItemOptionAttributes = OdsCreateAttributes(attributes, odsCartItemOptionBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartItemOptionAttributes>(minimalAttributes, odsCartItemOptionDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-cart-item-option ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-cart-item-option>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-cart-item-option');

    const root = await page.find('osds-cart-item-option');
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
