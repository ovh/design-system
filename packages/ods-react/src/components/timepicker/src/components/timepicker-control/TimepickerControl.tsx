import { type ChangeEvent, type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import { INPUT_TYPE, Input } from '../../../../input/src';
import { type TimepickerInputProp, useTimepicker } from '../../contexts/useTimepicker';

interface TimepickerControlProp extends TimepickerInputProp {}

const TimepickerControl: FC<TimepickerControlProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const {
    currentTimezone,
    defaultValue,
    disabled,
    id,
    invalid,
    name,
    onValueChange,
    readOnly,
    required,
    value,
    withSeconds,
  } = useTimepicker();
  const fieldContext = useFormField();

  function onInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const value = e.currentTarget.value;

    if (onValueChange) {
      onValueChange({
        timezone: currentTimezone,
        value,
      });
    }
  }

  return (
    <Input
      aria-labelledby={ fieldContext?.labelId }
      className={ className }
      ref={ ref }
      { ...props }
      defaultValue={ defaultValue }
      disabled={ disabled }
      id={ id }
      invalid={ invalid }
      onChange={ onInputChange }
      readOnly={ readOnly }
      required={ required }
      name={ name }
      step={ withSeconds ? 1 : undefined }
      type={ INPUT_TYPE.time }
      value={ value } />
  );
});

TimepickerControl.displayName = 'TimepickerControl';

export {
  TimepickerControl,
  type TimepickerControlProp,
};
