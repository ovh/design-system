import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsIconAttribute } from './interfaces/attributes';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

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

  it('should render', async () => {
    await setup({ attributes: { color: OdsThemeColorIntent.primary, contrasted: false } });
    expect(el).not.toBeNull();
  });

  xit('should have the text icon', async () => {
    await setup({ attributes: { color: OdsThemeColorIntent.primary, contrasted: false } });
    // todo
  });
});
