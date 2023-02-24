import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsCartHeaderAttributes,
  OdsComponentAttributes2StringAttributes,
  OdsLogger,
  odsCartHeaderDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsCartHeaderBaseAttributes } from '@ovhcloud/ods-testing';

const logger = new OdsLogger('osds-cart-header-e2e');

describe('e2e:osds-cart-header', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes, html }: { attributes: Partial<OdsCartHeaderAttributes>, html: string }) {
    const minimalAttributes: OdsCartHeaderAttributes = OdsCreateAttributes(attributes, odsCartHeaderBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartHeaderAttributes>(minimalAttributes, odsCartHeaderDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-cart-header ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-cart-header>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-cart-header');

    const root = await page.find('osds-cart-header');
    const activeElId = await page.evaluate(() => document);
    logger.log(activeElId);
    logger.log(root);
  }

  it('should render', async () => {
    await setup({ attributes: {}, html: `` });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

});
