import type { OdsRangeAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';


const slotContent = 'Range';

describe('e2e:osds-range', () => {
  let page: E2EPage;
  let el: E2EElement;

  const baseAttribute = {
    color: ODS_THEME_COLOR_INTENT.default,
    disabled: false,
    error: undefined,
    errorStateControl: undefined,
    inline: false,
    max: 100,
    min: 0,
    step: 1,
    value: '',
    forbiddenValues: [],
    formControl: undefined,
  };

  async function setup({ attributes= {} , html = '' }: { attributes?: Partial<OdsRangeAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsRangeAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-range ${odsStringAttributes2Str(stringAttributes)} value="50">${html}</osds-range>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-range');

  }

  it('should render', async() => {
    await setup({ attributes: { color: ODS_THEME_COLOR_INTENT.primary } });
    expect(el).not.toBeNull();
  });

  describe('defaults', () => {
    beforeEach(async() => {
      await setup({ });
    });

    it('should render', async() => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });

    it('should have a default min', async() => {
      expect(await el.getProperty('min')).toBe(DEFAULT_ATTRIBUTE.min);
    });

    it('should have a default max', async() => {
      expect(await el.getProperty('max')).toBe(DEFAULT_ATTRIBUTE.max);
    });

    it('should have a default step', async() => {
      expect(await el.getProperty('step')).toBe(DEFAULT_ATTRIBUTE.step);
    });
  });

  describe('colors', () => {
    it('should have a default color', async() => {
      await setup({ attributes: { color: ODS_THEME_COLOR_INTENT.default }, html: slotContent });
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.default);
    });

    it('should have a primary color', async() => {
      await setup({ attributes: { color: ODS_THEME_COLOR_INTENT.primary }, html: slotContent });
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.primary);
    });

    it('should have a range color', async() => {
      await setup({ attributes: { color: ODS_THEME_COLOR_INTENT.text }, html: slotContent });
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.text);
    });

    it('should have an accent color', async() => {
      await setup({ attributes: { color: ODS_THEME_COLOR_INTENT.accent }, html: slotContent });
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.accent);
    });

    it('should have a warning color', async() => {
      await setup({ attributes: { color: ODS_THEME_COLOR_INTENT.warning }, html: slotContent });
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.warning);
    });

    it('should have a success color', async() => {
      await setup({ attributes: { color: ODS_THEME_COLOR_INTENT.success }, html: slotContent });
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.success);
    });

    it('should have a info color', async() => {
      await setup({ attributes: { color: ODS_THEME_COLOR_INTENT.info }, html: slotContent });
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.info);
    });

    it('should have a promotion color', async() => {
      await setup({ attributes: { color: ODS_THEME_COLOR_INTENT.promotion }, html: slotContent });
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.promotion);
    });
  });
});
