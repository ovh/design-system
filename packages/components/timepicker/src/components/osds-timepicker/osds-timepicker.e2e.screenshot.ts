import type { E2EPage } from '@stencil/core/testing';
import type { OdsTimepickerAttribute } from './interfaces/attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-timepicker', () => {
  let page: E2EPage;
  let variations: Array<string>;

  async function setup(content: string) {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => {
      document.body.style.setProperty('margin', '0px');
    });
  }

  describe('screenshots', () => {
    beforeEach(() => {
      variations = [];
    });

    it('should take screenshots of all attributes variations', async () => {
      [true, false].forEach((clearable) => {
        [true, false].forEach((disabled) => {
          [true, false].forEach((error) => {
            [true, false].forEach((inline) => {
              [null, '11:11'].forEach((value) => {
                [true, false].forEach((withSeconds) => {
                  variations.push(`
                    <osds-timepicker ${odsStringAttributes2Str(
                      odsComponentAttributes2StringAttributes<OdsTimepickerAttribute>(
                        { clearable, disabled, error, inline, value, withSeconds }, DEFAULT_ATTRIBUTE
                      )
                    )}>
                  </osds-timepicker>`);
                });
              });
            });
          });
        });
      });

      await setup(variations.join(''));
      await page.waitForChanges();
      const results = await page.compareScreenshot('timepicker', { fullPage: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });
  });
});
