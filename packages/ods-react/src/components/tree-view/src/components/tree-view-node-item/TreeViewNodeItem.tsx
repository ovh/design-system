import { TreeView as VendorTreeView, useTreeViewContext } from '@ark-ui/react/tree-view';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type KeyboardEvent, type ReactNode, forwardRef, useRef } from 'react';
import { type TreeViewCustomRendererArg, type TreeViewItem } from '../../contexts/useTreeView';
import { toggleNodeCheckboxOnSpace } from '../../controller/tree-view';
import { TreeViewNodeCheckboxIndicator } from '../tree-view-node-checkbox-indicator/TreeViewNodeCheckboxIndicator';
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
  const { checkedValue } = useTreeViewContext();
  const checkboxRef = useRef<HTMLSpanElement | null>(null);

  const isChecked = checkedValue?.includes(item.id) ?? false;
  let ariaChecked: 'true' | 'false' | undefined;
  if (multiple) {
    ariaChecked = isChecked ? 'true' : 'false';
  } else {
    ariaChecked = undefined;
  }

  function handleKeyDown(e: KeyboardEvent<HTMLElement>): void {
    toggleNodeCheckboxOnSpace(e, multiple, isDisabled, checkboxRef);
  }

  return (
    <VendorTreeView.Item
      aria-checked={ ariaChecked }
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
      { ...props }>
      { multiple ? (
        <VendorTreeView.NodeCheckbox
          aria-disabled={ isDisabled }
          className={ style['tree-view-node-item__checkbox'] }
          data-disabled={ isDisabled ? true : undefined }
          ref={ checkboxRef }
          tabIndex={ -1 }>
          <TreeViewNodeCheckboxIndicator isDisabled={ isDisabled } />

          <TreeViewNodeLabel item={ item }>
            { labelChildren }
          </TreeViewNodeLabel>
        </VendorTreeView.NodeCheckbox>
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
