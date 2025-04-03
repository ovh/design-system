import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { OdsFileUploadItem } from '../../src/components/ods-file-upload-item/ods-file-upload-item';

describe('ods-file-upload rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsFileUploadItem],
      html,
    });

    root = page.root;
  }

  describe('cancelHandler', () => {
    it('should not be reflected', async() => {
      await setup('<ods-file-upload-item></ods-file-upload-item>');
      (root as unknown as OdsFileUploadItem).cancelHandler = (): void => {};

      expect(root?.getAttribute('cancel-handler')).toBeNull();
    });
  });

  describe('error', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-file-upload-item error="${dummyValue}"></ods-file-upload-item>`);

      expect(root?.getAttribute('error')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-file-upload-item></ods-file-upload-item>');

      expect(root?.getAttribute('error')).toBe('');
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-file-upload-item is-disabled></ods-file-upload-item>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-file-upload-item></ods-file-upload-item>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isUploaded', () => {
    it('should be reflected', async() => {
      await setup('<ods-file-upload-item is-uploaded></ods-file-upload-item>');

      expect(root?.getAttribute('is-uploaded')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-file-upload-item></ods-file-upload-item>');

      expect(root?.getAttribute('is-uploaded')).toBeNull();
    });
  });

  describe('name', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-file-upload-item name="${dummyValue}"></ods-file-upload-item>`);

      expect(root?.getAttribute('name')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-file-upload-item></ods-file-upload-item>');

      expect(root?.getAttribute('name')).toBeNull();
    });
  });

  describe('progress', () => {
    it('should be reflected', async() => {
      const dummyValue = 42;

      await setup(`<ods-file-upload-item progress="${dummyValue}"></ods-file-upload-item>`);

      expect(root?.getAttribute('progress')).toBe(`${dummyValue}`);
    });

    it('should not be set by default', async() => {
      await setup('<ods-file-upload-item></ods-file-upload-item>');

      expect(root?.getAttribute('progress')).toBeNull();
    });
  });

  describe('size', () => {
    it('should be reflected', async() => {
      const dummyValue = 42;

      await setup(`<ods-file-upload-item size="${dummyValue}"></ods-file-upload-item>`);

      expect(root?.getAttribute('size')).toBe(`${dummyValue}`);
    });

    it('should not be set by default', async() => {
      await setup('<ods-file-upload-item></ods-file-upload-item>');

      expect(root?.getAttribute('size')).toBeNull();
    });
  });

  describe('successLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-file-upload-item success-label="${dummyValue}"></ods-file-upload-item>`);

      expect(root?.getAttribute('success-label')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-file-upload-item></ods-file-upload-item>');

      expect(root?.getAttribute('success-label')).toBeNull();
    });
  });
});
