import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsProgressBarAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-progress-bar', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsProgressBarAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsProgressBarAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-progress-bar ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-progress-bar>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-progress-bar');
  }

  describe('screenshots', () => {
    it.each([0, 50, 100])('should display progress bar value', async (value) => {
      await setup({ attributes: { value } });
      await page.waitForChanges();
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot(`progress bar value with ${value}`, { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should display the progress bar with slots filled', async () => {
      await setup({ attributes: { value: 50 }, html: `
        <span slot="end">19%</span>
        ` });
      await page.waitForChanges();
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot(`progress bar value with slots`, { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    })
  });
});
