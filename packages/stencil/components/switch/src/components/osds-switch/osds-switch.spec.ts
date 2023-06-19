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
  let mainSlot: HTMLElement;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSwitchAttributes> } = {}) {
    const minimalAttributes: OdsSwitchAttributes = OdsCreateAttributes(attributes, odsSwitchBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSwitchAttributes>(minimalAttributes, odsSwitchDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsSwitch],
      html: `<osds-switch ${OdsStringAttributes2Str(stringAttributes)}>
              <osds-switch-item value="1" id="1">Item 1</osds-switch-item>
              <osds-switch-item value="2" id="2">Item 2</osds-switch-item>
              <osds-switch-item value="3" id="3">Item 3</osds-switch-item>
             </osds-switch>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (OdsSwitchController as unknown as jest.SpyInstance<OdsSwitchController, unknown[]>).mock.instances[0];
    mainSlot = root?.shadowRoot?.querySelector('slot:not([name])');
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

  describe('contents', () => {
    it('should have a main slot', async () => {
      await setup();
      expect(mainSlot).toBeTruthy();
    });
  });

  describe('controller', () => {
    it('should call controller.changeCheckedSwitchItem on switch item click', async () => {
      await setup();
      const spyEmit = jest.spyOn(instance, 'emitChanged');
      const spyFocus = jest.spyOn(instance, 'handlerFocus');
      const current = { value: '1' }
      controller.changeCheckedSwitchItem = jest.fn().mockImplementation(() => ({ current , old: undefined }));
      instance.hanlderSwitchItemClick(new CustomEvent('odsSwitchItemClick', { detail: current }));
      expect(controller.changeCheckedSwitchItem).toHaveBeenCalledTimes(1);
      expect(spyEmit).toHaveBeenNthCalledWith(1, current.value, undefined);
      expect(spyFocus).toHaveBeenCalledTimes(1);
    });

    it('should not call controller.changeCheckedSwitchItem because of disabled', async () => {
      await setup({ attributes: { disabled: true } });
      const spyEmit = jest.spyOn(instance, 'emitChanged');
      const spyFocus = jest.spyOn(instance, 'handlerFocus');
      instance.hanlderSwitchItemClick(new CustomEvent('odsSwitchItemClick', { detail: { value: '1'} }));
      expect(controller.changeCheckedSwitchItem).not.toHaveBeenCalled();
      expect(spyEmit).not.toHaveBeenCalled();
      expect(spyFocus).not.toHaveBeenCalled();
    });

    it('should call controller.findPreviousSwitchItem on navigate with arrow left', async () => {
      await setup();
      instance.handlerOnKeyDown(new KeyboardEvent('keydown', { code: 'ArrowLeft' }));
      expect(controller.findPreviousSwitchItem).toHaveBeenCalledTimes(1);
    });

    it('should call controller.findNextSwitchItem on navigate with arrow right', async () => {
      await setup();
      instance.handlerOnKeyDown(new KeyboardEvent('keydown', { code: 'ArrowRight' }));
      expect(controller.findNextSwitchItem).toHaveBeenCalledTimes(1);
    });

    it('should do nothing because of unsupport key', async () => {
      await setup();
      instance.handlerOnKeyDown(new KeyboardEvent('keydown', { code: 'Space' }));
      instance.handlerOnKeyDown(new KeyboardEvent('keydown', { code: 'Enter' }));
      instance.handlerOnKeyDown(new KeyboardEvent('keydown', { code: 'Escape' }));
      instance.handlerOnKeyDown(new KeyboardEvent('keydown', { code: 'A' }));
      expect(controller.findNextSwitchItem).not.toHaveBeenCalled();
    });
  })
});
