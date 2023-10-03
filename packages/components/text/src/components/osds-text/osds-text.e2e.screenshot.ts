import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsTextAttribute } from './interfaces/attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_HUE, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { newE2EPage } from '@stencil/core/testing';
import { ODS_TEXT_LEVELS } from './constants/text-level';
import { ODS_TEXT_SIZES } from './constants/text-size';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

const slotContent = 'Text';

describe('e2e:osds-text', () => {
  let page: E2EPage;
  let el: E2EElement;
  let variations: Array<string>;

  async function setup(content: string) {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-text');
  }

  function getVariations({ attributes= {} , html = `` }: { attributes?: Partial<OdsTextAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTextAttribute>(attributes, DEFAULT_ATTRIBUTE);
    variations.push(`
      <p>${odsStringAttributes2Str(stringAttributes)}</p>
      <osds-text ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-text>`
    );
  }

  describe('screenshots', () => {
    beforeEach(() => {
      variations = [];
    });

    it('should take screenshots of all attributes variations', async () => {
      [ODS_THEME_COLOR_HUE._100, ODS_THEME_COLOR_HUE._500].forEach((hue) => {
        ODS_THEME_COLOR_INTENTS.forEach((color) => {
          ODS_TEXT_SIZES.forEach((size) => {
            ODS_TEXT_LEVELS.forEach((level) => {
              getVariations({
                attributes: {
                  color,
                  level,
                  size,
                  hue
                },
                html: slotContent
              });
            });
          });
        });
      });

      await setup(variations.join(''));
      await page.waitForChanges();

      await page.evaluate(() => {
        const element = document.querySelector('osds-text') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      const results = await page.compareScreenshot('text', { fullPage: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    const screenshotActions = [
      {
        actionDescription: 'should show contrasted variation',
        action: () => {
          el.setProperty('contrasted', true)
          el.setProperty('style', 'background: black;')
        },
      },
    ];

    screenshotActions.forEach(({ actionDescription, action }) => {
      it(actionDescription, async () => {
        getVariations({ html: slotContent });
        await setup(variations[0]);
        action();
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-text') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        const results = await page.compareScreenshot('text', { fullPage: false });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
      });
    })
  });
});
