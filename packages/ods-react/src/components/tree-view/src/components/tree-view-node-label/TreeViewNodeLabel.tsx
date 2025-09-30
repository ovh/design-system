import { TreeView as VendorTreeView, useTreeViewContext } from '@ark-ui/react/tree-view';
import { type JSX, type ReactNode } from 'react';
import { type TreeViewItem } from '../../contexts/useTreeView';

interface TreeViewNodeLabelProp<CustomData = Record<string, never>> {
  children?: ReactNode | ((arg: { customData?: CustomData, isBranch: boolean, isExpanded: boolean, item: TreeViewItem<CustomData> }) => JSX.Element);
  item: TreeViewItem<CustomData>;
  multiple: boolean;
}

function TreeViewNodeLabel<CustomData = Record<string, never>>({ children, item }: TreeViewNodeLabelProp<CustomData>): JSX.Element {
  const { expandedValue } = useTreeViewContext();
  const isExpanded = expandedValue?.includes(item.id) ?? false;
  if (typeof children === 'function') {
    const renderer = children as (arg: { customData?: CustomData, isBranch: boolean, isExpanded: boolean, item: TreeViewItem<CustomData> }) => JSX.Element;
    const content = renderer({
      customData: item.customRendererData,
      isBranch: !!item.children?.length,
      isExpanded,
      item,
    });

    if (item.children?.length) {
      return <VendorTreeView.BranchText asChild>{ content }</VendorTreeView.BranchText>;
    }

    return <VendorTreeView.ItemText asChild>{ content }</VendorTreeView.ItemText>;
  }

  return item.children?.length ? (
    <VendorTreeView.BranchText>{ item.name }</VendorTreeView.BranchText>
  ) : (
    <VendorTreeView.ItemText>{ item.name }</VendorTreeView.ItemText>
  );
}

export { TreeViewNodeLabel };