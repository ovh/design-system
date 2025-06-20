import classNames from 'classnames';
import { type ChangeEvent, type FC, type JSX, forwardRef, useMemo } from 'react';
import { INPUT_TYPE, Input } from '../../../../input/src';
import { type PhoneNumberInputProp, usePhoneNumber } from '../../contexts/usePhoneNumber';
import { formatPhoneNumber, getExampleNumber, isValid } from '../../controller/phone-number';
import style from './phoneNumberControl.module.scss';

interface PhoneNumberControlProp extends PhoneNumberInputProp {
  /**
   * Whether the clear button is displayed.
   */
  clearable?: boolean,
  /**
   * Whether the component is in loading state.
   */
  loading?: boolean,
}

const PhoneNumberControl: FC<PhoneNumberControlProp> = forwardRef(({
  children,
  className,
  clearable,
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
    setHasError,
    setInputValue,
    value,
  } = usePhoneNumber();
  const placeholder = useMemo(() => getExampleNumber(isoCode), [getExampleNumber, isoCode]);

  function onInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const value = e.currentTarget.value;
    const valueIsValid = isValid(value, isoCode);

    setInputValue && setInputValue(value);
    setHasError && setHasError(!valueIsValid);

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
