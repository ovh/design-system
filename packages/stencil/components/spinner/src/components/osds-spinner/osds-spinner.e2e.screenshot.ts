import { E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsSpinnerAttributes,
  OdsComponentAttributes2StringAttributes,
  odsSpinnerDefaultAttributes,
  OdsSpinnerSize,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsSpinnerBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-spinner', () => {
  let page: E2EPage;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSpinnerAttributes> } = {}) {
    const minimalAttributes: OdsSpinnerAttributes = OdsCreateAttributes(attributes, odsSpinnerBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSpinnerAttributes>(minimalAttributes, odsSpinnerDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-spinner size=${attributes.size || odsSpinnerDefaultAttributes.size} ${OdsStringAttributes2Str(stringAttributes)} />`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (attributes.contrasted) {
      await page.evaluate(() => document.body.style.setProperty('background', '#000'));
    }

    await page.evaluate(() => {
      const spinnerEl = document.querySelector('osds-spinner')?.shadowRoot?.querySelector('.spinner') as HTMLElement
      spinnerEl.style.setProperty('animation', 'none');
    });
    await page.setViewport({ width: 600, height:600 });
  }

  describe('screenshots', () => {
    it('spinner small', async () => {
      await setup({ attributes: { size: OdsSpinnerSize.sm } });

      const results = await page.compareScreenshot('spinner', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('spinner medium', async () => {
      await setup({ attributes: { size: OdsSpinnerSize.md } });

      const results = await page.compareScreenshot('spinner', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('spinner large', async () => {
      await setup({ attributes: { size: OdsSpinnerSize.lg } });

      const results = await page.compareScreenshot('spinner', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('contrasted spinner', async () => {
      await setup({ attributes: { contrasted: true } });

      const results = await page.compareScreenshot('spinner', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
