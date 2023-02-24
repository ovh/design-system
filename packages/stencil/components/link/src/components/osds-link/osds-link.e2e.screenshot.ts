import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsLinkAttributes,
  odsLinkDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsLinkBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';

describe('e2e:osds-link', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsLinkAttributes>, html?: string }) {
    const minimalAttributes: OdsLinkAttributes = OdsCreateAttributes(attributes, odsLinkBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsLinkAttributes>(minimalAttributes, odsLinkDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-link ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-link>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-link');
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
              const element = document.querySelector('osds-link') as HTMLElement;
              return { width: element.clientWidth, height: element.clientHeight };
            });
            await page.setViewport({ width: 600, height:600 });
            const results = await page.compareScreenshot('button', { fullPage: false, omitBackground: true });
            expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
          });

          it(`${[color, action, behaviour].join(', ')} link`, async () => {
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
