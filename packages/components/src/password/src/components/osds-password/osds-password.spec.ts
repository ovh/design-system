jest.mock('./core/controller'); // keep jest.mock before any

import type { OdsPasswordAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsPassword } from './osds-password';

describe('spec:osds-password', () => {
  const baseAttribute = {
    ariaLabel: '',
    defaultValue: '',
    disabled: false,
    error: false,
    forbiddenValues: [],
    name: '',
    value: '',
  };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsPassword;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsPasswordAttribute> } = {}): Promise<void> {
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
      instance: (): OsdsPassword => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('clearable', () => {
      odsUnitTestAttribute<OdsPasswordAttribute, 'clearable'>({
        defaultValue: DEFAULT_ATTRIBUTE.clearable,
        name: 'clearable',
        newValue: false,
        setup: (value) => setup({ attributes: { ['clearable']: value } }),
        value: true,
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsPasswordAttribute, 'disabled'>({
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        name: 'disabled',
        newValue: false,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        value: true,
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsPasswordAttribute, 'inline'>({
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        name: 'inline',
        newValue: false,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        value: true,
        ...config,
      });
    });

    describe('loading', () => {
      odsUnitTestAttribute<OdsPasswordAttribute, 'loading'>({
        defaultValue: DEFAULT_ATTRIBUTE.loading,
        name: 'loading',
        newValue: false,
        setup: (value) => setup({ attributes: { ['loading']: value } }),
        value: true,
        ...config,
      });
    });

    describe('masked', () => {
      odsUnitTestAttribute<OdsPasswordAttribute, 'masked'>({
        defaultValue: DEFAULT_ATTRIBUTE.masked,
        name: 'masked',
        newValue: false,
        setup: (value) => setup({ attributes: { ['masked']: value } }),
        value: true,
        ...config,
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsPasswordAttribute, 'placeholder'>({
        defaultValue: DEFAULT_ATTRIBUTE.placeholder,
        name: 'placeholder',
        newValue: 'ovh',
        setup: (value) => setup({ attributes: { ['placeholder']: value } }),
        value: 'ipsum',
        ...config,
      });
    });
  });
});
