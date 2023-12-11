import type { OdsDividerAttribute } from './interfaces/attributes';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-divider', () => {
  let page: E2EPage;
  let el: E2EElement;
  let hrDividerElement: E2EElement;
  let spanDividerElement: E2EElement;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsDividerAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDividerAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
    <div class="container">
      <div style="background: black;height: 10px"></div>
      <osds-divider ${odsStringAttributes2Str(stringAttributes)}></osds-divider>
      <div style="background: black;height: 10px"></div>
    </div>
`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-divider');

    hrDividerElement = await page.find('osds-divider >>> hr');
    spanDividerElement = await page.find('osds-divider >>> span');
  }

  it('should render', async() => {
    await setup({});
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should display a span when separator is not set', async() => {
    await setup({});
    expect(spanDividerElement).not.toBeNull();
    expect(hrDividerElement).toBeNull();
  });
  it('should display an hr when separator set to true', async() => {
    await setup({ attributes: { separator: true } });
    expect(hrDividerElement).not.toBeNull();
    expect(spanDividerElement).toBeNull();
  });
});
