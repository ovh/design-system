import { TreeView as VendorTreeView, useTreeViewContext } from '@ark-ui/react/tree-view';
import { type ComponentPropsWithRef, type FC, type JSX, type KeyboardEventHandler, type Ref, type RefObject, forwardRef } from 'react';
import { type TreeViewItem } from '../../contexts/useTreeView';
import style from '../tree-view-node/treeViewNode.module.scss';
import { TreeViewNodeCheckboxIndicator } from '../tree-view-node-checkbox-indicator/TreeViewNodeCheckboxIndicator';
import { TreeViewNodeLabel } from '../tree-view-node-label/TreeViewNodeLabel';

interface TreeViewNodeItemProp extends ComponentPropsWithRef<'div'> {
  checkboxRef: RefObject<HTMLSpanElement | null>;
  isDisabled: boolean;
  labelChildren?: unknown;
  item: TreeViewItem;
  multiple: boolean;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
}

const TreeViewNodeItem: FC<TreeViewNodeItemProp> = forwardRef(({
  className,
  checkboxRef,
  isDisabled,
  labelChildren,
  item,
  multiple,
  onKeyDown,
  ...props
}, ref): JSX.Element => {
  const { checkedValue } = useTreeViewContext();
  const isChecked = checkedValue?.includes(item.id) ?? false;
  let ariaChecked: 'true' | 'false' | undefined;
  if (multiple) {
    ariaChecked = isChecked ? 'true' : 'false';
  } else {
    ariaChecked = undefined;
  }

  return (
    <VendorTreeView.Item
      aria-checked={ ariaChecked }
      aria-disabled={ isDisabled }
      className={ className }
      data-disabled={ isDisabled ? true : undefined }
      data-ods="tree-view-item"
      tabIndex={ isDisabled ? -1 : undefined }
      { ...props }
      ref={ ref }
      onKeyDown={ onKeyDown }>
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
    </VendorTreeView.Item>
  );
});

export { TreeViewNodeItem };

