import { TreeView as VendorTreeView, useTreeViewContext } from '@ark-ui/react/tree-view';
import { type ComponentPropsWithRef, type FC, type JSX, type KeyboardEvent, type ReactNode, forwardRef, useRef } from 'react';
import { Icon } from '../../../../icon/src';
import { ICON_NAME } from '../../../../icon/src/constants/icon-name';
import { type TreeViewCustomRendererArg, type TreeViewItem } from '../../contexts/useTreeView';
import { toggleNodeCheckboxOnSpace } from '../../controller/tree-view';
import { TreeViewNodeCheckboxIndicator } from '../tree-view-node-checkbox-indicator/TreeViewNodeCheckboxIndicator';
import { TreeViewNodeLabel } from '../tree-view-node-label/TreeViewNodeLabel';
import style from './treeViewNodeBranch.module.scss';

interface TreeViewNodeBranchProp extends ComponentPropsWithRef<'div'> {
  effectiveIndexPath: number[];
  getIndexPathForId: (id: string) => number[] | undefined;
  isDisabled: boolean;
  item: TreeViewItem;
  labelChildren?: ReactNode | ((arg: TreeViewCustomRendererArg) => ReactNode);
  multiple?: boolean;
  renderChildNode: (child: TreeViewItem, childIndexPath: number[]) => JSX.Element;
}

const TreeViewNodeBranch: FC<TreeViewNodeBranchProp> = forwardRef(({
  className,
  effectiveIndexPath,
  getIndexPathForId,
  isDisabled,
  item,
  multiple,
  labelChildren,
  renderChildNode,
  ...props
}, ref): JSX.Element => {
  const { checkedValue } = useTreeViewContext();
  const checkboxRef = useRef<HTMLSpanElement | null>(null);

  const dataState = checkboxRef.current?.getAttribute('data-state');
  let ariaChecked: 'true' | 'false' | 'mixed' | undefined;
  if (multiple) {
    if (dataState === 'indeterminate') {
      ariaChecked = 'mixed';
    } else if (dataState === 'checked') {
      ariaChecked = 'true';
    } else {
      ariaChecked = checkedValue?.includes(item.id) ? 'true' : 'false';
    }
  } else {
    ariaChecked = undefined;
  }

  function handleKeyDown(e: KeyboardEvent<HTMLElement>): void {
    toggleNodeCheckboxOnSpace(e, multiple, isDisabled, checkboxRef);
  }

  return (
    <VendorTreeView.Branch
      aria-disabled={ isDisabled }
      className={ className }
      data-disabled={ isDisabled ? true : undefined }
      data-ods="tree-view-node-branch"
      onKeyDown={ handleKeyDown }
      ref={ ref }
      { ...props }>
      <VendorTreeView.BranchControl
        aria-checked={ ariaChecked }
        aria-disabled={ isDisabled }
        className={ style['tree-view-node-branch__control'] }
        data-disabled={ isDisabled ? true : undefined }
        role="checkbox"
        tabIndex={ isDisabled ? -1 : undefined }>
        <VendorTreeView.BranchIndicator className={ style['tree-view-node-branch__control__chevron'] }>
          <Icon name={ ICON_NAME.chevronRight } />
        </VendorTreeView.BranchIndicator>

        { multiple ? (
          <VendorTreeView.NodeCheckbox
            aria-disabled={ isDisabled }
            className={ style['tree-view-node-branch__control__checkbox'] }
            data-disabled={ isDisabled ? true : undefined }
            tabIndex={ -1 }
            ref={ checkboxRef }>
            <TreeViewNodeCheckboxIndicator isDisabled={ isDisabled } />

            <TreeViewNodeLabel item={ item }>
              { labelChildren }
            </TreeViewNodeLabel>
          </VendorTreeView.NodeCheckbox>
        ) : (
          <>
            <TreeViewNodeLabel item={ item }>
              { labelChildren }
            </TreeViewNodeLabel>
          </>
        ) }
      </VendorTreeView.BranchControl>

      <VendorTreeView.BranchContent
        className={ style['tree-view-node-branch__control__children'] }>
        <VendorTreeView.BranchIndentGuide />
        { item.children?.map((child, index) => {
          if (!child?.id || !child?.name) {
            return null;
          }

          const childIndexPath = getIndexPathForId(child.id) ?? [...effectiveIndexPath, index];
          return renderChildNode(child, childIndexPath);
        }) }
      </VendorTreeView.BranchContent>
    </VendorTreeView.Branch>
  );
});

export { TreeViewNodeBranch };

