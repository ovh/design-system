import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsBreadcrumbItemAttributes, OdsComponentAttributes2StringAttributes, odsBreadcrumbItemDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsBreadcrumbBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-breadcrumb-item', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsBreadcrumbItemAttributes>; html?: string } = {}) {
    const minimalAttributes: OdsBreadcrumbItemAttributes = OdsCreateAttributes(attributes, odsBreadcrumbBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumbItemAttributes>(minimalAttributes, odsBreadcrumbItemDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-breadcrumb-item ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-breadcrumb-item>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-breadcrumb-item');
  }

  describe('screenshots', () => {
    // Screenshot testing
  });
});
