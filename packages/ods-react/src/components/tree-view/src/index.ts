import { type TreeViewProp, TreeView as TreeViewRoot } from './components/tree-view/TreeView';
import { TreeViewNode, type TreeViewNodeProp } from './components/tree-view-node/TreeViewNode';
import { TreeViewNodes, type TreeViewNodesProp } from './components/tree-view-nodes/TreeViewNodes';

const TreeView = Object.assign(TreeViewRoot, {
  Node: TreeViewNode,
  Nodes: TreeViewNodes,
});

export { TreeView };
export { TreeViewNode, TreeViewNodes };
export type { TreeViewProp, TreeViewNodeProp, TreeViewNodesProp };
export { type TreeViewCustomRendererArg, type TreeViewExpandedChangeDetail, type TreeViewItem, type TreeViewValueChangeDetail } from './contexts/useTreeView';
