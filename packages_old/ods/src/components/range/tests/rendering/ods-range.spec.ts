jest.mock('../../src/controller/ods-range', () => ({
  getInitialValue: jest.fn(),
  getTicks: jest.fn().mockReturnValue([]),
  isDualRange: jest.fn(),
  toPercentage: jest.fn(),
  updateInternals: jest.fn(),
}));
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsRange } from '../../src';

const mutationObserverMock = jest.fn(function MutationObserver(callback) {
  this.observe = jest.fn();
  this.disconnect = jest.fn();
  // Optionally add a trigger() method to manually trigger a change
  this.trigger = function(mockedMutationsList: MutationRecord[]): void {
    callback(mockedMutationsList, this);
  };
});
// @ts-ignore mock
global.MutationObserver = mutationObserverMock;

describe('ods-range rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsRange],
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
      const defaultValue = 'default value';

      await setup(`<ods-range default-value="${defaultValue}"></ods-range>`);

      expect(root?.getAttribute('default-value')).toBe(defaultValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-range></ods-range>');

      expect(root?.getAttribute('default-value')).toBeNull();
    });
  });

  describe('hasError', () => {
    it('should be reflected', async() => {
      await setup('<ods-range has-error></ods-range>');

      expect(root?.getAttribute('has-error')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-range></ods-range>');

      expect(root?.getAttribute('has-error')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-range is-disabled></ods-range>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should be set by default', async() => {
      await setup('<ods-range></ods-range>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isRequired', () => {
    it('should be reflected', async() => {
      await setup('<ods-range is-required></ods-range>');

      expect(root?.getAttribute('is-required')).toBe('');
    });

    it('should be set by default', async() => {
      await setup('<ods-range></ods-range>');

      expect(root?.getAttribute('is-required')).toBeNull();
    });
  });

  describe('tracks', () => {
    it('should be reflected', async() => {
      await setup('<ods-range tracks="[10,25,50,75]"></ods-range>');

      expect(root?.getAttribute('tracks')).toBe('[10,25,50,75]');
    });

    it('should be set by default', async() => {
      await setup('<ods-range></ods-range>');

      expect(root?.getAttribute('tracks')).toBeNull();
    });
  });

  describe('max', () => {
    it('should be reflected', async() => {
      const maxValue = 50;
      await setup(`<ods-range max="${maxValue}"></ods-range>`);

      expect(root?.getAttribute('max')).toBe(maxValue.toString());
    });

    it('should be set by default', async() => {
      await setup('<ods-range></ods-range>');

      expect(root?.getAttribute('max')).toBe('100');
    });
  });

  describe('min', () => {
    it('should be reflected', async() => {
      const minValue = 3;
      await setup(`<ods-range min="${minValue}"></ods-range>`);

      expect(root?.getAttribute('min')).toBe(minValue.toString());
    });

    it('should be set by default', async() => {
      await setup('<ods-range></ods-range>');

      expect(root?.getAttribute('min')).toBe('0');
    });
  });

  describe('name', () => {
    it('should be reflected', async() => {
      const nameValue = 'myName';
      await setup(`<ods-range name="${nameValue}"></ods-range>`);

      expect(root?.getAttribute('name')).toBe(nameValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-range></ods-range>');

      expect(root?.getAttribute('name')).toBeNull();
    });
  });

  describe('step', () => {
    it('should be reflected', async() => {
      const stepValue = 2;
      await setup(`<ods-range step="${stepValue}"></ods-range>`);

      expect(root?.getAttribute('step')).toBe(stepValue.toString());
    });

    it('should not be set by default', async() => {
      await setup('<ods-range></ods-range>');

      expect(root?.getAttribute('step')).toBeNull();
    });
  });

  describe('value', () => {
    it('should be reflected', async() => {
      const value = 50;
      await setup(`<ods-range value="${value}"></ods-range>`);

      expect(root?.getAttribute('value')).toBe(value.toString());
    });

    it('should not be set by default', async() => {
      await setup('<ods-range></ods-range>');

      expect(root?.getAttribute('value')).toBeNull();
    });
  });
});
