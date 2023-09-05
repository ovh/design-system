import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsTooltipAttribute } from './interfaces/attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TOOLTIP_VARIANT } from './constants/tooltip-variant';

describe('e2e:osds-tooltip', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsTooltipAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTooltipAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-tooltip ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-tooltip>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-tooltip');

    // open the tooltip
    await el.click();
  }

  describe('screenshots', () => {
    it('standard tooltip', async () => {
      await setup({
        attributes: { variant: ODS_TOOLTIP_VARIANT.standard },
        html: '<osds-tooltip-content slot="tooltip-content">Lorem ispum...</osds-tooltip-content>Hover me',
      });

      const results = await page.compareScreenshot('tooltip', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    // TODO tip tooltip
  });
});
