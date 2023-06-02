jest.mock('@ovhcloud/ods-core/src/components/breadcrumb/breadcrumb/ods-breadcrumb-controller'); // keep jest.mock before any

import {
  OdsBreadcrumbAttributes,
  OdsBreadcrumbController,
  odsBreadcrumbDefaultAttributes,
  OdsComponentAttributes2StringAttributes
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsBreadcrumbBaseAttributes,
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { OsdsBreadcrumb } from './osds-breadcrumb';

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
      html: `<osds-breadcrumb ${OdsStringAttributes2Str(stringAttributes)}></osds-breadcrumb>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsBreadcrumbController as unknown as jest.SpyInstance<OdsBreadcrumbController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
    expect(instance.isCollapsed).toBe(true);
  });

  describe('methods', () => {
    describe('onBreadcrumbItemCollapsedClick', () => {
      it('should set the isCollapsed on refresh displayed items', async () => {
        await setup({});

        instance.onBreadcrumbItemCollapsedClick()

        expect(instance.isCollapsed).toBe(false);
        expect(controller.getBreadcrumbItems).toHaveBeenCalledWith(false);
      });
    });
  });
});
