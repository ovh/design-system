import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsButtonAttributes,
  OdsButtonSizeList,
  OdsButtonVariantList,
  OdsComponentAttributes2StringAttributes,
  odsButtonDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsButtonBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';

describe('e2e:osds-button', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsButtonAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsButtonAttributes = OdsCreateAttributes(attributes, odsButtonBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsButtonAttributes>(minimalAttributes, odsButtonDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-button ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-button>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    el = await page.find('osds-button');
  }

  describe('screenshots', () => {
    // Todo : add active behaviour on top of hover and focus
    [() => {}, () => el.setProperty('contrasted', true), () => el.setProperty('disabled', true), () => {el.setProperty('contrasted', true); el.setProperty('disabled', true)} ].forEach((action) => {
      [() => {}, () => el.hover(), () => el.focus()].forEach((behaviour) => {
        OdsThemeColorIntentList.forEach((color) => {
          OdsButtonSizeList.forEach((size) => {
            OdsButtonVariantList.forEach((variant) => {
              [false, true].forEach((circle) => {
                it([color, variant, size, circle, action, behaviour].join(', '), async () => {
                  await setup({
                    attributes: {
                      color,
                      size,
                      variant,
                      circle,
                    },
                    html: `Button`
                  });
                  action();
                  await behaviour();
                  await page.waitForChanges();

                  await page.evaluate(() => {
                    const element = document.querySelector('osds-button') as HTMLElement;
                    return { width: element.clientWidth, height: element.clientHeight };
                  });
                  await page.setViewport({ width: 600, height: 600 });
                  const results = await page.compareScreenshot('button', { fullPage: false, omitBackground: true });
                  expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
                });
              });
            });

            it(`${[color, size, action, behaviour].join(', ')} link`, async () => {
              await setup({
                attributes: {
                  color,
                  size,
                  href: '#',
                },
                html: `Button`
              });
              action();
              await behaviour();
              await page.waitForChanges();
              await page.setViewport({ width: 600, height:600 });
              const results = await page.compareScreenshot('button', { fullPage: false, omitBackground: true });
              expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
            });
          });
        });
      });
    });
  });
});
