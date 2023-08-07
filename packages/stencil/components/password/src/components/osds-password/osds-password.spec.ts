jest.mock('@ovhcloud/ods-core/src/components/password/ods-password-controller'); // keep jest.mock before any

import {
  OdsPasswordAttributes,
  OdsPasswordController,
  OdsComponentAttributes2StringAttributes,
  odsPasswordDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsPasswordBaseAttributes,
  odsUnitTestAttribute,
  OdsUnitTestAttributeType,
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsPassword } from './osds-password';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';
import { ODS_INPUT_SIZES } from '@ovhcloud/ods-component-input';

describe('spec:osds-password', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsPassword;
  let controller: OdsPasswordController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsPasswordAttributes> } = {}) {
    const minimalAttributes: OdsPasswordAttributes = OdsCreateAttributes(attributes, odsPasswordBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPasswordAttributes>(minimalAttributes, odsPasswordDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsPassword],
      html: `<osds-password ${OdsStringAttributes2Str(stringAttributes)}></osds-password>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsPasswordController as unknown as jest.SpyInstance<OdsPasswordController, unknown[]>).mock.instances[0];
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

    describe('clearable', () => {
      odsUnitTestAttribute<OdsPasswordAttributes, 'clearable'>({
        ...getAttributeContextOptions<OdsPasswordAttributes, OsdsPassword, 'clearable'>({
          name: 'clearable',
          list: [false, true],
          defaultValue: odsPasswordDefaultAttributes.clearable,
          ...config
        })
      });
    });

    describe('color', () => {
      odsUnitTestAttribute<OdsPasswordAttributes, 'color'>({
        ...getAttributeContextOptions<OdsPasswordAttributes, OsdsPassword, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsPasswordDefaultAttributes.color,
          ...config
        })
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsPasswordAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsPasswordAttributes, OsdsPassword, 'contrasted'>({
          name: 'contrasted',
          list: [false, true],
          defaultValue: odsPasswordDefaultAttributes.contrasted,
          ...config
        })
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsPasswordAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsPasswordAttributes, OsdsPassword, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsPasswordDefaultAttributes.disabled,
          ...config
        })
      });
    });

    describe('flex', () => {
      odsUnitTestAttribute<OdsPasswordAttributes, 'flex'>({
        ...getAttributeContextOptions<OdsPasswordAttributes, OsdsPassword, 'flex'>({
          name: 'flex',
          list: [false, true],
          defaultValue: odsPasswordDefaultAttributes.flex,
          ...config
        })
      });
    });

    describe('loading', () => {
      odsUnitTestAttribute<OdsPasswordAttributes, 'loading'>({
        ...getAttributeContextOptions<OdsPasswordAttributes, OsdsPassword, 'loading'>({
          name: 'loading',
          list: [false, true],
          defaultValue: odsPasswordDefaultAttributes.loading,
          ...config
        })
      });
    });

    describe('masked', () => {
      odsUnitTestAttribute<OdsPasswordAttributes, 'masked'>({
        ...getAttributeContextOptions<OdsPasswordAttributes, OsdsPassword, 'masked'>({
          name: 'masked',
          list: [false, true],
          defaultValue: odsPasswordDefaultAttributes.masked,
          ...config
        }),
        include: [OdsUnitTestAttributeType.MUTABLE]
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsPasswordAttributes, 'placeholder'>({
        ...getAttributeContextOptions<OdsPasswordAttributes, OsdsPassword, 'placeholder'>({
          name: 'placeholder',
          list: ['ovh', 'ipsum'],
          defaultValue: odsPasswordDefaultAttributes.placeholder,
          ...config
        })
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsPasswordAttributes, 'size'>({
        ...getAttributeContextOptions<OdsPasswordAttributes, OsdsPassword, 'size'>({
          name: 'size',
          list: ODS_INPUT_SIZES,
          defaultValue: odsPasswordDefaultAttributes.size,
          ...config
        })
      });
    });
  });
});
