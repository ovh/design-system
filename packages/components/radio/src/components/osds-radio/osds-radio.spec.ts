jest.mock('./core/controller'); // keep jest.mock before any

import {
  OdsUnitTestAttributeType,
  odsComponentAttributes2StringAttributes,
  odsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-common-testing';
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsRadioController } from './core/controller';
import type { OdsRadioAttribute } from './interfaces/attributes';
import { OsdsRadio } from './osds-radio';


describe('spec:osds-radio', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsRadio;
  let label: HTMLLabelElement | null | undefined;
  let controller: OdsRadioController;
  const baseAttributes = { ariaLabel: '', checked: false, checking: false, disabled: false, value: '' };

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsRadioAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsRadioAttribute>({ ...baseAttributes, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsRadio],
      html: `<osds-radio ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-radio>`,
    });

    root = page.root;
    instance = page.rootInstance;
    label = root?.shadowRoot.querySelector('label');

    controller = (OdsRadioController as unknown as jest.SpyInstance<OdsRadioController, unknown[]>).mock.instances[0];
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

    describe('disabled', () => {
      odsUnitTestAttribute<OdsRadioAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (disabled) => setup({ attributes: { disabled } }),
        ...config,
      });
    });
    describe('checking', () => {
      odsUnitTestAttribute<OdsRadioAttribute, 'checking'>({
        name: 'checking',
        defaultValue: DEFAULT_ATTRIBUTE.checking,
        newValue: false,
        value: true,
        setup: (checking) => setup({ attributes: { checking } }),
        ...config,
      });
    });

    describe('checked', () => {
      odsUnitTestAttribute<OdsRadioAttribute, 'checked'>({
        name: 'checked',
        defaultValue: DEFAULT_ATTRIBUTE.checked,
        newValue: false,
        value: true,
        setup: (checked) => setup({ attributes: { checked } }),
        ...config,
      });
    });

    describe('name', () => {
      odsUnitTestAttribute<OdsRadioAttribute, 'name'>({
        name: 'name',
        defaultValue: DEFAULT_ATTRIBUTE.name,
        newValue: 'oles',
        value: 'ipsum',
        setup: (name) => setup({ attributes: { name } }),
        ...config,
      });
    });
    describe('label', () => {
      odsUnitTestAttribute<OdsRadioAttribute, 'label'>({
        name: 'label',
        defaultValue: DEFAULT_ATTRIBUTE.label,
        newValue: 'oles',
        value: 'ipsum',
        setup: (label) => setup({ attributes: { label } }),
        ...config,
      });
    });
    describe('ariaLabel', () => {
      odsUnitTestAttribute<OdsRadioAttribute, 'ariaLabel'>({
        name: 'ariaLabel',
        defaultValue: DEFAULT_ATTRIBUTE.ariaLabel,
        newValue: 'oles',
        value: 'ipsum',
        setup: (ariaLabel) => setup({ attributes: { ariaLabel } }),
        ...config,
      });
    });
    describe('ariaLabelledby', () => {
      odsUnitTestAttribute<OdsRadioAttribute, 'ariaLabelledby'>({
        name: 'ariaLabelledby',
        defaultValue: DEFAULT_ATTRIBUTE.ariaLabelledby,
        newValue: 'oles',
        value: 'ipsum',
        setup: (ariaLabelledby) => setup({ attributes: { ariaLabelledby } }),
        ...config,
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE, OdsUnitTestAttributeType.PROPERTY],
      });
    });
    describe('value', () => {
      odsUnitTestAttribute<OdsRadioAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: 'radio-a',
        value: 'radio-b',
        setup: (value) => setup({ attributes: { value } }),
        ...config,
        include: [OdsUnitTestAttributeType.MUTABLE],
      });
    });
  });

  describe('controller', () => {
    describe('lifecycle', () => {
      it('should call controller.beforeInit on connectedCallback', async() => {
        await setup({});
        expect(controller.beforeInit).toHaveBeenCalledTimes(1);
        expect(controller.beforeInit).toHaveBeenCalledWith();
      });

      it('should call controller.afterInit when loaded', async() => {
        await setup({});
        expect(controller.afterInit).toHaveBeenCalledTimes(1);
        expect(controller.afterInit).toHaveBeenCalledWith();
      });

      it('should call controller.onDestroy when disconnected', async() => {
        await setup({});
        page.root?.remove();
        expect(controller.onDestroy).toHaveBeenCalledTimes(1);
        expect(controller.onDestroy).toHaveBeenCalledWith();
      });
    });

    describe('events', () => {
      it('should call controller.onFocus on focus', async() => {
        await setup({});
        instance?.onFocus();
        expect(controller.onFocus).toHaveBeenCalledTimes(1);
        expect(controller.onFocus).toHaveBeenCalledWith();
      });

      it('should call controller.onBlur on blur', async() => {
        await setup({});
        instance?.onBlur();

        expect(controller.onBlur).toHaveBeenCalledTimes(1);
        expect(controller.onBlur).toHaveBeenCalledWith();
      });

      it('should call controller.handleLabelKeyEvent on keypress', async() => {
        const event = new Event('keypress');
        await setup({});
        instance.el?.dispatchEvent(event);

        expect(controller.handleLabelKeyEvent).toHaveBeenCalledTimes(1);
        expect(controller.handleLabelKeyEvent).toHaveBeenCalledWith(event);
      });

      it('should call controller.handleLabelClick on click', async() => {
        const event = new Event('click');
        await setup({});
        instance.el.dispatchEvent(event);
        instance.el.click();

        expect(controller.handleLabelClick).toHaveBeenCalledTimes(2);
        expect(controller.handleLabelClick).toHaveBeenCalledWith(event);
      });
    });

    describe('methods', () => {
      it('should call controller.updateState from updateState method', async() => {
        const checking = true;
        await setup({});
        await instance.updateState(checking);

        expect(controller.updateState).toHaveBeenCalledTimes(1);
        expect(controller.updateState).toHaveBeenCalledWith(checking);
      });

      it('should call controller.setButtonTabindex from setButtonTabindex method', async() => {
        const index = Math.round(Math.random() * 5);
        await setup({});
        await instance.setButtonTabindex(index);

        expect(controller.setButtonTabindex).toHaveBeenCalledTimes(1);
        expect(controller.setButtonTabindex).toHaveBeenCalledWith(index);
      });
    });

    describe('watchers', () => {
      it('should call controller.updateDisabledOnChild on disabled change', async() => {
        const disabled = false;
        await setup({ attributes: { disabled } });
        instance.disabled = true;

        expect(controller.updateDisabledOnChild).toHaveBeenCalledTimes(1);
        expect(controller.updateDisabledOnChild).toHaveBeenCalledWith(!disabled);
      });

      it('should call controller.updateCheckingOnChild on checking change', async() => {
        const checking = false;
        await setup({ attributes: { checking } });
        instance.checking = true;

        expect(controller.updateCheckingOnChild).toHaveBeenCalledTimes(1);
        expect(controller.updateCheckingOnChild).toHaveBeenCalledWith(!checking);
      });

      it('should call controller.watchValue on value change', async() => {
        const value = 'value';
        const newValue = 'newValue';
        await setup({ attributes: { value } });
        instance.value = newValue;

        expect(controller.watchValue).toHaveBeenCalledTimes(1);
        expect(controller.watchValue).toHaveBeenCalledWith(newValue);
      });

      it('should call controller.updateCheckOnChild on checked change', async() => {
        const checked = false;
        await setup({ attributes: { checked } });
        instance.checked = true;

        expect(controller.updateCheckOnChild).toHaveBeenCalledTimes(1);
        expect(controller.updateCheckOnChild).toHaveBeenCalledWith(!checked);
      });
    });
  });
});
