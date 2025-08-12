import { Switch, SwitchItem } from '@ovhcloud/ods-react';
import React, { FC } from 'react';

type ThemeValue = 'default' | 'test' | 'custom';

interface ThemeSwitchProps {
  value?: ThemeValue;
  onChange?: (value: ThemeValue) => void;
}

const ThemeSwitch: FC<ThemeSwitchProps> = ({ value, onChange }) => {
  const current = (value as ThemeValue) ?? 'default';

  return (
    <div>
      <Switch
        aria-label="Select ODS theme"
        value={ current }
        onValueChange={ ({ value: v }) => {
          const next = v as ThemeValue;
          onChange && onChange(next);
        } }>
        <SwitchItem value='default'>Default</SwitchItem>
        <SwitchItem value='test'>Test</SwitchItem>
        <SwitchItem value='custom'>Custom</SwitchItem>
      </Switch>
    </div>
  );
};

export { ThemeSwitch };
