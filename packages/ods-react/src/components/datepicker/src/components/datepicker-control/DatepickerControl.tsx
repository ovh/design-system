import { DatePicker, useDatePickerContext } from '@ark-ui/react/date-picker';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type KeyboardEvent, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { Input } from '../../../../input/src';
import { useDatepicker } from '../../contexts/useDatepicker';
import style from './datepickerControl.module.scss';

interface DatepickerControlProp extends ComponentPropsWithRef<'input'> {
  clearable?: boolean,
  loading?: boolean,
}

const DatepickerControl: FC<DatepickerControlProp> = forwardRef(({
  className,
  clearable,
  id,
  loading,
  ...props
}, ref): JSX.Element => {
  const { invalid, required } = useDatepicker();
  const { getInputProps, open, setOpen } = useDatePickerContext();
  const fieldContext = useFormField();
  const { disabled, readOnly } = getInputProps();

  function onControlClick(): void {
    if (!disabled && !readOnly) {
      setOpen(true);
    }
  }

  function onInputKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown') {
      setOpen(true);
    }
  }

  return (
    <DatePicker.Control
      className={ classNames(style['datepicker-control'], className) }
      onClick={ onControlClick }>
      <DatePicker.Input
        asChild
        className={ classNames(
          style['datepicker-control__input'],
          { [style['datepicker-control__input--open']]: open },
        )}
        ref={ ref }
        { ...props }>
        <Input
          clearable={ clearable }
          id={ id || fieldContext?.id }
          invalid={ invalid || fieldContext?.invalid }
          loading={ loading }
          onKeyDown={ onInputKeyDown }
          required={ required } />
      </DatePicker.Input>

      <Icon
        className={ classNames(
          style['datepicker-control__icon'],
          { [style['datepicker-control__icon--disabled']]: disabled || readOnly },
        )}
        name={ ICON_NAME.calendar } />
    </DatePicker.Control>
  );
});

DatepickerControl.displayName = 'DatepickerControl';

export {
  DatepickerControl,
  type DatepickerControlProp,
};
