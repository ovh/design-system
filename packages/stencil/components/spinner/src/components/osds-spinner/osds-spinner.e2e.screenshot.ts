import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsSpinnerAttributes,
  OdsComponentAttributes2StringAttributes,
  odsSpinnerDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsSpinnerBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-spinner', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsSpinnerAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsSpinnerAttributes = OdsCreateAttributes(attributes, odsSpinnerBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSpinnerAttributes>(minimalAttributes, odsSpinnerDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-spinner ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-spinner>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-spinner');
  }

  describe('screenshots', () => {
    // Screenshot testing
  });
});
