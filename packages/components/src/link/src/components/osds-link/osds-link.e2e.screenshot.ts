import type { OdsLinkAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';


describe('e2e:osds-link', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsLinkAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsLinkAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-link ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-link>`);
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
        ODS_THEME_COLOR_INTENTS.forEach((color) => {
          it([color, action, behaviour].join(', '), async() => {
            await setup({
              attributes: {
                color,
              },
              html: 'Button',
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

          it(`${[color, action, behaviour].join(', ')} link`, async() => {
            await setup({
              attributes: {
                color,
                href: '#',
              },
              html: 'Button',
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
