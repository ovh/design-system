import type { OdsPaginationAttribute } from './interfaces/attributes';
import type { E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-pagination', () => {
  const baseAttribute = { defaultCurrentPage: 0, disabled: false, labelTooltipNext: '', labelTooltipPrevious: '', totalPages: 0 };
  let page: E2EPage;

  async function setup({ attributes = { defaultCurrentPage: 5, totalPages: 21 }, html = '' }: { attributes?: Partial<OdsPaginationAttribute>; html?: string } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsPaginationAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-pagination ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-pagination>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
  }

  describe('screenshots of totalPages of 21', () => {
    for (let defaultCurrentPage = 1; defaultCurrentPage <= 21; defaultCurrentPage++) {
      const screenshotActions = [
        {
          action: (): void => {},
          actionDescription: `page ${defaultCurrentPage} on 21`,
        },
      ];
      screenshotActions.forEach(({ action, actionDescription }) => {
        it(actionDescription, async() => {
          await setup({
            attributes: {
              defaultCurrentPage,
              totalPages: 21,
            },
          });
          action();
          await page.waitForChanges();

          await page.evaluate(() => {
            const element = document.querySelector('osds-pagination') as HTMLElement;
            return { height: element.clientHeight, width: element.clientWidth };
          });
          await page.setViewport({ height: 600, width: 600 });
          const results = await page.compareScreenshot('pagination', { fullPage: false, omitBackground: true });
          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
        });
      });
    }
  });

  describe('screenshots of totalPages of 21 and disabled', () => {
    for (let defaultCurrentPage = 1; defaultCurrentPage <= 21; defaultCurrentPage++) {
      const screenshotActions = [
        {
          action: (): void => {},
          actionDescription: `page ${defaultCurrentPage} on 21 and disabled`,
        },
      ];
      screenshotActions.forEach(({ actionDescription, action }) => {
        it(actionDescription, async() => {
          await setup({
            attributes: {
              defaultCurrentPage,
              disabled: true,
              totalPages: 21,
            },
          });
          action();
          await page.waitForChanges();

          await page.evaluate(() => {
            const element = document.querySelector('osds-pagination') as HTMLElement;
            return { height: element.clientHeight, width: element.clientWidth };
          });
          await page.setViewport({ height: 600, width: 600 });
          const results = await page.compareScreenshot('pagination', { fullPage: false, omitBackground: true });
          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
        });
      });
    }
  });

  describe('screenshots with total items', () => {
    it('should not display the per-page select if less than 10 items', async() => {
      await setup({ attributes: { defaultCurrentPage: 1, totalItems: 5 } });

      const results = await page.compareScreenshot('pagination', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render the per-page select if more than 10 items', async() => {
      await setup({ attributes: { defaultCurrentPage: 1, totalItems: 25 } });

      const results = await page.compareScreenshot('pagination', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
