import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsTooltipAttributes,
  OdsComponentAttributes2StringAttributes,
  odsTooltipDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsTooltipBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-tooltip', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsTooltipAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsTooltipAttributes = OdsCreateAttributes(attributes, odsTooltipBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTooltipAttributes>(minimalAttributes, odsTooltipDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-tooltip ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-tooltip>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-tooltip');
  }

  describe('screenshots', () => {
    // Screenshot testing
  });
});
