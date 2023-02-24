import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsContentAddonAttributes,
  OdsLogger,
  odsContentAddonDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsContentAddonBaseAttributes } from '@ovhcloud/ods-testing';

const logger = new OdsLogger('osds-content-addon-e2e');

describe('e2e:osds-content-addon', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes, html }: { attributes: Partial<OdsContentAddonAttributes>, html: string }) {
    const minimalAttributes: OdsContentAddonAttributes = OdsCreateAttributes(attributes, odsContentAddonBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsContentAddonAttributes>(minimalAttributes, odsContentAddonDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-content-addon ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-content-addon>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-content-addon');

    const root = await page.find('osds-content-addon');
    const activeElId = await page.evaluate(() => document);
    logger.log(activeElId);
    logger.log(root);
  }

  it('should render', async () => {
    await setup({ attributes: {}, html: `` });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });
});
