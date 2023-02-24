jest.mock('@ovhcloud/ods-core/src/components/textarea/ods-textarea-controller'); // keep jest.mock before any

import {
  OdsComponentAttributes2StringAttributes,
  OdsFormControl,
  OdsTextAreaAttributes,
  OdsTextAreaController,
  OdsTextAreaSizeList,
  odsTextAreaDefaultAttributes
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  OdsUnitTestAttributeType,
  odsTextAreaBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsTextArea } from './osds-textarea';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-textarea', () => {
  let page: SpecPage;
  let htmlTextArea: HTMLTextAreaElement | null | undefined;
  let instance: OsdsTextArea;
  let controller: OdsTextAreaController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsTextAreaAttributes> } = {}) {
    const minimalAttributes: OdsTextAreaAttributes = OdsCreateAttributes(attributes, odsTextAreaBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTextAreaAttributes>(minimalAttributes, odsTextAreaDefaultAttributes);

    // mock setCustomValidity method that does not exist when stencil mock HTMLTextAreaElement
    // OdsMockNativeMethod(HTMLTextAreaElement.prototype, "setCustomValidity", jest.fn());

    page = await newSpecPage({
      components: [OsdsTextArea],
      html: `<osds-textarea ${OdsStringAttributes2Str(stringAttributes)}></osds-textarea>`,
    });

    htmlTextArea = page.root?.shadowRoot?.querySelector('textarea');
    instance = page.rootInstance;
    controller = (OdsTextAreaController as unknown as jest.SpyInstance<OdsTextAreaController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup();
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  it('should use an html textarea', async () => {
    await setup();
    expect(htmlTextArea).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsTextAreaAttributes, 'color'>({
        ...getAttributeContextOptions<OdsTextAreaAttributes, OsdsTextArea, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsTextAreaDefaultAttributes.color,
          ...config
        })
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsTextAreaAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsTextAreaAttributes, OsdsTextArea, 'contrasted'>({
          name: 'contrasted',
          list: [false, true],
          defaultValue: odsTextAreaDefaultAttributes.contrasted,
          ...config
        })
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsTextAreaAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsTextAreaAttributes, OsdsTextArea, 'disabled'>({
          name: 'disabled',
          list: [false, true],
          defaultValue: odsTextAreaDefaultAttributes.disabled,
          ...config
        })
      });
    });

    describe('flex', () => {
      odsUnitTestAttribute<OdsTextAreaAttributes, 'flex'>({
        ...getAttributeContextOptions<OdsTextAreaAttributes, OsdsTextArea, 'flex'>({
          name: 'flex',
          list: [false, true],
          defaultValue: odsTextAreaDefaultAttributes.flex,
          ...config
        })
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsTextAreaAttributes, 'placeholder'>({
        ...getAttributeContextOptions<OdsTextAreaAttributes, OsdsTextArea, 'placeholder'>({
          name: 'placeholder',
          list: ['oles', 'ipsum'],
          defaultValue: odsTextAreaDefaultAttributes.placeholder,
          ...config
        })
      });
    });

    describe('defaultValue', () => {
      odsUnitTestAttribute<OdsTextAreaAttributes, 'defaultValue'>({
        ...getAttributeContextOptions<OdsTextAreaAttributes, OsdsTextArea, 'defaultValue'>({
          name: 'defaultValue',
          list: ['oles', 'ipsum'],
          defaultValue: odsTextAreaDefaultAttributes.defaultValue,
          ...config
        })
      });
    });

    describe('cols', () => {
      odsUnitTestAttribute<OdsTextAreaAttributes, 'cols'>({
        ...getAttributeContextOptions<OdsTextAreaAttributes, OsdsTextArea, 'cols'>({
          name: 'cols',
          list: [0, 1],
          defaultValue: odsTextAreaDefaultAttributes.cols,
          ...config
        })
      });
    });

    describe('rows', () => {
      odsUnitTestAttribute<OdsTextAreaAttributes, 'rows'>({
        ...getAttributeContextOptions<OdsTextAreaAttributes, OsdsTextArea, 'rows'>({
          name: 'rows',
          list: [0, 1],
          defaultValue: odsTextAreaDefaultAttributes.rows,
          ...config
        })
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsTextAreaAttributes, 'size'>({
        ...getAttributeContextOptions<OdsTextAreaAttributes, OsdsTextArea, 'size'>({
          name: 'size',
          list: OdsTextAreaSizeList,
          defaultValue: odsTextAreaDefaultAttributes.size,
          ...config
        })
      });
    });

    describe('spellcheck', () => {
      odsUnitTestAttribute<OdsTextAreaAttributes, 'spellcheck'>({
        ...getAttributeContextOptions<OdsTextAreaAttributes, OsdsTextArea, 'spellcheck'>({
          name: 'spellcheck',
          list: [false, true],
          defaultValue: odsTextAreaDefaultAttributes.spellcheck,
          ...config
        })
      });
    });

    describe('readOnly', () => {
      odsUnitTestAttribute<OdsTextAreaAttributes, 'readOnly'>({
        ...getAttributeContextOptions<OdsTextAreaAttributes, OsdsTextArea, 'readOnly'>({
          name: 'readOnly',
          list: [false, true],
          defaultValue: odsTextAreaDefaultAttributes.readOnly,
          ...config
        })
      });
    });

    describe('required', () => {
      odsUnitTestAttribute<OdsTextAreaAttributes, 'required'>({
        ...getAttributeContextOptions<OdsTextAreaAttributes, OsdsTextArea, 'required'>({
          name: 'required',
          list: [false, true],
          defaultValue: odsTextAreaDefaultAttributes.required,
          ...config
        })
      });
    });

    describe('resizable', () => {
      odsUnitTestAttribute<OdsTextAreaAttributes, 'resizable'>({
        ...getAttributeContextOptions<OdsTextAreaAttributes, OsdsTextArea, 'resizable'>({
          name: 'resizable',
          list: [false, true],
          defaultValue: odsTextAreaDefaultAttributes.resizable,
          ...config
        })
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsTextAreaAttributes, 'value'>({
        ...getAttributeContextOptions<OdsTextAreaAttributes, OsdsTextArea, 'value'>({
          name: 'value',
          list: ['oles', 'ipsum'],
          defaultValue: odsTextAreaDefaultAttributes.value,
          ...config
        }),
        include: [OdsUnitTestAttributeType.MUTABLE]
      });
    });

    describe('name', () => {
      odsUnitTestAttribute<OdsTextAreaAttributes, 'name'>({
        ...getAttributeContextOptions<OdsTextAreaAttributes, OsdsTextArea, 'name'>({
          name: 'name',
          list: ['oles', 'ipsum'],
          defaultValue: odsTextAreaDefaultAttributes.name,
          ...config
        })
      });
    });
  });

  describe('events', () => {
    it('odsValueChange', async () => {
      await setup();
      expect(instance.odsValueChange).toBeTruthy();
    });

    it('odsBlur', async () => {
      await setup();
      expect(instance.odsBlur).toBeTruthy();
    });

    it('odsFocus', async () => {
      await setup();
      expect(instance.odsFocus).toBeTruthy();
    });
  });

  describe('controller', () => {
    describe('watchers', () => {
      it('should call registerFormControl on formControl change', async () => {
        const formControl = new OdsFormControl('id');
        await setup();
        instance.formControl = formControl;
        await page.waitForChanges();

        expect(controller.registerFormControl).toHaveBeenCalledTimes(1);
        expect(controller.registerFormControl).toHaveBeenCalledWith(formControl);
      });

      it('should call onDefaultValueChange on defaultValue change', async () => {
        const defaultValue = 'Text area';
        await setup();
        instance.defaultValue = defaultValue;
        await page.waitForChanges();

        expect(controller.onDefaultValueChange).toHaveBeenCalledTimes(1);
        expect(controller.onDefaultValueChange).toHaveBeenCalledWith(defaultValue);
      });

      it('should call emitValue on value change', async () => {
        const value = 'Text area';
        const oldValue = 'Old value';
        await setup({ attributes: { value: oldValue } });
        instance.value = value;
        await page.waitForChanges();

        expect(controller.emitValue).toHaveBeenCalledTimes(1);
        expect(controller.emitValue).toHaveBeenCalledWith(value, oldValue);
      });
    });

    describe('lifecycle', () => {
      it('should call beforeInit on init', async () => {
        await setup();
        expect(controller.beforeInit).toHaveBeenCalledTimes(1);
        expect(controller.beforeInit).toHaveBeenCalledWith();
      });
    });

    describe('events', () => {
      it('should call onBlur when blur', async () => {
        await setup();
        instance?.onBlur();

        expect(controller.onBlur).toHaveBeenCalledTimes(1);
        expect(controller.onBlur).toHaveBeenCalledWith();
      });

      it('should call onInput when input', async () => {
        const event = new Event('');
        await setup();
        instance?.onInput(event);

        expect(controller.onInput).toHaveBeenCalledTimes(1);
        expect(controller.onInput).toHaveBeenCalledWith(event);
      });

      it('should call onChange when change', async () => {
        await setup();
        instance?.onChange();

        expect(controller.onChange).toHaveBeenCalledTimes(1);
        expect(controller.onChange).toHaveBeenCalledWith();
      });

      it('should call onFocus when focus', async () => {
        await setup();
        if (htmlTextArea) {
          htmlTextArea.focus = jest.fn();
        }
        instance?.onFocus();

        expect(controller.onFocus).toHaveBeenCalledTimes(1);
        expect(controller.onFocus).toHaveBeenCalledWith();
      });
    });

    describe('methods', () => {
      it('should call getTextAreaValidity from getValidity method', async () => {
        await setup();
        await instance?.getValidity();

        expect(controller.getTextAreaValidity).toHaveBeenCalledTimes(1);
        expect(controller.getTextAreaValidity).toHaveBeenCalledWith();
      });

      it('should call setValue from clear method', async () => {
        await setup();
        await instance?.clear();

        expect(controller.setValue).toHaveBeenCalledTimes(1);
        expect(controller.setValue).toHaveBeenCalledWith();
      });

      it('should call setValue from reset method', async () => {
        await setup();
        await instance?.reset();

        expect(controller.setValue).toHaveBeenCalledTimes(1);
        expect(controller.setValue).toHaveBeenCalledWith('');
      });

      it('should call setValue from reset method (defaultValue case)', async () => {
        const defaultValue = 'default';
        await setup({attributes: { defaultValue }});
        await instance?.reset();

        expect(controller.setValue).toHaveBeenCalledTimes(1);
        expect(controller.setValue).toHaveBeenCalledWith(defaultValue);
      });

      it('should call setTextAreaTabindex from setTextAreaTabindex method', async () => {
        const n = 1;
        await setup();
        await instance?.setTextAreaTabindex(n);

        expect(controller.setTextAreaTabindex).toHaveBeenCalledTimes(1);
        expect(controller.setTextAreaTabindex).toHaveBeenCalledWith(n);
      });
    });
  });
});
