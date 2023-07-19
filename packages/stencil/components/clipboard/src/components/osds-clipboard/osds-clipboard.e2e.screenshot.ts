import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsClipboardAttributes,
  OdsComponentAttributes2StringAttributes,
  odsClipboardDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsClipboardBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-clipboard', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsClipboardAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsClipboardAttributes = OdsCreateAttributes(attributes, odsClipboardBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsClipboardAttributes>(minimalAttributes, odsClipboardDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-clipboard ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-clipboard>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-clipboard');
  }

  describe('screenshots', () => {
    // Screenshot testing
  });
});
