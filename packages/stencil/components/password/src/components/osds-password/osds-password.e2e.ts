import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsPasswordAttributes, OdsComponentAttributes2StringAttributes, odsPasswordDefaultAttributes, OdsInputType } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsPasswordBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-password', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsPasswordAttributes> }) {
    const minimalAttributes: OdsPasswordAttributes = OdsCreateAttributes(attributes, odsPasswordBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPasswordAttributes>(minimalAttributes, odsPasswordDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-password ${OdsStringAttributes2Str(stringAttributes)}></osds-password>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-password');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('attribute:masked', () => {

    it('should change input type to password when masked is true', async () => {
      await setup({ attributes: { masked: true } });

      const osdsInput = await page.find('osds-password >>> osds-input');
      const input = osdsInput.shadowRoot?.querySelector('input') as HTMLInputElement;
      const type = await input.getAttribute('type');
      expect(type).toBe(OdsInputType.password);
    });

    it('should change input type to text when masked is false', async () => {
      await setup({ attributes: { masked: false } });

      const osdsInput = await page.find('osds-password >>> osds-input');
      const input = osdsInput.shadowRoot?.querySelector('input') as HTMLInputElement;
      const type = await input.getAttribute('type');
      expect(type).toBe(OdsInputType.text);
    });

    it('should display eye open icon when masked is true', async () => {
      await setup({ attributes: { masked: true } });

      const eyeIcon = await page.find('osds-password >>> osds-input >>> osds-icon[name="eye-open"]');
      expect(eyeIcon).not.toBeNull();
    });

    it('should display eye close icon when masked is false', async () => {
      await setup({ attributes: { masked: false } });

      const eyeIcon = await page.find('osds-password >>> osds-input >>> osds-icon[name="eye-close"]');
      expect(eyeIcon).not.toBeNull();
    });
  });

});
