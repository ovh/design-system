import type { OdsTileAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TILE_SIZES } from './constants/tile-size';
import { ODS_TILE_VARIANTS } from './constants/tile-variant';



describe('e2e:osds-tile', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({
    attributes = {},
    html = '',
    onPage,
  }: { attributes?: Partial<OdsTileAttribute>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTileAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && await onPage({ page });

    await page.setContent(`
      <osds-tile ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-tile>
    `);
    el = await page.find('osds-tile');
  }

  const screenshotActions = [
    {
      actionDescription: 'no action',
      action: () => {},
    }, {
      actionDescription: 'disabled',
      action: () => el.setProperty('disabled', true),
    }, {
      actionDescription: 'hoverable',
      action: () => el.setProperty('hoverable', true),
    },
    // TODO: don't test screenshot animated screen without freeze it
    // {
    //   actionDescription: "checking",
    //   action: () => el.setProperty("checking", true)
    // },
    {
      actionDescription: 'checked',
      action: () => el.setProperty('checked', true),
    },
  ];

  describe('screenshots', () => {
    screenshotActions.forEach(({ actionDescription, action }) => {
      ODS_THEME_COLOR_INTENTS.forEach((color) => {
        ODS_TILE_SIZES.forEach((size) => {
          ODS_TILE_VARIANTS.forEach((variant) => {
            it([color, size, variant, actionDescription].join(', '), async() => {
              await setup({
                attributes: {
                  color,
                  size,
                  variant,
                },
              });
              el.removeAttribute('checking');
              action();
              await page.waitForChanges();
              const results = await page.compareScreenshot('tile', { fullPage: false, omitBackground: true });
              expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
            });
          });
        });
      });
    });

    it('should not be a rounded tile screenshot', async() => {
      await setup({ attributes: {}, html: '' });
      el.removeAttribute('rounded');
      await page.waitForChanges();
      const results = await page.compareScreenshot('not rounded tile', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});



