import { E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsCartTotalAttributes,
  OdsComponentAttributes2StringAttributes,
  OdsLogger,
  odsCartTotalDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsCartTotalBaseAttributes } from '@ovhcloud/ods-testing';

const logger = new OdsLogger('osds-cart-total-e2e');

describe('e2e:osds-cart-total', () => {
  let page: E2EPage;

  async function setup({ attributes, html }: { attributes: Partial<OdsCartTotalAttributes>, html: string }) {
    const minimalAttributes: OdsCartTotalAttributes = OdsCreateAttributes(attributes, odsCartTotalBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartTotalAttributes>(minimalAttributes, odsCartTotalDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-cart-total ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-cart-total>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    const root = await page.find('osds-cart-total');
    const activeElId = await page.evaluate(() => document);
    logger.log(activeElId);
    logger.log(root);
  }

  const slots = [
    {
      slotName: 'total',
      html: `<span slot='total'>Total</span>`,
    },
    {
      slotName: 'info',
      html: `<span slot='info'>Info</span>`,
    },
    {
      slotName: 'price',
      html: `<span slot='price'>Price</span>`,
    },
    {
      slotName: 'extra',
      html: `<span slot='extra'>Extra</span>`,
    },
  ];

  describe('screenshots', () => {
    it('check with all slots', async () => {
      await setup({
        attributes: {}, html: `
        <span slot='total'>My total</span>
        <span slot='info'>My info</span>
        <span slot='price'>My price</span>
        <span slot='extra'>My extra</span>`,
      });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('osds-cart-total') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('all slots & css', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    describe('screenshots for each slot', () => {
      slots.forEach(({ slotName, html }) => {
        it(slotName, async () => {
          await setup({
            attributes: {}, html,
          });

          await page.waitForChanges();
          await page.evaluate(() => {
            const element = document.querySelector('osds-cart-total') as HTMLElement;
            return { width: element.clientWidth, height: element.clientHeight };
          });
          await page.setViewport({ width: 600, height:600 });
          const results = await page.compareScreenshot('each slot', { fullPage: false, omitBackground: true });
          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
        });
      });
    });
  });

});
