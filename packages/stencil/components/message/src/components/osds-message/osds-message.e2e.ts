import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsMessageAttributes,
  OdsMessageType,
  odsMessageDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsMessageBaseAttributes } from '@ovhcloud/ods-testing';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';

describe('e2e:osds-message', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsMessageAttributes> } = {}) {
    const minimalAttributes: OdsMessageAttributes = OdsCreateAttributes(attributes, odsMessageBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsMessageAttributes>(minimalAttributes, odsMessageDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-message ${OdsStringAttributes2Str(stringAttributes)}></osds-message>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));

    el = await page.find('osds-message');
  }

  describe('defaults', () => {
    beforeEach(async () => {
      await setup();
    });

    it('should render', async () => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });
  });

  describe('type', () => {
    it('should have a success type', async () => {
      await setup({ attributes: { type: OdsMessageType.success } });
      expect(await el.getProperty('type')).toBe(OdsMessageType.success);
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.success);

      const icon = await (await page.find('osds-message >>> .message__wrapper')).find('osds-icon');
      expect(icon.getAttribute('name')).toBe(ODS_ICON_NAME.SUCCESS_CIRCLE);
    });

    it('should have a info type', async () => {
      await setup({ attributes: { type: OdsMessageType.info } });
      expect(await el.getProperty('type')).toBe(OdsMessageType.info);
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.info);

      const icon = await (await page.find('osds-message >>> .message__wrapper')).find('osds-icon');
      expect(icon.getAttribute('name')).toBe(ODS_ICON_NAME.INFO_CIRCLE);
    });

    it('should have a warning type', async () => {
      await setup({ attributes: { type: OdsMessageType.warning } });
      expect(await el.getProperty('type')).toBe(OdsMessageType.warning);
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.warning);

      const icon = await (await page.find('osds-message >>> .message__wrapper')).find('osds-icon');
      expect(icon.getAttribute('name')).toBe(ODS_ICON_NAME.WARNING_CIRCLE);
    });

    it('should have a error type', async () => {
      await setup({ attributes: { type: OdsMessageType.error } });
      expect(await el.getProperty('type')).toBe(OdsMessageType.error);
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.error);

      const icon = await (await page.find('osds-message >>> .message__wrapper')).find('osds-icon');
      expect(icon.getAttribute('name')).toBe(ODS_ICON_NAME.ERROR_CIRCLE);
    });
  });

  describe('removable', () => {
    it('should have be removable', async () => {
      await setup({ attributes: { removable: true } });
      expect(await el.getProperty('removable')).toBe(true);

      const icon = await (await page.find('osds-message >>> .message__close-wrapper')).find('osds-icon');
      expect(icon.getAttribute('name')).toBe(ODS_ICON_NAME.CLOSE);
    });
  });
});
