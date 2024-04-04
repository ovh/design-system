import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsIcon } from '../../src';

describe('ods-icon rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsIcon],
      html,
    });

    root = page.root;
  }

  describe('alt', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy alt';

      await setup(`<ods-icon alt="${dummyValue}"></ods-icon>`);

      expect(root?.getAttribute('alt')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-icon></ods-icon>');

      expect(root?.getAttribute('alt')).toBe('');
    });
  });

  describe('name', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy name';

      await setup(`<ods-icon name="${dummyValue}"></ods-icon>`);

      expect(root?.getAttribute('name')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-icon></ods-icon>');

      expect(root?.getAttribute('name')).toBeNull();
    });
  });
});
