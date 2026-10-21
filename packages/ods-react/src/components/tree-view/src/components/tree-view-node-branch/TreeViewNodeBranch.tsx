import { TreeView as VendorTreeView, useTreeViewNodeContext } from '@ark-ui/react/tree-view';
import { type ComponentPropsWithRef, type FC, type JSX, type KeyboardEvent, type ReactNode, forwardRef, useRef } from 'react';
import { Icon } from '../../../../icon/src';
import { ICON_NAME } from '../../../../icon/src/constants/icon-name';
import { type TreeViewCustomRendererArg, type TreeViewItem } from '../../contexts/useTreeView';
import { getNodeAriaChecked, toggleNodeCheckboxOnSpace, withoutVendorAttributes } from '../../controller/tree-view';
import { TreeViewNodeCheckbox } from '../tree-view-node-checkbox/TreeViewNodeCheckbox';
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
  const { checked, depth, expanded, selected } = useTreeViewNodeContext();
  const checkboxRef = useRef<HTMLSpanElement | null>(null);

  function handleKeyDown(e: KeyboardEvent<HTMLElement>): void {
    toggleNodeCheckboxOnSpace(e, multiple, isDisabled, checkboxRef);
  }

  // The vendor makes the wrapper the treeitem but moves the focus to the control, which takes the role
  return (
    <VendorTreeView.Branch
      className={ className }
      data-disabled={ isDisabled ? true : undefined }
      data-ods="tree-view-node-branch"
      onKeyDown={ handleKeyDown }
      ref={ ref }
      role="none"
      { ...withoutVendorAttributes('aria-busy', 'aria-disabled', 'aria-expanded', 'aria-level', 'aria-selected') }
      { ...props }>
      <VendorTreeView.BranchControl
        aria-checked={ multiple ? getNodeAriaChecked(checked) : undefined }
        aria-disabled={ isDisabled }
        aria-expanded={ expanded }
        aria-level={ depth }
        aria-selected={ multiple || isDisabled ? undefined : selected }
        className={ style['tree-view-node-branch__control'] }
        data-disabled={ isDisabled ? true : undefined }
        role="treeitem"
        tabIndex={ isDisabled ? -1 : undefined }>
        <VendorTreeView.BranchIndicator className={ style['tree-view-node-branch__control__chevron'] }>
          <Icon name={ ICON_NAME.chevronRight } />
        </VendorTreeView.BranchIndicator>

        { multiple ? (
          <TreeViewNodeCheckbox
            className={ style['tree-view-node-branch__control__checkbox'] }
            isDisabled={ isDisabled }
            ref={ checkboxRef }>
            <TreeViewNodeLabel item={ item }>
              { labelChildren }
            </TreeViewNodeLabel>
          </TreeViewNodeCheckbox>
        ) : (
          <TreeViewNodeLabel item={ item }>
            { labelChildren }
          </TreeViewNodeLabel>
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
