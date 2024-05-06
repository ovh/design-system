import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsClipboard } from '../../src';

describe('ods-clipboard rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsClipboard],
      html,
    });

    root = page.root;
  }

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-clipboard is-disabled></ods-clipboard>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-clipboard></ods-clipboard>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('labelCopy', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-clipboard label-copy="${dummyValue}"></ods-clipboard>`);

      expect(root?.getAttribute('label-copy')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-clipboard></ods-clipboard>');

      expect(root?.getAttribute('label-copy')).toBe('Copy to clipboard');
    });
  });

  describe('labelCopySuccess', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-clipboard label-copy-success="${dummyValue}"></ods-clipboard>`);

      expect(root?.getAttribute('label-copy-success')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-clipboard></ods-clipboard>');

      expect(root?.getAttribute('label-copy-success')).toBe('Copied!');
    });
  });

  describe('value', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-clipboard value="${dummyValue}"></ods-clipboard>`);

      expect(root?.getAttribute('value')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-clipboard></ods-clipboard>');

      expect(root?.getAttribute('value')).toBeNull();
    });
  });
});
