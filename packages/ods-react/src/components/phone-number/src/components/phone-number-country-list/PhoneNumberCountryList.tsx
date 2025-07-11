import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useMemo } from 'react';
import { Select, SelectContent, SelectControl, type SelectOptionItem, type SelectValueChangeDetail } from '../../../../select/src';
import { type PhoneNumberCountryIsoCode } from '../../constants/phone-number-country-iso-code';
import { usePhoneNumber } from '../../contexts/usePhoneNumber';
import { FALLBACK_ISO_CODE, getIsoCodeList, isValid } from '../../controller/phone-number';
import { PhoneNumberCountryFlag } from '../phone-number-country-flag/PhoneNumberCountryFlag';
import { PhoneNumberCountryOption } from '../phone-number-country-option/PhoneNumberCountryOption';
import style from './phoneNumberCountryList.module.scss';

interface PhoneNumberCountryListProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue'> {}

const PhoneNumberCountryList: FC<PhoneNumberCountryListProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const {
    countries,
    disabled,
    hasError,
    inputValue,
    invalid,
    isoCode,
    locale,
    onCountryChange,
    readOnly,
    required,
    setHasCountries,
    setHasError,
    setIsoCode,
  } = usePhoneNumber();

  const regionLocalized = new Intl.DisplayNames(locale, { type: 'region' });

  const countryItems = useMemo(() => {
    return getIsoCodeList(countries)
      .map<SelectOptionItem>((isoCode) => ({
        customRendererData: { isoCode },
        label: regionLocalized.of(isoCode.toUpperCase()) || '',
        value: isoCode,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [countries, getIsoCodeList, regionLocalized]);

  useEffect(() => {
    setHasCountries && setHasCountries(true);

    return () => {
      setHasCountries && setHasCountries(false);
    };
  }, [setHasCountries]);

  function onValueChange({ value }: SelectValueChangeDetail): void {
    const newIsoCode = value[0] as PhoneNumberCountryIsoCode;
    const valueIsValid = isValid(inputValue, newIsoCode);

    setIsoCode && setIsoCode(newIsoCode);
    setHasError && setHasError(!valueIsValid);

    if (onCountryChange) {
      onCountryChange({
        isNumberValid: valueIsValid,
        value: newIsoCode,
      });
    }
  }

  return (
    <Select
      className={ classNames(style['phone-number-country-list'], className) }
      disabled={ disabled }
      fitControlWidth={ false }
      invalid={ hasError || invalid }
      items={ countryItems }
      readOnly={ readOnly }
      required={ required }
      ref={ ref }
      onValueChange={ onValueChange }
      value={ [isoCode || FALLBACK_ISO_CODE] }
      { ...props }>
      <SelectControl
        className={ style['phone-number-country-list__control'] }
        customItemRenderer={
          ({ values }) => (
            <PhoneNumberCountryFlag
              aria-label={ values[0] }
              disabled={ disabled }
              isoCode={ values[0] } />
          )} />

      <SelectContent customOptionRenderer={
        ({ customData, label }) => (
          <PhoneNumberCountryOption
            isoCode={ customData!.isoCode }
            label={ label } />
        )} />
    </Select>
  );
});

PhoneNumberCountryList.displayName = 'PhoneNumberCountryList';

export {
  PhoneNumberCountryList,
  type PhoneNumberCountryListProp,
};
