import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { OdsCheckbox } from '../../src';

// @ts-ignore for test purposes
global.MutationObserver = jest.fn(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
}));

describe('ods-checkbox rendering', () => {
  let checkbox: Element | null | undefined;
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsCheckbox],
      html,
    });

    root = page.root;
    checkbox = root?.querySelector('input[type="checkbox"]');
  }

  describe('ariaLabel', () => {
    it('should be reflected', async() => {
      const ariaLabelValue = 'ariaLabel value';

      await setup(`<ods-checkbox aria-label="${ariaLabelValue}"></ods-checkbox>`);

      expect(root?.getAttribute('aria-label')).toBe(ariaLabelValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-checkbox></ods-checkbox>');

      expect(root?.getAttribute('aria-label')).toBeNull();
    });
  });

  describe('ariaLabelledby', () => {
    it('should be reflected', async() => {
      const ariaLabelledbyValue = 'ariaLabel value';

      await setup(`<ods-checkbox aria-labelledby="${ariaLabelledbyValue}"></ods-checkbox>`);

      expect(root?.getAttribute('aria-labelledby')).toBe(ariaLabelledbyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-checkbox></ods-checkbox>');

      expect(root?.getAttribute('aria-labelledby')).toBeNull();
    });
  });

  describe('hasError', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-checkbox has-error="${dummyValue}"></ods-checkbox>`);

      expect(root?.getAttribute('has-error')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-checkbox></ods-checkbox>');

      expect(root?.getAttribute('has-error')).toBeNull();
    });

    it('should add correct class if set', async() => {
      await setup('<ods-checkbox has-error></ods-checkbox>');

      expect(checkbox?.classList.contains('ods-checkbox__checkbox--error')).toBe(true);
    });
  });

  describe('inputId', () => {
    it('should be reflected', async() => {
      const inputIdValue = 'inputId value';

      await setup(`<ods-checkbox input-id="${inputIdValue}"></ods-checkbox>`);

      expect(root?.getAttribute('input-id')).toBe(inputIdValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-checkbox></ods-checkbox>');

      expect(root?.getAttribute('input-id')).toBeNull();
    });
  });

  describe('isChecked', () => {
    it('should be reflected', async() => {
      await setup('<ods-checkbox is-checked></ods-checkbox>');

      expect(root?.getAttribute('is-checked')).toBe('');
    });

    it('should be set by default', async() => {
      await setup('<ods-checkbox></ods-checkbox>');

      expect(root?.getAttribute('is-checked')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-checkbox is-disabled></ods-checkbox>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should be set by default', async() => {
      await setup('<ods-checkbox></ods-checkbox>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isIndeterminate', () => {
    it('should be reflected', async() => {
      await setup('<ods-checkbox is-indeterminate></ods-checkbox>');

      expect(root?.getAttribute('is-indeterminate')).toBe('');
    });

    it('should be set by default', async() => {
      await setup('<ods-checkbox></ods-checkbox>');

      expect(root?.getAttribute('is-indeterminate')).toBeNull();
    });
  });

  describe('isRequired', () => {
    it('should be reflected', async() => {
      await setup('<ods-checkbox is-required></ods-checkbox>');

      expect(root?.getAttribute('is-required')).toBe('');
    });

    it('should be set by default', async() => {
      await setup('<ods-checkbox></ods-checkbox>');

      expect(root?.getAttribute('is-required')).toBeNull();
    });
  });

  describe('name', () => {
    it('should be reflected', async() => {
      const nameValue = 'name value';

      await setup(`<ods-checkbox name="${nameValue}"></ods-checkbox>`);

      expect(root?.getAttribute('name')).toBe(nameValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-checkbox></ods-checkbox>');

      expect(root?.getAttribute('name')).toBeNull();
    });
  });

  describe('value', () => {
    it('should be reflected', async() => {
      const value = 'value';

      await setup(`<ods-checkbox value="${value}"></ods-checkbox>`);

      expect(root?.getAttribute('value')).toBe(value);
    });

    it('should not be set by default', async() => {
      await setup('<ods-checkbox></ods-checkbox>');

      expect(root?.getAttribute('value')).toBeNull();
    });
  });
});
