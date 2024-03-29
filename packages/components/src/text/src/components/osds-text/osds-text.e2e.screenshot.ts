import type { OdsTextAttribute } from './interfaces/attributes';
import type { E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TEXT_COLOR_HUES, ODS_TEXT_COLOR_INTENTS } from './constants/text-color';
import { ODS_TEXT_LEVELS } from './constants/text-level';
import { ODS_TEXT_SIZES } from './constants/text-size';

const slotContent = 'Text';

describe('e2e:osds-text', () => {
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
      ODS_TEXT_COLOR_HUES.forEach((hue) => {
        ODS_TEXT_COLOR_INTENTS.forEach((color) => {
          ODS_TEXT_SIZES.forEach((size) => {
            ODS_TEXT_LEVELS.forEach((level) => {
              variations.push(`
              <osds-text ${odsStringAttributes2Str(
    odsComponentAttributes2StringAttributes<OdsTextAttribute>(
      { color, hue, level, size }, DEFAULT_ATTRIBUTE,
    ),
  )}>
                ${slotContent}
              </osds-text>`);
            });
          });
        });
      });

      [true, false].forEach((contrasted) => {
        ODS_TEXT_SIZES.forEach((size) => {
          ODS_TEXT_LEVELS.forEach((level) => {
            variations.push(`
              <osds-text ${odsStringAttributes2Str(
    odsComponentAttributes2StringAttributes<OdsTextAttribute>(
      { contrasted, level, size }, DEFAULT_ATTRIBUTE,
    ),
  )}>
                ${slotContent}
              </osds-text>`,
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
