import type { OdsFileItemAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';

describe('e2e:screenshot:osds-file-item', () => {
  const basAttributes = { name: 'file1', size: 100 }

  async function setup({ attributes = {} }: { attributes?: Partial<OdsFileItemAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsFileItemAttribute>({ ...basAttributes, ...attributes }, DEFAULT_ATTRIBUTE);

    const page = await newE2EPage({
      html: `<osds-file-item ${odsStringAttributes2Str(stringAttributes)} />`,
    });
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    return page
  }

  describe('screenshots', () => {
    describe('attributes', () => {
      it('should add error class if error prop is true', async () => {
        const page = await setup({ attributes: { error: true } });
        await page.waitForChanges();
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('error state', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      })

      it('should render files item when a file is in progress', async () => {
        const page = await setup({ attributes: { progress: 50 } });
        await page.waitForChanges();
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('progress state', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      })

      it('should render files item during uploading with error', async () => {
        const page = await setup({ attributes: { progress: 50, error: true } });
        await page.waitForChanges();
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('progress with error state', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      })
    });
  });
});
