import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  ODS_COUNTRY_ISO_CODE,
  OdsComponentAttributes2StringAttributes,
  OdsLocationTileAttributes,
  OdsLocationTileVariantList,
  OdsLogger,
  odsLocationTileDefaultAttributes
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsLocationTileBaseAttributes
} from '@ovhcloud/ods-testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { ODS_TILE_SIZES } from '@ovhcloud/ods-component-tile';

const logger = new OdsLogger('osds-location-tile-e2e');

describe('e2e:osds-location-tile', () => {
  let page: E2EPage;
  let el: E2EElement;
  let tileElement: E2EElement;
  let flagElement: E2EElement;
  let flagWrapper: E2EElement;
  let contentWrapper: E2EElement;
  let slotCountry: E2EElement;
  let slotCity: E2EElement;
  let slotInfo: E2EElement;

  async function setup({
                          attributes = {},
                          html = ``,
                          onPage
                       }: { attributes?: Partial<OdsLocationTileAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsLocationTileAttributes = OdsCreateAttributes(attributes, odsLocationTileBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsLocationTileAttributes>(minimalAttributes, odsLocationTileDefaultAttributes);

    page = await newE2EPage();
    onPage && await onPage({ page });

    await page.setContent(`
      <osds-location-tile ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
        <span slot='country'>My country</span>
        <span slot='city'>My city</span>
        <span slot='info'>My info</span>
      </osds-location-tile>
    `);

    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-location-tile');

    tileElement = await page.find('osds-location-tile >>> osds-tile');
    flagWrapper = await tileElement.find('div.location__flag-wrapper');
    flagElement = await page.find('osds-location-tile >>> osds-flag');
    contentWrapper = await tileElement.find('div.location__content');
    logger.log(tileElement);
    logger.log(flagWrapper);
    logger.log(flagElement);
    logger.log(contentWrapper);
    slotCountry = await page.find('osds-location-tile >>> slot[name="country"]');
    slotCity = await page.find('osds-location-tile >>> slot[name="city"]');
    slotInfo = await page.find('osds-location-tile >>> slot[name="info"]');
    logger.log({ slotCountry, slotCity, slotInfo });
  }

  const defaultISOCode = ODS_COUNTRY_ISO_CODE.FR;
  const screenshotActions = [
    {
      actionDescription: "no action",
      action: () => {
      }
    }, {
      actionDescription: "disabled",
      action: () => el.setProperty("disabled", true)
    }, {
      actionDescription: "interactive",
      action: () => el.setProperty("interactive", true)
    }, {
      actionDescription: "checking",
      action: () => el.setProperty("checking", true)
    }, {
      actionDescription: "checked",
      action: () => el.setProperty("checked", true)
    }, {
      actionDescription: "loading",
      action: () => el.setProperty("loading", true)
    }
  ];

  describe('screenshots', () => {
    screenshotActions.forEach(({ actionDescription, action }) => {
        OdsThemeColorIntentList.forEach((color) => {
          ODS_TILE_SIZES.forEach((size) => {
            OdsLocationTileVariantList.forEach((variant) => {

                it([color, size, variant, actionDescription].join(', '), async () => {
                  await setup({
                    attributes: {
                      iso: defaultISOCode,
                      color,
                      size,
                      variant,
                    }
                  });
                  action();
                  await page.waitForChanges();
                  const results = await page.compareScreenshot('location-tile', { fullPage: false, omitBackground: true });
                  expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
                });
          });
        });
      });
    });
  });
});
