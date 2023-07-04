jest.mock('@ovhcloud/ods-core/src/components/radio/ods-radio-controller'); // keep jest.mock before any

import {
  OdsComponentAttributes2StringAttributes,
  OdsRadioAttributes,
  OdsRadioController,
  odsRadioDefaultAttributes
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  OdsUnitTestAttributeType,
  odsRadioBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OsdsRadio } from './osds-radio';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-radio', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsRadio;
  let label: HTMLLabelElement | null | undefined;
  let controller: OdsRadioController;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsRadioAttributes>, html?: string }) {
    const minimalAttributes: OdsRadioAttributes = OdsCreateAttributes(attributes, odsRadioBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsRadioAttributes>(minimalAttributes, odsRadioDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsRadio],
      html: `<osds-radio ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-radio>`,
    });

    root = page.root;
    instance = page.rootInstance;
    label = root?.shadowRoot.querySelector('label');

    controller = (OdsRadioController as unknown as jest.SpyInstance<OdsRadioController, unknown[]>).mock.instances[0];
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

    describe('disabled', () => {
      odsUnitTestAttribute<OdsRadioAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsRadioAttributes, OsdsRadio, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsRadioDefaultAttributes.disabled,
          ...config
        })
      });
    });
    describe('checking', () => {
      odsUnitTestAttribute<OdsRadioAttributes, 'checking'>({
        ...getAttributeContextOptions<OdsRadioAttributes, OsdsRadio, 'checking'>({
          name: 'checking',
          list: [false, true],
          defaultValue: odsRadioDefaultAttributes.checking,
          ...config
        })
      });
    });

    describe('checked', () => {
      odsUnitTestAttribute<OdsRadioAttributes, 'checked'>({
        ...getAttributeContextOptions<OdsRadioAttributes, OsdsRadio, 'checked'>({
          name: 'checked',
          list: [false, true],
          defaultValue: odsRadioDefaultAttributes.checked,
          ...config
        })
      });
    });

    describe('name', () => {
      odsUnitTestAttribute<OdsRadioAttributes, 'name'>({
        ...getAttributeContextOptions<OdsRadioAttributes, OsdsRadio, 'name'>({
          name: 'name',
          list: ['oles', 'ipsum'],
          defaultValue: odsRadioDefaultAttributes.name,
          ...config
        })
      });
    });
    describe('label', () => {
      odsUnitTestAttribute<OdsRadioAttributes, 'label'>({
        ...getAttributeContextOptions<OdsRadioAttributes, OsdsRadio, 'label'>({
          name: 'label',
          list: ['oles', 'ipsum'],
          defaultValue: odsRadioDefaultAttributes.label,
          ...config
        })
      });
    });
    describe('ariaLabel', () => {
      odsUnitTestAttribute<OdsRadioAttributes, 'ariaLabel'>({
        ...getAttributeContextOptions<OdsRadioAttributes, OsdsRadio, 'ariaLabel'>({
          name: 'ariaLabel',
          list: ['oles', 'ipsum'],
          defaultValue: odsRadioDefaultAttributes.ariaLabel,
          ...config
        })
      });
    });
    describe('ariaLabelledby', () => {
      odsUnitTestAttribute<OdsRadioAttributes, 'ariaLabelledby'>({
        ...getAttributeContextOptions<OdsRadioAttributes, OsdsRadio, 'ariaLabelledby'>({
          name: 'ariaLabelledby',
          list: ['oles', 'ipsum'],
          defaultValue: odsRadioDefaultAttributes.ariaLabelledby,
          ...config
        }),
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE, OdsUnitTestAttributeType.PROPERTY]
      });
    });
    describe('value', () => {
      odsUnitTestAttribute<OdsRadioAttributes, 'value'>({
        ...getAttributeContextOptions<OdsRadioAttributes, OsdsRadio, 'value'>({
          name: 'value',
          list: ['radio-a', 'radio-b'],
          defaultValue: odsRadioDefaultAttributes.value,
          ...config
        }),
        include: [OdsUnitTestAttributeType.MUTABLE]
      });
    });
  });

  describe('controller', () => {
    describe('lifecycle', () => {
      it('should call controller.beforeInit on connectedCallback', async () => {
        await setup({});
        expect(controller.beforeInit).toHaveBeenCalledTimes(1);
        expect(controller.beforeInit).toHaveBeenCalledWith();
      });

      it('should call controller.afterInit when loaded', async () => {
        await setup({});
        expect(controller.afterInit).toHaveBeenCalledTimes(1);
        expect(controller.afterInit).toHaveBeenCalledWith();
      });

      it('should call controller.onDestroy when disconnected', async () => {
        await setup({});
        page.root?.remove();
        expect(controller.onDestroy).toHaveBeenCalledTimes(1);
        expect(controller.onDestroy).toHaveBeenCalledWith();
      });
    });

    describe('events', () => {
      it('should call controller.onFocus on focus', async () => {
        await setup({});
        instance?.onFocus();
        expect(controller.onFocus).toHaveBeenCalledTimes(1);
        expect(controller.onFocus).toHaveBeenCalledWith();
      });

      it('should call controller.onBlur on blur', async () => {
        await setup({});
        instance?.onBlur();

        expect(controller.onBlur).toHaveBeenCalledTimes(1);
        expect(controller.onBlur).toHaveBeenCalledWith();
      });

      it('should call controller.handleLabelKeyEvent on keypress', async () => {
        const event = new Event('keypress');
        await setup({});
        instance.el?.dispatchEvent(event);

        expect(controller.handleLabelKeyEvent).toHaveBeenCalledTimes(1);
        expect(controller.handleLabelKeyEvent).toHaveBeenCalledWith(event);
      });

      it('should call controller.handleLabelClick on click', async () => {
        const event = new Event('click');
        await setup({});
        instance.el.dispatchEvent(event);
        instance.el.click();

        expect(controller.handleLabelClick).toHaveBeenCalledTimes(2);
        expect(controller.handleLabelClick).toHaveBeenCalledWith(event);
      });
    });

    describe('methods', () => {
      it('should call controller.updateState from updateState method', async () => {
        const checking = true;
        await setup({});
        await instance.updateState(checking);

        expect(controller.updateState).toHaveBeenCalledTimes(1);
        expect(controller.updateState).toHaveBeenCalledWith(checking);
      });

      it('should call controller.setButtonTabindex from setButtonTabindex method', async () => {
        const index = Math.round(Math.random() * 5);
        await setup({});
        await instance.setButtonTabindex(index);

        expect(controller.setButtonTabindex).toHaveBeenCalledTimes(1);
        expect(controller.setButtonTabindex).toHaveBeenCalledWith(index);
      });
    });

    describe('watchers', () => {
      it('should call controller.updateDisabledOnChild on disabled change', async () => {
        const disabled = false;
        await setup({ attributes: { disabled } });
        instance.disabled = true;

        expect(controller.updateDisabledOnChild).toHaveBeenCalledTimes(1);
        expect(controller.updateDisabledOnChild).toHaveBeenCalledWith(!disabled);
      });

      it('should call controller.updateCheckingOnChild on checking change', async () => {
        const checking = false;
        await setup({ attributes: { checking } });
        instance.checking = true;

        expect(controller.updateCheckingOnChild).toHaveBeenCalledTimes(1);
        expect(controller.updateCheckingOnChild).toHaveBeenCalledWith(!checking);
      });

      it('should call controller.watchValue on value change', async () => {
        const value = 'value';
        const newValue = 'newValue';
        await setup({ attributes: { value } });
        instance.value = newValue;

        expect(controller.watchValue).toHaveBeenCalledTimes(1);
        expect(controller.watchValue).toHaveBeenCalledWith(newValue);
      });

      it('should call controller.updateCheckOnChild on checked change', async () => {
        const checked = false;
        await setup({ attributes: { checked } });
        instance.checked = true;

        expect(controller.updateCheckOnChild).toHaveBeenCalledTimes(1);
        expect(controller.updateCheckOnChild).toHaveBeenCalledWith(!checked);
      });
    });
  });
});
