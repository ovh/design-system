jest.mock('../../src/controller/ods-combobox');

import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { OdsComboboxGroup } from '../../src';

describe('ods-combobox-group rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsComboboxGroup],
      html,
    });

    root = page.root;
  }

  describe('id', () => {
    it('should be reflected', async() => {
      const dummyId = 'dummy id';

      await setup(`<ods-combobox-group id="${dummyId}"></ods-combobox-group>`);

      expect(root?.getAttribute('id')).toBe(dummyId);
    });

    it('should set a random default value if not set', async() => {
      await setup('<ods-combobox-group></ods-combobox-group>');

      expect(root?.getAttribute('id')).not.toBeNull();
    });
  });
});
