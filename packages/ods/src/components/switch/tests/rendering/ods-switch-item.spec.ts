import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_SWITCH_SIZE, OdsSwitchItem } from '../../src';

const mutationObserverMock = jest.fn(function MutationObserver(callback) {
  this.observe = jest.fn();
  this.disconnect = jest.fn();
  // Optionally add a trigger() method to manually trigger a change
  this.trigger = (mockedMutationsList: MutationRecord[]): void => {
    callback(mockedMutationsList, this);
  };
});
// @ts-ignore test purpose
global.MutationObserver = mutationObserverMock;

describe('ods-switch-item rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsSwitchItem],
      html,
    });

    root = page.root;
  }

  describe('ariaLabel', () => {
    it('should be reflected', async() => {
      const ariaLabelValue = 'ariaLabel';

      await setup(`<ods-switch-item aria-label="${ariaLabelValue}"></ods-switch-item>`);

      expect(root?.getAttribute('aria-label')).toBe(ariaLabelValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-switch-item></ods-switch-item>');

      expect(root?.getAttribute('aria-label')).toBeNull();
    });
  });

  describe('ariaLabelledby', () => {
    it('should be reflected', async() => {
      const ariaLabelledbyValue = 'ariaLabelledby';

      await setup(`<ods-switch-item aria-labelledby="${ariaLabelledbyValue}"></ods-switch-item>`);

      expect(root?.getAttribute('aria-labelledby')).toBe(ariaLabelledbyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-switch-item></ods-switch-item>');

      expect(root?.getAttribute('aria-labelledby')).toBeNull();
    });
  });

  describe('isChecked', () => {
    it('should be reflected', async() => {
      await setup('<ods-switch-item is-checked></ods-switch-item>');

      expect(root?.getAttribute('is-checked')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-switch-item></ods-switch-item>');

      expect(root?.getAttribute('is-checked')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-switch-item is-disabled></ods-switch-item>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-switch-item></ods-switch-item>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isRequired', () => {
    it('should be reflected', async() => {
      await setup('<ods-switch-item is-required></ods-switch-item>');

      expect(root?.getAttribute('is-required')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-switch-item></ods-switch-item>');

      expect(root?.getAttribute('is-required')).toBeNull();
    });
  });

  describe('inputId', () => {
    it('should be reflected', async() => {
      const inputIdValue = 'inputId';

      await setup(`<ods-switch-item input-id="${inputIdValue}"></ods-switch-item>`);

      expect(root?.getAttribute('input-id')).toBe(inputIdValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-switch-item></ods-switch-item>');

      expect(root?.getAttribute('input-id')).toBeNull();
    });
  });

  describe('name', () => {
    it('should be reflected', async() => {
      const nameValue = 'name';

      await setup(`<ods-switch-item name="${nameValue}"></ods-switch-item>`);

      expect(root?.getAttribute('name')).toBe(nameValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-switch-item></ods-switch-item>');

      expect(root?.getAttribute('name')).toBeNull();
    });
  });

  describe('size', () => {
    it('should be reflected', async() => {
      const sizeValue = ODS_SWITCH_SIZE.sm;

      await setup(`<ods-switch-item size="${sizeValue}"></ods-switch-item>`);

      expect(root?.getAttribute('size')).toBe(sizeValue);
    });

    it('should be set by default', async() => {
      await setup('<ods-switch-item></ods-switch-item>');

      expect(root?.getAttribute('size')).toBeNull();
    });
  });

  describe('value', () => {
    it('should be reflected', async() => {
      const value = 'value';

      await setup(`<ods-switch-item value="${value}"></ods-switch-item>`);

      expect(root?.getAttribute('value')).toBe(value);
    });

    it('should be set by default', async() => {
      await setup('<ods-switch-item></ods-switch-item>');

      expect(root?.getAttribute('value')).toBeNull();
    });
  });
});
