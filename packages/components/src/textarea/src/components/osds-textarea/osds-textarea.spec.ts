jest.mock('./core/controller'); // keep jest.mock before any

import type { OdsTextareaAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsTextAreaController } from './core/controller';
import { OsdsTextArea } from './osds-textarea';

describe('spec:osds-textarea', () => {
  const baseAttribute = { ariaLabel: null, defaultValue: null, disabled: false, error: false, name: '', spellcheck: false, value: null };
  let page: SpecPage;
  let htmlTextarea: HTMLTextAreaElement | null | undefined;
  let instance: OsdsTextArea;
  let controller: OdsTextAreaController<OsdsTextArea>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsTextareaAttribute> } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTextareaAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsTextArea],
      html: `<osds-textarea ${odsStringAttributes2Str(stringAttributes)}></osds-textarea>`,
    });

    instance = page.rootInstance;
    htmlTextarea = page.root?.shadowRoot?.querySelector('textarea');
    controller = (OdsTextAreaController as unknown as jest.SpyInstance<OdsTextAreaController<OsdsTextArea>, unknown[]>).mock.instances[0];
  }

  it('should render', async() => {
    await setup();

    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  it('should use an html textarea', async() => {
    await setup();

    expect(htmlTextarea).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: (): OsdsTextArea => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('ariaLabel', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'ariaLabel'>({
        defaultValue: DEFAULT_ATTRIBUTE.ariaLabel,
        name: 'ariaLabel',
        newValue: 'oles',
        setup: (value) => setup({ attributes: { ['ariaLabel']: value } }),
        value: 'ipsum',
        ...config,
      });
    });

    describe('ariaLabelledby', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'ariaLabelledby'>({
        defaultValue: undefined,
        name: 'ariaLabelledby',
        newValue: 'oles',
        setup: (value) => setup({ attributes: { ['ariaLabelledby']: value } }),
        value: 'ipsum',
        ...config,
      });
    });

    describe('cols', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'cols'>({
        defaultValue: undefined,
        name: 'cols',
        newValue: 1,
        setup: (value) => setup({ attributes: { ['cols']: value } }),
        value: 2,
        ...config,
      });
    });

    describe('defaultValue', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'defaultValue'>({
        defaultValue: DEFAULT_ATTRIBUTE.defaultValue,
        name: 'defaultValue',
        newValue: 'oles',
        setup: (value) => setup({ attributes: { ['defaultValue']: value } }),
        value: 'ipsum',
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'disabled'>({
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        name: 'disabled',
        newValue: false,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        value: true,
        ...config,
      });
    });

    describe('error', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'error'>({
        defaultValue: DEFAULT_ATTRIBUTE.error,
        name: 'error',
        newValue: false,
        setup: (value) => setup({ attributes: { ['error']: value } }),
        value: true,
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'inline'>({
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        name: 'inline',
        newValue: false,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        value: true,
        ...config,
      });
    });

    describe('name', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'name'>({
        defaultValue: DEFAULT_ATTRIBUTE.name,
        name: 'name',
        newValue: 'oles',
        setup: (value) => setup({ attributes: { ['name']: value } }),
        value: 'ipsum',
        ...config,
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'placeholder'>({
        defaultValue: undefined,
        name: 'placeholder',
        newValue: 'oles',
        setup: (value) => setup({ attributes: { ['placeholder']: value } }),
        value: 'ipsum',
        ...config,
      });
    });

    describe('readOnly', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'readOnly'>({
        defaultValue: undefined,
        name: 'readOnly',
        newValue: false,
        setup: (value) => setup({ attributes: { ['readOnly']: value } }),
        value: true,
        ...config,
      });
    });

    describe('required', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'required'>({
        defaultValue: undefined,
        name: 'required',
        newValue: false,
        setup: (value) => setup({ attributes: { ['required']: value } }),
        value: true,
        ...config,
      });
    });

    describe('resizable', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'resizable'>({
        defaultValue: DEFAULT_ATTRIBUTE.resizable,
        name: 'resizable',
        newValue: false,
        setup: (value) => setup({ attributes: { ['resizable']: value } }),
        value: true,
        ...config,
      });
    });

    describe('rows', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'rows'>({
        defaultValue: undefined,
        name: 'rows',
        newValue: 1,
        setup: (value) => setup({ attributes: { ['rows']: value } }),
        value: 2,
        ...config,
      });
    });

    describe('spellcheck', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'spellcheck'>({
        defaultValue: DEFAULT_ATTRIBUTE.spellcheck,
        name: 'spellcheck',
        newValue: true,
        setup: (value) => setup({ attributes: { ['spellcheck']: value } }),
        value: false,
        ...config,
      });
    });

    describe('textAreaId', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'textAreaId'>({
        defaultValue: undefined,
        name: 'textAreaId',
        newValue: '1',
        setup: (value) => setup({ attributes: { ['textAreaId']: value } }),
        value: '2',
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsTextareaAttribute, 'value'>({
        defaultValue: DEFAULT_ATTRIBUTE.value,
        name: 'value',
        newValue: 'oles',
        setup: (value) => setup({ attributes: { ['value']: value } }),
        value: 'ipsum',
        ...config,
      });
    });
  });

  describe('events', () => {
    it('should have all expected event emitters', async() => {
      await setup();

      expect(instance.odsBlur).toBeDefined();
      expect(instance.odsClear).toBeDefined();
      expect(instance.odsFocus).toBeDefined();
      expect(instance.odsReset).toBeDefined();
      expect(instance.odsValueChange).toBeDefined();
    });
  });

  describe('methods', () => {
    describe('clear', () => {
      it('should call controller clear method', async() => {
        await setup();

        await instance.clear();
        expect(controller.clear).toHaveBeenCalled();
      });
    });

    describe('getValidity', () => {
      it('should return undefined if textareElement is not defined', async() => {
        await setup();
        delete instance.textareaElement;

        const validity = await instance.getValidity();

        expect(validity).toBe(undefined);
        expect(controller.getValidity).not.toHaveBeenCalled();
      });

      it('should call controller getValidity method', async() => {
        await setup();

        await instance.getValidity();

        expect(controller.getValidity).toHaveBeenCalledWith(instance.textareaElement);
      });
    });

    describe('reset', () => {
      it('should call controller reset method', async() => {
        await setup();

        await instance.reset();

        expect(controller.reset).toHaveBeenCalled();
      });
    });

    describe('setFocus', () => {
      it('should call focusable element focus method', async() => {
        await setup();
        jest.spyOn(htmlTextarea!, 'focus');

        await instance.setFocus();

        expect(htmlTextarea?.focus).toHaveBeenCalled();
      });
    });
  });

  describe('watchers', () => {
    describe('value', () => {
      it('should call controller onValueChange method', async() => {
        const dummyValue = 'dummy value';
        const dummyNewValue = 'dummy new value';
        await setup({ attributes: { value: dummyValue } });

        instance.value = dummyNewValue;

        expect(controller.onValueChange).toHaveBeenCalledWith(dummyNewValue, dummyValue);
      });
    });
  });
});
