import { DatePicker, useDatePickerContext } from '@ark-ui/react/date-picker';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { useFormField } from '../../../../form-field/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { useDatepicker } from '../../contexts/useDatepicker';
import { DatepickerInput } from '../datepicker-input/DatepickerInput';
import style from './datepickerControl.module.scss';

interface DatepickerControlProp extends ComponentPropsWithRef<'input'> {
  /**
   * Whether the clear button is displayed.
   */
  clearable?: boolean,
  /**
   * Whether the component is in loading state.
   */
  loading?: boolean,
}

const DatepickerControl: FC<DatepickerControlProp> = forwardRef(({
  className,
  clearable,
  id,
  loading,
  ...props
}, ref): JSX.Element => {
  const { invalid } = useDatepicker();
  const { getInputProps, open } = useDatePickerContext();
  const fieldContext = useFormField();
  const { disabled, readOnly } = getInputProps();

  return (
    <DatePicker.Control className={ classNames(style['datepicker-control'], className) }>
      <DatepickerInput
        className={ classNames(
          style['datepicker-control__input'],
          { [style['datepicker-control__input--open']]: open },
        )}
        clearable={ clearable }
        data-ods="datepicker-control"
        id={ id || fieldContext?.id }
        loading={ loading }
        ref={ ref }
        { ...props } />

      <DatePicker.Trigger asChild>
        <Button
          aria-busy={ loading }
          className={ classNames(
            style['datepicker-control__trigger'],
            { [style['datepicker-control__trigger--invalid']]: invalid },
          )}
          color={ invalid ? BUTTON_COLOR.critical : BUTTON_COLOR.primary }
          disabled={ disabled || readOnly }
          size={ BUTTON_SIZE.sm }
          variant={ BUTTON_VARIANT.outline }>
          <Icon name={ ICON_NAME.calendar } />
        </Button>
      </DatePicker.Trigger>
    </DatePicker.Control>
  );
});

DatepickerControl.displayName = 'DatepickerControl';

export {
  DatepickerControl,
  type DatepickerControlProp,
};
