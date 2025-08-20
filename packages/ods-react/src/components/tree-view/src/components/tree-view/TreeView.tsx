import { TreeView as VendorTreeView, createTreeCollection } from '@ark-ui/react/tree-view';
import classNames from 'classnames';
import { Children, type ComponentPropsWithRef, type JSX, type ReactElement, forwardRef, isValidElement } from 'react';
import { type TreeViewItem } from '../tree-view-node/TreeViewNode';
import style from './treeView.module.scss';

interface TreeViewValueChangeDetail {
  selectedValue: string | string[];
  focusedValue?: string | null;
}

interface TreeViewProp extends ComponentPropsWithRef<'div'> {
  multiple?: boolean;
  onValueChange?: (details: TreeViewValueChangeDetail) => void;
}

const TreeView = forwardRef<HTMLDivElement, TreeViewProp>(({ className, children, multiple = false, onValueChange, ...props }, ref): JSX.Element => {
  const topLevelElements = Children.toArray(children).filter(isValidElement) as Array<ReactElement<{ item?: TreeViewItem }>>;

  const topLevelItems = topLevelElements
    .map((element) => element.props?.item)
    .filter(Boolean)
    .map((item) => ({
      ...item!,
      children: Array.isArray(item!.children) ? item!.children : [],
    }));

  const collection = createTreeCollection<TreeViewItem>({
    nodeToString: (node) => node?.name ?? '',
    nodeToValue: (node) => String(node?.id ?? ''),
    rootNode: { children: topLevelItems, id: 'ROOT', name: 'ROOT' },
  });

  const handleSelectionChange = (details: { focusedValue?: string | null; selectedValue: string | string[] }): void => {
    const d = details;
    let selectedValue: string | string[];
    if (Array.isArray(d.selectedValue)) {
      selectedValue = multiple ? d.selectedValue : (d.selectedValue[0] ?? '');
    } else {
      selectedValue = multiple ? [d.selectedValue] : d.selectedValue;
    }
    onValueChange?.({ focusedValue: d.focusedValue, selectedValue });
  };

  const handleCheckedChange = (details: { focusedValue?: string | null; checkedValue: string[] }): void => {
    const d = details;
    onValueChange?.({
      focusedValue: d.focusedValue,
      selectedValue: d.checkedValue,
    });
  };

  return (
    <VendorTreeView.Root
      collection={ collection }
      selectionMode={ multiple ? 'multiple' : 'single' }
      className={ classNames(style['tree-view'], className) }
      data-ods="tree-view"
      ref={ ref }
      { ...props }
      { ...(multiple ? { onCheckedChange: handleCheckedChange } : { onSelectionChange: handleSelectionChange }) }>
      <VendorTreeView.Tree data-ods="tree-view-tree">
        { children }
      </VendorTreeView.Tree>
    </VendorTreeView.Root>
  );
});

TreeView.displayName = 'TreeView';

export {
  TreeView,
  type TreeViewProp,
  type TreeViewValueChangeDetail,
};
