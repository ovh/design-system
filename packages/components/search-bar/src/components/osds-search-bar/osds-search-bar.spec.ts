import {
  odsComponentAttributes2StringAttributes,
  odsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-common-testing';
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import type { OdsSearchBarAttribute } from './interfaces/attributes';
import { OsdsSearchBar } from './osds-search-bar';


describe('spec:osds-search-bar', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsSearchBar;
  let buttonSearch: HTMLElement;
  const baseAttribute = { value: '' };

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSearchBarAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSearchBarAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsSearchBar],
      html: `<osds-search-bar ${odsStringAttributes2Str(stringAttributes)}>My SearchBar</osds-search-bar>`,
    });

    root = page.root;
    instance = page.rootInstance;
    buttonSearch = root.shadowRoot.querySelector('osds-button');
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

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsSearchBarAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: true,
        value: false,
        setup: (contrasted) => setup({ attributes: { contrasted } }),
        ...config,
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsSearchBarAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: true,
        value: false,
        setup: (disabled) => setup({ attributes: { disabled } }),
        ...config,
      });
    });

    describe('loading', () => {
      odsUnitTestAttribute<OdsSearchBarAttribute, 'loading'>({
        name: 'loading',
        defaultValue: DEFAULT_ATTRIBUTE.loading,
        newValue: true,
        value: false,
        setup: (loading) => setup({ attributes: { loading } }),
        ...config,
      });
    });

    describe('placeholder', () => {
      odsUnitTestAttribute<OdsSearchBarAttribute, 'placeholder'>({
        name: 'placeholder',
        defaultValue: DEFAULT_ATTRIBUTE.placeholder,
        newValue: '',
        value: 'some placeholder',
        setup: (placeholder) => setup({ attributes: { placeholder } }),
        ...config,
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsSearchBarAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: '',
        value: 'some value',
        setup: (value) => setup({ attributes: { value } }),
        ...config,
      });
    });
  });

  describe('methods', () => {
    it('should call emit odsSearchSubmit', async() => {
      await setup({});
      const spyEmitOdsSearchSubmit = jest.spyOn(instance.odsSearchSubmit, 'emit');
      buttonSearch.click();
      instance.handlerOnClickSearchButton();
      expect(spyEmitOdsSearchSubmit).toHaveBeenCalledTimes(2);
      expect(spyEmitOdsSearchSubmit).toHaveBeenCalledWith({ optionValue: '', inputValue: '' });
    });

    it('should call emit odsSearchSubmit with keyboard navigation', async() => {
      await setup({});
      const spyEmitOdsSearchSubmit = jest.spyOn(instance.odsSearchSubmit, 'emit');
      const enterKey = new KeyboardEvent('keydown', { code: 'Enter' });
      instance.handlerOnKeydownInput(enterKey);
      const spaceKey = new KeyboardEvent('keydown', { code: 'Space' });
      instance.handlerOnKeydownInput(spaceKey);

      expect(spyEmitOdsSearchSubmit).toHaveBeenCalledTimes(2);
      expect(spyEmitOdsSearchSubmit).toHaveBeenCalledWith({ optionValue: '', inputValue: '' });
    });

    it('should not call emit odsSearchSubmit with keyboard navigation because of wrong key', async() => {
      await setup({});
      const spyEmitOdsSearchSubmit = jest.spyOn(instance.odsSearchSubmit, 'emit');
      const enterKey = new KeyboardEvent('keydown', { code: 'A' });
      instance.handlerOnKeydownInput(enterKey);
      const spaceKey = new KeyboardEvent('keydown', { code: '0' });
      instance.handlerOnKeydownInput(spaceKey);

      expect(spyEmitOdsSearchSubmit).not.toHaveBeenCalled();
    });
  });
});
