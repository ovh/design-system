import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useId, useMemo } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { type Locale } from '../../../../../utils/locales';
import { Select, SelectContent, SelectControl, type SelectOptionItem, type SelectValueChangeDetail } from '../../../../select/src';
import { type PhoneNumberCountryIsoCode } from '../../constants/phone-number-country-iso-code';
import { PHONE_NUMBER_I18N, TRANSLATION } from '../../constants/phone-number-i18n';
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
  const customId = useId();
  const {
    countries,
    disabled,
    hasError,
    i18n,
    inputValue,
    invalid,
    isoCode,
    locale,
    onCountryChange,
    readOnly,
    required,
    setHasCountries,
    setIsoCode,
  } = usePhoneNumber();
  const { translate } = useI18n(TRANSLATION, locale as Locale, i18n);

  const countryItems = useMemo(() => {
    const regionLocalized = new Intl.DisplayNames(locale, { type: 'region' });

    return getIsoCodeList(countries)
      .map<SelectOptionItem>((isoCode) => ({
        customRendererData: { isoCode },
        label: regionLocalized.of(isoCode.toUpperCase()) || '',
        value: isoCode,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [countries, locale]);

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
      data-ods="phone-number-country-list"
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
        aria-label={ translate(PHONE_NUMBER_I18N.countrySelect) }
        aria-labelledby=""
        className={ style['phone-number-country-list__control'] }
        customItemRenderer={
          ({ values }) => (
            <PhoneNumberCountryFlag
              aria-label={ values[0].split('').join(' ').toUpperCase() }
              disabled={ disabled }
              isoCode={ values[0] } />
          )}
        id={ customId } />

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
