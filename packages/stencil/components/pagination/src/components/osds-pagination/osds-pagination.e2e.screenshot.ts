import { E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsPaginationAttributes,
  odsPaginationDefaultAttributes,
  OdsComponentAttributes2StringAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsPaginationBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-pagination', () => {
  let page: E2EPage;

  async function setup({ attributes = { totalPages: 21, current: 5 }, html = `` }: { attributes?: Partial<OdsPaginationAttributes>; html?: string } = {}) {
    const minimalAttributes: OdsPaginationAttributes = OdsCreateAttributes(attributes, odsPaginationBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPaginationAttributes>(minimalAttributes, odsPaginationDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-pagination ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-pagination>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
  }

  describe('screenshots of totalPages of 21', () => {
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
              totalPages: 21,
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

  describe('screenshots of totalPages of 21 and disabled', () => {
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
              totalPages: 21,
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

  describe('screenshots with total items', () => {
    it('should not display the per-page select if less than 10 items', async () => {
      await setup({ attributes: { current: 1, totalItems: 5 } });

      const results = await page.compareScreenshot('pagination', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render the per-page select if more than 10 items', async () => {
      await setup({ attributes: { current: 1, totalItems: 25 } });

      const results = await page.compareScreenshot('pagination', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
