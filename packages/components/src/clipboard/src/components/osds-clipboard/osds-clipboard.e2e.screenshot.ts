import type { OdsClipboardAttribute } from './interfaces/attributes';
import type { E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-clipboard', () => {
  const baseAttribute = { value: '' };
  let page: E2EPage;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsClipboardAttribute>, html?: string } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsClipboardAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-clipboard ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-clipboard>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  describe('screenshots', () => {
    [false, true].forEach((disabled) => {
      [undefined, 'value'].forEach((value) => {
        it([disabled, value].join(', '), async() => {
          await setup({
            attributes: {
              disabled,
              value,
            },
          });
          await page.waitForChanges();

          await page.evaluate(() => {
            const element = document.querySelector('osds-clipboard') as HTMLElement;
            return { height: element.clientHeight, width: element.clientWidth };
          });
          await page.setViewport({ height: 600, width: 600 });
          const results = await page.compareScreenshot('clipboard', { fullPage: false, omitBackground: true });
          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
        });
      });
    });
  });
});
