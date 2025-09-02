import { TreeView } from '../../src';

export default {
  component: TreeView,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <TreeView
    items={ [] }
    data-testid="custom-style"
    style={{ height: '42px' }} />
);

export const render = () => (
  <TreeView items={ [] } data-testid="render" />
);
