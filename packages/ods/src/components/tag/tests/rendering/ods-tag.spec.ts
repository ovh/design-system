import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_TAG_COLOR, ODS_TAG_SHAPE, ODS_TAG_SIZE, ODS_TAG_VARIANT, OdsTag } from '../../src';

describe('ods-tag rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsTag],
      html,
    });

    root = page.root;
  }

  describe('color', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-tag color="${dummyValue}">Dummy Tag</ods-tag>`);

      expect(root?.getAttribute('color')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-tag>Dummy Tag</ods-tag>');

      expect(root?.getAttribute('color')).toBe(ODS_TAG_COLOR.information);
    });
  });

  describe('icon', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-tag icon="${dummyValue}">Dummy Tag</ods-tag>`);

      expect(root?.getAttribute('icon')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-tag></ods-tag>');

      expect(root?.getAttribute('icon')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-tag is-disabled>Dummy Tag</ods-tag>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should render with expected default value', async() => {
      await setup('<ods-tag>Dummy Tag</ods-tag>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('label', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-tag label="${dummyValue}">Dummy Tag</ods-tag>`);

      expect(root?.getAttribute('label')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-tag></ods-tag>');

      expect(root?.getAttribute('label')).toBeNull();
    });
  });

  describe('shape', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-tag shape="${dummyValue}">Dummy Tag</ods-tag>`);

      expect(root?.getAttribute('shape')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-tag>Dummy Tag</ods-tag>');

      expect(root?.getAttribute('shape')).toBe(ODS_TAG_SHAPE.round);
    });
  });

  describe('size', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-tag size="${dummyValue}">Dummy Tag</ods-tag>`);

      expect(root?.getAttribute('size')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-tag>Dummy Tag</ods-tag>');

      expect(root?.getAttribute('size')).toBe(ODS_TAG_SIZE.md);
    });
  });

  describe('variant', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-tag variant="${dummyValue}">Dummy Tag</ods-tag>`);

      expect(root?.getAttribute('variant')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-tag>Dummy Button</ods-tag>');

      expect(root?.getAttribute('variant')).toBe(ODS_TAG_VARIANT.default);
    });
  });
});
