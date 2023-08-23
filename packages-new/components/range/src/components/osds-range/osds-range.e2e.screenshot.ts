import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsRangeAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsCreateAttributes } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming/src';

describe('e2e:osds-range', () => {
  let page: E2EPage;
  let el: E2EElement;

  const baseAttribute = {
    color: OdsThemeColorIntent.default,
    disabled: false,
    error: undefined,
    errorStateControl: undefined,
    inline: false,
    max: 100,
    min: 0,
    step: 1,
    value: '',
    forbiddenValues: [],
    formControl: undefined
  };

  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsRangeAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsRangeAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-range ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-range>`);
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
