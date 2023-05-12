import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsCollapsibleAttributes,
  OdsComponentAttributes2StringAttributes,
  odsCollapsibleDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsCollapsibleBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-collapsible', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsCollapsibleAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsCollapsibleAttributes = OdsCreateAttributes(attributes, odsCollapsibleBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCollapsibleAttributes>(minimalAttributes, odsCollapsibleDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-collapsible ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-collapsible>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-collapsible');
  }

  describe('screenshots', () => {
    // Screenshot testing
  });
});
