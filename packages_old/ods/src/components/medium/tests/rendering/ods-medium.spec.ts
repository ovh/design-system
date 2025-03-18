import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsMedium } from '../../src';

describe('ods-medium rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsMedium],
      html,
    });

    root = page.root;
  }

  describe('alt', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-medium alt="${dummyValue}"></ods-medium>`);

      expect(root?.getAttribute('alt')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-medium></ods-medium>');

      expect(root?.getAttribute('alt')).toBe('');
    });
  });

  describe('height', () => {
    it('should be reflected', async() => {
      const dummyValue = '42';

      await setup(`<ods-medium height="${dummyValue}"></ods-medium>`);

      expect(root?.getAttribute('height')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-medium></ods-medium>');

      expect(root?.getAttribute('height')).toBeNull();
    });
  });

  describe('src', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-medium src="${dummyValue}"></ods-medium>`);

      expect(root?.getAttribute('src')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-medium></ods-medium>');

      expect(root?.getAttribute('src')).toBeNull();
    });
  });

  describe('width', () => {
    it('should be reflected', async() => {
      const dummyValue = '33';

      await setup(`<ods-medium width="${dummyValue}"></ods-medium>`);

      expect(root?.getAttribute('width')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-medium></ods-medium>');

      expect(root?.getAttribute('width')).toBeNull();
    });
  });
});
