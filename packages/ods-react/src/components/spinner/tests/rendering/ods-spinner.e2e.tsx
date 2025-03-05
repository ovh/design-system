import { type Page } from 'puppeteer';
import { ODS_SPINNER_SIZE, OdsSpinner } from '../../src';

describe('OdsSpinner rendering', () => {
  // it('should render the web component', async() => {
  //   await setup('<ods-spinner></ods-spinner>');
  //
  //   expect(el.shadowRoot).not.toBeNull();
  //   expect(container).not.toBeNull();
  // });
  //
  // describe('part', () => {
  //   it('should render with custom style applied', async() => {
  //     const customHeight = 200;
  //
  //     await setup('<ods-spinner></ods-spinner>', `ods-spinner::part(spinner) { height: ${customHeight}px; }`);
  //
  //     const elStyle = await el.getComputedStyle();
  //     expect(parseInt(elStyle.getPropertyValue('height'), 10)).toBe(customHeight);
  //   });
  // });

  // TODO try to copy stencil helper?
  // async function pageFind<T>(page: Page, selector: string) {
  //   return page.$eval(selector, (el) => el as T);
  // }

  describe('sizes', () => {
    e2e('should respect increase order (xs < sm < md < lg)',
      () => (
        <>
          <OdsSpinner size={ ODS_SPINNER_SIZE.xs } />
          <OdsSpinner size={ ODS_SPINNER_SIZE.sm } />
          <OdsSpinner size={ ODS_SPINNER_SIZE.md } />
          <OdsSpinner size={ ODS_SPINNER_SIZE.lg } />
        </>
      ),
      async(page: Page) => {
        const xsSpinnerHeight = await page.$eval(`.ods-spinner--${ODS_SPINNER_SIZE.xs}`, (el: Element) => parseInt(window.getComputedStyle(el).getPropertyValue('height'), 10));
        const smSpinnerHeight = await page.$eval(`.ods-spinner--${ODS_SPINNER_SIZE.sm}`, (el: Element) => parseInt(window.getComputedStyle(el).getPropertyValue('height'), 10));
        const mdSpinnerHeight = await page.$eval(`.ods-spinner--${ODS_SPINNER_SIZE.md}`, (el: Element) => parseInt(window.getComputedStyle(el).getPropertyValue('height'), 10));
        const lgSpinnerHeight = await page.$eval(`.ods-spinner--${ODS_SPINNER_SIZE.lg}`, (el: Element) => parseInt(window.getComputedStyle(el).getPropertyValue('height'), 10));

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
      }
    );
  });
});
