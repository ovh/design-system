import { Select, useSelectContext } from '@ark-ui/react/select';
import { type FC, type JSX } from 'react';
import { type SelectOptionItem, useSelect } from '../../contexts/useSelect';
import { SelectMergedSelection } from '../select-merged-selection/SelectMergedSelection';

type SelectCustomItemRendererArg = {
  selectedItems: SelectOptionItem[],
  text: string,
  values: string[],
}

interface SelectValueTextProp {
  customItemRenderer?: (arg: SelectCustomItemRendererArg) => JSX.Element,
  multipleSelectionLabel?: string,
  placeholder?: string,
}

const SelectValueText: FC<SelectValueTextProp> = ({
  customItemRenderer,
  multipleSelectionLabel,
  placeholder,
}): JSX.Element => {
  const { multiple } = useSelect();
  const { disabled, selectedItems, value, valueAsString } = useSelectContext();

  if (multiple === 'merge' && value.length) {
    return (
      <SelectMergedSelection
        disabled={ disabled }
        multipleSelectionLabel={ multipleSelectionLabel }
        total={ value.length } />
    );
  }

  if (!!customItemRenderer && value.length) {
    return customItemRenderer({
      selectedItems,
      text: valueAsString,
      values: value,
    });
  }

  return (
    <Select.ValueText placeholder={ placeholder } />
  );
};

SelectValueText.displayName = 'SelectValueText';

export {
  type SelectCustomItemRendererArg,
  SelectValueText,
  type SelectValueTextProp,
};
