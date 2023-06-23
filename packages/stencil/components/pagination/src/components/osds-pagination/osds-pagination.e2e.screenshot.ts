import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsPaginationAttributes, odsPaginationDefaultAttributes, OdsComponentAttributes2StringAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsPaginationBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-pagination', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = { total: 21, current: 5 }, html = `` }: { attributes?: Partial<OdsPaginationAttributes>; html?: string } = {}) {
    const minimalAttributes: OdsPaginationAttributes = OdsCreateAttributes(attributes, odsPaginationBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPaginationAttributes>(minimalAttributes, odsPaginationDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-pagination ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-pagination>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    el = await page.find('osds-pagination');
  }

  describe('screenshots of total of 21', () => {
    for (let current = 1; current <= 21; current++) {
      const screenshotActions = [
        {
          actionDescription: `page ${current} on 21`,
          action: () => {},
        },
      ];
      screenshotActions.forEach(({ actionDescription, action }) => {
        it(actionDescription, async () => {
          await setup({
            attributes: {
              current,
              total: 21,
            },
          });
          action();
          await page.waitForChanges();

          await page.evaluate(() => {
            const element = document.querySelector('osds-pagination') as HTMLElement;
            return { width: element.clientWidth, height: element.clientHeight };
          });
          await page.setViewport({ width: 600, height: 600 });
          const results = await page.compareScreenshot('pagination', { fullPage: false, omitBackground: true });
          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
        });
      });
    }
  });

  describe('screenshots of total of 21 and disabled', () => {
    for (let current = 1; current <= 21; current++) {
      const screenshotActions = [
        {
          actionDescription: `page ${current} on 21 and disabled`,
          action: () => {},
        },
      ];
      screenshotActions.forEach(({ actionDescription, action }) => {
        it(actionDescription, async () => {
          await setup({
            attributes: {
              current,
              total: 21,
              disabled: true,
            },
          });
          action();
          await page.waitForChanges();

          await page.evaluate(() => {
            const element = document.querySelector('osds-pagination') as HTMLElement;
            return { width: element.clientWidth, height: element.clientHeight };
          });
          await page.setViewport({ width: 600, height: 600 });
          const results = await page.compareScreenshot('pagination', { fullPage: false, omitBackground: true });
          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
        });
      });
    }
  });
});
