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

  describe('id', () => {
    it('should be reflected', async() => {
      const dummyId = 'dummy id';

      await setup(`<ods-combobox-item id="${dummyId}"></ods-combobox-item>`);

      expect(root?.getAttribute('id')).toBe(dummyId);
    });

    it('should set a random default value if not set', async() => {
      await setup('<ods-combobox-item></ods-combobox-item>');

      expect(root?.getAttribute('id')).not.toBeNull();
    });
  });

  describe('searchLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox-item search-label="${dummyValue}"></ods-combobox-item>`);

      expect(root?.getAttribute('search-label')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox-item></ods-combobox-item>');

      expect(root?.getAttribute('search-label')).toBeNull();
    });
  });

  describe('selectionLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox-item selection-label="${dummyValue}"></ods-combobox-item>`);

      expect(root?.getAttribute('selection-label')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox-item></ods-combobox-item>');

      expect(root?.getAttribute('selection-label')).toBeNull();
    });
  });

  describe('value', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-combobox-item value="${dummyValue}"></ods-combobox-item>`);

      expect(root?.getAttribute('value')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-combobox-item></ods-combobox-item>');

      expect(root?.getAttribute('value')).toBeNull();
    });
  });
});
