import classNames from 'classnames';
import { type FC, type JSX } from 'react';
import style from './selectMergedSelection.module.scss';

interface SelectMergedSelectionProp {
  disabled?: boolean,
  multipleSelectionLabel?: string,
  total: number,
}

const SelectMergedSelection: FC<SelectMergedSelectionProp> = ({
  disabled,
  multipleSelectionLabel,
  total,
}): JSX.Element => {
  const label = multipleSelectionLabel || `Selected item${total > 1 ? 's' : ''}`;

  return (
    <span>
      { label }&nbsp;
      <span
        className={ classNames(
          style['select-merged-selection__total'],
          { [style['select-merged-selection__total--disabled']]: disabled },
        )}>
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
