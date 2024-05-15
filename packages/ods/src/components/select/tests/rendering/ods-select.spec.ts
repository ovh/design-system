import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsSelect } from '../../src';

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

  describe('dummy', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-select dummy="${dummyValue}"></ods-select>`);

      expect(root?.getAttribute('dummy')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-select></ods-select>');

      expect(root?.getAttribute('dummy')).toBeNull();
    });
  });
});
