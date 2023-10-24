import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('e2e:osds-cart-total', () => {
  let page: E2EPage;

  async function setup({ html }: { html: string }) {
    page = await newE2EPage();
    await page.setContent(`<osds-cart-total>${html}</osds-cart-total>`, { timeout: 20000 });
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  const slots = [
    {
      slotName: 'total',
      html: '<span slot=\'total\'>Total</span>',
    },
    {
      slotName: 'info',
      html: '<span slot=\'info\'>Info</span>',
    },
    {
      slotName: 'price',
      html: '<span slot=\'price\'>Price</span>',
    },
    {
      slotName: 'extra',
      html: '<span slot=\'extra\'>Extra</span>',
    },
  ];

  describe('screenshots', () => {
    it('check with all slots', async() => {
      await setup({ html: `
        <span slot='total'>My total</span>
        <span slot='info'>My info</span>
        <span slot='price'>My price</span>
        <span slot='extra'>My extra</span>`,
      });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('osds-cart-total') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('all slots & css', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    describe('screenshots for each slot', () => {
      slots.forEach(({ slotName, html }) => {
        it(slotName, async() => {
          await setup({ html });
          await page.waitForChanges();
          await page.evaluate(() => {
            const element = document.querySelector('osds-cart-total') as HTMLElement;
            return { width: element.clientWidth, height: element.clientHeight };
          });
          await page.setViewport({ width: 600, height:600 });
          const results = await page.compareScreenshot('each slot', { fullPage: false, omitBackground: true });
          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
        });
      });
    });
  });
});
