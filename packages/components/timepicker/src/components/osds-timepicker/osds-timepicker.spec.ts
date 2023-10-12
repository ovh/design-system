import type { OdsTimepickerAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import {
  odsComponentAttributes2StringAttributes,
  odsStringAttributes2Str,
  odsUnitTestAttribute
} from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { OsdsTimepicker } from './osds-timepicker' ;
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('spec:osds-timepicker', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsTimepicker;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsTimepickerAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTimepickerAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsTimepicker],
      html: `<osds-timepicker ${odsStringAttributes2Str(stringAttributes)}></osds-timepicker>`,
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

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'clearable'>({
        name: 'clearable',
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        newValue: true,
        value: false,
        setup: (clearable) => setup({ attributes: { clearable } }),
        ...config
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: true,
        value: false,
        setup: (disabled) => setup({ attributes: { disabled } }),
        ...config
      });
    });

    describe('error', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'error'>({
        name: 'error',
        defaultValue: DEFAULT_ATTRIBUTE.error,
        newValue: true,
        value: false,
        setup: (error) => setup({ attributes: { error } }),
        ...config
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: true,
        value: false,
        setup: (inline) => setup({ attributes: { inline } }),
        ...config
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: '',
        value: '11:11',
        setup: (value) => setup({ attributes: { value } }),
        ...config
      });
    });

    describe('withSeconds', () => {
      odsUnitTestAttribute<OdsTimepickerAttribute, 'withSeconds'>({
        name: 'withSeconds',
        defaultValue: DEFAULT_ATTRIBUTE.withSeconds,
        newValue: true,
        value: false,
        setup: (withSeconds) => setup({ attributes: { withSeconds } }),
        ...config
      });
    });
  });
});
