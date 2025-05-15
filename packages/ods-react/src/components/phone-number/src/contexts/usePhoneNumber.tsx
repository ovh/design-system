import { type ComponentPropsWithRef, type JSX, type ReactNode, createContext, useContext, useState } from 'react';
import { type PhoneNumberCountryIsoCode } from '../constants/phone-number-country-iso-code';
import { type PhoneNumberCountryPreset } from '../constants/phone-number-country-preset';
import { getCurrentIsoCode } from '../controller/phone-number';

interface PhoneNumberCountryChangeDetail {
  value: PhoneNumberCountryIsoCode,
}

interface PhoneNumberValueChangeDetail {
  country?: PhoneNumberCountryIsoCode,
  formattedValue?: string,
  isValid: boolean,
  parsingError?: string,
  value: string,
}

type PhoneNumberRootProp = {
  countries?: PhoneNumberCountryIsoCode[] | PhoneNumberCountryPreset,
  defaultCountry?: PhoneNumberCountryIsoCode,
  defaultValue?: string,
  disabled?: boolean,
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
  isoCode?: PhoneNumberCountryIsoCode,
  setHasCountries?: (value: boolean) => void,
  setHasError?: (value: boolean) => void,
  setIsoCode?: (value: PhoneNumberCountryIsoCode) => void,
}

interface PhoneNumberProviderProp extends PhoneNumberContextType {
  children: ReactNode,
}

const PhoneNumberContext = createContext<PhoneNumberContextType>({});

function PhoneNumberProvider({ children, defaultCountry, ...prop }: PhoneNumberProviderProp): JSX.Element {
  const [hasCountries, setHasCountries] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isoCode, setIsoCode] = useState(getCurrentIsoCode(defaultCountry, navigator?.languages, prop.countries));

  return (
    <PhoneNumberContext.Provider value={{
      ...prop,
      hasCountries,
      hasError,
      isoCode,
      setHasCountries,
      setHasError,
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
