jest.mock('tom-select');
jest.mock('../../src/controller/ods-select', () => ({
  getInitialValue: jest.fn(),
  getSelectConfig: (): SelectConfig => {
    return { plugin: {}, template: {} } ;
  },
  inlineValue: jest.fn(),
  moveSlottedElements: jest.fn(),
  setFormValue: jest.fn(),
  setSelectValue: jest.fn(),
}));

import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { ODS_SELECT_STRATEGY, OdsSelect } from '../../src';
import { type SelectConfig } from '../../src/controller/ods-select';

describe('ods-select rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsSelect],
      html,
    });

    root = page.root;
  }

  describe('allowMultiple', () => {
    it('should be reflected', async() => {
      await setup('<ods-select allow-multiple></ods-select>');

      expect(root?.getAttribute('allow-multiple')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-select></ods-select>');

      expect(root?.getAttribute('allow-multiple')).toBeNull();
    });
  });

  describe('ariaLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-select aria-label="${dummyValue}"></ods-select>`);

      expect(root?.getAttribute('aria-label')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-select></ods-select>');

      expect(root?.getAttribute('aria-label')).toBeNull();
    });
  });

  describe('ariaLabelledby', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-select aria-labelledby="${dummyValue}"></ods-select>`);

      expect(root?.getAttribute('aria-labelledby')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-select></ods-select>');

      expect(root?.getAttribute('aria-labelledby')).toBeNull();
    });
  });

  describe('customRenderer', () => {
    it('should not be reflected', async() => {
      await setup('<ods-select></ods-select>');
      (root as unknown as OdsSelect).customRenderer = { item: (): string => '' };

      expect(root?.getAttribute('custom-renderer')).toBeNull();
    });
  });

  describe('defaultValue', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-select default-value="${dummyValue}"></ods-select>`);

      expect(root?.getAttribute('default-value')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-select></ods-select>');

      expect(root?.getAttribute('default-value')).toBeNull();
    });
  });

  describe('hasError', () => {
    it('should be reflected', async() => {
      await setup('<ods-select has-error></ods-select>');

      expect(root?.getAttribute('has-error')).toBe('');
    });

    it('should render with expected default value', async() => {
      await setup('<ods-select></ods-select>');

      expect(root?.getAttribute('has-error')).toBeNull();
    });

    it('should add correct class if set', async() => {
      await setup('<ods-select has-error></ods-select>');

      expect(root?.classList.contains('ods-select--error')).toBe(true);
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-select is-disabled></ods-select>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-select></ods-select>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isRequired', () => {
    it('should be reflected', async() => {
      await setup('<ods-select is-required></ods-select>');

      expect(root?.getAttribute('is-required')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-select></ods-select>');

      expect(root?.getAttribute('is-required')).toBeNull();
    });
  });

  describe('multipleSelectionLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-select multiple-selection-label="${dummyValue}"></ods-select>`);

      expect(root?.getAttribute('multiple-selection-label')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-select></ods-select>');

      expect(root?.getAttribute('multiple-selection-label')).toBe('Selected item');
    });
  });

  describe('name', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-select name="${dummyValue}"></ods-select>`);

      expect(root?.getAttribute('name')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-select></ods-select>');

      expect(root?.getAttribute('name')).toBeNull();
    });
  });

  describe('placeholder', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-select placeholder="${dummyValue}"></ods-select>`);

      expect(root?.getAttribute('placeholder')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-select></ods-select>');

      expect(root?.getAttribute('placeholder')).toBeNull();
    });
  });

  describe('strategy', () => {
    it('should be reflected', async() => {
      const strategyValue = ODS_SELECT_STRATEGY.fixed;

      await setup(`<ods-select strategy="${strategyValue}"></ods-select>`);

      expect(root?.getAttribute('strategy')).toBe(strategyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-select></ods-select>');

      expect(root?.getAttribute('strategy')).toBe(ODS_SELECT_STRATEGY.absolute);
    });
  });

  describe('value', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-select value="${dummyValue}"></ods-select>`);

      expect(root?.getAttribute('value')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-select></ods-select>');

      expect(root?.getAttribute('value')).toBeNull();
    });
  });
});
