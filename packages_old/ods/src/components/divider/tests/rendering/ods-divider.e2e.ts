import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';
import { ODS_DIVIDER_COLOR, ODS_DIVIDER_SPACING } from '../../src';

describe('ods-divider rendering', () => {
  let hr: E2EElement;
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-divider');
    hr = await page.find('ods-divider >>> .ods-divider__divider');
  }

  it('should render the web component', async() => {
    await setup('<ods-divider></ods-divider>');

    expect(el.shadowRoot).not.toBeNull();
    expect(hr).not.toBeNull();
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      const customColor = 'rgba(255, 0, 0, 0)';

      await setup('<ods-divider></ods-divider>', `ods-divider::part(divider) { background-color: ${customColor}; }`);

      const hrStyle = await hr.getComputedStyle();
      expect(hrStyle.getPropertyValue('background-color')).toBe(customColor);
    });
  });

  describe('colors', () => {
    it('should have different colors', async() => {
      await setup(`
        <ods-divider color=${ODS_DIVIDER_COLOR.light}></ods-divider>
        <ods-divider color=${ODS_DIVIDER_COLOR.dark}></ods-divider>
      `);

      const lightDivider = await page.find(`ods-divider[color='${ODS_DIVIDER_COLOR.light}'] >>> .ods-divider__divider`);
      const darkDivider = await page.find(`ods-divider[color='${ODS_DIVIDER_COLOR.dark}'] >>> .ods-divider__divider`);

      const lightDividerStyle = await lightDivider.getComputedStyle();
      const lightDividerBackgroundColor = lightDividerStyle.getPropertyValue('background-color');

      const darkDividerStyle = await darkDivider.getComputedStyle();
      const darkDividerBackgroundColor = darkDividerStyle.getPropertyValue('background-color');

      expect(lightDividerBackgroundColor).not.toBe(darkDividerBackgroundColor);
    });
  });

  describe('spacing', () => {
    it('should respect increase order (2 < 12 < 24)', async() => {
      await setup(`
        <ods-divider spacing=${ODS_DIVIDER_SPACING._2}></ods-divider>
        <ods-divider spacing=${ODS_DIVIDER_SPACING._12}></ods-divider>
        <ods-divider spacing=${ODS_DIVIDER_SPACING._24}></ods-divider>
      `);

      const smDivider = await page.find(`ods-divider[spacing='${ODS_DIVIDER_SPACING._2}'] >>> .ods-divider__divider`);
      const mdDivider = await page.find(`ods-divider[spacing='${ODS_DIVIDER_SPACING._12}'] >>> .ods-divider__divider`);
      const lgDivider = await page.find(`ods-divider[spacing='${ODS_DIVIDER_SPACING._24}'] >>> .ods-divider__divider`);

      const smDividerStyle = await smDivider.getComputedStyle();
      const smDividerMarginTop = parseInt(smDividerStyle.getPropertyValue('margin-top'), 10);

      const mdDividerStyle = await mdDivider.getComputedStyle();
      const mdDividerMarginTop = parseInt(mdDividerStyle.getPropertyValue('margin-top'), 10);

      const lgDividerStyle = await lgDivider.getComputedStyle();
      const lgDividerMarginTop = parseInt(lgDividerStyle.getPropertyValue('margin-top'), 10);

      expect(smDividerMarginTop).toBeLessThan(mdDividerMarginTop);
      expect(smDividerMarginTop).toBeLessThan(lgDividerMarginTop);
      expect(mdDividerMarginTop).toBeLessThan(lgDividerMarginTop);
      expect(mdDividerMarginTop).toBeGreaterThan(smDividerMarginTop);
      expect(lgDividerMarginTop).toBeGreaterThan(smDividerMarginTop);
      expect(lgDividerMarginTop).toBeGreaterThan(mdDividerMarginTop);
    });
  });
});
