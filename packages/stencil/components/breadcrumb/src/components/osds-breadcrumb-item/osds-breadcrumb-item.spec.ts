jest.mock('@ovhcloud/ods-core/src/components/breadcrumb/ods-breadcrumb-controller'); // keep jest.mock before any

import { OdsBreadcrumbItemAttributes, OdsBreadcrumbItemController, OdsComponentAttributes2StringAttributes, odsBreadcrumbItemDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsBreadcrumbBaseAttributes, odsUnitTestAttribute } from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

//import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsBreadcrumbItem } from './osds-breadcrumb-item';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-breadcrumb', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsBreadcrumbItem;
  let controller: OdsBreadcrumbItemController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsBreadcrumbItemAttributes> } = {}) {
    const minimalAttributes: OdsBreadcrumbItemAttributes = OdsCreateAttributes(attributes, odsBreadcrumbBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumbItemAttributes>(minimalAttributes, odsBreadcrumbItemDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsBreadcrumbItem],
      html: `<osds-breadcrumb-item ${OdsStringAttributes2Str(stringAttributes)}>My Breadcrumb Item</osds-breadcrumb-item>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsBreadcrumbItemController as unknown as jest.SpyInstance<OdsBreadcrumbItemController, unknown[]>).mock.instances[0];
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

    // Attributes Unit testing
  });

  describe('controller', () => {
    it('should call controller.validateAttributes', async () => {
      await setup();
      expect(controller.validateAttributes).toHaveBeenCalledWith();
      expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
    });
  });

  describe('separator', () => {
    odsUnitTestAttribute<odsBreadcrumbItemDefaultAttributes, 'separator'>({
      ...getAttributeContextOptions<odsBreadcrumbItemDefaultAttributes, OsdsDivider, 'separator'>({
        name: 'separator',
        list: [false, true],
        defaultValue: odsBreadcrumbItemDefaultAttributes.separator,
        ...config,
      }),
    });
  });
});
