import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsPasswordAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_INPUT_TYPE } from '@ovhcloud/ods-component-input';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-password', () => {
  const baseAttribute = { ariaLabel: '', forbiddenValues: [], value: '' };
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsPasswordAttribute> }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsPasswordAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-password ${odsStringAttributes2Str(stringAttributes)}></osds-password>`);
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
      const type = input.getAttribute('type');
      expect(type).toBe(ODS_INPUT_TYPE.password);
    });

    it('should change input type to text when masked is false', async () => {
      await setup({ attributes: { masked: false } });

      const osdsInput = await page.find('osds-password >>> osds-input');
      const input = osdsInput.shadowRoot?.querySelector('input') as HTMLInputElement;
      const type = input.getAttribute('type');
      expect(type).toBe(ODS_INPUT_TYPE.text);
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
