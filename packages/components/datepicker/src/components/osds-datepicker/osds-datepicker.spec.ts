jest.mock('@types/vanillajs-datepicker');

import type { SpecPage } from '@stencil/core/testing';
import type { OdsDatepickerAttribute } from './interfaces/attributes';
import { newSpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsDatepicker } from './osds-datepicker';

describe('spec:osds-datepicker', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsDatepicker;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsDatepickerAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsDatepickerAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsDatepicker],
      html: `<osds-datepicker ${odsStringAttributes2Str(stringAttributes)}>My Datepicker</osds-datepicker>`,
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
      odsUnitTestAttribute<OdsDatepickerAttribute, 'clearable'>({
        name: 'clearable',
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['clearable']: value } }),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });

    describe('error', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'error'>({
        name: 'error',
        defaultValue: DEFAULT_ATTRIBUTE.error,
        newValue: 'error',
        value: '',
        setup: (value) => setup({ attributes: { ['error']: value } }),
        ...config,
      });
    });

    describe('format', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'format'>({
        name: 'format',
        defaultValue: DEFAULT_ATTRIBUTE.format,
        newValue: 'dd/mm/yyyy',
        value: 'yyyy-mm-dd',
        setup: (value) => setup({ attributes: { ['format']: value } }),
        ...config,
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'placeholder'>({
        name: 'placeholder',
        defaultValue: DEFAULT_ATTRIBUTE.placeholder,
        newValue: 'placeholder',
        value: '',
        setup: (value) => setup({ attributes: { ['placeholder']: value } }),
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsDatepickerAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: new Date('2023-09-11'),
        value: undefined,
        setup: (value) => setup({ attributes: { ['value']: value } }),
        ...config,
      });
    });
  });
});
