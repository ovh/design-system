import { type ComponentPropsWithRef, type JSX, type ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { type INPUT_I18N } from '../../../input/src';
import { type PhoneNumberCountryIsoCode } from '../constants/phone-number-country-iso-code';
import { type PhoneNumberCountriesPreset } from '../constants/phone-number-country-preset';
import { type PHONE_NUMBER_I18N } from '../constants/phone-number-i18n';
import { getCurrentIsoCode, isValid } from '../controller/phone-number';

interface PhoneNumberCountryChangeDetail {
  isNumberValid: boolean,
  /** @type=PHONE_NUMBER_COUNTRY_ISO_CODE */
  value: PhoneNumberCountryIsoCode,
}

interface PhoneNumberValueChangeDetail {
  /** @type=PHONE_NUMBER_COUNTRY_ISO_CODE */
  country?: PhoneNumberCountryIsoCode,
  formattedValue?: string,
  isNumberValid: boolean,
  parsingError?: string,
  value: string,
}

type PhoneNumberRootProp = {
  /**
   * A specific or preset list of country to display in the selector.
   */
  countries?: PhoneNumberCountryIsoCode[] | PhoneNumberCountriesPreset,
  /**
   * The controlled selected country.
   */
  country?: PhoneNumberCountryIsoCode,
  /**
   * The initial phone number value. Use when you don't need to control the value of the phone number.
   */
  defaultValue?: string,
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * Internal translations override.
   */
  i18n?: Partial<Record<PHONE_NUMBER_I18N | INPUT_I18N.clearButton, string>>,
  /**
   * The field id.
   */
  id?: string,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * The locale used for the translation of the country list and the internal elements.
   */
  locale?: string,
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string,
  /**
   * Callback fired when the country changes.
   */
  onCountryChange?: (detail: PhoneNumberCountryChangeDetail) => void,
  /**
   * Callback fired when the value changes.
   */
  onValueChange?: (detail: PhoneNumberValueChangeDetail) => void,
  /**
   * The phone number input expected pattern.
   */
  pattern?: string;
  /**
   * Whether the component is readonly.
   */
  readOnly?: boolean,
  /**
   * Whether the component is required.
   */
  required?: boolean,
  /**
   * The controlled phone number value.
   */
  value?: string,
}

type PhoneNumberInputProp = Omit<ComponentPropsWithRef<'input'>, 'type' | keyof PhoneNumberRootProp>

type PhoneNumberContextType = PhoneNumberRootProp & {
  hasCountries?: boolean,
  hasError?: boolean,
  inputValue?: string,
  isoCode?: PhoneNumberCountryIsoCode,
  setHasCountries?: (value: boolean) => void,
  setHasError?: (value: boolean) => void,
  setInputValue?: (value: string) => void,
  setIsoCode?: (value: PhoneNumberCountryIsoCode) => void,
}

interface PhoneNumberProviderProp extends PhoneNumberContextType {
  children: ReactNode,
}

const PhoneNumberContext = createContext<PhoneNumberContextType>({});

function PhoneNumberProvider({ children, countries, country, ...prop }: PhoneNumberProviderProp): JSX.Element {
  const [hasCountries, setHasCountries] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [inputValue, setInputValue] = useState(prop.value || prop.defaultValue);
  const [isoCode, setIsoCode] = useState(getCurrentIsoCode(country, navigator?.languages, countries));

  useEffect(() => {
    if (country) {
      const newIsoCode = getCurrentIsoCode(country, navigator?.languages, countries);

      if (newIsoCode !== isoCode) {
        setIsoCode(newIsoCode);
      }
    }
  }, [countries, country, isoCode]);

  useEffect(() => {
    if (inputValue) {
      setHasError(!isValid(inputValue, isoCode));
    }
  }, [inputValue, isoCode]);

  return (
    <PhoneNumberContext.Provider value={{
      ...prop,
      countries,
      hasCountries,
      hasError,
      inputValue,
      isoCode,
      setHasCountries,
      setHasError,
      setInputValue,
      setIsoCode,
    }}>
      { children }
    </PhoneNumberContext.Provider>
  );
}

function usePhoneNumber(): PhoneNumberContextType {
  return useContext(PhoneNumberContext);
}

export {
  type PhoneNumberContextType,
  type PhoneNumberCountryChangeDetail,
  type PhoneNumberInputProp,
  PhoneNumberProvider,
  type PhoneNumberRootProp,
  type PhoneNumberValueChangeDetail,
  usePhoneNumber,
};
