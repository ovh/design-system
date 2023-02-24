import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsDividerAttributes,
  odsDividerDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsDividerBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-divider', () => {
  let page: E2EPage;
  let el: E2EElement;
  let hrDividerElement: E2EElement;
  let spanDividerElement: E2EElement;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsDividerAttributes>, html?: string }) {
    const minimalAttributes: OdsDividerAttributes = OdsCreateAttributes(attributes, odsDividerBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsDividerAttributes>(minimalAttributes, odsDividerDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
    <div class="container">
      <div style="background: black;height: 10px"></div>
      <osds-divider ${OdsStringAttributes2Str(stringAttributes)}></osds-divider>
      <div style="background: black;height: 10px"></div>
    </div>
`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-divider');

    hrDividerElement = await page.find('osds-divider >>> hr');
    spanDividerElement = await page.find('osds-divider >>> span');
  }

  it('should render', async () => {
    await setup({});
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should display a span when separator is not set', async () => {
    await setup({});
    expect(spanDividerElement).not.toBeNull();
    expect(hrDividerElement).toBeNull();
  });
  it('should display an hr when separator set to true', async () => {
    await setup({ attributes: { separator: true } });
    expect(hrDividerElement).not.toBeNull();
    expect(spanDividerElement).toBeNull();
  });
});
