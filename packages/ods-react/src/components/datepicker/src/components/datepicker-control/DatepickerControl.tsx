import { DatePicker, useDatePickerContext } from '@ark-ui/react/date-picker';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { type Locale } from '../../../../../utils/locales';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { useFormField } from '../../../../form-field/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { Input } from '../../../../input/src';
import { useDatepicker } from '../../contexts/useDatepicker';
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
  const { i18n, invalid, locale, required } = useDatepicker();
  const { getInputProps, open } = useDatePickerContext();
  const fieldContext = useFormField();
  const { disabled, readOnly } = getInputProps();

  return (
    <DatePicker.Control className={ classNames(style['datepicker-control'], className) }>
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
          i18n={ i18n }
          id={ id || fieldContext?.id }
          invalid={ invalid || fieldContext?.invalid }
          loading={ loading }
          locale={ locale as Locale }
          required={ required } />
      </DatePicker.Input>

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
