import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsComponentAttributes2StringAttributes, OdsBreadcrumbItemAttributes, odsBreadcrumbsDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsBreadcrumbItemBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';

describe('e2e:osds-breadcrumb-item', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsBreadcrumbItemAttributes>; html?: string }) {
    const minimalAttributes: OdsBreadcrumbItemAttributes = OdsCreateAttributes(attributes, odsBreadcrumbItemBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumbItemAttributes>(minimalAttributes, odsBreadcrumbsDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-breadcrumb-item ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-breadcrumb-item>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-breadcrumb-item');
  }

  describe('screenshots', () => {
    // Todo : add active behaviour on top of hover and focus
    [
      () => {},
      () => el.setProperty('contrasted', true),
      () => el.setProperty('disabled', true),
      () => {
        el.setProperty('contrasted', true);
        el.setProperty('disabled', true);
      },
    ].forEach(action => {
      [() => {}, () => el.hover(), () => el.focus()].forEach(behaviour => {
        OdsThemeColorIntentList.forEach(color => {
          it([color, action, behaviour].join(', '), async () => {
            await setup({
              attributes: {
                color,
              },
              html: `Button`,
            });
            action();
            await behaviour();
            await page.waitForChanges();

            await page.evaluate(() => {
              const element = document.querySelector('osds-breadcrumb-item') as HTMLElement;
              return { width: element.clientWidth, height: element.clientHeight };
            });
            await page.setViewport({ width: 600, height: 600 });
            const results = await page.compareScreenshot('button', { fullPage: false, omitBackground: true });
            expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
          });

          it(`${[color, action, behaviour].join(', ')} breadcrumb`, async () => {
            await setup({
              attributes: {
                color,
                href: '#',
              },
              html: `Button`,
            });
            action();
            await behaviour();
            await page.waitForChanges();
            const results = await page.compareScreenshot('button', { fullPage: false, omitBackground: true });
            expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
          });
        });
      });
    });
  });
});
