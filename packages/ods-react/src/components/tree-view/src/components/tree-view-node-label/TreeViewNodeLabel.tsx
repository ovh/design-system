import { TreeView as VendorTreeView, useTreeViewContext } from '@ark-ui/react/tree-view';
import { type FC, type JSX, type ReactNode } from 'react';
import { type TreeViewCustomRendererArg, type TreeViewItem } from '../../contexts/useTreeView';

interface TreeViewNodeLabelProp {
  children?: ReactNode | ((arg: TreeViewCustomRendererArg) => ReactNode);
  item: TreeViewItem;
}

const TreeViewNodeLabel: FC<TreeViewNodeLabelProp> = ({
  children,
  item,
}): JSX.Element => {
  const { expandedValue } = useTreeViewContext();
  const isExpanded = expandedValue?.includes(item.id) ?? false;

  if (typeof children === 'function') {
    const renderer = children as (arg: TreeViewCustomRendererArg) => JSX.Element;
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
};

export {
  TreeViewNodeLabel,
};
