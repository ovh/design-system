import { TreeView as VendorTreeView } from '@ark-ui/react/tree-view';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type KeyboardEvent, type ReactNode, forwardRef, useRef } from 'react';
import { type TreeViewItem, useTreeView } from '../../contexts/useTreeView';
import { TreeViewNodeBranch } from '../tree-view-node-branch/TreeViewNodeBranch';
import { TreeViewNodeItem } from '../tree-view-node-item/TreeViewNodeItem';
import style from './treeViewNode.module.scss';

export type TreeViewCustomRendererArg<CustomData = Record<string, never>> = {
  customData?: CustomData;
  isBranch: boolean;
  isExpanded: boolean;
  item: TreeViewItem<CustomData>;
  name: string;
};

interface TreeViewNodeProp<CustomData = Record<string, never>> extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
  children?: ReactNode | ((arg: TreeViewCustomRendererArg<CustomData>) => JSX.Element);
  indexPath?: number[];
  item: TreeViewItem<CustomData>;
}

const TreeViewNode: FC<TreeViewNodeProp> = forwardRef(({
  children,
  className,
  indexPath,
  item,
  ...props
}, ref): JSX.Element => {
  const { multiple, disabled: globalDisabled, getIndexPathForId } = useTreeView();
  const byIdPath = getIndexPathForId(item.id);
  const effectiveIndexPath = byIdPath ?? indexPath ?? [];

  const isBranch = !!item.children?.length;
  const isDisabled = !!(globalDisabled || item.disabled);
  const processedItem = {
    ...item,
    disabled: isDisabled,
  };
  const checkboxRef = useRef<HTMLSpanElement | null>(null);
  function handleKeyDown(e: KeyboardEvent<HTMLElement>): void {
    if (!multiple || isDisabled) {
      return;
    }
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      checkboxRef.current?.click();
    }
  }

  return (
    <VendorTreeView.NodeProvider indexPath={ effectiveIndexPath } node={ processedItem }>
      { isBranch ? (
        <TreeViewNodeBranch
          className={ classNames(
            style['tree-view-node'],
            { [style['tree-view-node__item']]: !isBranch },
            className,
          ) }
          checkboxRef={ checkboxRef }
          nodeProps={ props }
          effectiveIndexPath={ effectiveIndexPath }
          getIndexPathForId={ getIndexPathForId }
          isDisabled={ isDisabled }
          item={ item }
          multiple={ multiple }
          nodeRef={ ref }
          labelChildren={ children }
          renderChildNode={ (child: TreeViewItem, childIndexPath: number[]) => (
            <TreeViewNode indexPath={ childIndexPath } item={ child } key={ child.id } />
          ) }
        />
      ) : (
        <TreeViewNodeItem
          className={ classNames(
            style['tree-view-node'],
            { [style['tree-view-node__item']]: !isBranch },
            className,
          ) }
          checkboxRef={ checkboxRef }
          nodeProps={ props }
          isDisabled={ isDisabled }
          item={ item }
          labelChildren={ children }
          multiple={ multiple }
          nodeRef={ ref }
          onKeyDown={ handleKeyDown }
        />
      ) }
    </VendorTreeView.NodeProvider>
  );
});

TreeViewNode.displayName = 'TreeViewNode';

export {
  TreeViewNode,
  type TreeViewNodeProp,
};
