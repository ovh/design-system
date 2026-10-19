import { type FC, type JSX } from 'react';
import style from './selectMergedSelection.module.scss';

interface SelectMergedSelectionProp {
  multipleSelectionLabel?: string,
  total: number,
}

const SelectMergedSelection: FC<SelectMergedSelectionProp> = ({
  multipleSelectionLabel = 'Selected item',
  total,
}): JSX.Element => {
  return (
    <span>
      { multipleSelectionLabel }&nbsp;
      <span className={ style['select-merged-selection__total'] }>
        ({ total })
      </span>
    </span>
  );
};

SelectMergedSelection.displayName = 'SelectMergedSelection';

export {
  SelectMergedSelection,
  type SelectMergedSelectionProp,
};
