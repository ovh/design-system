import type { TreeViewItem } from '../../contexts/useTreeView';
import type { JSX, ReactNode } from 'react';
import { TreeView as VendorTreeView, useTreeViewContext } from '@ark-ui/react/tree-view';

interface TreeViewNodeLabelProps<CustomData = Record<string, never>> {
  children?: ReactNode | ((arg: { customData?: CustomData, isBranch: boolean, isExpanded: boolean, item: TreeViewItem<CustomData>, name: string }) => JSX.Element);
  item: TreeViewItem<CustomData>;
  multiple: boolean;
}

function TreeViewNodeLabel<CustomData = Record<string, never>>({ children, item, multiple }: TreeViewNodeLabelProps<CustomData>): JSX.Element {
  const { expandedValue } = useTreeViewContext();
  const isExpanded = expandedValue?.includes(item.id) ?? false;
  if (typeof children === 'function') {
    const renderer = children as (arg: { customData?: CustomData, isBranch: boolean, isExpanded: boolean, item: TreeViewItem<CustomData>, name: string }) => JSX.Element;
    const content = renderer({
      customData: item.customRendererData,
      isBranch: !!item.children?.length,
      isExpanded,
      item,
      name: item.name,
    });

    if (item.children?.length) {
      return <VendorTreeView.BranchText>{ content }</VendorTreeView.BranchText>;
    }

    return multiple ? (
      <VendorTreeView.ItemText>{ content }</VendorTreeView.ItemText>
    ) : (
      <VendorTreeView.ItemText asChild>
        <span>{ content }</span>
      </VendorTreeView.ItemText>
    );
  }

  return item.children?.length ? (
    <VendorTreeView.BranchText>{ item.name }</VendorTreeView.BranchText>
  ) : (
    <VendorTreeView.ItemText>{ item.name }</VendorTreeView.ItemText>
  );
}

export { TreeViewNodeLabel };

