import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsInput } from '../../src';

describe('ods-input rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsInput],
      html,
    });

    root = page.root;
  }

  describe('dummy', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-input dummy="${dummyValue}"></ods-input>`);

      expect(root?.getAttribute('dummy')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup(`<ods-input></ods-input>`);

      expect(root?.getAttribute('dummy')).toBeNull();
    });
  });
});
