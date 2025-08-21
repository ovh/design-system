import { TreeView } from '../../src';

export default {
  component: TreeView,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <TreeView
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <TreeView data-testid="render" />
);
