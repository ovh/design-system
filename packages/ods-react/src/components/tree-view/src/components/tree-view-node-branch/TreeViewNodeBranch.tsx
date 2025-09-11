import { TreeView as VendorTreeView } from '@ark-ui/react/tree-view';
import { type ComponentPropsWithRef, type FC, type JSX, type Ref, type RefObject } from 'react';
import { type TreeViewItem } from '../../contexts/useTreeView';
import style from '../tree-view-node/treeViewNode.module.scss';
import { TreeViewNodeCheckboxIndicator } from '../tree-view-node-checkbox-indicator/TreeViewNodeCheckboxIndicator';
import { TreeViewNodeLabel } from '../tree-view-node-label/TreeViewNodeLabel';

type DOMDivProps = ComponentPropsWithRef<'div'>;

interface TreeViewNodeBranchProps {
  className: string;
  checkboxRef: RefObject<HTMLSpanElement | null>;
  nodeProps: DOMDivProps;
  effectiveIndexPath: number[];
  /** @internal */
  getIndexPathForId: (id: string) => number[] | undefined;
  isDisabled: boolean;
  labelChildren?: unknown;
  item: TreeViewItem;
  multiple: boolean;
  nodeRef: Ref<HTMLDivElement>;
  renderChildNode: (child: TreeViewItem, childIndexPath: number[]) => JSX.Element;
}

const TreeViewNodeBranch: FC<TreeViewNodeBranchProps> = ({
  className,
  checkboxRef,
  nodeProps,
  effectiveIndexPath,
  getIndexPathForId,
  isDisabled,
  item,
  multiple,
  nodeRef,
  labelChildren,
  renderChildNode,
}): JSX.Element => {
  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>): void {
    if (!multiple || isDisabled) {
      return;
    }
    if (e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      checkboxRef.current?.click();
    }
  }
  return (
    <VendorTreeView.Branch
      aria-disabled={ isDisabled }
      className={ className }
      data-disabled={ isDisabled ? true : undefined }
      data-ods="tree-view-node"
      { ...nodeProps }
      ref={ nodeRef }
      onKeyDown={ handleKeyDown }>
      <VendorTreeView.BranchControl
        aria-disabled={ isDisabled }
        className={ style['tree-view-node__control'] }
        data-disabled={ isDisabled ? true : undefined }
        tabIndex={ isDisabled ? -1 : undefined }>
        <VendorTreeView.BranchIndicator
          className={ style['tree-view-node__chevron'] }>
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            focusable="false"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </VendorTreeView.BranchIndicator>
        { multiple ? (
          <VendorTreeView.NodeCheckbox
            aria-disabled={ isDisabled }
            className={ style['tree-view-node__checkbox'] }
            data-disabled={ isDisabled ? true : undefined }
            tabIndex={ -1 }
            ref={ checkboxRef as unknown as Ref<HTMLSpanElement> }>
            <TreeViewNodeCheckboxIndicator isDisabled={ isDisabled } />
            <TreeViewNodeLabel item={ item } multiple={ multiple }>
              { labelChildren as never }
            </TreeViewNodeLabel>
          </VendorTreeView.NodeCheckbox>
        ) : (
          <>
            <TreeViewNodeLabel item={ item } multiple={ multiple }>
              { labelChildren as never }
            </TreeViewNodeLabel>
          </>
        ) }
      </VendorTreeView.BranchControl>
      <VendorTreeView.BranchContent
        className={ style['tree-view-node__children'] }>
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
};

export { TreeViewNodeBranch };

