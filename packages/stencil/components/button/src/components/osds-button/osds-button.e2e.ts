import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsButtonAttributes,
  OdsButtonSize,
  OdsIconSize,
  OdsButtonVariant,
  OdsComponentAttributes2StringAttributes,
  odsButtonDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsButtonBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

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

  async function setup({ attributes = {}, html = ``, inForm }: {
    attributes?: Partial<OdsButtonAttributes>,
    html?: string,
    inForm?: boolean
  } = {}) {
    const minimalAttributes: OdsButtonAttributes = OdsCreateAttributes(attributes, odsButtonBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsButtonAttributes>(minimalAttributes, odsButtonDefaultAttributes);

    let content = '';
    const button = `<osds-button ${OdsStringAttributes2Str(stringAttributes)}>
          ${html}
        </osds-button>`;

    page = await newE2EPage();

    if (inForm) {
      content = `
       <form onsubmit='onSubmit()'>
          ${button}
        </form>
      `
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
    beforeEach(async () => {
      await setup();
    });

    it('should render', async () => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });

    it('should have a button element', async () => {
      expect(buttonElement).not.toBeNull();
      expect(buttonElement).toHaveClass('button');
    });

    it('should have a default variant', async () => {
      expect(await el.getProperty('variant')).toBe(odsButtonDefaultAttributes.variant);
    });

    it('should have a default color', async () => {
      expect(await el.getProperty('color')).toBe(odsButtonDefaultAttributes.color);
    });

    it('should have a default contrasted', async () => {
      expect(await el.getProperty('contrasted')).toBe(odsButtonDefaultAttributes.contrasted);
    });

    it('should have a default disabled', async () => {
      expect(await el.getProperty('disabled')).toBe(odsButtonDefaultAttributes.disabled);
    });

    it('should have a default inline', async () => {
      expect(await el.getProperty('inline')).toBe(odsButtonDefaultAttributes.inline);
    });

    it('should have a default size', async () => {
      expect(await el.getProperty('size')).toBe(odsButtonDefaultAttributes.size);
    });

    it('should have a default type', async () => {
      expect(await el.getProperty('type')).toBe(odsButtonDefaultAttributes.type);
    });

    it('should have a default circle', async () => {
      expect(await el.getProperty('circle')).toBe(odsButtonDefaultAttributes.circle);
    });
  });

  describe('slots', () => {
    it('should have a slot', async () => {
      await setup();
      expect(slotContent).not.toBeNull();
    });

    xit('should display a text in the button', async () => {
      const text = `Text`;
      await setup({ html: text });

      expect(slotContent.innerText).toBe(text);
    });

    it('should have a slot', async () => {
      await setup();
      expect(slotContent).not.toBeNull();
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

  describe('disabled', () => {
    it('should not submit the form', async () => {
      await setup({ attributes: { disabled: true, type: 'submit' }, html: `submit`, inForm: true });
      await el.click();
      expect(checkSubmit).not.toHaveBeenCalled();
    });
  });

  describe('variants', () => {
    it('should have a flat variant', async () => {
      await setup({ attributes: { variant: OdsButtonVariant.flat } });
      expect(await el.getProperty('variant')).toBe(OdsButtonVariant.flat);
    });

    it('should have a stroked variant', async () => {
      await setup({ attributes: { variant: OdsButtonVariant.stroked } });
      expect(await el.getProperty('variant')).toBe(OdsButtonVariant.stroked);
    });

    it('should have a ghost variant', async () => {
      await setup({ attributes: { variant: OdsButtonVariant.ghost } });
      expect(await el.getProperty('variant')).toBe(OdsButtonVariant.ghost);
    });
  });

  describe('sizes', () => {
    it('should have a small size', async () => {
      await setup({ attributes: { size: OdsButtonSize.sm } });
      expect(await el.getProperty('size')).toBe(OdsButtonSize.sm);
    });

    it('should have a medium size', async () => {
      await setup({ attributes: { size: OdsButtonSize.md } });
      expect(await el.getProperty('size')).toBe(OdsButtonSize.md);
    });
  });

  describe('circle', () => {
    beforeEach(async () => {
      await setup();
    });

    it('should apply the ghost variant if circle attribute is true', async () => {
      await setup({ attributes: { circle: true } });
      expect(await el.getProperty('variant')).toBe(OdsButtonVariant.ghost);
    })
  });

  describe('form', () => {
    beforeEach(async () => {
      await setup({ attributes: { type: 'submit' }, html: `submit`, inForm: true });
    });

    it('should submit a form with click when type is submit', async () => {
      await el.click();
      expect(checkSubmit).toHaveBeenCalledTimes(1);
    });

    it('should submit a form with Enter key when type is submit', async () => {
      await el.press("Enter");
      expect(checkSubmit).toHaveBeenCalledTimes(1);
    });

    it('should submit a form with Space key when type is submit', async () => {
      await el.press(" ");
      expect(checkSubmit).toHaveBeenCalledTimes(1);
    });
  });
});



