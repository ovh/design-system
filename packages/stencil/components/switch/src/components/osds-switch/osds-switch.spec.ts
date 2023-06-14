jest.mock('@ovhcloud/ods-core/src/components/switch/ods-switch-controller'); // keep jest.mock before any

import {
  OdsSwitchAttributes,
  OdsSwitchController,
  OdsComponentAttributes2StringAttributes,
  odsSwitchDefaultAttributes,
  OdsSwitchSizeList,
  OdsSwitchVariantList,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsSwitchBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsSwitch } from './osds-switch';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-switch', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsSwitch;
  let controller: OdsSwitchController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSwitchAttributes> } = {}) {
    const minimalAttributes: OdsSwitchAttributes = OdsCreateAttributes(attributes, odsSwitchBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSwitchAttributes>(minimalAttributes, odsSwitchDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsSwitch],
      html: `<osds-switch ${OdsStringAttributes2Str(stringAttributes)}>My Switch</osds-switch>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsSwitchController as unknown as jest.SpyInstance<OdsSwitchController, unknown[]>).mock.instances[0];
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

    describe('color', () => {
      odsUnitTestAttribute<OdsSwitchAttributes, 'color'>({
        ...getAttributeContextOptions<OdsSwitchAttributes, OsdsSwitch, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsSwitchDefaultAttributes.color,
          ...config
        })
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsSwitchAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsSwitchAttributes, OsdsSwitch, 'contrasted'>({
          name: 'contrasted',
          list: [true, false],
          defaultValue: odsSwitchDefaultAttributes.contrasted,
          ...config
        })
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsSwitchAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsSwitchAttributes, OsdsSwitch, 'disabled'>({
          name: 'disabled',
          list: [true, false],
          defaultValue: odsSwitchDefaultAttributes.disabled,
          ...config
        })
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsSwitchAttributes, 'size'>({
        ...getAttributeContextOptions<OdsSwitchAttributes, OsdsSwitch, 'size'>({
          name: 'size',
          list: OdsSwitchSizeList,
          defaultValue: odsSwitchDefaultAttributes.size,
          ...config
        })
      });
    });

    describe('variant', () => {
      odsUnitTestAttribute<OdsSwitchAttributes, 'variant'>({
        ...getAttributeContextOptions<OdsSwitchAttributes, OsdsSwitch, 'variant'>({
          name: 'variant',
          list: OdsSwitchVariantList,
          defaultValue: odsSwitchDefaultAttributes.variant,
          ...config
        })
      });
    });
  });

  describe('controller', () => {
    it('should call controller.validateAttributes', async () => {
      await setup();
      expect(controller.validateAttributes).toHaveBeenCalledWith();
      expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
    });
  });
});
