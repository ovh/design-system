import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsSpinnerAttributes, OdsComponentAttributes2StringAttributes, odsSpinnerDefaultAttributes, OdsSpinnerSize } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsSpinnerBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-spinner', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsSpinnerAttributes> }) {
    const minimalAttributes: OdsSpinnerAttributes = OdsCreateAttributes(attributes, odsSpinnerBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSpinnerAttributes>(minimalAttributes, odsSpinnerDefaultAttributes);

    page = await newE2EPage();

    await page.setContent(`<osds-spinner ${OdsStringAttributes2Str(stringAttributes)}></osds-spinner>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-spinner');
  }

  it('should render', async () => {
    await setup({ attributes: {} });

    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('flex', () => {
    const parentHeight = 500

    async function flexSetup({ attributes }: { attributes: Partial<OdsSpinnerAttributes> }) {
      const minimalAttributes: OdsSpinnerAttributes = OdsCreateAttributes(attributes, odsSpinnerBaseAttributes);
      const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSpinnerAttributes>(minimalAttributes, odsSpinnerDefaultAttributes);

      page = await newE2EPage();
      await page.setContent(`<osds-spinner flex ${OdsStringAttributes2Str(stringAttributes)}></osds-spinner>`);
      await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
      await page.evaluate((height) => document.body.style.setProperty('height', `${height}px`), parentHeight);

      el = await page.find('osds-spinner');
    }

    it('should expand to its parent size', async () => {
      await flexSetup({ attributes: {} });

      const spinnerStyle = await el.getComputedStyle();
      const spinnerHeight = parseInt(spinnerStyle.getPropertyValue('height'), 10)

      expect(spinnerHeight).toBe(parentHeight)
    })
  })

  describe('sizes', () => {
    const sizeSetup = async ({ attributes }: { attributes: Partial<OdsSpinnerAttributes> }) => {
      const minimalAttributes: OdsSpinnerAttributes = OdsCreateAttributes(attributes, odsSpinnerBaseAttributes);
      const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSpinnerAttributes>(minimalAttributes, odsSpinnerDefaultAttributes);

      const page = await newE2EPage();
      await page.setContent(`
        <osds-spinner size="${OdsSpinnerSize.sm}" ${OdsStringAttributes2Str(stringAttributes)}></osds-spinner>
        <osds-spinner size="${OdsSpinnerSize.md}" ${OdsStringAttributes2Str(stringAttributes)}></osds-spinner>
        <osds-spinner size="${OdsSpinnerSize.lg}" ${OdsStringAttributes2Str(stringAttributes)}></osds-spinner>
      `);
      await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

      const smSpinner = await page.find(`osds-spinner[size=${OdsSpinnerSize.sm}]`);
      const mdSpinner = await page.find(`osds-spinner[size=${OdsSpinnerSize.md}]`);
      const lgSpinner = await page.find(`osds-spinner[size=${OdsSpinnerSize.lg}]`);

      return {
        smSpinner,
        mdSpinner,
        lgSpinner,
      };
    }

    it('should respect increase order (sm < md < lg)', async () => {
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
