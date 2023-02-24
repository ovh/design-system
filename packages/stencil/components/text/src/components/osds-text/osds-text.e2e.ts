import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsTextAttributes,
  OdsTextLevel,
  OdsTextSize,
  odsTextDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsTextBaseAttributes } from '@ovhcloud/ods-testing';
import { OdsThemeColorHue, OdsThemeColorIntent } from '@ovhcloud/ods-theming';

const slotContent = `Text`;

describe('e2e:osds-text', () => {
  let page: E2EPage;
  let el: E2EElement;
  let textSlot: E2EElement;

  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsTextAttributes>, html?: string }) {
    const minimalAttributes: OdsTextAttributes = OdsCreateAttributes(attributes, odsTextBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTextAttributes>(minimalAttributes, odsTextDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-text ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-text>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-text');

    textSlot = await page.find('osds-text >>> slot:not([name])');
  }

  it('should render', async () => {
    await setup({ attributes: { color: OdsThemeColorIntent.primary, contrasted: false } });
    expect(el).not.toBeNull();
  });

  describe('defaults', () => {
    beforeEach(async () => {
      await setup({ html: `Text` });
    });

    it('should render', async () => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });

    it('should have a text element', async () => {
      expect(textSlot).not.toBeNull();
    });

    it('should have a default level', async () => {
      expect(await el.getProperty('level')).toBe(odsTextDefaultAttributes.level);
    });

    it('should have a default color', async () => {
      expect(await el.getProperty('color')).toBe(odsTextDefaultAttributes.color);
    });

    it('should have a default contrasted', async () => {
      expect(await el.getProperty('contrasted')).toBe(odsTextDefaultAttributes.contrasted);
    });

    it('should have a default size', async () => {
      expect(await el.getProperty('size')).toBe(odsTextDefaultAttributes.size);
    });

    it('should have a default hue', async () => {
      expect(await el.getProperty('hue')).toBe(odsTextDefaultAttributes.hue);
    });

  });


  describe('slots', () => {
    it('should have a slot', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary,  contrasted: false }, html: slotContent });
      expect(textSlot).not.toBeNull();
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

    it('should have a text color', async () => {
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

  describe('level', () => {
    it('should have a body level', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, level: OdsTextLevel.body }, html: slotContent });
      expect(await el.getProperty('level')).toBe(OdsTextLevel.body);
    });

    it('should have a button level', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, level: OdsTextLevel.button }, html: slotContent });
      expect(await el.getProperty('level')).toBe(OdsTextLevel.button);
    });

    it('should have a caption level', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, level: OdsTextLevel.caption }, html: slotContent });
      expect(await el.getProperty('level')).toBe(OdsTextLevel.caption);
    });

    it('should have a subheading level', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, level: OdsTextLevel.subheading }, html: slotContent });
      expect(await el.getProperty('level')).toBe(OdsTextLevel.subheading);
    });

    it('should have a heading level', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, level: OdsTextLevel.heading }, html: slotContent });
      expect(await el.getProperty('level')).toBe(OdsTextLevel.heading);
    });
  });

  describe('sizes', () => {
    it('should have a 100 size', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, size: OdsTextSize._100 }, html: slotContent });
      expect(await el.getProperty('size')).toBe(OdsTextSize._100);
    });
    it('should have a 200 size', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, size: OdsTextSize._200 }, html: slotContent });
      expect(await el.getProperty('size')).toBe(OdsTextSize._200);
    });
    it('should have a 300 size', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, size: OdsTextSize._300 }, html: slotContent });
      expect(await el.getProperty('size')).toBe(OdsTextSize._300);
    });
    it('should have a 400 size', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, size: OdsTextSize._400 }, html: slotContent });
      expect(await el.getProperty('size')).toBe(OdsTextSize._400);
    });
    it('should have a 500 size', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, size: OdsTextSize._500 }, html: slotContent });
      expect(await el.getProperty('size')).toBe(OdsTextSize._500);
    });
    it('should have a 600 size', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, size: OdsTextSize._600 }, html: slotContent });
      expect(await el.getProperty('size')).toBe(OdsTextSize._600);
    });
    it('should have a 700 size', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, size: OdsTextSize._700 }, html: slotContent });
      expect(await el.getProperty('size')).toBe(OdsTextSize._700);
    });
    it('should have a 800 size', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, size: OdsTextSize._800 }, html: slotContent });
      expect(await el.getProperty('size')).toBe(OdsTextSize._800);
    });
  });

  describe('hues', () => {
    it('should have a 100 hue', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, hue: OdsThemeColorHue._100 }, html: slotContent });
      expect(await el.getProperty('hue')).toBe(OdsThemeColorHue._100);
    });

    it('should have a 500 hue', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, hue: OdsThemeColorHue._500 }, html: slotContent });
      expect(await el.getProperty('hue')).toBe(OdsThemeColorHue._500);
    });
  });

});
