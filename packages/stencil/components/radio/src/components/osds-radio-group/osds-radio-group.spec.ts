import { OdsRadio } from '@ovhcloud/ods-core';
import { OdsRadioMock } from './../../../../../../libraries/core/src/components/radio/ods-radio-mock';
jest.mock('@ovhcloud/ods-core/src/components/radio-group/ods-radio-group-controller'); // keep jest.mock before any

import { newSpecPage, SpecPage } from "@stencil/core/testing";
import { OdsComponentAttributes2StringAttributes, OdsRadioGroupAttributes, OdsRadioGroupController, odsRadioGroupDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, odsRadioGroupBaseAttributes, OdsStringAttributes2Str, odsUnitTestAttribute, OdsUnitTestAttributeType } from '@ovhcloud/ods-testing';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';
import { OsdsRadioGroup } from './osds-radio-group';

describe('spec:osds-radio-group', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsRadioGroup;
  let controller: OdsRadioGroupController;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsRadioGroupAttributes>, html?: string }) {
    const minimalAttributes: OdsRadioGroupAttributes = OdsCreateAttributes(attributes, odsRadioGroupBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsRadioGroupAttributes>(minimalAttributes, odsRadioGroupDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsRadioGroup],
      html: `<osds-radio-group ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-radio-group>`,
    });

    root = page.root;
    instance = page.rootInstance;

    controller = (OdsRadioGroupController as unknown as jest.SpyInstance<OdsRadioGroupController, unknown[]>).mock.instances[0];
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('name', () => {
      odsUnitTestAttribute<OdsRadioGroupAttributes, 'name'>({
        ...getAttributeContextOptions<OdsRadioGroupAttributes, OsdsRadioGroup, 'name'>({
          name: 'name',
          list: ['oles', 'ipsum'],
          defaultValue: 'ods-radio-group-1',
          ...config
        })
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsRadioGroupAttributes, 'value'>({
        ...getAttributeContextOptions<OdsRadioGroupAttributes, OsdsRadioGroup, 'value'>({
          name: 'value',
          list: ['oles', 'ipsum'],
          defaultValue: odsRadioGroupDefaultAttributes.value,
          ...config
        }),
        include: [OdsUnitTestAttributeType.MUTABLE]
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsRadioGroupAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsRadioGroupAttributes, OsdsRadioGroup, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsRadioGroupDefaultAttributes.disabled,
          ...config
        })
      });
    });

    describe('required', () => {
      odsUnitTestAttribute<OdsRadioGroupAttributes, 'required'>({
        ...getAttributeContextOptions<OdsRadioGroupAttributes, OsdsRadioGroup, 'required'>({
          name: 'required',
          list: [false, true],
          defaultValue: odsRadioGroupDefaultAttributes.required,
          ...config
        })
      });
    });
  });

  describe('controller', () => {
    describe('lifecycle', () => {
      it('should call controller.clearRadios when disconnected' , async () => {
        await setup({});
        page.root?.remove();
        expect(controller.clearRadios).toHaveBeenCalledTimes(1);
        expect(controller.clearRadios).toHaveBeenCalledWith();
      });
    });

    describe('events', () => {
      it('should call controller.handleLabelClick on click', async () => {
        const event = new Event('click');
        await setup({});
        instance.el?.dispatchEvent(event);

        expect(controller.handleLabelClick).toHaveBeenCalledTimes(1);
        expect(controller.handleLabelClick).toHaveBeenCalledWith(event);
      });
    });

    describe('methods', () => {
      it('should call controller.registerRadio from registerRadio method', async () => {
        const radio = new OdsRadioMock() as unknown as (HTMLElement & OdsRadio);
        await setup({});
        await instance.registerRadio(radio);

        expect(controller.registerRadio).toHaveBeenCalledTimes(1);
        expect(controller.registerRadio).toHaveBeenCalledWith(radio);
      });


      it('should call controller.unregisterRadio from unregisterRadio method', async () => {
        const radio = new OdsRadioMock() as unknown as (HTMLElement & OdsRadio);
        await setup({});
        await instance.unregisterRadio(radio);

        expect(controller.unregisterRadio).toHaveBeenCalledTimes(1);
        expect(controller.unregisterRadio).toHaveBeenCalledWith(radio);
      });

      it('should call controller.updateState from updateState method', async () => {
        const newValue = 'value';
        const checked = true;
        const checking = true;
        await setup({});
        await instance.updateState({ newValue, checked, checking });

        expect(controller.updateState).toHaveBeenCalledTimes(1);
        expect(controller.updateState).toHaveBeenCalledWith({ newValue, checked, checking });
      });
    });

    describe('watchers', () => {
      it('should call controller.onDisabledChange on disabled change', async () => {
        const disabled = false;
        await setup({ attributes: { disabled } });
        instance.disabled = true;

        expect(controller.onDisabledChange).toHaveBeenCalledTimes(1);
        expect(controller.onDisabledChange).toHaveBeenCalledWith(!disabled);
      });

      it('should call controller.onValueChange on value change', async () => {
        const value = 'value';
        const newValue = 'newValue';
        await setup({ attributes: { value } });
        instance.value = newValue;

        expect(controller.onValueChange).toHaveBeenCalledTimes(1);
        expect(controller.onValueChange).toHaveBeenCalledWith(newValue, value);
      });
    });
  });
});
