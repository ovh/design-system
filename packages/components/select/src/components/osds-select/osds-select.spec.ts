import type {SpecPage} from '@stencil/core/testing';
import type {OdsSelectAttribute} from './interfaces/attributes';
import {newSpecPage} from '@stencil/core/testing';
import {OdsLogger} from '@ovhcloud/ods-common-core';
import {OdsMockNativeMethod, OdsMockPropertyDescriptor, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute} from '@ovhcloud/ods-common-testing';
import {ODS_THEME_COLOR_INTENT} from '@ovhcloud/ods-common-theming';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';
import {DEFAULT_VALIDITY_STATE} from './constants/default-validity-state';
import {ODS_SELECT_SIZE} from './constants/select-size';
import {OsdsSelect} from './osds-select';

const mutationObserverMock = jest.fn(function MutationObserver(callback) {
  this.observe = jest.fn();
  this.disconnect = jest.fn();
  // Optionally add a trigger() method to manually trigger a change
  this.trigger = (mockedMutationsList) => {
    callback(mockedMutationsList, this);
  };
});
// @ts-ignore
global.MutationObserver = mutationObserverMock;

const logger = new OdsLogger('osds-select-spec');

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => DEFAULT_VALIDITY_STATE);

describe('spec:osds-select', () => {
  logger.log('init');
  const baseAttribute = {ariaLabel: null, ariaLabelledby: '', color: ODS_THEME_COLOR_INTENT.primary, defaultValue: '', disabled: false, inline: false, required: false, size: ODS_SELECT_SIZE.md, value: ''};
  let page: SpecPage;
  let instance: OsdsSelect;
  let slotPlaceholder: HTMLElement | null | undefined;
  let htmlSelect: HTMLSelectElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({attributes = {}, html = ''}: { attributes?: Partial<OdsSelectAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSelectAttribute>({...baseAttribute, ...attributes}, DEFAULT_ATTRIBUTE);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, 'setCustomValidity', jest.fn());

    page = await newSpecPage({
      components: [OsdsSelect],
      html: `<osds-select ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-select>`,
    });

    instance = page.rootInstance;
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
      await setup({attributes: {}});
      expect(slotPlaceholder).toBeTruthy();
    });
  });

  describe('Life cycle', () => {
    it('should call setSelectOptions', async() => {
      await setup({attributes: { }});
      const spySetSelectOptions = jest.spyOn(instance, 'setSelectOptions');
      await instance.componentDidLoad();
      expect(spySetSelectOptions).toHaveBeenCalled();
    });
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsSelectAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: ODS_THEME_COLOR_INTENT.primary,
        value: ODS_THEME_COLOR_INTENT.default,
        setup: (value) => setup({attributes: {['color']: value}}),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsSelectAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (value) => setup({attributes: {['disabled']: value}}),
        ...config,
      });
    });

    describe('error', () => {
      odsUnitTestAttribute<OdsSelectAttribute, 'error'>({
        name: 'error',
        defaultValue: DEFAULT_ATTRIBUTE.error,
        newValue: false,
        value: true,
        setup: (value) => setup({attributes: {['error']: value}}),
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsSelectAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: false,
        value: true,
        setup: (value) => setup({attributes: {['inline']: value}}),
        ...config,
      });
    });

    describe('required', () => {
      odsUnitTestAttribute<OdsSelectAttribute, 'required'>({
        name: 'required',
        defaultValue: DEFAULT_ATTRIBUTE.required,
        newValue: false,
        value: true,
        setup: (value) => setup({attributes: {['required']: value}}),
        ...config,
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsSelectAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_SELECT_SIZE.md,
        value: ODS_SELECT_SIZE.md,
        setup: (value) => setup({attributes: {['size']: value}}),
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsSelectAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: 3,
        value: 4,
        setup: (value) => setup({attributes: {['value']: value}}),
        ...config,
      });
    });
  });

  describe('methods', () => {
    it('should have defaultValue as value if set', async() => {
      const defaultValue = 4;
      await setup({attributes: {defaultValue}});
      expect(instance).toBeTruthy();
      expect(instance?.value).toBe(`${defaultValue}`);
    });

    it('should call reset function and set value to defaultValue', async() => {
      const defaultValue = 4;
      await setup({attributes: {defaultValue, value: 2}});
      expect(instance).toBeTruthy();
      await instance.reset();
      expect(instance?.value).toBe(`${defaultValue}`);
    });

    it('should call reset function and set value to empty string if defaultValue is unset', async() => {
      await setup({attributes: {value: 2}});
      expect(instance).toBeTruthy();
      await instance.reset();
      expect(instance?.value).toBe('');
    });

    it('should call clear function and set value to an empty string', async() => {
      await setup({attributes: {value: 2}});
      expect(instance).toBeTruthy();
      await instance.clear();
      expect(instance?.value).toBe('');
    });

    it('should call setFocus function and change the focus state of the component', async() => {
      await setup({attributes: { }});
      expect(instance).toBeTruthy();
      expect(htmlSelect).toBeTruthy();
      await instance.setFocus();
      expect(htmlSelect?.value).toBe('');
    });

    it('should call setInputTabindex function and inputTabindex should be set to 4', async() => {
      await setup({attributes: {value: 2}});
      expect(instance).toBeTruthy();
      await instance.setInputTabindex(4);
      expect(instance?.tabindex).toBe(4);
    });

    it('should call getValidity function and get an OdsValidityState.invalid to true', async() => {
      await setup({attributes: {value: 'my-value-1'}});
      expect(instance).toBeTruthy();
      jest.spyOn(instance, 'getValidity');
      const validity = await instance.getValidity();
      expect(instance.getValidity).toHaveBeenCalledTimes(1);
      expect(validity?.invalid).toBe(false);
    });

    it('should handle slot change', async() => {
      await setup({attributes: { }});
      const spySetSelectOptions = jest.spyOn(instance, 'setSelectOptions');
      instance.handleSlotChange();
      expect(spySetSelectOptions).toHaveBeenCalled();
    });
  });

  describe('events', () => {
    it('odsValueChange', async() => {
      await setup({attributes: { }});
      expect(instance.odsValueChange).toBeTruthy();
    });

    it('odsBlur', async() => {
      await setup({attributes: { }});
      expect(instance.odsBlur).toBeTruthy();
    });

    it('odsFocus', async() => {
      await setup({attributes: { }});
      expect(instance.odsFocus).toBeTruthy();
    });
  });
});
