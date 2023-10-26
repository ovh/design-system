import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';
import { ODS_FLAG_ISO_CODES } from './constants/flag-iso-code';

const ratio = 3 / 4;

describe('e2e:osds-flag', () => {
  const flagWidth = 64;
  const flagHeight = flagWidth * ratio;
  const isoList = [...ODS_FLAG_ISO_CODES, 'dummyIso'];
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.setViewport({ height: flagHeight * isoList.length, width: flagWidth });
    await page.evaluate(() => {
      document.body.style.setProperty('margin', '0px');
    });
  }

  describe('screenshots', () => {
    it('should display all flags correctly', async() => {
      const flags = isoList.map((iso) =>
        `<osds-flag style="width: ${flagWidth}px; height: ${flagHeight}px;"
                    asset-path="./dist/flags/flags-4x3/"
                    iso="${iso}"
                    lazy="false">
        </osds-flag>`,
      );

      await setup(flags.join(''));
      await page.waitForChanges();

      const results = await page.compareScreenshot('flag', { fullPage: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
