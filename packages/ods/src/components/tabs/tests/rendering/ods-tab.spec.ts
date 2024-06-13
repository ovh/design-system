import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { OdsTab } from '../../src';

describe('ods-tab rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsTab],
      html,
    });

    root = page.root;
  }

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-tab is-disabled>Tab</ods-tab>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-tab>Tab</ods-tab>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isSelected', () => {
    it('should be reflected', async() => {
      await setup('<ods-tab is-selected>Tab</ods-tab>');

      expect(root?.getAttribute('is-selected')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-tab>Tab</ods-tab>');

      expect(root?.getAttribute('is-selected')).toBeNull();
    });
  });
});
