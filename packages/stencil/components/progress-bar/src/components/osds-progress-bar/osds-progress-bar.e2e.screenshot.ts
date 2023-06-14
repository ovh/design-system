import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsProgressBarAttributes,
  OdsComponentAttributes2StringAttributes,
  odsProgressBarDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsProgressBarBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-progress-bar', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsProgressBarAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsProgressBarAttributes = OdsCreateAttributes(attributes, odsProgressBarBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsProgressBarAttributes>(minimalAttributes, odsProgressBarDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-progress-bar ${OdsStringAttributes2Str(stringAttributes)}>
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
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });
    it('should display the progress bar with slots filled', async () => {
      await setup({ attributes: { value: 50 }, html: `
        <span slot="end">19%</span>
        ` });
      await page.waitForChanges();
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot(`progress bar value with slots`, { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    })
  });
});
