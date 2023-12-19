import type { OdsFormAttribute } from './interfaces/attributes';
import type { E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-form', () => {
  let page: E2EPage;
  let variations: Array<string>;

  async function setup(content: string): Promise<void> {
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

    it('should take screenshots of all attributes variations', async() => {
      ['', 'dummy'].forEach((dummy) => {
        variations.push(`
          <osds-form ${odsStringAttributes2Str(odsComponentAttributes2StringAttributes<OdsFormAttribute>({ dummy }, DEFAULT_ATTRIBUTE))}>
          </osds-form>`
        );
      });

      await setup(variations.join(''));
      await page.waitForChanges();

      const results = await page.compareScreenshot('form', { fullPage: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
