import { newE2EPage } from '@stencil/core/testing';
import {
  OdsFileAttributes,
  OdsComponentAttributes2StringAttributes,
  odsFileDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsFileBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:screenshot:osds-file-item', () => {
  async function setup({ attributes = {} }: { attributes?: Partial<OdsFileAttributes> } = {}) {
    const minimalAttributes: OdsFileAttributes = OdsCreateAttributes(attributes, odsFileBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsFileAttributes>(minimalAttributes, odsFileDefaultAttributes);

    const page = await newE2EPage({
      html: `<osds-file-item ${OdsStringAttributes2Str(stringAttributes)} />`,
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
