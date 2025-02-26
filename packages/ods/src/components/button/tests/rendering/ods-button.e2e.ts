import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '../../src';

describe('ods-button rendering', () => {
  let button: E2EElement;
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-button');
    button = await page.find('ods-button >>> .ods-button__button');
  }

  it('should render the web component', async() => {
    await setup('<ods-button></ods-button>');

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('icon', () => {
    const dummyIcon = 'star';
    it('should render with an icon', async() => {
      await setup(`<ods-button icon="${dummyIcon}"></ods-button>`);

      const customIcon = await button.find(`ods-icon[name="${dummyIcon}"]`);

      expect(customIcon).not.toBeNull();
    });

    it('should render icon on the left', async() => {
      await setup(`<ods-button icon="${dummyIcon}"></ods-button>`);

      const buttonStyle = await button.getComputedStyle();

      expect(buttonStyle.getPropertyValue('flex-direction')).toBe('row');
    });

    it('should render icon on the right', async() => {
      await setup(`<ods-button icon="${dummyIcon}" icon-alignment="right"></ods-button>`);

      const buttonStyle = await button.getComputedStyle();

      expect(buttonStyle.getPropertyValue('flex-direction')).toBe('row-reverse');
    });
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      const customBackgroundColor = '#ff0000';

      await setup('<ods-button></ods-button>', `ods-button::part(button) { background-color: ${customBackgroundColor}; }`);

      const buttonStyle = await button.getComputedStyle();
      expect(buttonStyle.getPropertyValue('background-color')).toBe('rgb(255, 0, 0)');
    });
  });

  describe('sizes', () => {
    it('should respect increase order (xs < sm < md)', async() => {
      await setup(`
        <ods-button size="${ODS_BUTTON_SIZE.xs}" label="Button"></ods-button>
        <ods-button size="${ODS_BUTTON_SIZE.sm}" label="Button"></ods-button>
        <ods-button size="${ODS_BUTTON_SIZE.md}" label="Button"></ods-button>
      `);

      const xsButton = await page.find(`ods-button[size=${ODS_BUTTON_SIZE.xs}] >>> .ods-button__button`);
      const smButton = await page.find(`ods-button[size=${ODS_BUTTON_SIZE.sm}] >>> .ods-button__button`);
      const mdButton = await page.find(`ods-button[size=${ODS_BUTTON_SIZE.md}] >>> .ods-button__button`);

      const xsButtonStyle = await xsButton.getComputedStyle();
      const xsButtonHeight = parseInt(xsButtonStyle.getPropertyValue('height'), 10);

      const smButtonStyle = await smButton.getComputedStyle();
      const smButtonHeight = parseInt(smButtonStyle.getPropertyValue('height'), 10);

      const mdButtonStyle = await mdButton.getComputedStyle();
      const mdButtonHeight = parseInt(mdButtonStyle.getPropertyValue('height'), 10);

      expect(xsButtonHeight).toBeLessThan(smButtonHeight);
      expect(xsButtonHeight).toBeLessThan(mdButtonHeight);
      expect(smButtonHeight).toBeLessThan(mdButtonHeight);
      expect(smButtonHeight).toBeGreaterThan(xsButtonHeight);
      expect(mdButtonHeight).toBeGreaterThan(xsButtonHeight);
      expect(mdButtonHeight).toBeGreaterThan(smButtonHeight);
    });
  });

  describe('variants', () => {
    describe('size xs', () => {
      it('should have the same height for all variants at size xs', async() => {
        await setup(`
        <div>
          <ods-button size="${ODS_BUTTON_SIZE.xs}" variant="${ODS_BUTTON_VARIANT.default}" label="Button"></ods-button>
          <ods-button size="${ODS_BUTTON_SIZE.xs}" variant="${ODS_BUTTON_VARIANT.ghost}" label="Button"></ods-button>
          <ods-button size="${ODS_BUTTON_SIZE.xs}" variant="${ODS_BUTTON_VARIANT.outline}" label="Button"></ods-button>
        </div>
      `);

        const defaultBtn = await page.find(`ods-button[size=${ODS_BUTTON_SIZE.xs}][variant="${ODS_BUTTON_VARIANT.default}"]`);
        const ghostBtn = await page.find(`ods-button[size=${ODS_BUTTON_SIZE.xs}][variant="${ODS_BUTTON_VARIANT.ghost}"]`);
        const outlineBtn = await page.find(`ods-button[size=${ODS_BUTTON_SIZE.xs}][variant="${ODS_BUTTON_VARIANT.outline}"]`);

        const defaultStyle = await defaultBtn.getComputedStyle();
        const ghostStyle = await ghostBtn.getComputedStyle();
        const outlineStyle = await outlineBtn.getComputedStyle();

        const defaultHeight = parseInt(defaultStyle.getPropertyValue('height'), 10);
        const ghostHeight = parseInt(ghostStyle.getPropertyValue('height'), 10);
        const outlineHeight = parseInt(outlineStyle.getPropertyValue('height'), 10);

        expect(defaultHeight).toBe(ghostHeight);
        expect(defaultHeight).toBe(outlineHeight);
      });
    });

    describe('size sm', () => {
      it('should have the same height for all variants at size sm', async() => {
        await setup(`
        <div>
          <ods-button size="${ODS_BUTTON_SIZE.sm}" variant="${ODS_BUTTON_VARIANT.default}" label="Button"></ods-button>
          <ods-button size="${ODS_BUTTON_SIZE.sm}" variant="${ODS_BUTTON_VARIANT.ghost}" label="Button"></ods-button>
          <ods-button size="${ODS_BUTTON_SIZE.sm}" variant="${ODS_BUTTON_VARIANT.outline}" label="Button"></ods-button>
        </div>
      `);

        const defaultBtn = await page.find(`ods-button[size=${ODS_BUTTON_SIZE.sm}][variant="${ODS_BUTTON_VARIANT.default}"]`);
        const ghostBtn = await page.find(`ods-button[size=${ODS_BUTTON_SIZE.sm}][variant="${ODS_BUTTON_VARIANT.ghost}"]`);
        const outlineBtn = await page.find(`ods-button[size=${ODS_BUTTON_SIZE.sm}][variant="${ODS_BUTTON_VARIANT.outline}"]`);

        const defaultStyle = await defaultBtn.getComputedStyle();
        const ghostStyle = await ghostBtn.getComputedStyle();
        const outlineStyle = await outlineBtn.getComputedStyle();

        const defaultHeight = parseInt(defaultStyle.getPropertyValue('height'), 10);
        const ghostHeight = parseInt(ghostStyle.getPropertyValue('height'), 10);
        const outlineHeight = parseInt(outlineStyle.getPropertyValue('height'), 10);

        expect(defaultHeight).toBe(ghostHeight);
        expect(defaultHeight).toBe(outlineHeight);
      });
    });

    describe('size md', () => {
      it('should have the same height for all variants at size md', async() => {
        await setup(`
        <div>
          <ods-button size="${ODS_BUTTON_SIZE.md}" variant="${ODS_BUTTON_VARIANT.default}" label="Button"></ods-button>
          <ods-button size="${ODS_BUTTON_SIZE.md}" variant="${ODS_BUTTON_VARIANT.ghost}" label="Button"></ods-button>
          <ods-button size="${ODS_BUTTON_SIZE.md}" variant="${ODS_BUTTON_VARIANT.outline}" label="Button"></ods-button>
        </div>
      `);

        const defaultBtn = await page.find(`ods-button[size=${ODS_BUTTON_SIZE.md}][variant="${ODS_BUTTON_VARIANT.default}"]`);
        const ghostBtn = await page.find(`ods-button[size=${ODS_BUTTON_SIZE.md}][variant="${ODS_BUTTON_VARIANT.ghost}"]`);
        const outlineBtn = await page.find(`ods-button[size=${ODS_BUTTON_SIZE.md}][variant="${ODS_BUTTON_VARIANT.outline}"]`);

        const defaultStyle = await defaultBtn.getComputedStyle();
        const ghostStyle = await ghostBtn.getComputedStyle();
        const outlineStyle = await outlineBtn.getComputedStyle();

        const defaultHeight = parseInt(defaultStyle.getPropertyValue('height'), 10);
        const ghostHeight = parseInt(ghostStyle.getPropertyValue('height'), 10);
        const outlineHeight = parseInt(outlineStyle.getPropertyValue('height'), 10);

        expect(defaultHeight).toBe(ghostHeight);
        expect(defaultHeight).toBe(outlineHeight);
      });
    });
  });
});
