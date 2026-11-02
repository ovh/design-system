import { type CSSProperties } from 'react';
import { FileUpload, FileUploadItem, FileUploadList } from '../../src';

export default {
  component: FileUpload,
  title: 'Tests rendering',
};

export const render = () => {
  const dummyFile = new File(['foo'], 'foo.txt', { type: 'text/plain' });

  return (
    <FileUpload data-testid="render">
      <FileUploadList>
        <FileUploadItem file={ dummyFile } />
      </FileUploadList>
    </FileUpload>
  );
};

// Distinct values tell the hover ink of an error row from content-critical.
export const errorHover = () => {
  const dummyFile = new File(['foo'], 'foo.txt', { type: 'text/plain' });

  return (
    <FileUpload style={{
      '--ods-file-upload-item-text-color-critical-hover': 'rgb(1, 2, 3)',
      '--ods-semantic-color-content-critical': 'rgb(4, 5, 6)',
    } as CSSProperties}>
      <FileUploadList>
        <FileUploadItem
          data-testid="error-hover"
          error="Error"
          file={ dummyFile } />
      </FileUploadList>
    </FileUpload>
  );
};
