jest.mock('./core/controller'); // keep jest.mock before any

import type {OdsRadioGroupAttribute} from './interfaces/attributes';
import type {SpecPage} from '@stencil/core/testing';
import {newSpecPage} from '@stencil/core/testing';
import {OdsUnitTestAttributeType, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute} from '@ovhcloud/ods-common-testing';
import {OsdsRadioGroup} from './osds-radio-group';
import {OdsRadioGroupController} from './core/controller';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';
import {OsdsRadio} from '../osds-radio/osds-radio';

class OdsRadioMock extends OsdsRadio {
  constructor(attribute?: Partial<OsdsRadio>) {
    super();
    Object.assign(this, attribute);
  }
}
describe('spec:osds-radio-group', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsRadioGroup;
  let controller: OdsRadioGroupController;
  const baseAttributes = {disabled: false, value: ''};

  async function setup({attributes = {}, html = ''}: { attributes?: Partial<OdsRadioGroupAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsRadioGroupAttribute>({...baseAttributes, ...attributes}, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsRadioGroup],
      html: `<osds-radio-group ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-radio-group>`,
    });

    root = page.root;
    instance = page.rootInstance;

    controller = (OdsRadioGroupController as unknown as jest.SpyInstance<OdsRadioGroupController, unknown[]>).mock.instances[0];
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('name', () => {
      odsUnitTestAttribute<OdsRadioGroupAttribute, 'name'>({
        name: 'name',
        defaultValue: 'ods-radio-group-1',
        newValue: 'oles',
        value: 'ipsum',
        setup: (name) => setup({attributes: {name}}),
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsRadioGroupAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: 'oles',
        value: 'ipsum',
        setup: (value) => setup({attributes: {value}}),
        ...config,
        include: [OdsUnitTestAttributeType.MUTABLE],
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsRadioGroupAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: false,
        setup: (disabled) => setup({attributes: {disabled}}),
        ...config,
      });
    });

    describe('required', () => {
      odsUnitTestAttribute<OdsRadioGroupAttribute, 'required'>({
        name: 'required',
        defaultValue: DEFAULT_ATTRIBUTE.required,
        newValue: false,
        value: false,
        setup: (required) => setup({attributes: {required}}),
        ...config,
      });
    });
  });

  describe('controller', () => {
    describe('lifecycle', () => {
      it('should call controller.clearRadios when disconnected' , async() => {
        await setup({});
        page.root?.remove();
        expect(controller.clearRadios).toHaveBeenCalledTimes(1);
        expect(controller.clearRadios).toHaveBeenCalledWith();
      });
    });

    describe('events', () => {
      it('should call controller.handleLabelClick on click', async() => {
        const event = new Event('click');
        await setup({});
        instance.el?.dispatchEvent(event);

        expect(controller.handleLabelClick).toHaveBeenCalledTimes(1);
        expect(controller.handleLabelClick).toHaveBeenCalledWith(event);
      });
    });

    describe('methods', () => {
      it('should call controller.registerRadio from registerRadio method', async() => {
        const radio = new OdsRadioMock();
        await setup({});
        await instance.registerRadio(radio);

        expect(controller.registerRadio).toHaveBeenCalledTimes(1);
        expect(controller.registerRadio).toHaveBeenCalledWith(radio);
      });


      it('should call controller.unregisterRadio from unregisterRadio method', async() => {
        const radio = new OdsRadioMock();
        await setup({});
        await instance.unregisterRadio(radio);

        expect(controller.unregisterRadio).toHaveBeenCalledTimes(1);
        expect(controller.unregisterRadio).toHaveBeenCalledWith(radio);
      });

      it('should call controller.updateState from updateState method', async() => {
        const newValue = 'value';
        const checked = true;
        const checking = true;
        await setup({});
        await instance.updateState({newValue, checked, checking});

        expect(controller.updateState).toHaveBeenCalledTimes(1);
        expect(controller.updateState).toHaveBeenCalledWith({newValue, checked, checking});
      });
    });

    describe('watchers', () => {
      it('should call controller.onDisabledChange on disabled change', async() => {
        const disabled = false;
        await setup({attributes: {disabled}});
        instance.disabled = true;

        expect(controller.onDisabledChange).toHaveBeenCalledTimes(1);
        expect(controller.onDisabledChange).toHaveBeenCalledWith(!disabled);
      });

      it('should call controller.onValueChange on value change', async() => {
        const value = 'value';
        const newValue = 'newValue';
        await setup({attributes: {value}});
        instance.value = newValue;

        expect(controller.onValueChange).toHaveBeenCalledTimes(1);
        expect(controller.onValueChange).toHaveBeenCalledWith(newValue, value);
      });
    });
  });
});
