import classNames from 'classnames';
import { Children, type ComponentPropsWithRef, type JSX, forwardRef, isValidElement } from 'react';
import { TreeViewNodesProvider } from '../../contexts/useTreeViewNodes';
import style from './treeViewNodes.module.scss';

interface TreeViewNodesProp extends ComponentPropsWithRef<'div'> {}

const TreeViewNodes = forwardRef<HTMLDivElement, TreeViewNodesProp>(({ children, className, ...props }, ref): JSX.Element => {
  const wrappedChildren = Children.map(children, (child, childIndex) => {
    if (!isValidElement(child)) {
      return child;
    }

    return (
      <TreeViewNodesProvider key={ child.key || childIndex } indexPath={ [childIndex] }>
        { child }
      </TreeViewNodesProvider>
    );
  });

  return (
    <div
      className={ classNames(style['tree-view-nodes'], className) }
      data-ods="tree-view-nodes"
      ref={ ref }
      { ...props }>
      { wrappedChildren }
    </div>
  );
});

TreeViewNodes.displayName = 'TreeViewNodes';

export {
  TreeViewNodes,
  type TreeViewNodesProp,
};

