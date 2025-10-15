import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './treeViewNodes.module.scss';

interface TreeViewNodesProp extends ComponentPropsWithRef<'div'> {}

const TreeViewNodes: FC<TreeViewNodesProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
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
