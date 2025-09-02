import classNames from 'classnames';
import { Children, type ComponentPropsWithRef, type JSX, type ReactElement, cloneElement, forwardRef, isValidElement } from 'react';
import { TreeViewNode, type TreeViewNodeProp } from '../tree-view-node/TreeViewNode';
import style from './treeViewNodes.module.scss';

interface TreeViewNodesProp extends ComponentPropsWithRef<'div'> {}

const TreeViewNodes = forwardRef<HTMLDivElement, TreeViewNodesProp>(({ children, className, ...props }, ref): JSX.Element => {
  const normalizedChildren = Children.toArray(children).map((child, childIndex) => {
    if (isValidElement(child)) {
      const childType = child.type as typeof TreeViewNode;
      const isTreeViewNode = childType === TreeViewNode || childType?.displayName === 'TreeViewNode' || childType?.name === 'TreeViewNode';
      if (isTreeViewNode) {
        const providedIndexPath = (child.props as TreeViewNodeProp).indexPath;
        if (!Array.isArray(providedIndexPath)) {
          return cloneElement(child as ReactElement<TreeViewNodeProp>, { indexPath: [childIndex] } as Partial<TreeViewNodeProp>);
        }
      }
    }
    return child;
  });

  return (
    <div
      className={ classNames(style['tree-view-nodes'], className) }
      data-ods="tree-view-nodes"
      ref={ ref }
      { ...props }>
      { normalizedChildren }
    </div>
  );
});

TreeViewNodes.displayName = 'TreeViewNodes';

export {
  TreeViewNodes,
  type TreeViewNodesProp,
};

