import { TreeView as VendorTreeView } from '@ark-ui/react/tree-view';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactNode, forwardRef } from 'react';
import { type TreeViewCustomRendererArg, type TreeViewItem, useTreeView } from '../../contexts/useTreeView';
import { TreeViewNodeBranch } from '../tree-view-node-branch/TreeViewNodeBranch';
import { TreeViewNodeItem } from '../tree-view-node-item/TreeViewNodeItem';
// TODO fix style (selection / icon rotation / ...) then remove treeViewNode.module.scss file
// import style from './treeViewNode.module.scss';

interface TreeViewNodeProp extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
  children?: ReactNode | ((arg: TreeViewCustomRendererArg) => ReactNode);
  indexPath?: number[];
  item: TreeViewItem;
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

  return (
    <VendorTreeView.NodeProvider
      indexPath={ effectiveIndexPath }
      node={ processedItem }>
      { isBranch ? (
        <TreeViewNodeBranch
          className={ className }
          effectiveIndexPath={ effectiveIndexPath }
          getIndexPathForId={ getIndexPathForId }
          isDisabled={ isDisabled }
          item={ item }
          labelChildren={ children }
          multiple={ multiple }
          renderChildNode={ (child: TreeViewItem, childIndexPath: number[]) => (
            <TreeViewNode indexPath={ childIndexPath } item={ child } key={ child.id }>
              { children }
            </TreeViewNode>
          ) }
          { ...props }
          ref={ ref }
        />
      ) : (
        <TreeViewNodeItem
          className={ className }
          isDisabled={ isDisabled }
          item={ item }
          labelChildren={ children }
          multiple={ multiple }
          { ...props }
          ref={ ref }
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
