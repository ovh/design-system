import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsSpinnerAttributes, OdsComponentAttributes2StringAttributes, odsSpinnerDefaultAttributes, OdsSpinnerSize, OdsSpinnerMode } from '@ovhcloud/ods-core';
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

  it('should have a default size', async () => {
    expect(await el.getProperty('size')).toBe(odsSpinnerDefaultAttributes.size);
  });

  it('should have a default flex', async () => {
    expect(await el.getProperty('flex')).toBe(odsSpinnerDefaultAttributes.flex);
  });

  it('should have a default contrasted', async () => {
    expect(await el.getProperty('contrasted')).toBe(odsSpinnerDefaultAttributes.contrasted);
  });

  it('should have a default mode', async () => {
    expect(await el.getProperty('mode')).toBe(odsSpinnerDefaultAttributes.mode);
  });

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
    it.only('should have a small size', async () => {
      const {
        smSpinner,
        mdSpinner,
        lgSpinner,
      } = await sizeSetup({ attributes: {} });
      const smSpinnerWidth = await smSpinner.getComputedStyle('width');
      console.log(smSpinnerWidth);
      expect(smSpinnerWidth).toBeLessThan(OdsSpinnerSize.sm);

    });
  });

  describe('modes', () => {
    it('should have a indeterminate mode', async () => {
      await setup({ attributes: { mode: OdsSpinnerMode.INDETERMINATE } });
      expect(await el.getProperty('mode')).toBe(OdsSpinnerMode.INDETERMINATE);
    });
  });
});
