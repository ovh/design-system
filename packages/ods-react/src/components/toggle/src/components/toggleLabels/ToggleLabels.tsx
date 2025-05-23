import { useSwitchContext } from '@ark-ui/react/switch';
import classNames from 'classnames';
import { type FC, type JSX } from 'react';
import style from './togglelabels.module.scss';

const ON_LABEL = 'ON';
const OFF_LABEL = 'OFF';

const ToggleLabels: FC = (): JSX.Element => {
  const { checked: isChecked, disabled, focused } = useSwitchContext();
  return (
    <div className={ style[ 'toggle__control__labels' ] }>
      <span
        className={ classNames(
          style[ 'toggle__control__labels__label-on' ],
          { [ style[ 'toggle__control__labels__label-on--checked' ] ]: isChecked },
          { [ style[ 'toggle__control__labels__label-on--disabled' ] ]: disabled },
        ) }
      >
        { ON_LABEL }
      </span>
      <span
        className={ classNames(
          style[ 'toggle__control__labels__label-off' ],
          { [ style[ 'toggle__control__labels__label-off--unchecked' ] ]: !isChecked },
          { [ style[ 'toggle__control__labels__label-off--disabled' ] ]: disabled },
          { [ style[ 'toggle__control__labels__label-off--focused' ] ]: focused },
        ) }
      >
        { OFF_LABEL }
      </span>
    </div>
  );
};

ToggleLabels.displayName = 'ToggleLabels';

export {
  ToggleLabels,
};
