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

  describe('event', () => {
    it('should call handlerOnKeyDown', async () => {
      await setup({});
      const spyHandlerOnKeyDown = jest.spyOn(instance, 'handlerOnKeyDown');
      const spyOdsSwitchItemClickEmit = jest.spyOn(instance, 'odsSwitchItemClickEmit');

      const keyEnter = new KeyboardEvent("keydown", { code : "Enter" });
      root?.dispatchEvent(keyEnter);
      await page.waitForChanges();

      const keySpace = new KeyboardEvent("keydown", { code : "Space" });
      root?.dispatchEvent(keySpace);
      await page.waitForChanges();

      expect(spyHandlerOnKeyDown).toHaveBeenCalledTimes(2);
      expect(spyOdsSwitchItemClickEmit).toHaveBeenCalledTimes(2);
    });

    it('should not call handlerOnClick because of unsupported key', async () => {
      await setup({});
      const spyHandlerOnKeyDown = jest.spyOn(instance, 'handlerOnKeyDown');
      const spyOdsSwitchItemClickEmit = jest.spyOn(instance, 'odsSwitchItemClickEmit');

      const keyA = new KeyboardEvent("keydown", { code : "A" });
      root.dispatchEvent(keyA);
      await page.waitForChanges();

      const keyEscape = new KeyboardEvent("keydown", { code : "Escape" });
      root.dispatchEvent(keyEscape);
      await page.waitForChanges();

      expect(spyHandlerOnKeyDown).toHaveBeenCalledTimes(2);
      expect(spyOdsSwitchItemClickEmit).not.toHaveBeenCalled();
    });
  });

  describe('methods', () => {
    it('should emit event odsSwitchItemClick', async () => {
      await setup({});
      await page.waitForChanges();
      const spyOdsSwitchItem = jest.spyOn(instance.odsSwitchItemClick, 'emit');

      instance.odsSwitchItemClickEmit();
      const keyEnter = new KeyboardEvent("keydown", { code : "Enter" });
      root?.dispatchEvent(keyEnter);
      await page.waitForChanges();

      expect(spyOdsSwitchItem).toHaveBeenCalledTimes(2);
    })
  })
});
