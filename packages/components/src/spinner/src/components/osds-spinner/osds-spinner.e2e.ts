import type { OdsSpinnerAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_SPINNER_SIZE } from './constants/spinner-size';



describe('e2e:osds-spinner', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSpinnerAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSpinnerAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();

    await page.setContent(`<osds-spinner ${odsStringAttributes2Str(stringAttributes)}></osds-spinner>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-spinner');
  }

  it('should render', async() => {
    await setup({ attributes: {} });

    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('sizes', () => {
    const sizeSetup = async({ attributes = {} }: { attributes?: Partial<OdsSpinnerAttribute> } = {}) => {
      const stringAttributes = odsComponentAttributes2StringAttributes<OdsSpinnerAttribute>(attributes, DEFAULT_ATTRIBUTE);

      const page = await newE2EPage();
      await page.setContent(`
        <osds-spinner inline size="${ODS_SPINNER_SIZE.sm}" ${odsStringAttributes2Str(stringAttributes)}></osds-spinner>
        <osds-spinner inline size="${ODS_SPINNER_SIZE.md}" ${odsStringAttributes2Str(stringAttributes)}></osds-spinner>
        <osds-spinner inline size="${ODS_SPINNER_SIZE.lg}" ${odsStringAttributes2Str(stringAttributes)}></osds-spinner>
      `);
      await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

      const smSpinner = await page.find(`osds-spinner[size=${ODS_SPINNER_SIZE.sm}]`);
      const mdSpinner = await page.find(`osds-spinner[size=${ODS_SPINNER_SIZE.md}]`);
      const lgSpinner = await page.find(`osds-spinner[size=${ODS_SPINNER_SIZE.lg}]`);

      return {
        smSpinner,
        mdSpinner,
        lgSpinner,
      };
    };

    it('should respect increase order (sm < md < lg)', async() => {
      const {
        smSpinner,
        mdSpinner,
        lgSpinner,
      } = await sizeSetup({ attributes: {} });
      const smSpinnerStyle = await smSpinner.getComputedStyle();
      const smSpinnerWidth = parseInt(smSpinnerStyle.getPropertyValue('width'), 10);

      const mdSpinnerStyle = await mdSpinner.getComputedStyle();
      const mdSpinnerWidth = parseInt(mdSpinnerStyle.getPropertyValue('width'), 10);

      const lgSpinnerStyle = await lgSpinner.getComputedStyle();
      const lgSpinnerWidth = parseInt(lgSpinnerStyle.getPropertyValue('width'), 10);

      expect(smSpinnerWidth).toBeLessThan(mdSpinnerWidth);
      expect(smSpinnerWidth).toBeLessThan(lgSpinnerWidth);
      expect(mdSpinnerWidth).toBeLessThan(lgSpinnerWidth);
      expect(mdSpinnerWidth).toBeGreaterThan(smSpinnerWidth);
      expect(lgSpinnerWidth).toBeGreaterThan(smSpinnerWidth);
      expect(lgSpinnerWidth).toBeGreaterThan(mdSpinnerWidth);
    });
  });
});
