import { TreeView as VendorTreeView } from '@ark-ui/react/tree-view';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useMemo } from 'react';
import { type TreeViewItem, TreeViewProvider } from '../../contexts/useTreeView';
import { computeDefaultExpanded, createCollectionFromItems, normalizeSelectedOnChange } from '../../controller/tree-view';
import style from './treeView.module.scss';

interface TreeViewValueChangeDetail {
  value: string[];
}

interface TreeViewProp extends ComponentPropsWithRef<'div'> {
  defaultExpandAll?: boolean;
  defaultValue?: string[];
  disabled?: boolean;
  items: Array<TreeViewItem>;
  multiple?: boolean;
  onValueChange?: (details: TreeViewValueChangeDetail) => void;
  value?: string[];
}

const TreeView: FC<TreeViewProp> = forwardRef(({
  children,
  className,
  defaultExpandAll = false,
  defaultValue,
  disabled = false,
  items,
  multiple = false,
  onValueChange,
  value,
  ...props
}, ref): JSX.Element => {
  const collection = useMemo(() => createCollectionFromItems(items), [items]);

  const idToIndexPath = useMemo(() => {
    const map = new Map<string, number[]>();
    function visit(nodes: Array<TreeViewItem> | undefined, base: number[] = []): void {
      if (!nodes?.length) {
        return;
      }
      nodes.forEach((node, i) => {
        const path = [...base, i];
        map.set(node.id, path);
        if (node.children?.length) {
          visit(node.children, path);
        }
      });
    }
    visit(items, []);
    return map;
  }, [items]);

  const defaultExpandedValue = useMemo(() => (
    computeDefaultExpanded(items, { defaultExpandAll, defaultValue })
  ), [items, defaultExpandAll, defaultValue]);

  function handleSelectionChange(details: { selectedValue: string | string[] }): void {
    if (!onValueChange) {
      return;
    }
    const selectedValue = normalizeSelectedOnChange(details.selectedValue, multiple);
    const normalizedValue = Array.isArray(selectedValue) ? selectedValue : [selectedValue];
    onValueChange({ value: normalizedValue });
  }

  function handleCheckedChange(details: { checkedValue: string[] }): void {
    if (!onValueChange) {
      return;
    }
    onValueChange({ value: details.checkedValue });
  }

  return (
    <TreeViewProvider
      disabled={ disabled }
      multiple={ multiple }
      getIndexPathForId={ (id: string) => idToIndexPath.get(id) as number[] | undefined }>
      <VendorTreeView.Root
        className={ classNames(style['tree-view'], className) }
        collection={ collection }
        data-ods="tree-view"
        defaultExpandedValue={ defaultExpandedValue }
        ref={ ref }
        selectionMode={ multiple ? 'multiple' : 'single' }
        { ...(multiple
          ? {
            checkedValue: value,
            defaultCheckedValue: defaultValue,
            onCheckedChange: handleCheckedChange,
          }
          : {
            defaultSelectedValue: defaultValue,
            onSelectionChange: handleSelectionChange,
            selectedValue: value,
          }) }
        { ...props }>
        <VendorTreeView.Tree>
          { children }
        </VendorTreeView.Tree>
      </VendorTreeView.Root>
    </TreeViewProvider>
  );
});

TreeView.displayName = 'TreeView';

export {
  TreeView,
  type TreeViewProp,
  type TreeViewValueChangeDetail,
};
