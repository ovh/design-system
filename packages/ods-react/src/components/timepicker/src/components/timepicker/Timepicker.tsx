import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import { TimepickerProvider, type TimepickerRootProp } from '../../contexts/useTimepicker';
import style from './timepicker.module.scss';

interface TimepickerProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue'>, TimepickerRootProp {}

const Timepicker: FC<TimepickerProp> = forwardRef(({
  children,
  className,
  defaultValue,
  disabled,
  id,
  invalid,
  name,
  onTimezoneChange,
  onValueChange,
  readOnly,
  required,
  timezone,
  timezones,
  value,
  withSeconds,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();

  return (
    <TimepickerProvider
      defaultValue={ defaultValue }
      disabled={ disabled }
      id={ id || fieldContext?.id }
      invalid={ invalid || fieldContext?.invalid }
      name={ name }
      onTimezoneChange={ onTimezoneChange }
      onValueChange={ onValueChange }
      readOnly={ readOnly }
      required={ required }
      timezone={ timezone }
      timezones={ timezones }
      value={ value }
      withSeconds={ withSeconds }>
      <div
        className={ classNames(style['timepicker'], className) }
        ref={ ref }
        { ...props }>
        { children }
      </div>
    </TimepickerProvider>
  );
});

Timepicker.displayName = 'Timepicker';

export {
  Timepicker,
  type TimepickerProp,
};
