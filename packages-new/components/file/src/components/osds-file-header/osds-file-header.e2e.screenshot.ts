import type { OdsFileAttribute } from '../osds-file/interfaces/attributes';
import type { OdsFileHeaderAttribute } from './interfaces/attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:screenshot:osds-file-header', () => {
  async function setup({ attributes = {} }: { attributes?: Partial<OdsFileHeaderAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsFileAttribute>(attributes, DEFAULT_ATTRIBUTE);

    const page = await newE2EPage({
      html: `<osds-file-header ${odsStringAttributes2Str(stringAttributes)} />`,
    });
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    return page
  }

  describe('screenshots', () => {
    describe('attributes', () => {
      it('should add disabled style if disabled prop is true', async () => {
        const page = await setup({ attributes: { disabled: true } });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('disabled state', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      })

      it('should add error class if errorMessage prop is defined', async () => {
        const page = await setup({ attributes: { errorMessage: 'error message' } });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('error state', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      })

      it('should display success class if files have been uploaded', async () => {
        const page = await setup({ attributes: { isSuccessful: true } });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('success state', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      })
    });
  });
});
