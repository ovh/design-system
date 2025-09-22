import { TreeView as VendorTreeView } from '@ark-ui/react/tree-view';
import { type FC, type JSX } from 'react';
import { Checkbox, CheckboxControl } from '../../../../checkbox/src';

interface TreeViewNodeCheckboxIndicatorProp {
  isDisabled: boolean;
}

const TreeViewNodeCheckboxIndicator: FC<TreeViewNodeCheckboxIndicatorProp> = ({
  isDisabled,
}): JSX.Element => {
  return (
    <VendorTreeView.NodeCheckboxIndicator
      fallback={ (
        <Checkbox checked={ false } disabled={ isDisabled }>
          <CheckboxControl />
        </Checkbox>
      )}
      indeterminate={ (
        <Checkbox checked="indeterminate" disabled={ isDisabled }>
          <CheckboxControl />
        </Checkbox>
      )}>
      <Checkbox checked disabled={ isDisabled }>
        <CheckboxControl />
      </Checkbox>
    </VendorTreeView.NodeCheckboxIndicator>
  );
};

export { TreeViewNodeCheckboxIndicator };
