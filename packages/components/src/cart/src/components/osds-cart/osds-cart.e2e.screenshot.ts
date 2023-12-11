import type { OdsCartAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';

import { OdsLogger } from '@ovhcloud/ods-common-core';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';


const logger = new OdsLogger('OsdsCart-e2e');

describe('e2e:osds-cart', () => {
  let page: E2EPage;
  let el: E2EElement;
  let slotHeader: E2EElement;
  let cellPriceElement: E2EElement;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsCartAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCartAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-cart ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-cart>`, { timeout: 20000 });
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-cart');

    cellPriceElement = await page.find('osds-cart >>> .cell-price');
    slotHeader = await page.find('osds-cart >>> slot[name=header]');
    const root = await page.find('osds-cart');
    const activeElId = await page.evaluate(() => document);
    logger.log(activeElId);
    logger.log(root);
    logger.log(slotHeader);
    logger.log(cellPriceElement);
  }

  describe('screenshots', () => {
    const sectionItems = `<osds-cart-header slot="header">
                 My selection
        </osds-cart-header>
        <osds-cart-section>
          <osds-cart-item>
            <span slot="subhead">subhead</span>
            <span slot="title">title</span>
            <span slot="price">price</span>
            <span slot="extra">extra</span>
          </osds-cart-item>
          <osds-cart-item-option>
            <span slot="subhead">subhead</span>
            <span slot="title">title</span>
            <span slot="price">price</span>
            <span slot="extra" class="bothMasksTest">extra</span>
          </osds-cart-item-option>
          <osds-cart-item-option>
            <span slot="subhead">subhead</span>
            <span slot="title">title</span>
            <span slot="price">price</span>
            <span slot="extra">extra</span>
          </osds-cart-item-option>
          <osds-cart-item>
            <span slot="subhead">subhead</span>
            <span slot="title">title</span>
            <span slot="price">price</span>
            <span slot="extra">extra</span>
          </osds-cart-item>
          <osds-cart-item-option>
            <span slot="subhead">subhead</span>
            <span slot="title">title</span>
            <span slot="price">price</span>
            <span slot="extra">extra</span>
          </osds-cart-item-option>
        </osds-cart-section>

        <osds-cart-section>
          <osds-cart-item>
            <span slot="subhead">subhead</span>
            <span slot="title">title</span>
            <span slot="price">price</span>
            <span slot="extra">extra</span>
          </osds-cart-item>
          <osds-cart-item-option>
            <span slot="subhead">subhead</span>
            <span slot="title">title</span>
            <span slot="price">price</span>
            <span slot="extra">extra</span>
          </osds-cart-item-option>
          <osds-cart-item-option>
            <span slot="subhead">subhead</span>
            <span slot="title">title</span>
            <span slot="price">price</span>
            <span slot="extra">extra</span>
          </osds-cart-item-option>
          <osds-cart-item-option>
            <span slot="subhead">subhead</span>
            <span slot="title">title</span>
            <span slot="price">price</span>
            <span slot="extra" class="topMaskTest">extra</span>
          </osds-cart-item-option>
        </osds-cart-section>`;

    it('check slot', async() => {
      await setup({
        attributes: {}, html: '',
      });
      await page.waitForChanges();

      await page.evaluate(() => {
        const element = document.querySelector('osds-cart') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('check slot & css', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('check cart with items', async() => {
      await setup({
        attributes: {}, html: '',
      });

      el.innerHTML = sectionItems;
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('osds-cart') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('check cart & css', { fullPage: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('check empty cart', async() => {
      await setup({
        attributes: {}, html: `
        <osds-cart-header slot="header">
                 My selection
        </osds-cart-header>
        <span slot="empty">Your order summary is empty</span>`,
      });

      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('osds-cart') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('check slot empty & css', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    describe('screenshots of cart corners options', () => {
      beforeEach(async() => {
        await setup({ attributes: {}, html: '' });
      });

      it('all corners should be rounded', async() => {
        const results = await page.compareScreenshot('check rounded corners', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });

      it('corners should not be rounded', async() => {
        el.setAttribute('rounded', 'none');
        await page.waitForChanges();
        const results = await page.compareScreenshot('check sharped corners', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });

      it('top corners only should be rounded', async() => {
        el.setAttribute('rounded', 'top');
        await page.waitForChanges();
        const results = await page.compareScreenshot('check top rounded corners', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });

    describe('screenshots when cart is collapsible', () => {
      beforeEach(async() => {
        await setup({
          attributes: { collapsed: false, collapsible: true }, html: '',
        });

        el.innerHTML = sectionItems;
        await page.waitForChanges();
        await page.evaluate(() => {
          const element = document.querySelector('osds-cart') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height:600 });
      });

      it('check bottom mask before scrolling', async() => {
        const results = await page.compareScreenshot('check only bottom mask', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });

      it('check top mask when at the bottom of container', async() => {
        async function scrollToSpecificLocation(page: E2EPage) {
          await page.evaluate(() => document.querySelector('.topMaskTest')?.scrollIntoView());
        }

        await scrollToSpecificLocation(page);
        const results = await page.compareScreenshot('check only top mask', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });

      it('check both masks when scrolling', async() => {
        async function scrollToSpecificLocation(page: E2EPage) {
          await page.evaluate(() => document.querySelector('.bothMasksTest')?.scrollIntoView());
        }

        await scrollToSpecificLocation(page);
        const results = await page.compareScreenshot('check both masks', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });
});
