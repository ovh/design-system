import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsComponentAttributes2StringAttributes, OdsBreadcrumbItemAttributes, odsBreadcrumbsDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsBreadcrumbItemBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

describe('e2e:osds-breadcrumb-item', () => {
  let page: E2EPage;
  let el: E2EElement;
  let breadcrumbElement: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsBreadcrumbItemAttributes>; html?: string }) {
    const minimalAttributes: OdsBreadcrumbItemAttributes = OdsCreateAttributes(attributes, odsBreadcrumbItemBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumbItemAttributes>(minimalAttributes, odsBreadcrumbsDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-breadcrumb-item ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-breadcrumb-item>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-breadcrumb-item');

    breadcrumbElement = await page.find('osds-breadcrumb-item >>> breadcrumb');
  }

  it('should render', async () => {
    await setup({ attributes: { color: OdsThemeColorIntent.primary, contrasted: false } });
    expect(el).not.toBeNull();
  });

  // todo: to activate once breadcrumb ok
  xit('should display a text in the breadcrumb', async () => {
    const text = `Text`;
    await setup({ attributes: { color: OdsThemeColorIntent.primary, contrasted: false }, html: text });

    expect(breadcrumbElement.innerText).toBe(text);
  });

  // it('should display a small size', async () => {
  //   await setup({ attributes: { color: OdsThemeColorIntent.primary,  contrasted: false} });
  //   const config: Config = getStencilConfig('osds-breadcrumb-item', true, true, jestConfig.default);
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
