jest.mock('../../src/controller/ods-quantity');
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsQuantity } from '../../src';

describe('ods-quantity rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsQuantity],
      html,
    });

    root = page.root;
  }

  describe('ariaLabel', () => {
    it('should be reflected', async() => {
      const ariaLabelValue = 'ariaLabel';

      await setup(`<ods-quantity ariaLabel="${ariaLabelValue}"></ods-quantity>`);

      expect(root?.getAttribute('ariaLabel')).toBe(ariaLabelValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-quantity></ods-quantity>');

      expect(root?.getAttribute('ariaLabel')).toBeNull();
    });
  });

  describe('ariaLabelledby', () => {
    it('should be reflected', async() => {
      const ariaLabelledbyValue = 'ariaLabelledby';

      await setup(`<ods-quantity ariaLabelledby="${ariaLabelledbyValue}"></ods-quantity>`);

      expect(root?.getAttribute('ariaLabelledby')).toBe(ariaLabelledbyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-quantity></ods-quantity>');

      expect(root?.getAttribute('ariaLabelledby')).toBeNull();
    });
  });

  describe('defaultValue', () => {
    it('should be reflected', async() => {
      const defaultValue = 'defaultValue';

      await setup(`<ods-quantity defaultValue="${defaultValue}"></ods-quantity>`);

      expect(root?.getAttribute('defaultValue')).toBe(defaultValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-quantity></ods-quantity>');

      expect(root?.getAttribute('defaultValue')).toBeNull();
    });
  });

  describe('hasError', () => {
    it('should be reflected', async() => {
      await setup('<ods-quantity has-error></ods-quantity>');

      expect(root?.getAttribute('has-error')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-quantity></ods-quantity>');

      expect(root?.getAttribute('has-error')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-quantity is-disabled></ods-quantity>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-quantity></ods-quantity>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isReadonly', () => {
    it('should be reflected', async() => {
      await setup('<ods-quantity is-readonly></ods-quantity>');

      expect(root?.getAttribute('is-readonly')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-quantity></ods-quantity>');

      expect(root?.getAttribute('is-readonly')).toBeNull();
    });
  });

  describe('isRequired', () => {
    it('should be reflected', async() => {
      await setup('<ods-quantity is-required></ods-quantity>');

      expect(root?.getAttribute('is-required')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-quantity></ods-quantity>');

      expect(root?.getAttribute('is-required')).toBeNull();
    });
  });

  describe('max', () => {
    it('should be reflected', async() => {
      const maxValue = 10;

      await setup(`<ods-quantity max="${maxValue}"></ods-quantity>`);

      expect(root?.getAttribute('max')).toBe(maxValue.toString());
    });

    it('should not be set by default', async() => {
      await setup('<ods-quantity></ods-quantity>');

      expect(root?.getAttribute('max')).toBeNull();
    });
  });

  describe('min', () => {
    it('should be reflected', async() => {
      const minValue = 0;

      await setup(`<ods-quantity min="${minValue}"></ods-quantity>`);

      expect(root?.getAttribute('min')).toBe(minValue.toString());
    });

    it('should not be set by default', async() => {
      await setup('<ods-quantity></ods-quantity>');

      expect(root?.getAttribute('min')).toBeNull();
    });
  });

  describe('name', () => {
    it('should be reflected', async() => {
      const nameValue = 'name';

      await setup(`<ods-quantity name="${nameValue}"></ods-quantity>`);

      expect(root?.getAttribute('name')).toBe(nameValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-quantity></ods-quantity>');

      expect(root?.getAttribute('name')).toBeNull();
    });
  });

  describe('placeholder', () => {
    it('should be reflected', async() => {
      const placeholderValue = 'placeholder';

      await setup(`<ods-quantity placeholder="${placeholderValue}"></ods-quantity>`);

      expect(root?.getAttribute('placeholder')).toBe(placeholderValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-quantity></ods-quantity>');

      expect(root?.getAttribute('placeholder')).toBeNull();
    });
  });

  describe('step', () => {
    it('should be reflected', async() => {
      const stepValue = 10;

      await setup(`<ods-quantity step="${stepValue}"></ods-quantity>`);

      expect(root?.getAttribute('step')).toBe(stepValue.toString());
    });

    it('should not be set by default', async() => {
      await setup('<ods-quantity></ods-quantity>');

      expect(root?.getAttribute('step')).toBeNull();
    });
  });

  describe('value', () => {
    it('should be reflected', async() => {
      const value = 10;

      await setup(`<ods-quantity value="${value}"></ods-quantity>`);

      expect(root?.getAttribute('value')).toBe(value.toString());
    });

    it('should not be set by default', async() => {
      await setup('<ods-quantity></ods-quantity>');

      expect(root?.getAttribute('value')).toBeNull();
    });
  });
});
