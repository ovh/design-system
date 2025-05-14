import { FileUpload, FileUploadList } from '../../src';

export default {
  component: FileUpload,
  title: 'Tests rendering',
};

export const render = () => (
  <FileUpload data-testid="render">
    <FileUploadList />
  </FileUpload>
);
