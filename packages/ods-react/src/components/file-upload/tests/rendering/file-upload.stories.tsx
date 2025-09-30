import { FileUpload, FileUploadItem, FileUploadList } from '../../src';

export default {
  component: FileUpload,
  title: 'Tests rendering',
};

export const render = () => {
  const dummyFile = new File(['foo'], 'foo.txt', { type: 'text/plain' });

  return (
    <FileUpload data-testid="render">
      <FileUploadList />

      <FileUploadItem file={ dummyFile } />
    </FileUpload>
  );
};
