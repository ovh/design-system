jest.mock('@ovhcloud/ods-core/src/components/chip/ods-chip-controller'); // keep jest.mock before any

import {
  OdsChipAttributes,
  OdsChipController,
  OdsChipSizeList,
  OdsChipVariantList,
  OdsComponentAttributes2StringAttributes,
  odsChipDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsChipBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsChip } from './osds-chip';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-chip', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsChip;
  let controller: OdsChipController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsChipAttributes> } = {}) {
    const minimalAttributes: OdsChipAttributes = OdsCreateAttributes(attributes, odsChipBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsChipAttributes>(minimalAttributes, odsChipDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsChip],
      html: `<osds-chip ${OdsStringAttributes2Str(stringAttributes)}>My Chip</osds-chip>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsChipController as unknown as jest.SpyInstance<OdsChipController, unknown[]>).mock.instances[0];
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
      odsUnitTestAttribute<OdsChipAttributes, 'color'>({
        ...getAttributeContextOptions<OdsChipAttributes, OsdsChip, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsChipDefaultAttributes.color,
          ...config
        })
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsChipAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsChipAttributes, OsdsChip, 'contrasted'>({
          name: 'contrasted',
          list: [false, true],
          defaultValue: odsChipDefaultAttributes.contrasted,
          ...config
        })
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsChipAttributes, 'size'>({
        ...getAttributeContextOptions<OdsChipAttributes, OsdsChip, 'size'>({
          name: 'size',
          list: OdsChipSizeList,
          defaultValue: odsChipDefaultAttributes.size,
          ...config
        })
      });
    });

    describe('flex', () => {
      odsUnitTestAttribute<OdsChipAttributes, 'flex'>({
        ...getAttributeContextOptions<OdsChipAttributes, OsdsChip, 'flex'>({
          name: 'flex',
          list: [false, true],
          defaultValue: odsChipDefaultAttributes.flex,
          ...config
        })
      });
    });

    describe('variant', () => {
      odsUnitTestAttribute<OdsChipAttributes, 'variant'>({
        ...getAttributeContextOptions<OdsChipAttributes, OsdsChip, 'variant'>({
          name: 'variant',
          list: OdsChipVariantList,
          defaultValue: odsChipDefaultAttributes.variant,
          ...config
        })
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsChipAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsChipAttributes, OsdsChip, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsChipDefaultAttributes.disabled,
          ...config
        })
      });
    });

    describe('removable', () => {
      odsUnitTestAttribute<OdsChipAttributes, 'removable'>({
        ...getAttributeContextOptions<OdsChipAttributes, OsdsChip, 'removable'>({
          name: 'removable',
          list: [false, true],
          defaultValue: odsChipDefaultAttributes.removable,
          ...config
        })
      });
    });

    // TODO: avoid loop with selectable mutation on the component
    describe('selectable', () => {
      odsUnitTestAttribute<OdsChipAttributes, 'selectable'>({
        ...getAttributeContextOptions<OdsChipAttributes, OsdsChip, 'selectable'>({
          name: 'selectable',
          list: [false, true],
          defaultValue: odsChipDefaultAttributes.selectable,
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
