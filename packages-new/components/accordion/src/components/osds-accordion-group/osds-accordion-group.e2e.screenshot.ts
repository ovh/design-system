import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

describe('e2e:screenshot:osds-accordion-group', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ html = '' }: { html?: string } = {}) {
    page = await newE2EPage();
    await page.setContent(`
      <style>
      :root {
        --ods-accordion-animation-opening: none;
      }
      </style>
      <osds-accordion-group>
      ${html}
      </osds-accordion-group>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    el = await page.find('osds-accordion-group');
  }

  describe('screenshots', () => {
    [true, false].forEach((opened) => {
      it([opened].join(', '), async () => {
        await setup({
          html: `<osds-accordion ${opened ? 'opened' : ''}>
                  <span slot="summary">Accordion 1</span>
                  Accordion 1
                </osds-accordion>
                <osds-accordion>
                  <span slot="summary">Accordion 2</span>
                </osds-accordion>`
        });
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-accordion-group') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('accordion-group', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      });
    });
  });

});
