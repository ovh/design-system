import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsIconAttributes,
  OdsIconName,
  OdsIconNameList,
  OdsIconSizeList,
  OdsLogger,
  odsIconDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsIconBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';

const logger = new OdsLogger('osds-icon-e2e');

describe('e2e:osds-icon', () => {
  let page: E2EPage;
  let el: E2EElement;
  let slotContent: E2EElement;
  let iconElement: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsIconAttributes> }) {
    const minimalAttributes: OdsIconAttributes = OdsCreateAttributes(attributes, odsIconBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsIconAttributes>(minimalAttributes, odsIconDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-icon ${OdsStringAttributes2Str(stringAttributes)}></osds-icon>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-icon');

    iconElement = await page.find('osds-icon >>> icon');
    slotContent = iconElement && await iconElement.find('slot[name=content]');
    logger.log(slotContent);
    logger.log(iconElement);
  }

  describe('screenshots', () => {
    OdsIconNameList.forEach((name) => {
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
            name: OdsIconName.HOME,
          },
        });
        action();
        await page.waitForChanges();
        const results = await page.compareScreenshot(action.toString(), { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
    OdsThemeColorIntentList.forEach((color) => {
      it(color, async () => {
        await setup({
          attributes: {
            color,
            name: OdsIconName.HOME,
          },
        });
        await page.waitForChanges();
        const results = await page.compareScreenshot(color, { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
    OdsIconSizeList.forEach((size) => {
      it(size, async () => {
        await setup({
          attributes: {
            name: OdsIconName.HOME,
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
