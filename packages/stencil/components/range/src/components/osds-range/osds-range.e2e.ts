import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsRangeAttributes,
  odsRangeDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsRangeBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

const slotContent = `Range`;

describe('e2e:osds-range', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsRangeAttributes>, html?: string }) {
    const minimalAttributes: OdsRangeAttributes = OdsCreateAttributes(attributes, odsRangeBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsRangeAttributes>(minimalAttributes, odsRangeDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-range ${OdsStringAttributes2Str(stringAttributes)} value="50">${html}</osds-range>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-range');

  }

  it('should render', async () => {
    await setup({ attributes: { color: OdsThemeColorIntent.primary } });
    expect(el).not.toBeNull();
  });

  describe('defaults', () => {
    beforeEach(async () => {
      await setup({ });
    });

    it('should render', async () => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });

    it('should have a default min', async () => {
      expect(await el.getProperty('min')).toBe(odsRangeDefaultAttributes.min);
    });

    it('should have a default max', async () => {
      expect(await el.getProperty('max')).toBe(odsRangeDefaultAttributes.max);
    });

    it('should have a default step', async () => {
      expect(await el.getProperty('step')).toBe(odsRangeDefaultAttributes.step);
    });
  });

  describe('colors', () => {
    it('should have a default color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.default }, html: slotContent });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.default);
    });

    it('should have a primary color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary }, html: slotContent });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.primary);
    });

    it('should have a range color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.text }, html: slotContent });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.text);
    });

    it('should have an accent color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.accent }, html: slotContent });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.accent);
    });

    it('should have a warning color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.warning }, html: slotContent });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.warning);
    });

    it('should have a success color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.success }, html: slotContent });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.success);
    });

    it('should have a info color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.info }, html: slotContent });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.info);
    });

    it('should have a promotion color', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.promotion }, html: slotContent });
      expect(await el.getProperty('color')).toBe(OdsThemeColorIntent.promotion);
    });
  });
});
