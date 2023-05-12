jest.mock('@ovhcloud/ods-core/src/components/collapsible/ods-collapsible-controller'); // keep jest.mock before any

import {
  OdsCollapsibleAttributes,
  OdsCollapsibleController,
  OdsComponentAttributes2StringAttributes,
  odsCollapsibleDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsCollapsibleBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsCollapsible } from './osds-collapsible';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-collapsible', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsCollapsible;
  let controller: OdsCollapsibleController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsCollapsibleAttributes> } = {}) {
    const minimalAttributes: OdsCollapsibleAttributes = OdsCreateAttributes(attributes, odsCollapsibleBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCollapsibleAttributes>(minimalAttributes, odsCollapsibleDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsCollapsible],
      html: `<osds-collapsible ${OdsStringAttributes2Str(stringAttributes)}>My Collapsible</osds-collapsible>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsCollapsibleController as unknown as jest.SpyInstance<OdsCollapsibleController, unknown[]>).mock.instances[0];
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
