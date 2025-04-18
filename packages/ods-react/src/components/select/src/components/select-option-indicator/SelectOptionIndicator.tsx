import { type FC, type JSX } from 'react';
import style from './selectOptionIndicator.module.scss';

interface SelectOptionIndicatorProp {
  'data-state'?: string,
  disabled?: boolean,
}

const SelectOptionIndicator: FC<SelectOptionIndicatorProp> = ({
  disabled,
  ...props
}): JSX.Element => {
  return (
    <input
      checked={ props['data-state'] === 'checked' }
      className={ style['select-option-indicator'] }
      disabled={ disabled }
      hidden={ false }
      readOnly
      tabIndex={ -1 }
      type="checkbox" />
  );
};

SelectOptionIndicator.displayName = 'SelectOptionIndicator';

export {
  SelectOptionIndicator,
  type SelectOptionIndicatorProp,
};
