jest.mock('./core/controller'); // keep jest.mock before any

import type { OdsPasswordAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_INPUT_SIZE } from '../../../../input/src';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsPassword } from './osds-password';

describe('spec:osds-password', () => {
  const baseAttribute = { ariaLabel: '', defaultValue: '', forbiddenValues: [], value: '' };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsPassword;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsPasswordAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsPasswordAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsPassword],
      html: `<osds-password ${odsStringAttributes2Str(stringAttributes)}></osds-password>`,
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async() => {
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
      odsUnitTestAttribute<OdsPasswordAttribute, 'clearable'>({
        name: 'clearable',
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['clearable']: value } }),
        ...config,
      });
    });

    describe('color', () => {
      odsUnitTestAttribute<OdsPasswordAttribute, 'color'>({
        name: 'color',
        defaultValue: DEFAULT_ATTRIBUTE.color,
        newValue: ODS_THEME_COLOR_INTENT.primary,
        value: ODS_THEME_COLOR_INTENT.default,
        setup: (value) => setup({ attributes: { ['color']: value } }),
        ...config,
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsPasswordAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['contrasted']: value } }),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsPasswordAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsPasswordAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        ...config,
      });
    });

    describe('loading', () => {
      odsUnitTestAttribute<OdsPasswordAttribute, 'loading'>({
        name: 'loading',
        defaultValue: DEFAULT_ATTRIBUTE.loading,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['loading']: value } }),
        ...config,
      });
    });

    describe('masked', () => {
      odsUnitTestAttribute<OdsPasswordAttribute, 'masked'>({
        name: 'masked',
        defaultValue: DEFAULT_ATTRIBUTE.masked,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['masked']: value } }),
        ...config,
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsPasswordAttribute, 'placeholder'>({
        name: 'placeholder',
        defaultValue: DEFAULT_ATTRIBUTE.placeholder,
        newValue: 'ovh',
        value: 'ipsum',
        setup: (value) => setup({ attributes: { ['placeholder']: value } }),
        ...config,
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsPasswordAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_INPUT_SIZE.md,
        value: ODS_INPUT_SIZE.md,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        ...config,
      });
    });
  });
});
