import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsOdsMeter } from '../../src';

describe('ods-ods-meter rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsOdsMeter],
      html,
    });

    root = page.root;
  }

  describe('dummy', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-ods-meter dummy="${dummyValue}"></ods-ods-meter>`);

      expect(root?.getAttribute('dummy')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-ods-meter></ods-ods-meter>');

      expect(root?.getAttribute('dummy')).toBeNull();
    });
  });
});
