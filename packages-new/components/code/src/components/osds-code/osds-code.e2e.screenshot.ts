import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsCodeAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { ODS_CODE_SIZE, ODS_CODE_SIZES } from './constants/code-size';

describe('e2e:osds-code', () => {
  const baseAttribute = { color: OdsThemeColorIntent.default, contrasted: false, size: ODS_CODE_SIZE.md };
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsCodeAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCodeAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-code ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-code>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    el = await page.find('osds-code');
  }

  describe('screenshots', () => {
    [() => { }, () => el.setProperty('contrasted', true)].forEach((contrasted) => {
      OdsThemeColorIntentList.forEach((color) => {
        it([color, contrasted].join(', '), async () => {
          await setup({
            attributes: {
              color,
            },
            html: 'Lorem ipsum'
          });
          contrasted();
          await page.waitForChanges();
          await page.evaluate(() => {
            const element = document.querySelector('osds-code') as HTMLElement;
            return { width: element.clientWidth, height: element.clientHeight };
          });
          await page.setViewport({ width: 600, height:600 });
          const results = await page.compareScreenshot('code', { fullPage: false, omitBackground: true });
          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
        });
      });
    });

    ODS_CODE_SIZES.forEach((size) => {
      it([size].join(', '), async () => {
        await setup({
          attributes: {
            size,
          },
          html: 'Lorem ipsum'
        });
        await page.waitForChanges();
        const results = await page.compareScreenshot('code', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      });
    });

    it('should setup without copy button', async () => {
      await setup({ html: 'Lorem ipsum' });
      await page.waitForChanges();
      const results = await page.compareScreenshot('code', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });
  });

  it('should setup with osds-button without icon', async () => {
    await setup({
      html: 'Lorem ipsum<osds-button slot="copy"></osds-button>'
    });
    await page.waitForChanges();
    const results = await page.compareScreenshot('code', { fullPage: false, omitBackground: true });
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
  });

  it('should setup with osds-button with custom icon', async () => {
    await setup({
      html: 'Lorem ipsum<osds-button slot="copy"><osds-icon name="file"></osds-icon></osds-button>'
    });
    await page.waitForChanges();
    const results = await page.compareScreenshot('code', { fullPage: false, omitBackground: true });
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
  });


  it('should setup with osds-button with variant', async () => {
    await setup({
      html: 'Lorem ipsum<osds-button slot="copy" variant="ghost"></osds-button>'
    });
    await page.waitForChanges();
    const results = await page.compareScreenshot('code', { fullPage: false, omitBackground: true });
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
  });

  it('should setup with vanilla button', async () => {
    await setup({
      html: 'Lorem ipsum<button slot="copy">copy</button>'
    });
    await page.waitForChanges();
    const results = await page.compareScreenshot('code', { fullPage: false, omitBackground: true });
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
  });
});
