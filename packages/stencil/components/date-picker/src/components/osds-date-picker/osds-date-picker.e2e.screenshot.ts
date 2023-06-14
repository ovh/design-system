import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsDatePickerAttributes,
  OdsComponentAttributes2StringAttributes,
  odsDatePickerDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsDatePickerBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-date-picker', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsDatePickerAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsDatePickerAttributes = OdsCreateAttributes(attributes, odsDatePickerBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsDatePickerAttributes>(minimalAttributes, odsDatePickerDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-date-picker ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-date-picker>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-date-picker');
  }

  describe('screenshots', () => {
    // Screenshot testing
  });
});
