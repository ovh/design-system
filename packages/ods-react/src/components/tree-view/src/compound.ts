import { type TreeViewProp, TreeView as TreeViewRoot } from './components/tree-view/TreeView';
import { TreeViewNode, type TreeViewNodeProp } from './components/tree-view-node/TreeViewNode';
import { TreeViewNodes, type TreeViewNodesProp } from './components/tree-view-nodes/TreeViewNodes';

const TreeView = {
  Node: TreeViewNode,
  Nodes: TreeViewNodes,
  Root: TreeViewRoot,
};

export { TreeView };
export type { TreeViewProp, TreeViewNodeProp, TreeViewNodesProp };
export { type TreeViewCustomRendererArg, type TreeViewExpandedChangeDetail, type TreeViewItem, type TreeViewValueChangeDetail } from './contexts/useTreeView';
