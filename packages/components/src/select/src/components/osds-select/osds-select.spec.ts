import type { OdsSelectAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { OdsMockNativeMethod, OdsMockPropertyDescriptor, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsSelectController } from './core/controller';
import { OsdsSelect } from './osds-select';

const mutationObserverMock = jest.fn(function MutationObserver(callback) {
  this.observe = jest.fn();
  this.disconnect = jest.fn();
  // Optionally add a trigger() method to manually trigger a change
  this.trigger = (mockedMutationsList): void => {
    callback(mockedMutationsList, this);
  };
});
// @ts-ignore for test purpose
global.MutationObserver = mutationObserverMock;

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => ({
  badInput: false,
  customError: false,
  forbiddenValue: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: true,
  valueMissing: false,
}));

describe('spec:osds-select', () => {
  const baseAttribute = {
    ariaLabel: null,
    defaultValue: '',
    disabled: false,
    error: false,
    inline: false,
    name: 'OsdsSelect',
    required: false,
    value: '',
  };
  let page: SpecPage;
  let instance: OsdsSelect;
  let slotPlaceholder: HTMLElement | null | undefined;
  let htmlSelect: HTMLSelectElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsSelectAttribute>, html?: string }): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSelectAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, 'setCustomValidity', jest.fn());
    jest.spyOn(OdsSelectController.prototype, 'onValueChange').mockReturnThis();

    page = await newSpecPage({
      components: [OsdsSelect],
      html: `<osds-select ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-select>`,
    });

    instance = page.rootInstance;

    instance.internals.setFormValue = jest.fn();

    slotPlaceholder = page.root?.shadowRoot?.querySelector('slot[name=placeholder]');
    htmlSelect = document.querySelector('osds-select') as HTMLSelectElement;
    htmlSelect && (htmlSelect.focus = jest.fn());
  }

  it('should render', async() => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a placeholder slot', async() => {
      await setup({ attributes: {} });
      expect(slotPlaceholder).toBeTruthy();
    });
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
      instance: (): OsdsSelect => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('disabled', () => {
      odsUnitTestAttribute<OdsSelectAttribute, 'disabled'>({
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        name: 'disabled',
        newValue: false,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        value: true,
        ...config,
      });
    });

    describe('error', () => {
      odsUnitTestAttribute<OdsSelectAttribute, 'error'>({
        defaultValue: DEFAULT_ATTRIBUTE.error,
        name: 'error',
        newValue: false,
        setup: (value) => setup({ attributes: { ['error']: value } }),
        value: true,
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsSelectAttribute, 'inline'>({
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        name: 'inline',
        newValue: false,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        value: true,
        ...config,
      });
    });

    describe('required', () => {
      odsUnitTestAttribute<OdsSelectAttribute, 'required'>({
        defaultValue: DEFAULT_ATTRIBUTE.required,
        name: 'required',
        newValue: false,
        setup: (value) => setup({ attributes: { ['required']: value } }),
        value: true,
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsSelectAttribute, 'value'>({
        defaultValue: DEFAULT_ATTRIBUTE.value,
        name: 'value',
        newValue: 3,
        setup: (value) => setup({ attributes: { ['value']: value } }),
        value: 4,
        ...config,
      });
    });
  });

  describe('methods', () => {
    it('should call reset function and set value to defaultValue', async() => {
      const defaultValue = 4;
      await setup({ attributes: { defaultValue, value: 2 } });
      expect(instance).toBeTruthy();
      await instance.reset();
      expect(instance?.value).toBe(`${defaultValue}`);
    });

    it('should call reset function and set value null if defaultValue is unset', async() => {
      await setup({ attributes: { value: 2 } });
      expect(instance).toBeTruthy();
      await instance.reset();
      expect(instance?.value).toBe('');
    });

    it('should call clear function and set value to null', async() => {
      await setup({ attributes: { value: 2 } });
      expect(instance).toBeTruthy();
      await instance.clear();
      expect(instance?.value).toBe(null);
    });

    it('should call setFocus function and change the focus state of the component', async() => {
      await setup({ attributes: { } });
      expect(instance).toBeTruthy();
      await instance.setFocus();
      expect(instance?.value).toBe('');
    });

    it('should call getValidity function and get an OdsValidityState.valid to true', async() => {
      await setup({ attributes: { value: 'my-value-1' } });
      expect(instance).toBeTruthy();
      jest.spyOn(instance, 'getValidity');
      const validity = await instance.getValidity();
      expect(instance.getValidity).toHaveBeenCalledTimes(1);
      expect(validity?.valid).toBe(true);
    });

    it('should handle slot change', async() => {
      await setup({ attributes: { } });
      const spySetSelectOptions = jest.spyOn(instance, 'setSelectOptions');
      instance.handleSlotChange();
      expect(spySetSelectOptions).toHaveBeenCalled();
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
