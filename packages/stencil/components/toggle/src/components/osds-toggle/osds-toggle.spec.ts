jest.mock('@ovhcloud/ods-core/src/components/toggle/ods-toggle-controller'); // keep jest.mock before any

import {
  OdsComponentAttributes2StringAttributes,
  OdsToggleAttributes,
  OdsToggleController,
  odsToggleDefaultAttributes
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  OdsUnitTestAttributeType,
  odsToggleBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsToggle } from './osds-toggle';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-toggle', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsToggle;
  let controller: OdsToggleController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsToggleAttributes> } = {}) {
    const minimalAttributes: OdsToggleAttributes = OdsCreateAttributes(attributes, odsToggleBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsToggleAttributes>(minimalAttributes, odsToggleDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsToggle],
      html: `<osds-toggle ${OdsStringAttributes2Str(stringAttributes)}></osds-toggle>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsToggleController as unknown as jest.SpyInstance<OdsToggleController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup();
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
      odsUnitTestAttribute<OdsToggleAttributes, 'color'>({
        ...getAttributeContextOptions<OdsToggleAttributes, OsdsToggle, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsToggleDefaultAttributes.color,
          ...config
        })
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsToggleAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsToggleAttributes, OsdsToggle, 'contrasted'>({
          name: 'contrasted',
          list: [false, true],
          defaultValue: odsToggleDefaultAttributes.contrasted,
          ...config
        })
      });
    });

    describe('checked', () => {
      odsUnitTestAttribute<OdsToggleAttributes, 'checked'>({
        ...getAttributeContextOptions<OdsToggleAttributes, OsdsToggle, 'checked'>({
          name: 'checked',
          list: [false, true],
          defaultValue: odsToggleDefaultAttributes.checked,
          ...config
        })
      });
    });

    describe('checking', () => {
      odsUnitTestAttribute<OdsToggleAttributes, 'checking'>({
        ...getAttributeContextOptions<OdsToggleAttributes, OsdsToggle, 'checking'>({
          name: 'checking',
          list: [false, true],
          defaultValue: odsToggleDefaultAttributes.checking,
          ...config
        })
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsToggleAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsToggleAttributes, OsdsToggle, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsToggleDefaultAttributes.disabled,
          ...config
        })
      });
    });

    describe('interactive', () => {
      odsUnitTestAttribute<OdsToggleAttributes, 'interactive'>({
        ...getAttributeContextOptions<OdsToggleAttributes, OsdsToggle, 'interactive'>({
          name: 'interactive',
          list: [false, true],
          defaultValue: odsToggleDefaultAttributes.interactive,
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
