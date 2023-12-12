import type { OdsMessageAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_MESSAGE_TYPE } from './constants/message-type';



describe('e2e:osds-message', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsMessageAttribute>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsMessageAttribute>(attributes, DEFAULT_ATTRIBUTE);
    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`<osds-message ${odsStringAttributes2Str(stringAttributes)}></osds-message>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));

    el = await page.find('osds-message');
  }

  describe('defaults', () => {
    beforeEach(async() => {
      await setup();
    });

    it('should render', async() => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });
  });

  describe('type', () => {
    it('should have a success type', async() => {
      await setup({ attributes: { type: ODS_MESSAGE_TYPE.success } });
      expect(await el.getProperty('type')).toBe(ODS_MESSAGE_TYPE.success);
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.success);

      const icon = await (await page.find('osds-message >>> .message_wrapper')).find('osds-icon');
      expect(icon.getAttribute('name')).toBe(ODS_ICON_NAME.SUCCESS_CIRCLE);
    });

    it('should have a info type', async() => {
      await setup({ attributes: { type: ODS_MESSAGE_TYPE.info } });
      expect(await el.getProperty('type')).toBe(ODS_MESSAGE_TYPE.info);
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.info);

      const icon = await (await page.find('osds-message >>> .message_wrapper')).find('osds-icon');
      expect(icon.getAttribute('name')).toBe(ODS_ICON_NAME.INFO_CIRCLE);
    });

    it('should have a warning type', async() => {
      await setup({ attributes: { type: ODS_MESSAGE_TYPE.warning } });
      expect(await el.getProperty('type')).toBe(ODS_MESSAGE_TYPE.warning);
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.warning);

      const icon = await (await page.find('osds-message >>> .message_wrapper')).find('osds-icon');
      expect(icon.getAttribute('name')).toBe(ODS_ICON_NAME.WARNING_CIRCLE);
    });

    it('should have a error type', async() => {
      await setup({ attributes: { type: ODS_MESSAGE_TYPE.error } });
      expect(await el.getProperty('type')).toBe(ODS_MESSAGE_TYPE.error);
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.error);

      const icon = await (await page.find('osds-message >>> .message_wrapper')).find('osds-icon');
      expect(icon.getAttribute('name')).toBe(ODS_ICON_NAME.ERROR_CIRCLE);
    });
  });

  describe('removable', () => {
    it('should have be removable', async() => {
      await setup({ attributes: { removable: true } });
      expect(await el.getProperty('removable')).toBe(true);

      const icon = await (await page.find('osds-message >>> .message_close-wrapper')).find('osds-icon');
      expect(icon.getAttribute('name')).toBe(ODS_ICON_NAME.CLOSE);
    });
  });
});
