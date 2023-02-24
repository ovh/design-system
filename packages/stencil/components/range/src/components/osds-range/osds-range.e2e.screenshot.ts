import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsRangeAttributes,
  odsRangeDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsRangeBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-range', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({
                         attributes = {},
                         html = ``
                       }: { attributes?: Partial<OdsRangeAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsRangeAttributes = OdsCreateAttributes(attributes, odsRangeBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsRangeAttributes>(minimalAttributes, odsRangeDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-range ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-range>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    await page.setViewport({ width: 140, height: 40 });
    el = await page.find('osds-range');
  }

  describe('screenshots', () => {
    it('should display start bound', async () => {
      await setup({
        html: '<span slot="start-bound">start</span>'
      });
      await page.waitForChanges();

      const results = await page.compareScreenshot('range', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('should display end bound', async () => {
      await setup({
        html: '<span slot="end-bound">end</span>'
      });
      await page.waitForChanges();

      const results = await page.compareScreenshot('range', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('should display start & end bound', async () => {
      await setup({
        html: '<span slot="start-bound">start</span><span slot="end-bound">end</span>'
      });
      await page.waitForChanges();

      const results = await page.compareScreenshot('range', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    [0, 4, 10].forEach(value => {
      it(`should display single range with value = ${value}`, async () => {
        await setup({
          attributes: {
            value,
            min: 0,
            max: 10
          }
        });
        await page.waitForChanges();

        const results = await page.compareScreenshot('range', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      });
    });

    ([[0, 3], [3, 7], [7, 10]] as [number, number][]).forEach(value => {
      it(`should display dual range with value = [${value}]`, async () => {
        await setup({
          attributes: {
            min: 0,
            max: 10
          }
        });
        el.setProperty('value', value);
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-range') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height: 600 });
        const results = await page.compareScreenshot('range', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      });
    });
  });
});
