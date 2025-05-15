import { type FC, type JSX, useMemo } from 'react';
import { type PhoneNumberCountryIsoCode } from '../../constants/phone-number-country-iso-code';
import { getCallingCode } from '../../controller/phone-number';
import { PhoneNumberCountryFlag } from '../phone-number-country-flag/PhoneNumberCountryFlag';
import style from './phoneNumberCountryOption.module.scss';

interface PhoneNumberCountryOptionProp {
  isoCode: PhoneNumberCountryIsoCode,
  label: string,
}

const PhoneNumberCountryOption: FC<PhoneNumberCountryOptionProp> = ({
  isoCode,
  label,
}): JSX.Element => {
  const phoneCode = useMemo(() => getCallingCode(isoCode), [isoCode]);

  return (
    <div className={ style['phone-number-country-option'] }>
      <PhoneNumberCountryFlag isoCode={ isoCode } />

      <span>
        { label } (+{ phoneCode })
      </span>
    </div>
  );
};

PhoneNumberCountryOption.displayName = 'PhoneNumberCountryOption';

export {
  PhoneNumberCountryOption,
  type PhoneNumberCountryOptionProp,
};
