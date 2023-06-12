import { newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsFileItemAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str } from '@ovhcloud/ods-testing';
import { RequiredAttributes } from '@ovhcloud/ods-core/src/utils/properties/ods-extract-attributes-type';

const requiredAttributes: RequiredAttributes<OdsFileItemAttributes> = {
  name: 'file1',
  size: 100,
}

describe('e2e:screenshot:osds-file-item', () => {
  async function setup({ attributes = {} }: { attributes?: Partial<OdsFileItemAttributes> } = {}) {
    const minimalAttributes: OdsFileItemAttributes = OdsCreateAttributes(attributes, requiredAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsFileItemAttributes>(minimalAttributes, requiredAttributes);

    const page = await newE2EPage({
      html: `<osds-file-item ${OdsStringAttributes2Str(stringAttributes)} />`,
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
