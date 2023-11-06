import type { OdsTileAttribute } from './interfaces/attributes';
import type { E2EPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TILE_SIZES } from './constants/tile-size';
import { ODS_TILE_VARIANTS } from './constants/tile-variant';

const slotContent = 'Tile content';

describe('e2e:osds-tile', () => {
  let page: E2EPage;
  let variations: Array<string>;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => {
      document.body.style.setProperty('margin', '0px');
      document.body.style.background = '#e2e2e2';
    });
  }

  describe('screenshots', () => {
    beforeEach(() => {
      variations = [];
    });

    it('should take screenshots of all attributes variations', async() => {
      ODS_THEME_COLOR_INTENTS.forEach((color) => {
        ODS_TILE_SIZES.forEach((size) => {
          ODS_TILE_VARIANTS.forEach((variant) => {
            [true, false].forEach((disabled) => {
              [true, false].forEach((hoverable) => {
                [true, false].forEach((checked) => {
                  [true, false].forEach((inline) => {
                    [true, false].forEach((rounded) => {
                      variations.push(`
                        <osds-tile ${odsStringAttributes2Str(
                        odsComponentAttributes2StringAttributes<OdsTileAttribute>(
                          { color, size, variant, inline, disabled, hoverable, checked, rounded }, DEFAULT_ATTRIBUTE,
                        ),
                      )}>
                          ${slotContent}
                        </osds-tile>
                      `)
                    });
                  });
                });
              });
            });
          });
        });
      });

      [true, false].forEach((contrasted) => {
        ODS_TILE_SIZES.forEach((size) => {
          ODS_TILE_VARIANTS.forEach((variant) => {
            variations.push(`
              <osds-tile ${odsStringAttributes2Str(
                odsComponentAttributes2StringAttributes<OdsTileAttribute>(
                  { contrasted, size, variant }, DEFAULT_ATTRIBUTE,
                ),
              )}>
                ${slotContent}
              </osds-tile>`,
            );
          });
        });
      });

      await setup(variations.join(''));
      await page.waitForChanges();

      const results = await page.compareScreenshot('text', { fullPage: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});



