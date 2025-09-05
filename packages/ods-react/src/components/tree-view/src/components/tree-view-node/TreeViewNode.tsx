import { TreeView as VendorTreeView } from '@ark-ui/react/tree-view';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type KeyboardEvent, type ReactNode, forwardRef, useRef } from 'react';
import { Checkbox, CheckboxControl } from '../../../../checkbox/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { useTreeView } from '../../contexts/useTreeView';
import { useTreeViewNodes } from '../../contexts/useTreeViewNodes';
import style from './treeViewNode.module.scss';

export interface TreeViewItem<CustomData = Record<string, never>> {
  children?: Array<TreeViewItem<CustomData>>;
  customRendererData?: CustomData;
  disabled?: boolean;
  expanded?: boolean;
  icon?: ReactNode;
  id: string;
  name: string;
}

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
  const { multiple, disabled: globalDisabled } = useTreeView();
  const { indexPath: contextIndexPath } = useTreeViewNodes();
  const effectiveIndexPath = indexPath ?? contextIndexPath;

  const isBranch = !!item.children?.length;
  const isDisabled = !!(globalDisabled || item.disabled);
  const processedItem = {
    ...item,
    disabled: isDisabled,
  };
  const checkboxRef = useRef<HTMLLabelElement | null>(null);
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
  function renderCheckboxIndicator(isDisabled: boolean): JSX.Element {
    return (
      <VendorTreeView.NodeCheckboxIndicator
        fallback={
          <Checkbox checked={ false } disabled={ isDisabled }>
            <CheckboxControl />
          </Checkbox>
        }
        indeterminate={
          <Checkbox checked={ 'indeterminate' } disabled={ isDisabled }>
            <CheckboxControl />
          </Checkbox>
        }>
        <Checkbox checked disabled={ isDisabled }>
          <CheckboxControl />
        </Checkbox>
      </VendorTreeView.NodeCheckboxIndicator>
    );
  }
  function renderLabel(): JSX.Element {
    if (typeof children === 'function') {
      const renderer = children as (arg: TreeViewCustomRendererArg<unknown>) => JSX.Element;
      const content = renderer({
        customData: item.customRendererData,
        isBranch: !!item.children?.length,
        isExpanded: false,
        item,
        name: item.name,
      });

      if (isBranch) {
        return <VendorTreeView.BranchText>{ content }</VendorTreeView.BranchText>;
      }

      return multiple ? (
        <VendorTreeView.ItemText>{ content }</VendorTreeView.ItemText>
      ) : (
        <VendorTreeView.ItemText asChild>
          <span>{ content }</span>
        </VendorTreeView.ItemText>
      );
    }

    return isBranch ? (
      <VendorTreeView.BranchText>{ item.name }</VendorTreeView.BranchText>
    ) : (
      <VendorTreeView.ItemText>{ item.name }</VendorTreeView.ItemText>
    );
  }

  const baseClassName = isBranch
    ? classNames(style['tree-view-node'], className)
    : classNames(style['tree-view-node'], style['tree-view-node__item'], className);

  return (
    <VendorTreeView.NodeProvider node={ processedItem } indexPath={ effectiveIndexPath }>
      { isBranch ? (
        <VendorTreeView.Branch
          aria-disabled={ isDisabled }
          className={ baseClassName }
          data-disabled={ isDisabled ? true : undefined }
          data-ods="tree-view-node"
          ref={ ref }
          onKeyDown={ handleKeyDown }
          { ...props }>
          <VendorTreeView.BranchControl
            aria-disabled={ isDisabled }
            className={ style['tree-view-node__control'] }
            data-disabled={ isDisabled ? true : undefined }
            tabIndex={ isDisabled ? -1 : undefined }>
            <VendorTreeView.BranchIndicator
              className={ style['tree-view-node__chevron'] }>
              <Icon name={ ICON_NAME.chevronRight } />
            </VendorTreeView.BranchIndicator>
            { multiple ? (
              <VendorTreeView.NodeCheckbox
                aria-disabled={ isDisabled }
                className={ style['tree-view-node__checkbox'] }
                data-disabled={ isDisabled ? true : undefined }
                tabIndex={ -1 }
                ref={ checkboxRef }>
                { renderCheckboxIndicator(isDisabled) }
                { renderLabel() }
              </VendorTreeView.NodeCheckbox>
            ) : (
              <>
                { item.icon ? <span className={ style['tree-view-node__icon'] }>{ item.icon }</span> : null }
                { renderLabel() }
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

              return (
                <TreeViewNode
                  key={ child.id }
                  item={ child }
                  indexPath={ [...effectiveIndexPath, index] }
                />
              );
            }) }
          </VendorTreeView.BranchContent>
        </VendorTreeView.Branch>
      ) : (
        <VendorTreeView.Item
          aria-disabled={ isDisabled }
          className={ baseClassName }
          data-disabled={ isDisabled ? true : undefined }
          data-ods="tree-view-item"
          tabIndex={ isDisabled ? -1 : undefined }
          ref={ ref }
          onKeyDown={ handleKeyDown }
          { ...props }>
          { multiple ? (
            <VendorTreeView.NodeCheckbox
              aria-disabled={ isDisabled }
              className={ style['tree-view-node__checkbox'] }
              data-disabled={ isDisabled ? true : undefined }
              tabIndex={ -1 }
              ref={ checkboxRef }>
              { renderCheckboxIndicator(isDisabled) }
              { renderLabel() }
            </VendorTreeView.NodeCheckbox>
          ) : (
            <>
              { item.icon ? <span className={ style['tree-view-node__icon'] }>{ item.icon }</span> : null }
              { renderLabel() }
            </>
          ) }
        </VendorTreeView.Item>
      ) }
    </VendorTreeView.NodeProvider>
  );
});

TreeViewNode.displayName = 'TreeViewNode';

export {
  TreeViewNode,
  type TreeViewNodeProp,
};
