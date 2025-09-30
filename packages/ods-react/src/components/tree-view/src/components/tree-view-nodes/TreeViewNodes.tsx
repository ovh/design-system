import classNames from 'classnames';
import { type ComponentPropsWithRef, forwardRef } from 'react';
import style from './treeViewNodes.module.scss';

interface TreeViewNodesProp extends ComponentPropsWithRef<'div'> {}

const TreeViewNodes = forwardRef<HTMLDivElement, TreeViewNodesProp>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={ classNames(style['tree-view-nodes'], className) }
      data-ods="tree-view-nodes"
      ref={ ref }
      { ...props }>
      { children }
    </div>
  );
});

TreeViewNodes.displayName = 'TreeViewNodes';

export {
  TreeViewNodes,
  type TreeViewNodesProp,
};

