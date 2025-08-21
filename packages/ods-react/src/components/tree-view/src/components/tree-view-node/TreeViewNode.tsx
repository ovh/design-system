import { TreeView as VendorTreeView, useTreeViewContext } from '@ark-ui/react/tree-view';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type JSX, type KeyboardEvent, type ReactNode, type Ref, type RefAttributes, forwardRef, useRef } from 'react';
import { Checkbox, CheckboxControl } from '../../../../checkbox/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import style from './treeViewNode.module.scss';

export interface TreeViewItem<TCustom = Record<string, never>> {
  id: string;
  name: string;
  children?: Array<TreeViewItem<TCustom>>;
  icon?: ReactNode;
  customRendererData?: TCustom;
}

export type TreeViewCustomRendererArg<TCustom = Record<string, never>> = {
  item: TreeViewItem<TCustom>;
  name: string;
  customData?: TCustom;
};

interface TreeViewNodeProp<TCustom = Record<string, never>> extends ComponentPropsWithRef<'div'> {
  item: TreeViewItem<TCustom>;
  indexPath?: number[];
  customBranchRenderer?: (arg: TreeViewCustomRendererArg<TCustom>) => JSX.Element;
  customItemRenderer?: (arg: TreeViewCustomRendererArg<TCustom>) => JSX.Element;
  multiple?: boolean;
}

function TreeViewNodeInner<TCustom = Record<string, never>>({
  className,
  item,
  indexPath = [],
  customBranchRenderer,
  customItemRenderer,
  ...props
}: TreeViewNodeProp<TCustom>, ref: Ref<HTMLDivElement>): JSX.Element {
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const { getTreeProps } = useTreeViewContext();
  const ariaMultiselectable = getTreeProps()?.['aria-multiselectable'] as boolean | 'true' | 'false' | undefined;
  const multiple = ariaMultiselectable === true || ariaMultiselectable === 'true';
  const checkboxRef = useRef<HTMLLabelElement | null>(null);
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (!multiple) {
      return;
    }
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      checkboxRef.current?.click();
    }
  };
  const CheckboxIndicator = (
    <VendorTreeView.NodeCheckboxIndicator
      fallback={
        <Checkbox checked={ false }>
          <CheckboxControl />
        </Checkbox>
      }
      indeterminate={
        <Checkbox checked={ 'indeterminate' }>
          <CheckboxControl />
        </Checkbox>
      }>
      <Checkbox checked>
        <CheckboxControl />
      </Checkbox>
    </VendorTreeView.NodeCheckboxIndicator>
  );
  return (
    <VendorTreeView.NodeProvider node={ item } indexPath={ indexPath }>
      { hasChildren ? (
        <VendorTreeView.Branch
          className={ classNames(style['tree-view-node'], className) }
          data-ods="tree-view-branch"
          ref={ ref }
          { ...props }>
          <VendorTreeView.BranchControl className={ style['tree-view-node__control'] } onKeyDown={ handleKeyDown }>
            <VendorTreeView.BranchIndicator
              className={ style['tree-view-node__chevron'] }>
              <Icon name={ ICON_NAME.chevronRight } />
            </VendorTreeView.BranchIndicator>
            { multiple ? (
              <VendorTreeView.NodeCheckbox className={ style['tree-view-node__checkbox'] } ref={ checkboxRef }>
                { CheckboxIndicator }
                { customBranchRenderer ? (
                  customBranchRenderer({ customData: item.customRendererData, item, name: item.name })
                ) : (
                  <VendorTreeView.BranchText>{ item.name }</VendorTreeView.BranchText>
                ) }
              </VendorTreeView.NodeCheckbox>
            ) : (
              <>
                { item.icon ? <span className={ style['tree-view-node__icon'] }>{ item.icon }</span> : null }
                { customBranchRenderer ? (
                  <VendorTreeView.BranchText>
                    { customBranchRenderer({ customData: item.customRendererData, item, name: item.name }) }
                  </VendorTreeView.BranchText>
                ) : (
                  <VendorTreeView.BranchText>{ item.name }</VendorTreeView.BranchText>
                ) }
              </>
            ) }
          </VendorTreeView.BranchControl>
          <VendorTreeView.BranchContent
            className={ style['tree-view-node__children'] }>
            { item.children?.map((child, index) => (
              <TreeViewNode key={ child.id }
                item={ child }
                indexPath={ [...indexPath, index] }
                customBranchRenderer={ customBranchRenderer }
                customItemRenderer={ customItemRenderer }
                multiple={ multiple } />
            )) }
          </VendorTreeView.BranchContent>
        </VendorTreeView.Branch>
      ) : (
        <VendorTreeView.Item
          className={ classNames(style['tree-view-node'], style['tree-view-node__item'], className) }
          data-ods="tree-view-item"
          ref={ ref }
          onKeyDown={ handleKeyDown }
          { ...props }>
          { multiple ? (
            <VendorTreeView.NodeCheckbox className={ style['tree-view-node__checkbox'] } ref={ checkboxRef }>
              { CheckboxIndicator }
              { customItemRenderer ? (
                customItemRenderer({ customData: item.customRendererData, item, name: item.name })
              ) : (
                <VendorTreeView.ItemText>{ item.name }</VendorTreeView.ItemText>
              ) }
            </VendorTreeView.NodeCheckbox>
          ) : (
            <>
              { item.icon ? <span className={ style['tree-view-node__icon'] }>{ item.icon }</span> : null }
              { customItemRenderer ? (
                <VendorTreeView.ItemText asChild>
                  <span>{ customItemRenderer({ customData: item.customRendererData, item, name: item.name }) }</span>
                </VendorTreeView.ItemText>
              ) : (
                <VendorTreeView.ItemText>{ item.name }</VendorTreeView.ItemText>
              ) }
            </>
          ) }
        </VendorTreeView.Item>
      ) }
    </VendorTreeView.NodeProvider>
  );
}

type GenericTreeViewNodeComponent = <TCustom = Record<string, never>>(
  props: TreeViewNodeProp<TCustom> & RefAttributes<HTMLDivElement>
) => JSX.Element;

const TreeViewNode = forwardRef(TreeViewNodeInner) as GenericTreeViewNodeComponent & { displayName?: string };

TreeViewNode.displayName = 'TreeViewNode';

export {
  TreeViewNode,
  type TreeViewNodeProp,
};
