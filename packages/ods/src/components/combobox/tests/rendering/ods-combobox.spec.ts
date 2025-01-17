jest.mock('../../src/controller/ods-combobox');

import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { OdsCombobox } from '../../src';

// @ts-ignore for test purposes
global.MutationObserver = jest.fn(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
}));

describe('ods-combobox rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsCombobox],
      html,
    });

    root = page.root;
  }

  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation((msg) => {
      // Hide the Stencil error about internals being not implemented on spec tests
      if (!msg.startsWith('NOTE: Property validity was accessed on ElementInternals, but this property is not implemented.')) {
        console.error(msg);
      }
    });
  });

  describe('addNewElementLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox add-new-element-label="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('add-new-element-label')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('add-new-element-label')).toBe('Add');
    });
  });

  describe('allowMultiple', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox allow-multiple="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('allow-multiple')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('allow-multiple')).toBeNull();
    });
  });

  describe('defaultValue', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox default-value="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('default-value')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('default-value')).toBeNull();
    });
  });

  describe('hasError', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox has-error="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('has-error')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('has-error')).toBeNull();
    });
  });

  describe('isClearable', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox is-clearable="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('is-clearable')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('is-clearable')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox is-disabled="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('is-disabled')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isLoading', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox is-loading="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('is-loading')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('is-loading')).toBeNull();
    });
  });

  describe('isReadonly', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox is-readonly="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('is-readonly')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('is-readonly')).toBeNull();
    });
  });

  describe('name', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox name="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('name')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('name')).toBeNull();
    });
  });

  describe('noResultLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox no-result-label="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('no-result-label')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('no-result-label')).toBe('No results found');
    });
  });

  describe('placeholder', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox placeholder="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('placeholder')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('placeholder')).toBeNull();
    });
  });

  describe('value', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox value="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('value')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('value')).toBeNull();
    });
  });
});
