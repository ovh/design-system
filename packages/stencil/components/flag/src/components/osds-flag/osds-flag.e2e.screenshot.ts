import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsComponentAttributes2StringAttributes, OdsFlagAttributes, odsFlagDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsFlagBaseAttributes } from '@ovhcloud/ods-testing';
import { OdsCountryIsoCodeList } from '@ovhcloud/ods-core';

describe('e2e:osds-flag', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsFlagAttributes> }) {
    const minimalAttributes: OdsFlagAttributes = OdsCreateAttributes(attributes, odsFlagBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsFlagAttributes>(minimalAttributes, odsFlagDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-flag ${OdsStringAttributes2Str(stringAttributes)}></osds-flag>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-flag');
  }

  describe('screenshots', () => {
    OdsCountryIsoCodeList.forEach((iso) => {
      it(`The flag ${iso} is displaying correctly`, async () => {
        await setup({
          attributes: { iso },
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
