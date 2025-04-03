import { type SpecPage, newSpecPage } from '@stencil/core/testing';
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

  describe('labelCopy', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-code label-copy="${dummyValue}"></ods-code>`);

      expect(root?.getAttribute('label-copy')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-code></ods-code>');

      expect(root?.getAttribute('label-copy')).toBe('Copy to clipboard');
    });
  });

  describe('labelCopySuccess', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-code label-copy-success="${dummyValue}"></ods-code>`);

      expect(root?.getAttribute('label-copy-success')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-code></ods-code>');

      expect(root?.getAttribute('label-copy-success')).toBe('Copied!');
    });
  });
});
