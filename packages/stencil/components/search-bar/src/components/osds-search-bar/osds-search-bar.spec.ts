import {
  OdsSearchBarAttributes,
  OdsComponentAttributes2StringAttributes,
  odsSearchBarDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsSearchBar } from './osds-search-bar';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-search-bar', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsSearchBar;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSearchBarAttributes> } = {}) {
    const minimalAttributes: OdsSearchBarAttributes = OdsCreateAttributes(attributes, odsSearchBarDefaultAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSearchBarAttributes>(minimalAttributes, odsSearchBarDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsSearchBar],
      html: `<osds-search-bar ${OdsStringAttributes2Str(stringAttributes)}>My SearchBar</osds-search-bar>`,
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
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsSearchBarAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsSearchBarAttributes, OsdsSearchBar, 'contrasted'>({
          name: 'contrasted',
          list: [true, false],
          defaultValue: odsSearchBarDefaultAttributes.contrasted,
          ...config
        })
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsSearchBarAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsSearchBarAttributes, OsdsSearchBar, 'disabled'>({
          name: 'disabled',
          list: [true, false],
          defaultValue: odsSearchBarDefaultAttributes.disabled,
          ...config
        })
      });
    });

    describe('loading', () => {
      odsUnitTestAttribute<OdsSearchBarAttributes, 'loading'>({
        ...getAttributeContextOptions<OdsSearchBarAttributes, OsdsSearchBar, 'loading'>({
          name: 'loading',
          list: [true, false],
          defaultValue: odsSearchBarDefaultAttributes.loading,
          ...config
        })
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsSearchBarAttributes, 'placeholder'>({
        ...getAttributeContextOptions<OdsSearchBarAttributes, OsdsSearchBar, 'placeholder'>({
          name: 'placeholder',
          list: ['', 'some placeholder'],
          defaultValue: odsSearchBarDefaultAttributes.placeholder,
          ...config
        })
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsSearchBarAttributes, 'value'>({
        ...getAttributeContextOptions<OdsSearchBarAttributes, OsdsSearchBar, 'value'>({
          name: 'value',
          list: ['', 'some value'],
          defaultValue: odsSearchBarDefaultAttributes.value,
          ...config
        })
      });
    });
  });

  
});
