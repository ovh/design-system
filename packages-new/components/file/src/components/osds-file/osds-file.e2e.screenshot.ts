import type { OdsFileAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';

describe('e2e:osds-file', () => {
  async function setup({ attributes = {} }: { attributes?: Partial<OdsFileAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsFileAttribute>(attributes, DEFAULT_ATTRIBUTE);

    const page = await newE2EPage({
      html: `<osds-file ${odsStringAttributes2Str(stringAttributes)} />`,
    });
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    return page
  }

  describe('screenshots', () => {
    describe('attributes', () => {
      it('should add disabled style if disabled prop is true', async () => {
        const page = await setup({ attributes: { disabled: true } });
        await page.waitForChanges();
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('disabled state', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      })

      it('should add error class if errorMessage prop is defined', async () => {
        const page = await setup({ attributes: { errorMessage: 'error message' } });
        await page.waitForChanges();
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('error state', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      })

      it('should display success class if files have been uploaded', async () => {
        const page = await setup();
        await page.$eval('osds-file', (el: any) => {
          el.files = [{ name: 'test.jpg', size: 1000, progress: 100 }]
        })

        await page.waitForChanges();
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('success state', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      })

      it('should render files item during uploading', async () => {
        const page = await setup();
        await page.$eval('osds-file', (el: any) => {
          el.files = [{ name: 'test.jpg', size: 1000, progress: 50 }]
        })

        await page.waitForChanges();
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('files item', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      })

      it('should render files item during uploading with error', async () => {
        const page = await setup();
        await page.$eval('osds-file', (el: any) => {
          el.files = [{ name: 'test.jpg', size: 1000, progress: 50, error: true }]
        })

        await page.waitForChanges();
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('files item with error', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      })
    });
  });
});
