import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsIconAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_ICON_NAME, ODS_ICON_NAMES } from './constants/icon-name';
import { ODS_ICON_SIZES } from './constants/icon-size';

const logger = new OdsLogger('osds-icon-e2e');

describe('e2e:osds-icon', () => {
  const baseAttribute = { ariaName: '' };
  let page: E2EPage;
  let el: E2EElement;
  let slotContent: E2EElement;
  let iconElement: E2EElement;

  async function setup({ attributes = {} }: { attributes: Partial<OdsIconAttribute> }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsIconAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-icon ${odsStringAttributes2Str(stringAttributes)}></osds-icon>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-icon');

    iconElement = await page.find('osds-icon >>> icon');
    slotContent = iconElement && await iconElement.find('slot[name=content]');
    logger.log(slotContent);
    logger.log(iconElement);
  }

  describe('screenshots', () => {
    ODS_ICON_NAMES.forEach((name) => {
      it(name, async () => {
        await setup({
          attributes: {
            name,
          },
        });
        await page.waitForChanges();
        const results = await page.compareScreenshot(`icon name : ${name}`, { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
    [() => {
    }, () => el.setProperty('contrasted', true)].forEach((action) => {
      it(action.toString(), async () => {
        await setup({
          attributes: {
            name: ODS_ICON_NAME.HOME,
          },
        });
        action();
        await page.waitForChanges();
        const results = await page.compareScreenshot(action.toString(), { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
    ODS_THEME_COLOR_INTENTS.forEach((color) => {
      it(color, async () => {
        await setup({
          attributes: {
            color,
            name: ODS_ICON_NAME.HOME,
          },
        });
        await page.waitForChanges();
        const results = await page.compareScreenshot(color, { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
    ODS_ICON_SIZES.forEach((size) => {
      it(size, async () => {
        await setup({
          attributes: {
            name: ODS_ICON_NAME.HOME,
            size,
          },
        });
        await page.waitForChanges();
        const results = await page.compareScreenshot(size, { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });
});
