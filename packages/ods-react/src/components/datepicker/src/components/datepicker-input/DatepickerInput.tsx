import { useDatePickerContext } from '@ark-ui/react/date-picker';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { type Locale } from '../../../../../utils/locales';
import { useFormField } from '../../../../form-field/src';
import { INPUT_TYPE, Input } from '../../../../input/src';
import { useDatepicker } from '../../contexts/useDatepicker';

interface DatepickerInputProp extends ComponentPropsWithRef<'input'> {
  clearable?: boolean,
  loading?: boolean,
}

const DatepickerInput: FC<DatepickerInputProp> = forwardRef(({
  clearable,
  id,
  loading,
  ...props
}, ref): JSX.Element => {
  const { getInputProps } = useDatePickerContext();
  const { i18n, invalid, locale, required } = useDatepicker();
  const fieldContext = useFormField();
  const { defaultValue, id: defaultId, ...arkProp } = getInputProps();

  return (
    <Input
      { ...arkProp }
      { ...props }
      clearable={ clearable }
      i18n={ i18n }
      id={ id || defaultId }
      invalid={ invalid || fieldContext?.invalid }
      loading={ loading }
      locale={ locale as Locale }
      ref={ ref }
      required={ required }
      type={ INPUT_TYPE.text }
      value={ defaultValue || '' } />
  );
});

DatepickerInput.displayName = 'DatepickerInput';

export {
  DatepickerInput,
  type DatepickerInputProp,
};
