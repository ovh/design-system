import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsLink } from '../../src';

describe('ods-link rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsLink],
      html,
    });

    root = page.root;
  }

  describe('dummy', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-link dummy="${dummyValue}"></ods-link>`);

      expect(root?.getAttribute('dummy')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup(`<ods-link></ods-link>`);

      expect(root?.getAttribute('dummy')).toBeNull();
    });
  });
});
