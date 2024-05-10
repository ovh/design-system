import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsCode } from '../../src';

describe('ods-code rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsCode],
      html,
    });

    root = page.root;
  }

  describe('canCopy', () => {
    it('should be reflected', async() => {
      await setup('<ods-code can-copy></ods-code>');

      expect(root?.getAttribute('can-copy')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-code></ods-code>');

      expect(root?.getAttribute('can-copy')).toBeNull();
    });
  });
});
