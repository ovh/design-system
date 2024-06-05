import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { OdsFileUpload } from '../../src';

describe('ods-file-upload rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsFileUpload],
      html,
    });

    root = page.root;
  }

  describe('accept', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-file-upload accept="${dummyValue}"></ods-file-upload>`);

      expect(root?.getAttribute('accept')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-file-upload></ods-file-upload>');

      expect(root?.getAttribute('accept')).toBe('');
    });
  });

  describe('acceptedFileLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-file-upload accepted-file-label="${dummyValue}"></ods-file-upload>`);

      expect(root?.getAttribute('accepted-file-label')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-file-upload></ods-file-upload>');

      expect(root?.getAttribute('accepted-file-label')).toBe('Accepted files:');
    });
  });

  describe('browseFileLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-file-upload browse-file-label="${dummyValue}"></ods-file-upload>`);

      expect(root?.getAttribute('browse-file-label')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-file-upload></ods-file-upload>');

      expect(root?.getAttribute('browse-file-label')).toBe('Browse files');
    });
  });

  describe('dropzoneLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-file-upload dropzone-label="${dummyValue}"></ods-file-upload>`);

      expect(root?.getAttribute('dropzone-label')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-file-upload></ods-file-upload>');

      expect(root?.getAttribute('dropzone-label')).toBe('Drag & drop a file');
    });
  });

  describe('error', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-file-upload error="${dummyValue}"></ods-file-upload>`);

      expect(root?.getAttribute('error')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-file-upload></ods-file-upload>');

      expect(root?.getAttribute('error')).toBe('');
    });
  });

  describe('files', () => {
    it('should not be reflected', async() => {
      await setup('<ods-file-upload></ods-file-upload>');
      (root as unknown as OdsFileUpload).files = [{ name: 'file' } as File];

      expect(root?.getAttribute('files')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-file-upload is-disabled></ods-file-upload>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-file-upload></ods-file-upload>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('maxFile', () => {
    it('should be reflected', async() => {
      const dummyValue = 42;

      await setup(`<ods-file-upload max-files="${dummyValue}"></ods-file-upload>`);

      expect(root?.getAttribute('max-files')).toBe(`${dummyValue}`);
    });

    it('should not be set by default', async() => {
      await setup('<ods-file-upload></ods-file-upload>');

      expect(root?.getAttribute('max-files')).toBeNull();
    });
  });

  describe('uploadSuccessLabel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-file-upload upload-success-label="${dummyValue}"></ods-file-upload>`);

      expect(root?.getAttribute('upload-success-label')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-file-upload></ods-file-upload>');

      expect(root?.getAttribute('upload-success-label')).toBe('File uploaded');
    });
  });
});
