import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsCollapsibleAttributes,
  OdsComponentAttributes2StringAttributes,
  odsCollapsibleDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsCollapsibleBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-collapsible', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsCollapsibleAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsCollapsibleAttributes = OdsCreateAttributes(attributes, odsCollapsibleBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCollapsibleAttributes>(minimalAttributes, odsCollapsibleDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-collapsible ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-collapsible>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-collapsible');
  }

  describe('screenshots', () => {
    [false, true].forEach((opened) => {
      it(opened.toString(), async () => {
        await setup({
          attributes: {
            opened,
          },
          html: `<span>Collapsible</span>`
        });
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-collapsible') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('collapsible', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      });
    });
  });
});
