import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsSearchBarAttributes,
  OdsComponentAttributes2StringAttributes,
  odsSearchBarDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsSearchBarBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-search-bar', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsSearchBarAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsSearchBarAttributes = OdsCreateAttributes(attributes, odsSearchBarBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSearchBarAttributes>(minimalAttributes, odsSearchBarDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-search-bar ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-search-bar>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-search-bar');
  }

  describe('screenshots', () => {
    // Screenshot testing
  });
});
