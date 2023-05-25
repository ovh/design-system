import { OdsBreadcrumbItemAttributes, OdsBreadcrumbItemController, OdsComponentAttributes2StringAttributes, odsBreadcrumbItemDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsBreadcrumbBaseAttributes, odsUnitTestAttribute } from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

//import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsBreadcrumbItem } from './osds-breadcrumb-item';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-breadcrumb-item', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsBreadcrumbItem;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsBreadcrumbItemAttributes> } = {}) {
    const minimalAttributes: OdsBreadcrumbItemAttributes = OdsCreateAttributes(attributes, odsBreadcrumbBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumbItemAttributes>(minimalAttributes, odsBreadcrumbItemDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsBreadcrumbItem],
      html: `<osds-breadcrumb-item ${OdsStringAttributes2Str(stringAttributes)}>My Breadcrumb Item</osds-breadcrumb-item>`,
    });

    root = page.root;
    instance = page.rootInstance;
    await page.waitForChanges();
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup,
    };

    describe('active', () => {
      odsUnitTestAttribute<OdsBreadcrumbItemAttributes, 'active'>({
        ...getAttributeContextOptions<OdsBreadcrumbItemAttributes, OsdsBreadcrumbItem, 'active'>({
          name: 'active',
          list: [false, true],
          defaultValue: odsBreadcrumbItemDefaultAttributes.active,
          ...config,
        }),
      });
    });
  });
});
