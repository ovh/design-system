jest.mock('@ovhcloud/ods-core/src/components/form-group/ods-form-group-controller'); // keep jest.mock before any

import {
  OdsFormGroupAttributes,
  OdsFormGroupController,
  OdsComponentAttributes2StringAttributes,
  odsFormGroupDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsFormGroupBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsFormGroup } from './osds-form-group';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-form-group', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsFormGroup;
  let controller: OdsFormGroupController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsFormGroupAttributes> } = {}) {
    const minimalAttributes: OdsFormGroupAttributes = OdsCreateAttributes(attributes, odsFormGroupBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsFormGroupAttributes>(minimalAttributes, odsFormGroupDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsFormGroup],
      html: `<osds-form-group ${OdsStringAttributes2Str(stringAttributes)}>My FormGroup</osds-form-group>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsFormGroupController as unknown as jest.SpyInstance<OdsFormGroupController, unknown[]>).mock.instances[0];
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
