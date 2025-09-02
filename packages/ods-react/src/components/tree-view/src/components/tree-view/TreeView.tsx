import type { TreeViewI18n } from '../../contexts/useTreeView';
import { TreeView as VendorTreeView } from '@ark-ui/react/tree-view';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type JSX, type Ref, forwardRef, useMemo } from 'react';
import { TreeViewProvider } from '../../contexts/useTreeView';
import { computeDefaultExpanded, createCollectionFromItems, normalizeSelectedOnChange, normalizeToArray } from '../../controller/tree-view';
import { type TreeViewItem } from '../tree-view-node/TreeViewNode';
import style from './treeView.module.scss';

interface TreeViewValueChangeDetail {
  /** Selected value(s) normalized to a string or an array of strings */
  selectedValue: string | string[];
}

interface TreeViewProp<TCustom = Record<string, never>> extends ComponentPropsWithRef<'div'> {
  /** Expand all nodes by default on mount (uncontrolled). */
  defaultExpandAll?: boolean;
  /** Uncontrolled initial selected value(s). */
  defaultValue?: string | string[];
  /** i18n labels for aria and UI. */
  i18n?: TreeViewI18n;
  /** Tree items to render. */
  items: Array<TreeViewItem<TCustom>>;
  /** Enable multiple selection mode. */
  multiple?: boolean;
  /** Callback fired when selection changes. */
  onValueChange?: (details: TreeViewValueChangeDetail) => void;
  /** Controlled selected value(s). For multiple mode, provide an array. */
  value?: string | string[];
}

const TreeView = forwardRef(function TreeView<TCustom = Record<string, never>>(
  { children, className, defaultExpandAll = false, defaultValue, i18n, items, multiple = false, onValueChange, value, ...props }: TreeViewProp<TCustom>,
  ref: Ref<HTMLDivElement>,
): JSX.Element {
  const collection = useMemo(() => createCollectionFromItems(items), [items]);

  const defaultExpandedValue = useMemo(() => (
    computeDefaultExpanded(items, { defaultExpandAll, defaultValue, value })
  ), [items, defaultExpandAll, defaultValue, value]);

  function handleSelectionChange(details: { selectedValue: string | string[] }): void {
    const selectedValue = normalizeSelectedOnChange(details.selectedValue, multiple);
    onValueChange?.({ selectedValue });
  }

  function handleCheckedChange(details: { checkedValue: string[] }): void {
    onValueChange?.({ selectedValue: details.checkedValue });
  }

  const controlledArray = normalizeToArray(value);
  const defaultArray = normalizeToArray(defaultValue);

  return (
    <TreeViewProvider i18n={ i18n } multiple={ multiple }>
      <VendorTreeView.Root
        className={ classNames(style['tree-view'], className) }
        collection={ collection }
        data-ods="tree-view"
        defaultExpandedValue={ defaultExpandedValue }
        ref={ ref }
        selectionMode={ multiple ? 'multiple' : 'single' }
        { ...props }
        { ...(multiple
          ? {
            checkedValue: controlledArray,
            defaultCheckedValue: defaultArray,
            onCheckedChange: handleCheckedChange,
          }
          : {
            defaultSelectedValue: defaultArray,
            onSelectionChange: handleSelectionChange,
            selectedValue: controlledArray,
          }) }>
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
