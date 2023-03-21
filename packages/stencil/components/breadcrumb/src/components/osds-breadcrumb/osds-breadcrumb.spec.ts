jest.mock('@ovhcloud/ods-core/src/components/breadcrumb/ods-breadcrumb-controller'); // keep jest.mock before any

import {
  OdsBreadcrumbAttributes,
  OdsBreadcrumbController,
  OdsComponentAttributes2StringAttributes,
  odsBreadcrumbDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsBreadcrumbBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsBreadcrumb } from './osds-breadcrumb';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-breadcrumb', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsBreadcrumb;
  let controller: OdsBreadcrumbController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsBreadcrumbAttributes> } = {}) {
    const minimalAttributes: OdsBreadcrumbAttributes = OdsCreateAttributes(attributes, odsBreadcrumbBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumbAttributes>(minimalAttributes, odsBreadcrumbDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsBreadcrumb],
      html: `<osds-breadcrumb ${OdsStringAttributes2Str(stringAttributes)}>My Breadcrumb</osds-breadcrumb>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsBreadcrumbController as unknown as jest.SpyInstance<OdsBreadcrumbController, unknown[]>).mock.instances[0];
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
      setup
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
});
