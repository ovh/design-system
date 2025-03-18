jest.mock('../../src/controller/ods-toggle');
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsToggle } from '../../src';

// @ts-ignore for test purposes
global.MutationObserver = jest.fn(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
}));

describe('ods-toggle rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsToggle],
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

  describe('defaultValue', () => {
    it('should be reflected', async() => {
      const defaultValueValue = 'dummy value';

      await setup(`<ods-toggle defaultValue="${defaultValueValue}"></ods-toggle>`);

      expect(root?.getAttribute('defaultValue')).toBe(defaultValueValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-toggle></ods-toggle>');

      expect(root?.getAttribute('defaultValue')).toBeNull();
    });
  });

  describe('hasError', () => {
    it('should be reflected', async() => {
      await setup('<ods-toggle has-error></ods-toggle>');

      expect(root?.getAttribute('has-error')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-toggle></ods-toggle>');

      expect(root?.getAttribute('has-error')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-toggle is-disabled></ods-toggle>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-toggle></ods-toggle>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isRequired', () => {
    it('should be reflected', async() => {
      await setup('<ods-toggle is-required></ods-toggle>');

      expect(root?.getAttribute('is-required')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-toggle></ods-toggle>');

      expect(root?.getAttribute('is-required')).toBeNull();
    });
  });

  describe('name', () => {
    it('should be reflected', async() => {
      const nameValue = 'name value';

      await setup(`<ods-toggle name="${nameValue}"></ods-toggle>`);

      expect(root?.getAttribute('name')).toBe(nameValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-toggle></ods-toggle>');

      expect(root?.getAttribute('name')).toBeNull();
    });
  });

  describe('value', () => {
    it('should be reflected', async() => {
      await setup('<ods-toggle value></ods-toggle>');

      expect(root?.getAttribute('value')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-toggle></ods-toggle>');

      expect(root?.getAttribute('value')).toBeNull();
    });
  });

  describe('withLabel', () => {
    it('should be reflected', async() => {
      await setup('<ods-toggle with-label></ods-toggle>');

      expect(root?.getAttribute('with-label')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-toggle></ods-toggle>');

      expect(root?.getAttribute('with-label')).toBeNull();
    });
  });
});
