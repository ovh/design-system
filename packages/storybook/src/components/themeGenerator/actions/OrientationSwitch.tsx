import { ICON_NAME, Icon, Switch, SwitchItem } from '@ovhcloud/ods-react';
import React, { type JSX } from 'react';
import styles from './orientationSwitch.module.scss';

enum ORIENTATION {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

interface OrientationSwitchProps {
  onChange: (orientation: ORIENTATION) => void,
  orientation: ORIENTATION
}

const OrientationSwitch = ({ onChange, orientation }: OrientationSwitchProps): JSX.Element => {
  return (
    <Switch
      onValueChange={ ({ value }) => onChange(value as ORIENTATION) }
      value={ orientation }>
      <SwitchItem
        className={ styles['orientation-switch__horizontal'] }
        value={ ORIENTATION.horizontal }>
        <Icon name={ ICON_NAME.columns } />
      </SwitchItem>

      <SwitchItem
        className={ styles['orientation-switch__vertical'] }
        value={ ORIENTATION.vertical }>
        <Icon
          className={ styles['orientation-switch__vertical__icon'] }
          name={ ICON_NAME.columns } />
      </SwitchItem>
    </Switch>
  );
};

export {
  ORIENTATION,
  OrientationSwitch,
};
