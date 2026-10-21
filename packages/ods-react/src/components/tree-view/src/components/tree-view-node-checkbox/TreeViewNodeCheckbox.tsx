import { useTreeViewContext, useTreeViewNodeContext } from '@ark-ui/react/tree-view';
import { type ComponentPropsWithRef, type FC, type JSX, type MouseEvent, forwardRef } from 'react';
import { getNodeCheckedDataState } from '../../controller/tree-view';
import { TreeViewNodeCheckboxIndicator } from '../tree-view-node-checkbox-indicator/TreeViewNodeCheckboxIndicator';

interface TreeViewNodeCheckboxProp extends ComponentPropsWithRef<'span'> {
  isDisabled: boolean;
}

/**
 * Click target of a node in multiple mode. The treeitem carries the checked state, so this
 * element has no role of its own and its box is decorative.
 */
const TreeViewNodeCheckbox: FC<TreeViewNodeCheckboxProp> = forwardRef(({
  children,
  isDisabled,
  ...props
}, ref): JSX.Element => {
  const { toggleChecked } = useTreeViewContext();
  const { checked, isBranch, value } = useTreeViewNodeContext();

  function onClick(event: MouseEvent<HTMLSpanElement>): void {
    if (isDisabled) {
      return;
    }

    event.stopPropagation();
    toggleChecked(value, isBranch);
    event.currentTarget.closest<HTMLElement>('[role="treeitem"]')?.focus({ preventScroll: true });
  }

  return (
    <span // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      data-disabled={ isDisabled ? true : undefined }
      data-state={ getNodeCheckedDataState(checked) }
      onClick={ onClick }
      ref={ ref }
      { ...props }>
      <TreeViewNodeCheckboxIndicator isDisabled={ isDisabled } />

      { children }
    </span>
  );
});

TreeViewNodeCheckbox.displayName = 'TreeViewNodeCheckbox';

export { TreeViewNodeCheckbox };
