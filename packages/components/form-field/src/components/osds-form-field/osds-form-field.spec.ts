import type {SpecPage} from '@stencil/core/testing';
import type {OdsFormFieldAttribute} from './interfaces/attributes';
import {newSpecPage} from '@stencil/core/testing';
import {odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute} from '@ovhcloud/ods-common-testing';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';
import {OsdsFormField} from './osds-form-field';

describe('spec:osds-form-field', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsFormField;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({attributes = {}}: { attributes?: Partial<OdsFormFieldAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsFormFieldAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsFormField],
      html: `<osds-form-field ${odsStringAttributes2Str(stringAttributes)}>My FormField</osds-form-field>`,
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

    describe('error', () => {
      odsUnitTestAttribute<OdsFormFieldAttribute, 'error'>({
        name: 'error',
        defaultValue: DEFAULT_ATTRIBUTE.error,
        newValue: '',
        value: 'There was an error with your message',
        setup: (value) => setup({attributes: {['error']: value}}),
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsFormFieldAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: false,
        value: true,
        setup: (value) => setup({attributes: {['inline']: value}}),
        ...config,
      });
    });
  });
});
