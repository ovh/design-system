import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { ODS_SPINNER_SIZE } from '../../src';

describe('ods-spinner rendering', () => {
  let container: E2EElement;
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-spinner');
    container = await page.find('ods-spinner >>> .ods-spinner__container');
  }

  it('should render the web component', async() => {
    await setup('<ods-spinner></ods-spinner>');

    expect(el.shadowRoot).not.toBeNull();
    expect(container).not.toBeNull();
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      const customHeight = 200;

      await setup('<ods-spinner></ods-spinner>', `ods-spinner::part(spinner) { height: ${customHeight}px; }`);

      const elStyle = await el.getComputedStyle();
      expect(parseInt(elStyle.getPropertyValue('height'), 10)).toBe(customHeight);
    });
  });

  describe('sizes', () => {
    it('should respect increase order (xs < sm < md < lg)', async() => {
      await setup(`
        <ods-spinner size="${ODS_SPINNER_SIZE.xs}"></ods-spinner>
        <ods-spinner size="${ODS_SPINNER_SIZE.sm}"></ods-spinner>
        <ods-spinner size="${ODS_SPINNER_SIZE.md}"></ods-spinner>
        <ods-spinner size="${ODS_SPINNER_SIZE.lg}"></ods-spinner>
      `);

      const xsSpinner = await page.find(`ods-spinner[size=${ODS_SPINNER_SIZE.xs}]`);
      const smSpinner = await page.find(`ods-spinner[size=${ODS_SPINNER_SIZE.sm}]`);
      const mdSpinner = await page.find(`ods-spinner[size=${ODS_SPINNER_SIZE.md}]`);
      const lgSpinner = await page.find(`ods-spinner[size=${ODS_SPINNER_SIZE.lg}]`);

      const xsSpinnerStyle = await xsSpinner.getComputedStyle();
      const xsSpinnerHeight = parseInt(xsSpinnerStyle.getPropertyValue('height'), 10);

      const smSpinnerStyle = await smSpinner.getComputedStyle();
      const smSpinnerHeight = parseInt(smSpinnerStyle.getPropertyValue('height'), 10);

      const mdSpinnerStyle = await mdSpinner.getComputedStyle();
      const mdSpinnerHeight = parseInt(mdSpinnerStyle.getPropertyValue('height'), 10);

      const lgSpinnerStyle = await lgSpinner.getComputedStyle();
      const lgSpinnerHeight = parseInt(lgSpinnerStyle.getPropertyValue('height'), 10);

      expect(xsSpinnerHeight).toBeLessThan(smSpinnerHeight);
      expect(xsSpinnerHeight).toBeLessThan(mdSpinnerHeight);
      expect(xsSpinnerHeight).toBeLessThan(lgSpinnerHeight);
      expect(smSpinnerHeight).toBeLessThan(mdSpinnerHeight);
      expect(smSpinnerHeight).toBeLessThan(lgSpinnerHeight);
      expect(smSpinnerHeight).toBeGreaterThan(xsSpinnerHeight);
      expect(mdSpinnerHeight).toBeLessThan(lgSpinnerHeight);
      expect(mdSpinnerHeight).toBeGreaterThan(xsSpinnerHeight);
      expect(mdSpinnerHeight).toBeGreaterThan(smSpinnerHeight);
      expect(lgSpinnerHeight).toBeGreaterThan(xsSpinnerHeight);
      expect(lgSpinnerHeight).toBeGreaterThan(smSpinnerHeight);
      expect(lgSpinnerHeight).toBeGreaterThan(mdSpinnerHeight);
    });
  });
});
