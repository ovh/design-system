import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsBreadcrumbsAttributes,
  odsBreadcrumbsDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsBreadcrumbsBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

describe('e2e:osds-breadcrumb', () => {
  let page: E2EPage;
  let el: E2EElement;
  let breadcrumbsElement: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsBreadcrumbsAttributes>, html?: string }) {
    const minimalAttributes: OdsBreadcrumbsAttributes = OdsCreateAttributes(attributes, odsBreadcrumbsBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumbsAttributes>(minimalAttributes, odsBreadcrumbsDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-breadcrumb ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-breadcrumb>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-breadcrumb');

    breadcrumbsElement = await page.find('osds-breadcrumb >>> breadcrumbs');
  }

  it('should render', async () => {
    await setup({ attributes: { color: OdsThemeColorIntent.primary, contrasted: false } });
    expect(el).not.toBeNull();
  });

  // todo: to activate once breadcrumbs ok
  xit('should display a text in the breadcrumbs', async () => {
    const text = `Text`;
    await setup({ attributes: { color: OdsThemeColorIntent.primary,  contrasted: false }, html: text });

    expect(breadcrumbsElement.innerText).toBe(text);
  });

  // it('should display a small size', async () => {
  //   await setup({ attributes: { color: OdsThemeColorIntent.primary,  contrasted: false} });
  //   const config: Config = getStencilConfig('osds-breadcrumb', true, true, jestConfig.default);
  //   await runJestScreenshot(config, process.env)
  // });

  // it('should have an icon set', async () => {
  //   await setup({ attributes: { name: 'bell_concept' } })
  //   const el = await page.find('oof-icon >>> span');
  //   const beforeStyle = await el.getComputedStyle(':before');
  //   expect(beforeStyle.fontFamily).toBe('"Oui Icons"');
  //   expect(beforeStyle.content).not.toBe('none');
  // });

});
