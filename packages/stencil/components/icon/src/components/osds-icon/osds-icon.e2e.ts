import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsIconAttributes,
  OdsLogger,
  odsIconDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsIconBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

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

  it('should render', async () => {
    await setup({ attributes: { color: OdsThemeColorIntent.primary, contrasted: false } });
    expect(el).not.toBeNull();
  });

  xit('should have the text icon', async () => {
    await setup({ attributes: { color: OdsThemeColorIntent.primary, contrasted: false } });
    // todo
  });
});
