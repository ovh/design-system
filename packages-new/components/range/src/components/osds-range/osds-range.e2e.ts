import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsRangeAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming/src';

const slotContent = `Range`;

describe('e2e:osds-range', () => {
  let page: E2EPage;
  let el: E2EElement;

  const baseAttribute = {
    color: OdsThemeColorIntent.default,
    disabled: false,
    error: undefined,
    errorStateControl: undefined,
    inline: false,
    max: 100,
    min: 0,
    step: 1,
    value: '',
    forbiddenValues: [],
    formControl: undefined
  };

  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsRangeAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsRangeAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-range ${odsStringAttributes2Str(stringAttributes)} value="50">${html}</osds-range>`);
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
      expect(await el.getProperty('min')).toBe(DEFAULT_ATTRIBUTE.min);
    });

    it('should have a default max', async () => {
      expect(await el.getProperty('max')).toBe(DEFAULT_ATTRIBUTE.max);
    });

    it('should have a default step', async () => {
      expect(await el.getProperty('step')).toBe(DEFAULT_ATTRIBUTE.step);
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
