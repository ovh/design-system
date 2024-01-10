import type { OdsQuantityAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-quantity', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsQuantityAttribute>, html?: string } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsQuantityAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-quantity ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-quantity>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-quantity');
  }

  const screenshotActions = [
    {
      action: (): void => {
        // noop
      },
      actionDescription: 'no action',
    }, {
      action: (): void => el.setProperty('disabled', true),
      actionDescription: 'disabled',
    },
  ];

  describe('screenshots', () => {
    screenshotActions.forEach(({ actionDescription, action }) => {
      it([actionDescription +' using osds components'].join(', '), async() => {
        await setup({ attributes: {}, html: `
        <osds-quantity id="quantity-1">
          <osds-button slot="minus" color="primary" size="sm">-</osds-button>
          <osds-input type="number" color="primary" min="1" max="3" step="1" value="2"></osds-input>
          <osds-button slot="plus" color="primary" size="sm">+</osds-button>
        </osds-quantity>
        ` });
        action();
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-quantity') as HTMLElement;
          return { height: element.clientHeight, width: element.clientWidth };
        });
        await page.setViewport({ height: 600, width: 600 });
        const results = await page.compareScreenshot('quantity', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });

      it([actionDescription +' using vanilla elements'].join(', '), async() => {
        await setup({ attributes: {}, html: `
        <osds-quantity id="quantity-1">
          <button slot="minus">-</button>
          <input type="number"min="1" max="3" step="1" value="2"/>
          <button slot="plus">+</button>
        </osds-quantity>
        ` });
        action();
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-quantity') as HTMLElement;
          return { height: element.clientHeight, width: element.clientWidth };
        });
        await page.setViewport({ height:600, width: 600 });
        const results = await page.compareScreenshot('quantity', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });
});
