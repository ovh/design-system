jest.mock('./core/controller'); // keep jest.mock before any

import type { OdsTextAreaAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { OdsFormControl } from '@ovhcloud/ods-common-core';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_TEXTAREA_SIZE } from './constants/textarea-size';
import { OdsTextAreaController } from './core/controller';
import { OsdsTextArea } from './osds-textarea';

describe('spec:osds-textarea', () => {
  const baseAttribute = { ariaLabel: null, hasFocus: false, spellcheck: false, value: '' };
  let page: SpecPage;
  let htmlTextArea: HTMLTextAreaElement | null | undefined;
  let instance: OsdsTextArea;
  let controller: OdsTextAreaController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsTextAreaAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTextAreaAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsTextArea],
      html: `<osds-textarea ${odsStringAttributes2Str(stringAttributes)}></osds-textarea>`,
    });

    htmlTextArea = page.root?.shadowRoot?.querySelector('textarea');
    instance = page.rootInstance;
    controller = (OdsTextAreaController as unknown as jest.SpyInstance<OdsTextAreaController, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup();
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  it('should use an html textarea', async() => {
    await setup();
    expect(htmlTextArea).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsTextAreaAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: ODS_THEME_COLOR_INTENT.primary,
        value: ODS_THEME_COLOR_INTENT.default,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        ...config,
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsTextAreaAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['contrasted']: value } }),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsTextAreaAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsTextAreaAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        ...config,
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsTextAreaAttribute, 'placeholder'>({
        name: 'placeholder',
        defaultValue: DEFAULT_ATTRIBUTE.placeholder,
        newValue: 'oles',
        value: 'ipsum',
        setup: (value) => setup({ attributes: { ['placeholder']: value } }),
        ...config,
      });
    });

    describe('defaultValue', () => {
      odsUnitTestAttribute<OdsTextAreaAttribute, 'defaultValue'>({
        name: 'defaultValue',
        defaultValue: DEFAULT_ATTRIBUTE.defaultValue,
        newValue: 'oles',
        value: 'ipsum',
        setup: (value) => setup({ attributes: { ['defaultValue']: value } }),
        ...config,
      });
    });

    describe('cols', () => {
      odsUnitTestAttribute<OdsTextAreaAttribute, 'cols'>({
        name: 'cols',
        defaultValue: DEFAULT_ATTRIBUTE.cols,
        newValue: 1,
        value: 0,
        setup: (value) => setup({ attributes: { ['cols']: value } }),
        ...config,
      });
    });

    describe('rows', () => {
      odsUnitTestAttribute<OdsTextAreaAttribute, 'rows'>({
        name: 'rows',
        defaultValue: DEFAULT_ATTRIBUTE.rows,
        newValue: 1,
        value: 0,
        setup: (value) => setup({ attributes: { ['rows']: value } }),
        ...config,
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsTextAreaAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_TEXTAREA_SIZE.md,
        value: ODS_TEXTAREA_SIZE.md,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        ...config,
      });
    });

    describe('spellcheck', () => {
      odsUnitTestAttribute<OdsTextAreaAttribute, 'spellcheck'>({
        name: 'spellcheck',
        defaultValue: DEFAULT_ATTRIBUTE.spellcheck,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['spellcheck']: value } }),
        ...config,
      });
    });

    describe('readOnly', () => {
      odsUnitTestAttribute<OdsTextAreaAttribute, 'readOnly'>({
        name: 'readOnly',
        defaultValue: DEFAULT_ATTRIBUTE.readOnly,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['readOnly']: value } }),
        ...config,
      });
    });

    describe('required', () => {
      odsUnitTestAttribute<OdsTextAreaAttribute, 'required'>({
        name: 'required',
        defaultValue: DEFAULT_ATTRIBUTE.required,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['required']: value } }),
        ...config,
      });
    });

    describe('resizable', () => {
      odsUnitTestAttribute<OdsTextAreaAttribute, 'resizable'>({
        name: 'resizable',
        defaultValue: DEFAULT_ATTRIBUTE.resizable,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['resizable']: value } }),
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsTextAreaAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: 'oles',
        value: 'ipsum',
        setup: (value) => setup({ attributes: { ['value']: value } }),
        ...config,
      });
    });

    describe('name', () => {
      odsUnitTestAttribute<OdsTextAreaAttribute, 'name'>({
        name: 'name',
        defaultValue: DEFAULT_ATTRIBUTE.name,
        newValue: 'oles',
        value: 'ipsum',
        setup: (value) => setup({ attributes: { ['name']: value } }),
        ...config,
      });
    });
  });

  describe('events', () => {
    it('odsValueChange', async() => {
      await setup();
      expect(instance.odsValueChange).toBeTruthy();
    });

    it('odsBlur', async() => {
      await setup();
      expect(instance.odsBlur).toBeTruthy();
    });

    it('odsFocus', async() => {
      await setup();
      expect(instance.odsFocus).toBeTruthy();
    });
  });

  describe('controller', () => {
    describe('watchers', () => {
      it('should call registerFormControl on formControl change', async() => {
        const formControl = new OdsFormControl('id');
        await setup();
        instance.formControl = formControl;
        await page.waitForChanges();

        expect(controller.registerFormControl).toHaveBeenCalledTimes(1);
        expect(controller.registerFormControl).toHaveBeenCalledWith(formControl);
      });

      it('should call onValueChange on value change', async() => {
        const value = 'Text area';
        const oldValue = 'Old value';
        await setup({ attributes: { value: oldValue } });
        instance.value = value;
        await page.waitForChanges();

        expect(controller.onValueChange).toHaveBeenCalledTimes(1);
        expect(controller.onValueChange).toHaveBeenCalledWith(value, oldValue);
      });
    });

    describe('lifecycle', () => {
      it('should call beforeInit on init', async() => {
        await setup();
        expect(controller.beforeInit).toHaveBeenCalledTimes(1);
        expect(controller.beforeInit).toHaveBeenCalledWith();
      });
    });

    describe('events', () => {
      it('should call onBlur when blur', async() => {
        await setup();
        instance?.onBlur();

        expect(controller.onBlur).toHaveBeenCalledTimes(1);
        expect(controller.onBlur).toHaveBeenCalledWith();
      });

      it('should call onInput when input', async() => {
        const event = new Event('');
        await setup();
        instance?.onInput(event);

        expect(controller.onInput).toHaveBeenCalledTimes(1);
        expect(controller.onInput).toHaveBeenCalledWith(event);
      });

      it('should call onFocus when focus', async() => {
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
      it('should call getTextAreaValidity from getValidity method', async() => {
        await setup();
        await instance?.getValidity();

        expect(controller.getTextAreaValidity).toHaveBeenCalledTimes(1);
        expect(controller.getTextAreaValidity).toHaveBeenCalledWith();
      });

      it('should call clear from clear method', async() => {
        await setup();
        await instance?.clear();

        expect(controller.clear).toHaveBeenCalledTimes(1);
        expect(controller.clear).toHaveBeenCalled();
      });

      it('should call reset from reset method', async() => {
        await setup();
        await instance?.reset();

        expect(controller.reset).toHaveBeenCalledTimes(1);
        expect(controller.reset).toHaveBeenCalled();
      });

      it('should call setTextAreaTabindex from setTextAreaTabindex method', async() => {
        const n = 1;
        await setup();
        await instance?.setTextAreaTabindex(n);

        expect(controller.setTextAreaTabindex).toHaveBeenCalledTimes(1);
        expect(controller.setTextAreaTabindex).toHaveBeenCalledWith(n);
      });
    });
  });
});
