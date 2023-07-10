jest.mock('@ovhcloud/ods-core/src/components/search-bar/ods-search-bar-controller'); // keep jest.mock before any

import {
  OdsSearchBarAttributes,
  OdsSearchBarController,
  OdsComponentAttributes2StringAttributes,
  odsSearchBarDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsSearchBarBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsSearchBar } from './osds-search-bar';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-search-bar', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsSearchBar;
  let controller: OdsSearchBarController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSearchBarAttributes> } = {}) {
    const minimalAttributes: OdsSearchBarAttributes = OdsCreateAttributes(attributes, odsSearchBarBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSearchBarAttributes>(minimalAttributes, odsSearchBarDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsSearchBar],
      html: `<osds-search-bar ${OdsStringAttributes2Str(stringAttributes)}>My SearchBar</osds-search-bar>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsSearchBarController as unknown as jest.SpyInstance<OdsSearchBarController, unknown[]>).mock.instances[0];
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
