import type { SpecPage } from '@stencil/core/testing';
import type { OdsPhoneNumberAttribute } from './interfaces/attributes';
import { newSpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsPhoneNumber } from './osds-phone-number';

describe('spec:osds-phone-number', () => {
  const baseAttribute = { ariaLabel: '', forbiddenValues: [], value: '' };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsPhoneNumber;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsPhoneNumberAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsPhoneNumberAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsPhoneNumber],
      html: `<osds-phone-number ${odsStringAttributes2Str(stringAttributes)}></osds-phone-number>`,
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('clearable', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'clearable'>({
        name: 'clearable',
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['clearable']: value } }),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });

    describe('error', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'error'>({
        name: 'error',
        defaultValue: DEFAULT_ATTRIBUTE.error,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['error']: value } }),
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsPhoneNumberAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: 'new value',
        value: 'old value',
        setup: (value) => setup({ attributes: { value } }),
        ...config,
      });
    });
  });
});
