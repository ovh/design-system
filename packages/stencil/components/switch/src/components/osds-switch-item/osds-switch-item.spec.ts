jest.mock('@ovhcloud/ods-core/src/components/switch-item/ods-switch-item-controller'); // keep jest.mock before any

import {
  OdsSwitchItemAttributes,
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

describe('spec:osds-switch-item', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsSwitchItem;
  let radio: HTMLElement;

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
    const htmlSwitchItem = document.querySelector('osds-switch-item') as HTMLElement;
    radio = htmlSwitchItem?.shadowRoot?.querySelector('osds-radio');
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
 