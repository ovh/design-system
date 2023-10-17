import type {E2EElement, E2EPage} from '@stencil/core/testing';
import {ODS_TEXT_COLOR_HUE, ODS_TEXT_COLOR_INTENT} from './constants/text-color';
import {odsComponentAttributes2StringAttributes, odsStringAttributes2Str} from '@ovhcloud/ods-common-testing';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';
import {ODS_TEXT_LEVEL} from './constants/text-level';
import {ODS_TEXT_SIZE} from './constants/text-size';
import type {OdsTextAttribute} from './interfaces/attributes';
import {newE2EPage} from '@stencil/core/testing';

const slotContent = 'Text';

describe('e2e:osds-text', () => {
  let page: E2EPage;
  let el: E2EElement;
  let textSlot: E2EElement;

  async function setup({attributes= {} , html = ''}: { attributes?: Partial<OdsTextAttribute>, html?: string }): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTextAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-text ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-text>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-text');

    textSlot = await page.find('osds-text >>> slot:not([name])');
  }

  it('should render', async() => {
    await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, contrasted: false}});
    expect(el).not.toBeNull();
  });

  describe('defaults', () => {
    beforeEach(async() => {
      await setup({html: 'Text'});
    });

    it('should render', async() => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });

    it('should have a text element', async() => {
      expect(textSlot).not.toBeNull();
    });

    it('should have a default level', async() => {
      expect(await el.getProperty('level')).toBe(DEFAULT_ATTRIBUTE.level);
    });

    it('should have a default color', async() => {
      expect(await el.getProperty('color')).toBe(DEFAULT_ATTRIBUTE.color);
    });

    it('should have a default contrasted', async() => {
      expect(await el.getProperty('contrasted')).toBe(DEFAULT_ATTRIBUTE.contrasted);
    });

    it('should have a default size', async() => {
      expect(await el.getProperty('size')).toBe(DEFAULT_ATTRIBUTE.size);
    });

    it('should have a default hue', async() => {
      expect(await el.getProperty('hue')).toBe(DEFAULT_ATTRIBUTE.hue);
    });
  });

  describe('slots', () => {
    it('should have a slot', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, contrasted: false}, html: slotContent});
      expect(textSlot).not.toBeNull();
    });

  });

  describe('colors', () => {
    it('should have a default color', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.default}, html: slotContent});
      expect(await el.getProperty('color')).toBe(ODS_TEXT_COLOR_INTENT.default);
    });

    it('should have a primary color', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary}, html: slotContent});
      expect(await el.getProperty('color')).toBe(ODS_TEXT_COLOR_INTENT.primary);
    });

    it('should have a text color', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.text}, html: slotContent});
      expect(await el.getProperty('color')).toBe(ODS_TEXT_COLOR_INTENT.text);
    });

    it('should have an accent color', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.accent}, html: slotContent});
      expect(await el.getProperty('color')).toBe(ODS_TEXT_COLOR_INTENT.accent);
    });

    it('should have a warning color', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.warning}, html: slotContent});
      expect(await el.getProperty('color')).toBe(ODS_TEXT_COLOR_INTENT.warning);
    });

    it('should have a success color', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.success}, html: slotContent});
      expect(await el.getProperty('color')).toBe(ODS_TEXT_COLOR_INTENT.success);
    });

    it('should have a info color', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.info}, html: slotContent});
      expect(await el.getProperty('color')).toBe(ODS_TEXT_COLOR_INTENT.info);
    });

    it('should have a promotion color', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.promotion}, html: slotContent});
      expect(await el.getProperty('color')).toBe(ODS_TEXT_COLOR_INTENT.promotion);
    });
  });

  describe('level', () => {
    it('should have a body level', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, level: ODS_TEXT_LEVEL.body}, html: slotContent});
      expect(await el.getProperty('level')).toBe(ODS_TEXT_LEVEL.body);
    });

    it('should have a button level', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, level: ODS_TEXT_LEVEL.button}, html: slotContent});
      expect(await el.getProperty('level')).toBe(ODS_TEXT_LEVEL.button);
    });

    it('should have a caption level', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, level: ODS_TEXT_LEVEL.caption}, html: slotContent});
      expect(await el.getProperty('level')).toBe(ODS_TEXT_LEVEL.caption);
    });

    it('should have a subheading level', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, level: ODS_TEXT_LEVEL.subheading}, html: slotContent});
      expect(await el.getProperty('level')).toBe(ODS_TEXT_LEVEL.subheading);
    });

    it('should have a heading level', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, level: ODS_TEXT_LEVEL.heading}, html: slotContent});
      expect(await el.getProperty('level')).toBe(ODS_TEXT_LEVEL.heading);
    });
  });

  describe('sizes', () => {
    it('should have a 100 size', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, size: ODS_TEXT_SIZE._100}, html: slotContent});
      expect(await el.getProperty('size')).toBe(ODS_TEXT_SIZE._100);
    });
    it('should have a 200 size', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, size: ODS_TEXT_SIZE._200}, html: slotContent});
      expect(await el.getProperty('size')).toBe(ODS_TEXT_SIZE._200);
    });
    it('should have a 300 size', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, size: ODS_TEXT_SIZE._300}, html: slotContent});
      expect(await el.getProperty('size')).toBe(ODS_TEXT_SIZE._300);
    });
    it('should have a 400 size', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, size: ODS_TEXT_SIZE._400}, html: slotContent});
      expect(await el.getProperty('size')).toBe(ODS_TEXT_SIZE._400);
    });
    it('should have a 500 size', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, size: ODS_TEXT_SIZE._500}, html: slotContent});
      expect(await el.getProperty('size')).toBe(ODS_TEXT_SIZE._500);
    });
    it('should have a 600 size', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, size: ODS_TEXT_SIZE._600}, html: slotContent});
      expect(await el.getProperty('size')).toBe(ODS_TEXT_SIZE._600);
    });
    it('should have a 700 size', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, size: ODS_TEXT_SIZE._700}, html: slotContent});
      expect(await el.getProperty('size')).toBe(ODS_TEXT_SIZE._700);
    });
    it('should have a 800 size', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, size: ODS_TEXT_SIZE._800}, html: slotContent});
      expect(await el.getProperty('size')).toBe(ODS_TEXT_SIZE._800);
    });
  });

  describe('hues', () => {
    it('should have a 100 hue', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, hue: ODS_TEXT_COLOR_HUE._100}, html: slotContent});
      expect(await el.getProperty('hue')).toBe(ODS_TEXT_COLOR_HUE._100);
    });

    it('should have a 500 hue', async() => {
      await setup({attributes: {color: ODS_TEXT_COLOR_INTENT.primary, hue: ODS_TEXT_COLOR_HUE._500}, html: slotContent});
      expect(await el.getProperty('hue')).toBe(ODS_TEXT_COLOR_HUE._500);
    });
  });
});
