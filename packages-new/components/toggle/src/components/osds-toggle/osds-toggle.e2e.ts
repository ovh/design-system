import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsToggleAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

describe('e2e:osds-toggle', () => {
  const baseAttributes = {
    contrasted: false,
    checked: false,
    checking: false,
    color: OdsThemeColorIntent.primary,
    disabled: false,
    interactive: true
  }
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsToggleAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsToggleAttribute>({ ...baseAttributes, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-toggle ${odsStringAttributes2Str(stringAttributes)}></osds-toggle>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-toggle');
  }

  describe('defaults', () => {
    beforeEach(async () => {
      await setup();
    });

    it('should render', async () => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });

    it('should have a primary color', async () => {
      expect(await el.getProperty('color')).toBe(DEFAULT_ATTRIBUTE.color);
    });

    it('should have a default checked', async () => {
      expect(await el.getProperty('contrasted')).toBe(DEFAULT_ATTRIBUTE.checked);
    });

    it('should have a default checking', async () => {
      expect(await el.getProperty('contrasted')).toBe(DEFAULT_ATTRIBUTE.checking);
    });

    it('should have a default disabled', async () => {
      expect(await el.getProperty('contrasted')).toBe(DEFAULT_ATTRIBUTE.disabled);
    });

    it('should have a default contrasted', async () => {
      expect(await el.getProperty('contrasted')).toBe(DEFAULT_ATTRIBUTE.contrasted);
    });

    it('should have a default interactive', async () => {
      expect(await el.getProperty('interactive')).toBe(DEFAULT_ATTRIBUTE.interactive);
    });

  });

  describe('colors', () => {
    it('should have a default color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.default } });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.default);
    });

    it('should have a primary color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary } });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.primary);
    });

    it('should have a text color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.text } });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.text);
    });

    it('should have an accent color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.accent } });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.accent);
    });

    it('should have a warning color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.warning } });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.warning);
    });

    it('should have a success color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.success } });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.success);
    });

    it('should have a info color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.info } });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.info);
    });

    it('should have a promotion color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.promotion } });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.promotion);
    });
  });

  describe('checked', () => {
    it('should be checked', async () => {
      await setup({ attributes: { checked: true } });
      expect(await el.getProperty('checked')).toBe(true);
    });
  });

  describe('checking', () => {
    it('should have checking state', async () => {
      await setup({ attributes: { checking: true } });
      expect(await el.getProperty('checking')).toBe(true);
    });
  });

  describe('disabled', () => {
    it('should be disabled', async () => {
      await setup({ attributes: { disabled: true } });
      expect(await el.getProperty('disabled')).toBe(true);
    });
  });

  describe('interactive', () => {
    it('should be interactive', async () => {
      await setup({ attributes: { interactive: true } });
      expect(await el.getProperty('interactive')).toBe(true);
    });
  });

});
