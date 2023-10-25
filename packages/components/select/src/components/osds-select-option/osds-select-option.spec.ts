import { OdsCreateDefaultValidityState, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsMockNativeMethod, OdsMockPropertyDescriptor, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import type { OdsSelectOptionAttribute } from './interfaces/attributes';
import { OsdsSelectOption } from './osds-select-option';


const logger = new OdsLogger('osds-select-option-spec');

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-select-option', () => {
  logger.log('init');
  const baseAttribute = { value: '' };
  let page: SpecPage;
  let instance: OsdsSelectOption;
  let slotLabel: HTMLElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsSelectOptionAttribute>, html?: string } = {}) {
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
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('value', () => {
      odsUnitTestAttribute<OdsSelectOptionAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: 3,
        value: 4,
        setup: (value) => setup({ attributes: { ['value']: value } }),
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
