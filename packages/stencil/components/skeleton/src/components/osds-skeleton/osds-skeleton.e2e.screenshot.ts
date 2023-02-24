import { E2EPage, newE2EPage } from '@stencil/core/testing';

import {
  OdsComponentAttributes2StringAttributes,
  OdsSkeletonAttributes,
  OdsSkeletonSize,
  odsSkeletonDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsSkeletonBaseAttributes,
} from '@ovhcloud/ods-testing';

describe('e2e:osds-skeleton', () => {
  let page: E2EPage;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSkeletonAttributes>, html?: string }) {
    const minimalAttributes: OdsSkeletonAttributes = OdsCreateAttributes(attributes, odsSkeletonBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSkeletonAttributes>(minimalAttributes, odsSkeletonDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
    <div class="container">
      <div style="background: black;height: 10px"></div>
      <osds-skeleton ${OdsStringAttributes2Str(stringAttributes)}></osds-skeleton>
      <div style="background: black;height: 10px"></div>
    </div>
`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  describe('screenshots for size', () => {
    it('check size auto', async () => {
      await setup({ attributes: { size: undefined } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size auto', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check size small', async () => {
      await setup({ attributes: { size: OdsSkeletonSize.sm } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size small', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check size medium', async () => {
      await setup({ attributes: { size: OdsSkeletonSize.md } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size medium', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check size large', async () => {
      await setup({ attributes: { size: OdsSkeletonSize.lg } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size large', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check size extra large', async () => {
      await setup({ attributes: { size: OdsSkeletonSize.xl } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size extra large', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });
  })

  it('check flex attribute', async () => {
    await setup({ attributes: { flex: true } });
    await page.waitForChanges();
    await page.evaluate(() => {
      const element = document.querySelector('.container') as HTMLElement;
      return { width: element.clientWidth, height: element.clientHeight };
    });
    await page.setViewport({ width: 600, height:600 });
    const results = await page.compareScreenshot('flex', { fullPage: false });
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
  });
});
