import { FileThumbnail } from '../../src';

export default {
  component: FileThumbnail,
  title: 'Tests rendering',
};

const dummyFile = new File(['foo'], 'foo.txt', { type: 'text/plain' });

export const render = () => (
  <FileThumbnail file={ dummyFile } />
);
