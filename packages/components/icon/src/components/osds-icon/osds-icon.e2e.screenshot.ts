import type { E2EPage } from '@stencil/core/testing';
import type { OdsIconAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_ICON_NAMES } from './constants/icon-name';
import { ODS_ICON_SIZES } from './constants/icon-size';

describe('e2e:osds-icon', () => {
  let page: E2EPage;
  let variations: string[] = [];

  async function setup(content: string) {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  describe('screenshots', () => {
    beforeEach(() => {
      variations = [];
    });

    it('should take screenshots of all attributes variations', async () => {
      ODS_ICON_NAMES.forEach((name) => {
        ODS_THEME_COLOR_INTENTS.forEach((color) => {
          ODS_ICON_SIZES.forEach((size) => {
            variations.push(`
              <osds-icon ${odsStringAttributes2Str(
                odsComponentAttributes2StringAttributes<OdsIconAttribute>(
                  { color, name, size, ariaName: '' },
                  DEFAULT_ATTRIBUTE,
                )
              )}>
              </osds-icon>`);
          });
        });
      });
      await setup(variations.join(''));
      await page.waitForChanges();

      const results = await page.compareScreenshot('icon', { fullPage: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should take screenshots of all attributes variations contrasted', async () => {
      ODS_ICON_NAMES.forEach((name) => {
        ODS_THEME_COLOR_INTENTS.forEach((color) => {
          ODS_ICON_SIZES.forEach((size) => {
            variations.push(`
            <osds-icon ${odsStringAttributes2Str(
              odsComponentAttributes2StringAttributes<OdsIconAttribute>(
                { contrasted: true, color, name, size, ariaName: '' },
                DEFAULT_ATTRIBUTE,
              )
            )}>
            </osds-icon>`);
          });
        });
      });
      await setup(variations.join(''));
      await page.waitForChanges();

      const results = await page.compareScreenshot('icon', { fullPage: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
