import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsClipboardAttributes,
  OdsComponentAttributes2StringAttributes,
  odsClipboardDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str } from '@ovhcloud/ods-testing';

describe('e2e:osds-clipboard', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsClipboardAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsClipboardAttributes = OdsCreateAttributes(attributes, odsClipboardDefaultAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsClipboardAttributes>(minimalAttributes, odsClipboardDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-clipboard ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-clipboard>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-clipboard');
  }

  describe('screenshots', () => {
    [false, true].forEach((flex) => {
      [false, true].forEach((disabled) => {
        [undefined, 'value'].forEach((value) => {
          it([flex, disabled, value].join(', '), async () => {
            await setup({
              attributes: {
                flex,
                disabled,
                value
              },
            });
            await page.waitForChanges();

            await page.evaluate(() => {
              const element = document.querySelector('osds-clipboard') as HTMLElement;
              return { width: element.clientWidth, height: element.clientHeight };
            });
            await page.setViewport({ width: 600, height: 600 });
            const results = await page.compareScreenshot('clipboard', { fullPage: false, omitBackground: true });
            expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
          });
        });
      });
    });
  });
});
