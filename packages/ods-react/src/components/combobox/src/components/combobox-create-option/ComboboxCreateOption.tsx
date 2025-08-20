import { type FC, type JSX } from 'react';
import { DIVIDER_SPACING, Divider } from '../../../../divider/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import style from './comboboxCreateOption.module.scss';

interface ComboboxCreateOptionProp {
  inputValue: string,
  newElementLabel: string,
}

const ComboboxCreateOption: FC<ComboboxCreateOptionProp> = ({
  inputValue,
  newElementLabel,
}): JSX.Element => {
  return (
    <div className={ style['combobox-create-option'] }>
      <span className={ style['combobox-create-option__label'] }>
        <Icon name={ ICON_NAME.plus } />{newElementLabel}{inputValue}
      </span>

      <Divider
        className={ style['combobox-create-option__divider'] }
        spacing={ DIVIDER_SPACING._0 } />
    </div>
  );
};

export {
  ComboboxCreateOption,
  type ComboboxCreateOptionProp,
};
