import { TreeView as VendorTreeView, useTreeViewNodeContext } from '@ark-ui/react/tree-view';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type KeyboardEvent, type ReactNode, forwardRef, useRef } from 'react';
import { type TreeViewCustomRendererArg, type TreeViewItem } from '../../contexts/useTreeView';
import { getNodeAriaChecked, toggleNodeCheckboxOnSpace, withoutVendorAttributes } from '../../controller/tree-view';
import { TreeViewNodeCheckbox } from '../tree-view-node-checkbox/TreeViewNodeCheckbox';
import { TreeViewNodeLabel } from '../tree-view-node-label/TreeViewNodeLabel';
import style from './treeViewNodeItem.module.scss';

interface TreeViewNodeItemProp extends ComponentPropsWithRef<'div'> {
  isDisabled: boolean;
  item: TreeViewItem;
  labelChildren?: ReactNode | ((arg: TreeViewCustomRendererArg) => ReactNode);
  multiple?: boolean;
}

const TreeViewNodeItem: FC<TreeViewNodeItemProp> = forwardRef(({
  className,
  isDisabled,
  item,
  labelChildren,
  multiple,
  ...props
}, ref): JSX.Element => {
  const { checked } = useTreeViewNodeContext();
  const checkboxRef = useRef<HTMLSpanElement | null>(null);

  function handleKeyDown(e: KeyboardEvent<HTMLElement>): void {
    toggleNodeCheckboxOnSpace(e, multiple, isDisabled, checkboxRef);
  }

  return (
    <VendorTreeView.Item
      aria-checked={ multiple ? getNodeAriaChecked(checked) : undefined }
      aria-disabled={ isDisabled }
      className={ classNames(
        style['tree-view-node-item'],
        className,
      )}
      data-disabled={ isDisabled ? true : undefined }
      data-ods="tree-view-node-item"
      onKeyDown={ handleKeyDown }
      ref={ ref }
      tabIndex={ isDisabled ? -1 : undefined }
      { ...(multiple ? withoutVendorAttributes('aria-selected') : {}) }
      { ...props }>
      { multiple ? (
        <TreeViewNodeCheckbox
          className={ style['tree-view-node-item__checkbox'] }
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
      )}
    </VendorTreeView.Item>
  );
});

export {
  TreeViewNodeItem,
};
