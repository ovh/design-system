jest.mock('tom-select');

import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { OdsCombobox } from '../../src';

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

  describe('allowMultiple', () => {
    it('should be reflected', async() => {
      await setup('<ods-combobox allow-multiple></ods-combobox>');

      expect(root?.getAttribute('allow-multiple')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('allow-multiple')).toBeNull();
    });
  });

  describe('ariaLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox aria-label="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('aria-label')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('aria-label')).toBeNull();
    });
  });

  describe('ariaLabelledby', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox aria-labelledby="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('aria-labelledby')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('aria-labelledby')).toBeNull();
    });
  });

  describe('canCreate', () => {
    it('should be reflected', async() => {
      await setup('<ods-combobox can-create></ods-combobox>');

      expect(root?.getAttribute('can-create')).toBe('');
    });

    it('should render with expected default value', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('can-create')).toBe('');
    });
  });

  describe('createLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox create-label="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('create-label')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('create-label')).toBe('Add');
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
      await setup('<ods-combobox has-error></ods-combobox>');

      expect(root?.getAttribute('has-error')).toBe('');
    });

    it('should render with expected default value', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('has-error')).toBeNull();
    });

    it('should add correct class if set', async() => {
      await setup('<ods-combobox has-error></ods-combobox>');

      expect(root?.classList.contains('ods-combobox--error')).toBe(true);
    });
  });

  describe('isClearable', () => {
    it('should be reflected', async() => {
      await setup('<ods-combobox is-clearable></ods-combobox>');

      expect(root?.getAttribute('is-clearable')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('is-clearable')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-combobox is-disabled></ods-combobox>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isReadonly', () => {
    it('should be reflected', async() => {
      await setup('<ods-combobox is-readonly></ods-combobox>');

      expect(root?.getAttribute('is-readonly')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('is-readonly')).toBeNull();
    });
  });

  describe('isRequired', () => {
    it('should be reflected', async() => {
      await setup('<ods-combobox is-required></ods-combobox>');

      expect(root?.getAttribute('is-required')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('is-required')).toBeNull();
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
