jest.mock('@ovhcloud/ods-core/src/components/autocomplete/ods-autocomplete-controller'); // keep jest.mock before any

import {
  OdsAutocompleteAttributes,
  OdsAutocompleteController,
  OdsComponentAttributes2StringAttributes,
  odsAutocompleteDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsAutocompleteBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsAutocomplete } from './osds-autocomplete';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-autocomplete', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsAutocomplete;
  let controller: OdsAutocompleteController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsAutocompleteAttributes> } = {}) {
    const minimalAttributes: OdsAutocompleteAttributes = OdsCreateAttributes(attributes, odsAutocompleteBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsAutocompleteAttributes>(minimalAttributes, odsAutocompleteDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsAutocomplete],
      html: `<osds-autocomplete ${OdsStringAttributes2Str(stringAttributes)}>My Autocomplete</osds-autocomplete>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsAutocompleteController as unknown as jest.SpyInstance<OdsAutocompleteController, unknown[]>).mock.instances[0];
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
