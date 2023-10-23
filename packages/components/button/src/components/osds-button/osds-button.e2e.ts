import type {E2EElement, E2EPage} from '@stencil/core/testing';
import type {OdsButtonAttribute} from './interfaces/attributes';
import {newE2EPage} from '@stencil/core/testing';
import {odsComponentAttributes2StringAttributes, odsStringAttributes2Str} from '@ovhcloud/ods-common-testing';
import {ODS_THEME_COLOR_INTENT} from '@ovhcloud/ods-common-theming';
import {ODS_BUTTON_SIZE} from './constants/button-size';
import {ODS_BUTTON_TEXT_ALIGN} from './constants/button-text-align';
import {ODS_BUTTON_TYPE} from './constants/button-type';
import {ODS_BUTTON_VARIANT} from './constants/button-variant';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';

describe('e2e:osds-button', () => {
  let page: E2EPage;
  let el: E2EElement;
  let slotContent: E2EElement;
  let linkElement: E2EElement;
  let buttonElement: E2EElement;
  let checkSubmit: jest.Mock;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({attributes = {}, html = '', inForm}: {
    attributes?: Partial<OdsButtonAttribute>,
    html?: string,
    inForm?: boolean
  } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsButtonAttribute>(attributes, DEFAULT_ATTRIBUTE);

    let content = '';
    const button = `<osds-button ${odsStringAttributes2Str(stringAttributes)}>
          ${html}
        </osds-button>`;

    page = await newE2EPage();

    if (inForm) {
      content = `
       <form onsubmit='onSubmit()'>
          ${button}
        </form>
      `;
    } else {
      content = button;
    }

    checkSubmit = jest.fn();
    await page.exposeFunction('onSubmit', checkSubmit);

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    el = await page.find('osds-button');

    buttonElement = await page.find('osds-button >>> button');
    linkElement = await page.find('osds-button >>> a');
    slotContent = await (buttonElement || linkElement).find('slot:not([name])');
  }

  describe('defaults', () => {
    beforeEach(async() => {
      await setup();
    });

    it('should render', async() => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });

    it('should have a button element', async() => {
      expect(buttonElement).not.toBeNull();
      expect(buttonElement).toHaveClass('button');
    });

    it('should have a default variant', async() => {
      expect(await el.getProperty('variant')).toBe(DEFAULT_ATTRIBUTE.variant);
    });

    it('should have a default textAlign', async() => {
      expect(await el.getProperty('textAlign')).toBe(DEFAULT_ATTRIBUTE.textAlign);
    });

    it('should have a default color', async() => {
      expect(await el.getProperty('color')).toBe(DEFAULT_ATTRIBUTE.color);
    });

    it('should have a default contrasted', async() => {
      expect(await el.getProperty('contrasted')).toBe(DEFAULT_ATTRIBUTE.contrasted);
    });

    it('should have a default disabled', async() => {
      expect(await el.getProperty('disabled')).toBe(DEFAULT_ATTRIBUTE.disabled);
    });

    it('should have a default inline', async() => {
      expect(await el.getProperty('inline')).toBe(DEFAULT_ATTRIBUTE.inline);
    });

    it('should have a default size', async() => {
      expect(await el.getProperty('size')).toBe(DEFAULT_ATTRIBUTE.size);
    });

    it('should have a default type', async() => {
      expect(await el.getProperty('type')).toBe(DEFAULT_ATTRIBUTE.type);
    });

    it('should have a default circle', async() => {
      expect(await el.getProperty('circle')).toBe(DEFAULT_ATTRIBUTE.circle);
    });
  });

  describe('slots', () => {
    it('should have a slot', async() => {
      await setup();
      expect(slotContent).not.toBeNull();
    });

    xit('should display a text in the button', async() => {
      const text = 'Text';
      await setup({html: text});

      expect(slotContent.innerText).toBe(text);
    });

    it('should have a slot', async() => {
      await setup();
      expect(slotContent).not.toBeNull();
    });
  });

  describe('colors', () => {
    it('should have a default color', async() => {
      await setup({attributes: {color: ODS_THEME_COLOR_INTENT.default}});
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.default);
    });

    it('should have a primary color', async() => {
      await setup({attributes: {color: ODS_THEME_COLOR_INTENT.primary}});
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.primary);
    });

    it('should have a text color', async() => {
      await setup({attributes: {color: ODS_THEME_COLOR_INTENT.text}});
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.text);
    });

    it('should have an accent color', async() => {
      await setup({attributes: {color: ODS_THEME_COLOR_INTENT.accent}});
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.accent);
    });

    it('should have a warning color', async() => {
      await setup({attributes: {color: ODS_THEME_COLOR_INTENT.warning}});
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.warning);
    });

    it('should have a success color', async() => {
      await setup({attributes: {color: ODS_THEME_COLOR_INTENT.success}});
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.success);
    });

    it('should have a info color', async() => {
      await setup({attributes: {color: ODS_THEME_COLOR_INTENT.info}});
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.info);
    });

    it('should have a promotion color', async() => {
      await setup({attributes: {color: ODS_THEME_COLOR_INTENT.promotion}});
      expect(await el.getProperty('color')).toBe(ODS_THEME_COLOR_INTENT.promotion);
    });
  });

  describe('disabled', () => {
    it('should not submit the form', async() => {
      await setup({attributes: {disabled: true, type: ODS_BUTTON_TYPE.submit}, html: 'submit', inForm: true});
      await el.click();
      expect(checkSubmit).not.toHaveBeenCalled();
    });
  });

  describe('variants', () => {
    it('should have a flat variant', async() => {
      await setup({attributes: {variant: ODS_BUTTON_VARIANT.flat}});
      expect(await el.getProperty('variant')).toBe(ODS_BUTTON_VARIANT.flat);
    });

    it('should have a stroked variant', async() => {
      await setup({attributes: {variant: ODS_BUTTON_VARIANT.stroked}});
      expect(await el.getProperty('variant')).toBe(ODS_BUTTON_VARIANT.stroked);
    });

    it('should have a ghost variant', async() => {
      await setup({attributes: {variant: ODS_BUTTON_VARIANT.ghost}});
      expect(await el.getProperty('variant')).toBe(ODS_BUTTON_VARIANT.ghost);
    });
  });

  describe('textAlign', () => {
    it('should have a textAlign to center', async() => {
      await setup({attributes: {textAlign: ODS_BUTTON_TEXT_ALIGN.center}});
      expect(await el.getProperty('textAlign')).toBe(ODS_BUTTON_TEXT_ALIGN.center);
    });

    it('should have a textAlign to start', async() => {
      await setup({attributes: {textAlign: ODS_BUTTON_TEXT_ALIGN.start}});
      expect(await el.getProperty('textAlign')).toBe(ODS_BUTTON_TEXT_ALIGN.start);
    });

    it('should have a textAlign to end', async() => {
      await setup({attributes: {textAlign: ODS_BUTTON_TEXT_ALIGN.end}});
      expect(await el.getProperty('textAlign')).toBe(ODS_BUTTON_TEXT_ALIGN.end);
    });
  });

  describe('sizes', () => {
    it('should have a small size', async() => {
      await setup({attributes: {size: ODS_BUTTON_SIZE.sm}});
      expect(await el.getProperty('size')).toBe(ODS_BUTTON_SIZE.sm);
    });

    it('should have a medium size', async() => {
      await setup({attributes: {size: ODS_BUTTON_SIZE.md}});
      expect(await el.getProperty('size')).toBe(ODS_BUTTON_SIZE.md);
    });
  });

  describe('circle', () => {
    beforeEach(async() => {
      await setup();
    });

    it('should apply the ghost variant if circle attribute is true', async() => {
      await setup({attributes: {circle: true}});
      expect(await el.getProperty('variant')).toBe(ODS_BUTTON_VARIANT.ghost);
    });
  });

  describe('form', () => {
    beforeEach(async() => {
      await setup({attributes: {type: ODS_BUTTON_TYPE.submit}, html: 'submit', inForm: true});
    });

    it('should submit a form with click when type is submit', async() => {
      await el.click();
      expect(checkSubmit).toHaveBeenCalledTimes(1);
    });

    it('should submit a form with Enter key when type is submit', async() => {
      await el.press('Enter');
      expect(checkSubmit).toHaveBeenCalledTimes(1);
    });

    it('should submit a form with Space key when type is submit', async() => {
      await el.press(' ');
      expect(checkSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
