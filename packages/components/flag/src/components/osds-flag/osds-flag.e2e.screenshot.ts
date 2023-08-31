import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsFlagAttribute } from './interfaces/attributes';
import { ODS_COUNTRY_ISO_CODE, ODS_COUNTRY_ISO_CODES } from '@ovhcloud/ods-common-core';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-flag', () => {
  const baseAttribute = { iso: ODS_COUNTRY_ISO_CODE.FR, lazy: false };
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {} }: { attributes: Partial<OdsFlagAttribute> }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsFlagAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-flag ${odsStringAttributes2Str(stringAttributes)}></osds-flag>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-flag');
  }

  describe('screenshots', () => {
    ODS_COUNTRY_ISO_CODES.forEach((iso) => {
      it(`The flag ${iso} is displaying correctly`, async () => {
        await setup({
          attributes: { iso, assetPath: `./dist/flags/flags-4x3/` },
        });
        await page.waitForChanges();
        await page.evaluate(() => {
          const element = document.querySelector('osds-flag') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('flag', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
    it('check if grey default flag displays', async () => {
      await setup({ attributes: {} });
      el.setAttribute('iso', 'wrongFlag');
      await page.waitForChanges();

      await page.evaluate(() => {
        const element = document.querySelector('osds-flag') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });

      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('The flag is displaying grey default square correctly', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
