import { useTreeViewNodeContext } from '@ark-ui/react/tree-view';
import { type FC, type JSX } from 'react';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { getNodeCheckedDataState } from '../../controller/tree-view';
import style from './treeViewNodeCheckboxIndicator.module.scss';

interface TreeViewNodeCheckboxIndicatorProp {
  isDisabled: boolean;
}

const TreeViewNodeCheckboxIndicator: FC<TreeViewNodeCheckboxIndicatorProp> = ({
  isDisabled,
}): JSX.Element => {
  const { checked } = useTreeViewNodeContext();

  return (
    <span
      aria-hidden="true"
      className={ style['tree-view-node-checkbox-indicator'] }
      data-disabled={ isDisabled ? true : undefined }
      data-state={ getNodeCheckedDataState(checked) }>
      {
        checked === true &&
        <Icon
          className={ style['tree-view-node-checkbox-indicator__icon'] }
          name={ ICON_NAME.check } />
      }

      {
        checked === 'indeterminate' &&
        <Icon
          className={ style['tree-view-node-checkbox-indicator__icon'] }
          name={ ICON_NAME.minus } />
      }
    </span>
  );
};

export { TreeViewNodeCheckboxIndicator };
