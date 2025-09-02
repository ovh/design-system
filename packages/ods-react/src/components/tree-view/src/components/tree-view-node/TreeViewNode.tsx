import { TreeView as VendorTreeView } from '@ark-ui/react/tree-view';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactNode, forwardRef, useRef } from 'react';
import { Checkbox, CheckboxControl } from '../../../../checkbox/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { useTreeView } from '../../contexts/useTreeView';
import { getCheckboxKeydownHandler } from '../../controller/tree-view';
import style from './treeViewNode.module.scss';

export interface TreeViewItem<TCustom = Record<string, never>> {
  id: string;
  name: string;
  children?: Array<TreeViewItem<TCustom>>;
  expanded?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  customRendererData?: TCustom;
}

export type TreeViewCustomRendererArg<TCustom = Record<string, never>> = {
  item: TreeViewItem<TCustom>;
  name: string;
  customData?: TCustom;
  isBranch: boolean;
  isExpanded: boolean;
};

interface TreeViewNodeProp<TCustom = Record<string, never>> extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
  children?: ReactNode | ((arg: TreeViewCustomRendererArg<TCustom>) => JSX.Element);
  indexPath?: number[];
  item: TreeViewItem<TCustom>;
}

const TreeViewNode: FC<TreeViewNodeProp> = forwardRef(({
  children,
  className,
  indexPath = [],
  item,
  ...props
}, ref): JSX.Element => {
  const { multiple } = useTreeView();
  const checkboxRef = useRef<HTMLLabelElement | null>(null);
  const handleKeyDown = getCheckboxKeydownHandler({ checkboxRef, multiple });
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
    return (
      <VendorTreeView.NodeContext>
        { ({ isBranch, expanded }) => {
          if (typeof children === 'function') {
            const renderer = children as (arg: TreeViewCustomRendererArg) => JSX.Element;
            const content = renderer({
              customData: item.customRendererData,
              isBranch,
              isExpanded: expanded,
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

          // Default rendering when no custom renderer
          return isBranch ? (
            <VendorTreeView.BranchText>{ item.name }</VendorTreeView.BranchText>
          ) : (
            <VendorTreeView.ItemText>{ item.name }</VendorTreeView.ItemText>
          );
        } }
      </VendorTreeView.NodeContext>
    );
  }

  return (
    <VendorTreeView.NodeProvider node={ item } indexPath={ indexPath }>
      <VendorTreeView.NodeContext>
        { ({ isBranch, disabled: nodeDisabled }) => {
          const isDisabled = nodeDisabled;
          const onNodeKeyDown = multiple && !isDisabled ? handleKeyDown : undefined;
          const baseClassName = isBranch
            ? classNames(style['tree-view-node'], className)
            : classNames(style['tree-view-node'], style['tree-view-node__item'], className);

          if (isBranch) {
            return (
              <VendorTreeView.Branch
                aria-disabled={ isDisabled }
                className={ baseClassName }
                data-disabled={ isDisabled }
                data-ods="tree-view-node"
                ref={ ref }
                { ...props }>
                <VendorTreeView.BranchControl
                  aria-disabled={ isDisabled }
                  className={ style['tree-view-node__control'] }
                  data-disabled={ isDisabled }
                  onKeyDown={ onNodeKeyDown }>
                  <VendorTreeView.BranchIndicator
                    className={ style['tree-view-node__chevron'] }>
                    <Icon name={ ICON_NAME.chevronRight } />
                  </VendorTreeView.BranchIndicator>
                  { multiple ? (
                    <VendorTreeView.NodeCheckbox
                      aria-disabled={ isDisabled }
                      className={ style['tree-view-node__checkbox'] }
                      data-disabled={ isDisabled }
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
                  { item.children?.map((child, index) => {
                    // Validate child item before rendering
                    if (!child?.id || !child?.name) {
                      console.warn(`TreeViewNode: Skipping invalid child item at index ${index}`);
                      return null;
                    }

                    return (
                      <TreeViewNode
                        key={ child.id }
                        item={ child }
                        indexPath={ [...indexPath, index] }
                      />
                    );
                  }) }
                </VendorTreeView.BranchContent>
              </VendorTreeView.Branch>
            );
          }

          return (
            <VendorTreeView.Item
              aria-disabled={ isDisabled }
              className={ baseClassName }
              data-disabled={ isDisabled }
              data-ods="tree-view-item"
              onKeyDown={ onNodeKeyDown }
              ref={ ref }
              { ...props }>
              { multiple ? (
                <VendorTreeView.NodeCheckbox
                  aria-disabled={ isDisabled }
                  className={ style['tree-view-node__checkbox'] }
                  data-disabled={ isDisabled }
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
          );
        } }
      </VendorTreeView.NodeContext>
    </VendorTreeView.NodeProvider>
  );
});

TreeViewNode.displayName = 'TreeViewNode';

export {
  TreeViewNode,
  type TreeViewNodeProp,
};
