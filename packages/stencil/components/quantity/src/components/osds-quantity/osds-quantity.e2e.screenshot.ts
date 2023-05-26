import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsQuantityAttributes,
  odsQuantityDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsQuantityBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-quantity', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes, html }: { attributes: Partial<OdsQuantityAttributes>, html: string }) {
    const minimalAttributes: OdsQuantityAttributes = OdsCreateAttributes(attributes, odsQuantityBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsQuantityAttributes>(minimalAttributes, odsQuantityDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-quantity ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-quantity>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-quantity');
  }

  const screenshotActions = [
    {
      actionDescription: 'no action',
      action: () => {
        // noop
      },
    }, {
      actionDescription: 'disabled',
      action: () => el.setProperty('disabled', true),
    },
  ];

  describe('screenshots', () => {
    screenshotActions.forEach(({ actionDescription, action }) => {
      it([actionDescription +' using osds components'].join(', '), async () => {
        await setup({ attributes: {}, html: `
        <osds-quantity id="quantity-1">
          <osds-button slot="minus" color="primary" size="sm">-</osds-button>
          <osds-input type="number" color="primary" min="1" max="3" step="1" value="2" style="width: 45px"></osds-input>
          <osds-button slot="plus" color="primary" size="sm">+</osds-button>
        </osds-quantity>
        ` });
        action();
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-quantity') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('quantity', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });

      it([actionDescription +' using vanilla elements'].join(', '), async () => {
        await setup({ attributes: {}, html: `
        <osds-quantity id="quantity-1">
          <button slot="minus">-</button>
          <input type="number"min="1" max="3" step="1" value="2" style="width: 45px"/>
          <button slot="plus">+</button>
        </osds-quantity>
        ` });
        action();
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-quantity') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('quantity', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });
});



