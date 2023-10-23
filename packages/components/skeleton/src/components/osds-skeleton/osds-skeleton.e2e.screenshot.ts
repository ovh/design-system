import type {E2EPage} from '@stencil/core/testing';
import type {OdsSkeletonAttribute} from './interfaces/attributes';
import {newE2EPage} from '@stencil/core/testing';
import {odsComponentAttributes2StringAttributes, odsStringAttributes2Str} from '@ovhcloud/ods-common-testing';
import {ODS_SKELETON_SIZE} from './constants/skeleton-size';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';

describe('e2e:osds-skeleton', () => {
  let page: E2EPage;

  async function setup({attributes = {}}: { attributes?: Partial<OdsSkeletonAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSkeletonAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
    <div class="container">
      <div style="background: black;height: 10px"></div>
      <osds-skeleton ${odsStringAttributes2Str(stringAttributes)}></osds-skeleton>
      <div style="background: black;height: 10px"></div>
    </div>
`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  describe('screenshots for size', () => {
    it('check size auto', async() => {
      await setup({attributes: {size: undefined}});
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return {width: element.clientWidth, height: element.clientHeight};
      });
      await page.setViewport({width: 600, height:600});
      const results = await page.compareScreenshot('size auto', {fullPage: false});
      expect(results).toMatchScreenshot({allowableMismatchedRatio: 0});
    });

    it('check size small', async() => {
      await setup({attributes: {size: ODS_SKELETON_SIZE.sm}});
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return {width: element.clientWidth, height: element.clientHeight};
      });
      await page.setViewport({width: 600, height:600});
      const results = await page.compareScreenshot('size small', {fullPage: false});
      expect(results).toMatchScreenshot({allowableMismatchedRatio: 0});
    });

    it('check size medium', async() => {
      await setup({attributes: {size: ODS_SKELETON_SIZE.md}});
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return {width: element.clientWidth, height: element.clientHeight};
      });
      await page.setViewport({width: 600, height:600});
      const results = await page.compareScreenshot('size medium', {fullPage: false});
      expect(results).toMatchScreenshot({allowableMismatchedRatio: 0});
    });

    it('check size large', async() => {
      await setup({attributes: {size: ODS_SKELETON_SIZE.lg}});
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return {width: element.clientWidth, height: element.clientHeight};
      });
      await page.setViewport({width: 600, height:600});
      const results = await page.compareScreenshot('size large', {fullPage: false});
      expect(results).toMatchScreenshot({allowableMismatchedRatio: 0});
    });

    it('check size extra large', async() => {
      await setup({attributes: {size: ODS_SKELETON_SIZE.xl}});
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return {width: element.clientWidth, height: element.clientHeight};
      });
      await page.setViewport({width: 600, height:600});
      const results = await page.compareScreenshot('size extra large', {fullPage: false});
      expect(results).toMatchScreenshot({allowableMismatchedRatio: 0});
    });
  });

  it('check inline attribute', async() => {
    await setup({attributes: {inline: true}});
    await page.waitForChanges();
    await page.evaluate(() => {
      const element = document.querySelector('.container') as HTMLElement;
      return {width: element.clientWidth, height: element.clientHeight};
    });
    await page.setViewport({width: 600, height:600});
    const results = await page.compareScreenshot('inline', {fullPage: false});
    expect(results).toMatchScreenshot({allowableMismatchedRatio: 0});
  });
});
