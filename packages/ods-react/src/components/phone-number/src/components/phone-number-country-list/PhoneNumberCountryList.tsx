import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useMemo } from 'react';
import { Select, SelectContent, SelectControl, type SelectOptionItem, type SelectValueChangeDetail } from '../../../../select/src';
import { type PhoneNumberCountryIsoCode } from '../../constants/phone-number-country-iso-code';
import { usePhoneNumber } from '../../contexts/usePhoneNumber';
import { getIsoCodeList } from '../../controller/phone-number';
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
    invalid,
    isoCode,
    locale,
    onCountryChange,
    readOnly,
    required,
    setHasCountries,
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
  }, [setHasCountries]);

  function onValueChange({ value }: SelectValueChangeDetail): void {
    setIsoCode && setIsoCode(value[0] as PhoneNumberCountryIsoCode);

    if (onCountryChange) {
      onCountryChange({ value: value[0] as PhoneNumberCountryIsoCode });
    }
  }

  return (
    <Select
      className={ classNames(style['phone-number-country-list'], className) }
      defaultValue={ isoCode }
      disabled={ disabled }
      fitControlWidth={ false }
      invalid={ hasError || invalid }
      items={ countryItems }
      readOnly={ readOnly }
      required={ required }
      ref={ ref }
      onValueChange={ onValueChange }
      { ...props }>
      <SelectControl
        className={ style['phone-number-country-list__control'] }
        customItemRenderer={
          ({ values }) => (
            <PhoneNumberCountryFlag
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
