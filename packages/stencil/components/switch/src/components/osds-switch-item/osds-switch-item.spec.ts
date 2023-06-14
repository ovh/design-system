jest.mock('@ovhcloud/ods-core/src/components/switch/ods-switch-item-controller'); // keep jest.mock before any

import {
  OdsSwitchItemAttributes,
  OdsSwitchItemController,
  OdsComponentAttributes2StringAttributes,
  odsSwitchItemDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { OsdsSwitchItem } from './osds-switch-item';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-switch_item', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsSwitchItem;
  let controller: OdsSwitchItemController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSwitchItemAttributes> } = {}) {
    const minimalAttributes: OdsSwitchItemAttributes = OdsCreateAttributes(attributes, odsSwitchItemDefaultAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSwitchItemAttributes>(minimalAttributes, odsSwitchItemDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsSwitchItem],
      html: `<osds-switch-item ${OdsStringAttributes2Str(stringAttributes)}>My Switch Item</osds-switch-item>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsSwitchItemController as unknown as jest.SpyInstance<OdsSwitchItemController, unknown[]>).mock.instances[0];
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

    describe('checked', () => {
      odsUnitTestAttribute<OdsSwitchItemAttributes, 'checked'>({
        ...getAttributeContextOptions<OdsSwitchItemAttributes, OsdsSwitchItem, 'checked'>({
          name: 'checked',
          list: [true, false],
          defaultValue: odsSwitchItemDefaultAttributes.checked,
          ...config
        })
      });
    });
  });
});
