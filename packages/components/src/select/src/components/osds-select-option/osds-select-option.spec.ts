import type { OdsSelectOptionAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { OdsCreateDefaultValidityState } from '@ovhcloud/ods-common-core';
import { OdsMockNativeMethod, OdsMockPropertyDescriptor, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsSelectOption } from './osds-select-option';

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-select-option', () => {
  const baseAttribute = { value: '' };
  let page: SpecPage;
  let instance: OsdsSelectOption;
  let slotLabel: HTMLElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsSelectOptionAttribute>, html?: string } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSelectOptionAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, 'setCustomValidity', jest.fn());

    page = await newSpecPage({
      components: [OsdsSelectOption],
      html: `<osds-select-option ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-select-option>`,
    });

    instance = page.rootInstance;
    slotLabel = page.root?.shadowRoot?.querySelector('slot:not([name])');
  }

  it('should render', async() => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a label slot', async() => {
      await setup({ attributes: {} });
      expect(slotLabel).toBeTruthy();
    });
  });

  describe('attributes', () => {
    const config = {
      instance: (): OsdsSelectOption => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('value', () => {
      odsUnitTestAttribute<OdsSelectOptionAttribute, 'value'>({
        defaultValue: DEFAULT_ATTRIBUTE.value,
        name: 'value',
        newValue: 3,
        setup: (value) => setup({ attributes: { ['value']: value } }),
        value: 4,
        ...config,
      });
    });
  });

  describe('events', () => {
    it('odsSelectOptionValueSelected', async() => {
      await setup({ attributes: { } });
      expect(instance.odsSelectOptionClick).toBeTruthy();
    });
  });
});
