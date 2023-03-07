import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsBreadcrumbsAttributes,
  odsBreadcrumbsDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsBreadcrumbsBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';

describe('e2e:osds-breadcrumb', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsBreadcrumbsAttributes>, html?: string }) {
    const minimalAttributes: OdsBreadcrumbsAttributes = OdsCreateAttributes(attributes, odsBreadcrumbsBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumbsAttributes>(minimalAttributes, odsBreadcrumbsDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-breadcrumb ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-breadcrumb>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-breadcrumb');
  }

  describe('screenshots', () => {
    // Todo : add active behaviour on top of hover and focus
    [() => {}, () => el.setProperty('contrasted', true), () => el.setProperty('disabled', true), () => {
      el.setProperty('contrasted', true);
      el.setProperty('disabled', true);
    }].forEach((action) => {
      [() => {}, () => el.hover(), () => el.focus()].forEach((behaviour) => {
        OdsThemeColorIntentList.forEach((color) => {
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
              const element = document.querySelector('osds-breadcrumb') as HTMLElement;
              return { width: element.clientWidth, height: element.clientHeight };
            });
            await page.setViewport({ width: 600, height:600 });
            const results = await page.compareScreenshot('button', { fullPage: false, omitBackground: true });
            expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
          });

          it(`${[color, action, behaviour].join(', ')} breadcrumbs`, async () => {
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
