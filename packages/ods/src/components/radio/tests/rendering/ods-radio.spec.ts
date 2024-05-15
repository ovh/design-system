import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsRadio } from '../../src';

describe('ods-radio rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsRadio],
      html,
    });

    root = page.root;
  }

  describe('ariaLabel', () => {
    it('should be reflected', async() => {
      const ariaLabelValue = 'ariaLabel value';

      await setup(`<ods-radio aria-label="${ariaLabelValue}"></ods-radio>`);

      expect(root?.getAttribute('aria-label')).toBe(ariaLabelValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-radio></ods-radio>');

      expect(root?.getAttribute('aria-label')).toBeNull();
    });
  });

  describe('ariaLabelledby', () => {
    it('should be reflected', async() => {
      const ariaLabelledbyValue = 'ariaLabel value';

      await setup(`<ods-radio aria-labelledby="${ariaLabelledbyValue}"></ods-radio>`);

      expect(root?.getAttribute('aria-labelledby')).toBe(ariaLabelledbyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-radio></ods-radio>');

      expect(root?.getAttribute('aria-labelledby')).toBeNull();
    });
  });

  describe('isChecked', () => {
    it('should be reflected', async() => {
      await setup('<ods-radio is-checked></ods-radio>');

      expect(root?.getAttribute('is-checked')).toBe('');
    });

    it('should be set by default', async() => {
      await setup('<ods-radio></ods-radio>');

      expect(root?.getAttribute('is-checked')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-radio is-disabled></ods-radio>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should be set by default', async() => {
      await setup('<ods-radio></ods-radio>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isRequired', () => {
    it('should be reflected', async() => {
      await setup('<ods-radio is-required></ods-radio>');

      expect(root?.getAttribute('is-required')).toBe('');
    });

    it('should be set by default', async() => {
      await setup('<ods-radio></ods-radio>');

      expect(root?.getAttribute('is-required')).toBeNull();
    });
  });

  describe('inputId', () => {
    it('should be reflected', async() => {
      const inputIdValue = 'inputId value';

      await setup(`<ods-radio input-id="${inputIdValue}"></ods-radio>`);

      expect(root?.getAttribute('input-id')).toBe(inputIdValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-radio></ods-radio>');

      expect(root?.getAttribute('input-id')).toBeNull();
    });
  });

  describe('name', () => {
    it('should be reflected', async() => {
      const nameValue = 'name value';

      await setup(`<ods-radio name="${nameValue}"></ods-radio>`);

      expect(root?.getAttribute('name')).toBe(nameValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-radio></ods-radio>');

      expect(root?.getAttribute('name')).toBeNull();
    });
  });

  describe('value', () => {
    it('should be reflected', async() => {
      const value = 'value';

      await setup(`<ods-radio value="${value}"></ods-radio>`);

      expect(root?.getAttribute('value')).toBe(value);
    });

    it('should not be set by default', async() => {
      await setup('<ods-radio></ods-radio>');

      expect(root?.getAttribute('value')).toBeNull();
    });
  });
});
