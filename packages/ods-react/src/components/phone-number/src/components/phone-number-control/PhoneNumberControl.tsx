import classNames from 'classnames';
import { type ChangeEvent, type FC, type JSX, forwardRef, useMemo } from 'react';
import { useFormField } from '../../../../form-field/src';
import { type INPUT_I18N, INPUT_TYPE, Input } from '../../../../input/src';
import { type PhoneNumberInputProp, usePhoneNumber } from '../../contexts/usePhoneNumber';
import { formatPhoneNumber, getExampleNumber, isValid } from '../../controller/phone-number';
import style from './phoneNumberControl.module.scss';

interface PhoneNumberControlProp extends PhoneNumberInputProp {
  /**
   * Whether the clear button is displayed.
   */
  clearable?: boolean,
  /**
   * Internal translations override (see Input i18n keys).
   */
  i18n?: Partial<Record<INPUT_I18N.clearButton, string>>,
  /**
   * Whether the component is in loading state.
   */
  loading?: boolean,
}

const PhoneNumberControl: FC<PhoneNumberControlProp> = forwardRef(({
  children,
  className,
  clearable,
  i18n,
  loading,
  ...props
}, ref): JSX.Element => {
  const {
    defaultValue,
    disabled,
    hasCountries,
    hasError,
    invalid,
    id,
    isoCode,
    name,
    onValueChange,
    pattern,
    readOnly,
    required,
    setInputValue,
    value,
  } = usePhoneNumber();
  const fieldContext = useFormField();
  const placeholder = useMemo(() => getExampleNumber(isoCode), [isoCode]);

  function onInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const value = e.currentTarget.value;
    const valueIsValid = isValid(value, isoCode);

    setInputValue && setInputValue(value);

    if (onValueChange) {
      const { error, phoneNumber } = formatPhoneNumber(value, isoCode);

      onValueChange({
        country: isoCode,
        formattedValue: phoneNumber,
        isNumberValid: valueIsValid,
        parsingError: error,
        value,
      });
    }
  }

  return (
    <Input
      aria-labelledby={ fieldContext?.labelId }
      className={ classNames(
        style['phone-number-control'],
        { [style['phone-number-control--adjoined']]: !!hasCountries },
        className,
      )}
      ref={ ref }
      { ...props }
      clearable={ clearable }
      defaultValue={ defaultValue }
      disabled={ disabled }
      i18n={ i18n }
      id={ id }
      invalid={ hasError || invalid }
      loading={ loading }
      onChange={ onInputChange }
      pattern={ pattern }
      placeholder={ placeholder }
      readOnly={ readOnly }
      required={ required }
      name={ name }
      type={ INPUT_TYPE.text }
      value={ value } />
  );
});

PhoneNumberControl.displayName = 'PhoneNumberControl';

export {
  PhoneNumberControl,
  type PhoneNumberControlProp,
};
