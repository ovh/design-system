import { type ComponentPropsWithRef, type JSX, type ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { type PhoneNumberCountryIsoCode } from '../constants/phone-number-country-iso-code';
import { type PhoneNumberCountriesPreset } from '../constants/phone-number-country-preset';
import { getCurrentIsoCode, isValid } from '../controller/phone-number';

interface PhoneNumberCountryChangeDetail {
  isNumberValid: boolean,
  value: PhoneNumberCountryIsoCode,
}

interface PhoneNumberValueChangeDetail {
  country?: PhoneNumberCountryIsoCode,
  formattedValue?: string,
  isNumberValid: boolean,
  parsingError?: string,
  value: string,
}

type PhoneNumberRootProp = {
  countries?: PhoneNumberCountryIsoCode[] | PhoneNumberCountriesPreset,
  country?: PhoneNumberCountryIsoCode,
  defaultValue?: string,
  disabled?: boolean,
  id?: string,
  invalid?: boolean,
  locale?: string,
  name?: string,
  onCountryChange?: (detail: PhoneNumberCountryChangeDetail) => void,
  onValueChange?: (detail: PhoneNumberValueChangeDetail) => void,
  pattern?: string;
  readOnly?: boolean,
  required?: boolean,
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
        setHasError(!isValid(inputValue, newIsoCode));
      }
    }
  }, [countries, country, isoCode]);

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
