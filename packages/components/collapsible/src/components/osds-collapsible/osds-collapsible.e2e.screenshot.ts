import type { OdsCollapsibleAttribute } from './interfaces/attributes';
import type { E2EPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';


describe('e2e:osds-collapsible', () => {
  let page: E2EPage;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsCollapsibleAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCollapsibleAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-collapsible ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-collapsible>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  describe('screenshots', () => {
    [false, true].forEach((opened) => {
      it(opened.toString(), async() => {
        await setup({
          attributes: {
            opened,
          },
          html: '<span>Collapsible</span>',
        });
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-collapsible') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('collapsible', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });
});
