jest.mock('@ovhcloud/ods-core/src/components/form-field/ods-form-field-controller'); // keep jest.mock before any

import {
  OdsFormFieldAttributes,
  OdsFormFieldController,
  OdsComponentAttributes2StringAttributes,
  odsFormFieldDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsFormFieldBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsFormField } from './osds-form-field';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-form-field', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsFormField;
  let controller: OdsFormFieldController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsFormFieldAttributes> } = {}) {
    const minimalAttributes: OdsFormFieldAttributes = OdsCreateAttributes(attributes, odsFormFieldBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsFormFieldAttributes>(minimalAttributes, odsFormFieldDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsFormField],
      html: `<osds-form-field ${OdsStringAttributes2Str(stringAttributes)}>My FormField</osds-form-field>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsFormFieldController as unknown as jest.SpyInstance<OdsFormFieldController, unknown[]>).mock.instances[0];
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

    describe('error', () => {
      odsUnitTestAttribute<OdsFormFieldAttributes, 'error'>({
        ...getAttributeContextOptions<OdsFormFieldAttributes, OsdsFormField, 'error'>({
          name: 'error',
          list: ['', 'There was an error with your message'],
          defaultValue: odsFormFieldDefaultAttributes.error,
          ...config
        })
      });
    });

    describe('flex', () => {
      odsUnitTestAttribute<OdsFormFieldAttributes, 'flex'>({
        ...getAttributeContextOptions<OdsFormFieldAttributes, OsdsFormField, 'flex'>({
          name: 'flex',
          list: [true, false],
          defaultValue: odsFormFieldDefaultAttributes.flex,
          ...config
        })
      });
    });
  });
});
