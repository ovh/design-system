import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsModal } from '../../src';

describe('ods-modal rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsModal],
      html,
    });

    root = page.root;
  }

  describe('dummy', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-modal dummy="${dummyValue}"></ods-modal>`);

      expect(root?.getAttribute('dummy')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-modal></ods-modal>');

      expect(root?.getAttribute('dummy')).toBeNull();
    });
  });
});
