import classNames from 'classnames';
import { type FC, type JSX } from 'react';
import { type PhoneNumberCountryIsoCode } from '../../constants/phone-number-country-iso-code';
import style from './phoneNumberCountryFlag.module.scss';

interface PhoneNumberCountryFlagProp {
  disabled?: boolean,
  isoCode: PhoneNumberCountryIsoCode | string,
}

const PhoneNumberCountryFlag: FC<PhoneNumberCountryFlagProp> = ({ disabled, isoCode }): JSX.Element => {
  return (
    <span className={ classNames(
      style['phone-number-country-flag'],
      style[`phone-number-country-flag--${isoCode}`],
      { [style['phone-number-country-flag--disabled']]: disabled },
    )} />
  );
};

PhoneNumberCountryFlag.displayName = 'PhoneNumberCountryFlag';

export {
  PhoneNumberCountryFlag,
  type PhoneNumberCountryFlagProp,
};
