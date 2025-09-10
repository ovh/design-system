import { TreeView as VendorTreeView } from '@ark-ui/react/tree-view';
import { type ComponentPropsWithRef, type FC, type JSX, type Ref, type RefObject } from 'react';
import { type TreeViewItem } from '../../contexts/useTreeView';
import style from '../tree-view-node/treeViewNode.module.scss';
import { TreeViewNodeCheckboxIndicator } from '../tree-view-node-checkbox-indicator/TreeViewNodeCheckboxIndicator';
import { TreeViewNodeLabel } from '../tree-view-node-label/TreeViewNodeLabel';

type DOMDivProps = ComponentPropsWithRef<'div'>;

interface TreeViewNodeItemProps {
  className: string;
  checkboxRef: RefObject<HTMLSpanElement | null>;
  nodeProps: DOMDivProps;
  isDisabled: boolean;
  labelChildren?: unknown;
  item: TreeViewItem;
  multiple: boolean;
  nodeRef: Ref<HTMLDivElement>;
  onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
}

const TreeViewNodeItem: FC<TreeViewNodeItemProps> = ({
  className,
  checkboxRef,
  nodeProps,
  isDisabled,
  labelChildren,
  item,
  multiple,
  nodeRef,
  onKeyDown,
}): JSX.Element => {
  return (
    <VendorTreeView.Item
      aria-disabled={ isDisabled }
      className={ className }
      data-disabled={ isDisabled ? true : undefined }
      data-ods="tree-view-item"
      tabIndex={ isDisabled ? -1 : undefined }
      { ...nodeProps }
      ref={ nodeRef }
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
};

export { TreeViewNodeItem };

