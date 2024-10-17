jest.mock('../../src/controller/ods-phone-number');

import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsPhoneNumber } from '../../src';

describe('ods-phone-number rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsPhoneNumber],
      html,
    });

    root = page.root;
  }

  describe('ariaLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-phone-number aria-label="${dummyValue}"></ods-phone-number>`);

      expect(root?.getAttribute('aria-label')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('aria-label')).toBeNull();
    });
  });

  describe('ariaLabelledby', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-phone-number aria-labelledby="${dummyValue}"></ods-phone-number>`);

      expect(root?.getAttribute('aria-labelledby')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('aria-labelledby')).toBeNull();
    });
  });

  describe('countries', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-phone-number countries="${dummyValue}"></ods-phone-number>`);

      expect(root?.getAttribute('countries')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('countries')).toBeNull();
    });
  });

  describe('customValidityMessage', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-phone-number custom-validity-message="${dummyValue}"></ods-phone-number>`);

      expect(root?.getAttribute('custom-validity-message')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('custom-validity-message')).toBe('Phone number is incorrect');
    });
  });

  describe('defaultValue', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-phone-number default-value="${dummyValue}"></ods-phone-number>`);

      expect(root?.getAttribute('default-value')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('default-value')).toBeNull();
    });
  });

  describe('hasError', () => {
    it('should be reflected', async() => {
      await setup('<ods-phone-number has-error></ods-phone-number>');

      expect(root?.getAttribute('has-error')).toBe('');
    });

    it('should render with expected default value', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('has-error')).toBeNull();
    });
  });

  describe('isClearable', () => {
    it('should be reflected', async() => {
      await setup('<ods-phone-number is-clearable></ods-phone-number>');

      expect(root?.getAttribute('is-clearable')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('is-clearable')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-phone-number is-disabled></ods-phone-number>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isLoading', () => {
    it('should be reflected', async() => {
      await setup('<ods-phone-number is-loading></ods-phone-number>');

      expect(root?.getAttribute('is-loading')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('is-loading')).toBeNull();
    });
  });

  describe('isReadonly', () => {
    it('should be reflected', async() => {
      await setup('<ods-phone-number is-readonly></ods-phone-number>');

      expect(root?.getAttribute('is-readonly')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('is-readonly')).toBeNull();
    });
  });

  describe('isRequired', () => {
    it('should be reflected', async() => {
      await setup('<ods-phone-number is-required></ods-phone-number>');

      expect(root?.getAttribute('is-required')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('is-required')).toBeNull();
    });
  });

  describe('isoCode', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-phone-number iso-code="${dummyValue}"></ods-phone-number>`);

      expect(root?.getAttribute('iso-code')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('iso-code')).toBeNull();
    });
  });

  describe('locale', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-phone-number locale="${dummyValue}"></ods-phone-number>`);

      expect(root?.getAttribute('locale')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('locale')).toBeNull();
    });
  });

  describe('name', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-phone-number name="${dummyValue}"></ods-phone-number>`);

      expect(root?.getAttribute('name')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('name')).toBeNull();
    });
  });

  describe('pattern', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-phone-number pattern="${dummyValue}"></ods-phone-number>`);

      expect(root?.getAttribute('pattern')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('pattern')).toBeNull();
    });
  });

  describe('value', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-phone-number value="${dummyValue}"></ods-phone-number>`);

      expect(root?.getAttribute('value')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-phone-number></ods-phone-number>');

      expect(root?.getAttribute('value')).toBeNull();
    });
  });
});
