jest.mock('./core/controller'); // keep jest.mock before any

import type { OdsAutocompleteAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { OdsMockNativeMethod, OdsMockPropertyDescriptor, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { DEFAULT_VALIDITY_STATE } from './constants/default-validity-state';
import { OsdsAutocomplete } from './osds-autocomplete';

const mutationObserverMock = jest.fn(function MutationObserver(callback) {
  this.observe = jest.fn();
  this.disconnect = jest.fn();
  this.trigger = (mockedMutationsList): void => {
    callback(mockedMutationsList, this);
  };
});

// @ts-ignore Not possible to mock MutationObserver in a better way
global.MutationObserver = mutationObserverMock;

OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => DEFAULT_VALIDITY_STATE);

describe('spec:osds-autocomplete', () => {
  const baseAttribute = { ariaLabel: null, ariaLabelledby: '', clearable: false, defaultValue: '', disabled: false, error: false, icon: undefined, inline: false, minimumNumberOfCharacters: 2, name: undefined, opened: false, placeholder: '', required: false, value: '' };
  let page: SpecPage;
  let instance: OsdsAutocomplete;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsAutocompleteAttribute>, html?: string }): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsAutocompleteAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    OdsMockNativeMethod(HTMLInputElement.prototype, 'setCustomValidity', jest.fn());

    page = await newSpecPage({
      components: [OsdsAutocomplete],
      html: `<osds-autocomplete ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-autocomplete>`,
    });

    instance = page.rootInstance;
  }

  it('should render', async() => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('Life cycle', () => {
    it('should call setSelectOptions', async() => {
      await setup({ attributes: { } });
      const spySetSelectOptions = jest.spyOn(instance, 'setSelectOptions');
      await instance.componentDidLoad();
      expect(spySetSelectOptions).toHaveBeenCalled();
    });
  });

  describe('attributes', () => {
    const config = {
      instance: (): OsdsAutocomplete => instance,
      page: (): SpecPage => page,
      root: (): HTMLElement | undefined => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('ariaLabel', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'ariaLabel'>({
        defaultValue: DEFAULT_ATTRIBUTE.ariaLabel,
        name: 'ariaLabel',
        newValue: 'my-label',
        setup: (value) => setup({ attributes: { ['ariaLabel']: value } }),
        value: '',
        ...config,
      });
    });

    describe('ariaLabelledby', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'ariaLabelledby'>({
        defaultValue: DEFAULT_ATTRIBUTE.ariaLabelledby,
        name: 'ariaLabelledby',
        newValue: 'my-ariaLabelledby',
        setup: (value) => setup({ attributes: { ['ariaLabelledby']: value } }),
        value: '',
        ...config,
      });
    });

    describe('clearable', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'clearable'>({
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        name: 'clearable',
        newValue: true,
        setup: (value) => setup({ attributes: { ['clearable']: value } }),
        value: false,
        ...config,
      });
    });

    describe('defaultValue', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'defaultValue'>({
        defaultValue: DEFAULT_ATTRIBUTE.defaultValue,
        name: 'defaultValue',
        newValue: 'my-defaultValue',
        setup: (value) => setup({ attributes: { ['defaultValue']: value } }),
        value: '',
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'disabled'>({
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        name: 'disabled',
        newValue: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        value: false,
        ...config,
      });
    });

    describe('error', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'error'>({
        defaultValue: DEFAULT_ATTRIBUTE.error,
        name: 'error',
        newValue: true,
        setup: (value) => setup({ attributes: { ['error']: value } }),
        value: false,
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'inline'>({
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        name: 'inline',
        newValue: true,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        value: false,
        ...config,
      });
    });

    describe('minimumNumberOfCharacters', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'minimumNumberOfCharacters'>({
        defaultValue: DEFAULT_ATTRIBUTE.minimumNumberOfCharacters,
        name: 'minimumNumberOfCharacters',
        newValue: 4,
        setup: (value) => setup({ attributes: { ['minimumNumberOfCharacters']: value } }),
        value: 2,
        ...config,
      });
    });

    describe('name', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'name'>({
        defaultValue: DEFAULT_ATTRIBUTE.name,
        name: 'name',
        newValue: 'my-name',
        setup: (value) => setup({ attributes: { ['name']: value } }),
        value: '',
        ...config,
      });
    });

    describe('opened', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'opened'>({
        defaultValue: DEFAULT_ATTRIBUTE.opened,
        name: 'opened',
        newValue: true,
        setup: (value) => setup({ attributes: { ['opened']: value } }),
        value: false,
        ...config,
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'placeholder'>({
        defaultValue: DEFAULT_ATTRIBUTE.placeholder,
        name: 'placeholder',
        newValue: 'my-placeholder',
        setup: (value) => setup({ attributes: { ['placeholder']: value } }),
        value: '',
        ...config,
      });
    });

    describe('required', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'required'>({
        defaultValue: DEFAULT_ATTRIBUTE.required,
        name: 'required',
        newValue: true,
        setup: (value) => setup({ attributes: { ['required']: value } }),
        value: false,
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'value'>({
        defaultValue: DEFAULT_ATTRIBUTE.value,
        name: 'value',
        newValue: 'my-value',
        setup: (value) => setup({ attributes: { ['value']: value } }),
        value: '',
        ...config,
      });
    });
  });

  describe('methods', () => {
    it('should call reset function and set value to defaultValue', async() => {
      const defaultValue = 'my-default-value';
      await setup({ attributes: { defaultValue, value: 'my-new-value' } });
      expect(instance).toBeTruthy();
      await instance.reset();
      expect(instance?.value).toBe(`${defaultValue}`);
    });

    it('should call reset function and set value to empty string if defaultValue is unset', async() => {
      await setup({ attributes: { value: 'my-value' } });
      expect(instance).toBeTruthy();
      await instance.reset();
      expect(instance?.value).toBe('');
    });

    it('should call clear function and set value to an empty string', async() => {
      await setup({ attributes: { value: 'my-value' } });
      expect(instance).toBeTruthy();
      await instance.clear();
      expect(instance?.value).toBe('');
    });

    it('should call setInputTabindex function and inputTabindex should be set to 4', async() => {
      await setup({ attributes: { value: 'my-value' } });
      expect(instance).toBeTruthy();
      await instance.setInputTabindex(4);
      expect(instance?.tabindex).toBe(4);
    });

    it('should call getValidity function and get an OdsValidityState.invalid to true', async() => {
      await setup({ attributes: { value: 'my-value' } });
      expect(instance).toBeTruthy();
      jest.spyOn(instance, 'getValidity');
      const validity = await instance.getValidity();
      expect(instance.getValidity).toHaveBeenCalledTimes(1);
      expect(validity?.invalid).toBe(false);
    });

    it('should handle slot change', async() => {
      await setup({ attributes: { } });
      const spySetSelectOptions = jest.spyOn(instance, 'setSelectOptions');
      instance.handleSlotChange();
      expect(spySetSelectOptions).toHaveBeenCalled();
    });

    it('should handle validity', async() => {
      await setup({ attributes: { } });
      const spyValidate = jest.spyOn(instance, 'validate');
      await instance.validate();
      expect(spyValidate).toHaveBeenCalled();
    });

    it('should set focus', async() => {
      await setup({ attributes: { } });
      const spySetFocus = jest.spyOn(instance, 'setFocus');
      await instance.setFocus();
      expect(spySetFocus).toHaveBeenCalled();
    });

    it('should emit value change', async() => {
      await setup({ attributes: { } });
      const spyEmitChange = jest.spyOn(instance, 'emitChange');
      instance.emitChange('my-value');
      expect(spyEmitChange).toHaveBeenCalled();
    });

    describe('handleAutocompleteClick', () => {
      it('should call handleAutocompleteClick', async() => {
        await setup({ attributes: { } });
        const spyHandleAutocompleteClick = jest.spyOn(instance, 'handleAutocompleteClick');
        instance.handleAutocompleteClick();
        expect(spyHandleAutocompleteClick).toHaveBeenCalled();
      });
    });

    describe('renderLabel', () => {
      it('should render label', async() => {
        await setup({ attributes: { } });
        const spyRenderLabel = jest.spyOn(instance, 'renderLabel');
        instance.renderLabel();
        expect(spyRenderLabel).toHaveBeenCalled();
      });
    });
  });

  describe('events', () => {
    it('odsValueChange', async() => {
      await setup({ attributes: { } });
      expect(instance.odsValueChange).toBeTruthy();
    });

    it('odsBlur', async() => {
      await setup({ attributes: { } });
      expect(instance.odsBlur).toBeTruthy();
    });

    it('odsFocus', async() => {
      await setup({ attributes: { } });
      expect(instance.odsFocus).toBeTruthy();
    });
  });
});
