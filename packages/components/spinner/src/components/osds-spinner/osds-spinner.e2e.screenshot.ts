import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_SPINNER_SIZE } from './constants/spinner-size';
import type { OdsSpinnerAttribute } from './interfaces/attributes';


describe('e2e:osds-spinner', () => {
  let page: E2EPage;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSpinnerAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSpinnerAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();

    await page.setViewport({ width: 600, height:600 });
    await page.setContent(`<osds-spinner size=${attributes.size || DEFAULT_ATTRIBUTE.size} ${odsStringAttributes2Str(stringAttributes)} />`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (attributes.contrasted) {
      await page.evaluate(() => document.body.style.setProperty('background', '#000'));
    }

    await page.evaluate(() => {
      const spinnerEl = document.querySelector('osds-spinner')?.shadowRoot?.querySelector('.spinner > svg') as HTMLElement;
      spinnerEl.style.setProperty('animation', 'none');
    });
  }

  describe('screenshots', () => {
    it('spinner small', async() => {
      await setup({ attributes: { size: ODS_SPINNER_SIZE.sm } });

      const results = await page.compareScreenshot('spinner', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('spinner medium', async() => {
      await setup({ attributes: { size: ODS_SPINNER_SIZE.md } });

      const results = await page.compareScreenshot('spinner', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('spinner large', async() => {
      await setup({ attributes: { size: ODS_SPINNER_SIZE.lg } });

      const results = await page.compareScreenshot('spinner', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('contrasted spinner', async() => {
      await setup({ attributes: { contrasted: true } });

      const results = await page.compareScreenshot('spinner', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
