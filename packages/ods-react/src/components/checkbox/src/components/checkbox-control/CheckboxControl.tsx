import { Checkbox } from '@ark-ui/react/checkbox';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ICON_NAME, Icon } from '../../../../icon/src';
import style from './checkboxControl.module.scss';

interface CheckboxControlProp extends ComponentPropsWithRef<'div'> {}

const CheckboxControl: FC<CheckboxControlProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <Checkbox.Control
      className={ classNames(style['checkbox-control'], className) }
      ref={ ref }
      { ...props }>
      <Checkbox.Indicator>
        <Icon
          className={ style['checkbox-control__icon'] }
          name={ ICON_NAME.check } />
      </Checkbox.Indicator>

      <Checkbox.Indicator indeterminate>
        <Icon
          className={ style['checkbox-control__icon'] }
          name={ ICON_NAME.minus } />
      </Checkbox.Indicator>

      <Checkbox.HiddenInput />
    </Checkbox.Control>
  );
});

CheckboxControl.displayName = 'CheckboxControl';

export {
  CheckboxControl,
  type CheckboxControlProp,
};
