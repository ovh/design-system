jest.mock('./core/controller');

import type { SpecPage } from '@stencil/core/testing';
import type { OdsAutocompleteAttribute } from './interfaces/attributes';
import { newSpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';
import { OsdsAutocomplete } from './osds-autocomplete';

describe('spec:osds-autocomplete', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsAutocomplete;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsAutocompleteAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsAutocompleteAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsAutocomplete],
      html: `<osds-autocomplete ${odsStringAttributes2Str(stringAttributes)}>My Autocomplete</osds-autocomplete>`,
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
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'clearable'>({
        name: 'clearable',
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['clearable']: value } }),
        ...config,
      });
    });

    describe('color', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: ODS_THEME_COLOR_INTENT.primary,
        value: ODS_THEME_COLOR_INTENT.success,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });

    describe('error', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'error'>({
        name: 'error',
        defaultValue: DEFAULT_ATTRIBUTE.error,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['error']: value } }),
        ...config,
      });
    });

    describe('icon', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'icon'>({
        name: 'icon',
        defaultValue: DEFAULT_ATTRIBUTE.icon,
        newValue: ODS_ICON_NAME.OVH,
        value: ODS_ICON_NAME.HOME,
        setup: (value) => setup({ attributes: { ['icon']: value } }),
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        ...config,
      });
    });

    describe('minimumNumberOfCharacters', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'minimumNumberOfCharacters'>({
        name: 'minimumNumberOfCharacters',
        defaultValue: DEFAULT_ATTRIBUTE.minimumNumberOfCharacters,
        newValue: 1,
        value: 2,
        setup: (value) => setup({ attributes: { ['minimumNumberOfCharacters']: value } }),
        ...config,
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'placeholder'>({
        name: 'placeholder',
        defaultValue: DEFAULT_ATTRIBUTE.placeholder,
        newValue: 'a',
        value: 'b',
        setup: (value) => setup({ attributes: { ['placeholder']: value } }),
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsAutocompleteAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: 'a',
        value: 'b',
        setup: (value) => setup({ attributes: { ['value']: value } }),
        ...config,
      });
    });
  });
});
