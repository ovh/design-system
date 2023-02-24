import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsCart,
  OdsCartAttributes,
  OdsComponentAttributes2StringAttributes,
  OdsLogger,
  odsCartDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsCartBaseAttributes } from '@ovhcloud/ods-testing';

import { osdsE2EElement } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

const logger = new OdsLogger('OsdsCart-e2e');

describe('e2e:osds-cart', () => {
  let page: E2EPage;
  let el: osdsE2EElement<OdsCart>;
  let slotHeader: E2EElement;
  let slotEmpty: E2EElement;
  let cellPriceElement: E2EElement;

  async function setup({ attributes, html }: { attributes: Partial<OdsCartAttributes>, html: string }) {
    const minimalAttributes: OdsCartAttributes = OdsCreateAttributes(attributes, odsCartBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartAttributes>(minimalAttributes, odsCartDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-cart ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-cart>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-cart');

    cellPriceElement = await page.find('osds-cart >>> .cell-price');
    slotHeader = await page.find('osds-cart >>> slot[name=header]');
    slotEmpty = await page.find('osds-cart >>> slot[name=empty]');
    const root = await page.find('osds-cart');
    const activeElId = await page.evaluate(() => document);
    logger.log(activeElId);
    logger.log(root);
    logger.log(slotHeader);
    logger.log(cellPriceElement);
  }

  it('should render', async () => {
    await setup({ attributes: {}, html: `` })
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should display a title', async () => {
    await setup({
      attributes: {}, html: ``
    });

  });


  it('should display the empty slot', async () => {
    await setup({
      attributes: {}, html: ``
    });

    expect(slotEmpty).toBeTruthy();

    // todo : update of unnamed content does not remove the empty slot
    // el.innerHTML = `<osds-cart-item></osds-cart-item>`;
    // await el.callMethod('refresh');
    // await page.waitForChanges();
    //
    // logger.log(slotEmpty);
    // expect(slotEmpty).toBeFalsy();
  });

  describe('method:getItemQuantity', () => {

    it('should get the number of item', async () => {
      await setup({
        attributes: {}, html: ``
      });

      let quantity = await el.callMethod('getItemQuantity');
      expect(quantity).toBe(0);

      el.innerHTML = `<osds-cart-item></osds-cart-item>`;
      await page.waitForChanges();

      quantity = await el.callMethod('getItemQuantity');
      expect(quantity).toBe(1);
    });
  })
});
