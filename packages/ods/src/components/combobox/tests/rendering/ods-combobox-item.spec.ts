jest.mock('../../src/controller/ods-combobox');

import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { OdsComboboxItem } from '../../src';

describe('ods-combobox-item rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsComboboxItem],
      html,
    });

    root = page.root;
  }

  describe('searchLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox search-label="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('search-label')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('search-label')).toBeNull();
    });
  });

  describe('selectionLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox selection-label="${dummyValue}"></ods-combobox>`);

      expect(root?.getAttribute('selection-label')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox></ods-combobox>');

      expect(root?.getAttribute('selection-label')).toBeNull();
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
