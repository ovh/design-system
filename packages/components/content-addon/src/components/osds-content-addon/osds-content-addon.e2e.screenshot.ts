import { OdsLogger } from '@ovhcloud/ods-common-core';
import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

const logger = new OdsLogger('osds-content-addon-e2e');

describe('e2e:osds-content-addon', () => {
  let page: E2EPage;

  async function setup({ html }: { html: string }) {
    page = await newE2EPage();
    await page.setContent(`<osds-content-addon>${html}</osds-content-addon>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    const root = await page.find('osds-content-addon');
    const activeElId = await page.evaluate(() => document);
    logger.log(activeElId);
    logger.log(root);
  }

  const slots = [
    {
      slotName: 'start',
      html: '<span slot=\'start\'>Start</span>',
    },
    {
      slotName: 'end',
      html: '<span slot=\'end\'>End</span>',
    },
    {
      slotName: 'main',
      html: '<span slot=\'main\'>Main</span>',
    },
    {
      slotName: 'top',
      html: '<span slot=\'top\'>Top</span>',
    },
    {
      slotName: 'bottom',
      html: '<span slot=\'bottom\'>Bottom</span>',
    },
  ];

  describe('screenshots', () => {
    it('check with all slots', async() => {
      await setup({
        html: `
        <span slot='top'>Top</span>
        <span slot='bottom'>Bottom</span>
        <span slot='start'>Start</span>
        <span slot='end'>End</span>
        <span slot='main'>Main</span>`,
      });
      await page.waitForChanges();

      await page.evaluate(() => {
        const element = document.querySelector('osds-content-addon') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('all slots', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedPixels: 0 });
    });

    describe('screenshots for each slot', () => {
      slots.forEach(({ slotName, html }) => {
        it(slotName, async() => {
          await setup({ html });

          await page.waitForChanges();
          await page.setViewport({ width: 600, height:600 });
          const results = await page.compareScreenshot('each slot', { fullPage: false });
          expect(results).toMatchScreenshot({ allowableMismatchedPixels: 0 });
        });
      });
    });
  });
});
