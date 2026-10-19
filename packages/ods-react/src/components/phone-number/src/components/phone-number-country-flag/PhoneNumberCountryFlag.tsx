import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX } from 'react';
import { type PhoneNumberCountryIsoCode } from '../../constants/phone-number-country-iso-code';
import style from './phoneNumberCountryFlag.module.scss';

interface PhoneNumberCountryFlagProp extends ComponentPropsWithRef<'span'> {
  isoCode: PhoneNumberCountryIsoCode | string,
}

const PhoneNumberCountryFlag: FC<PhoneNumberCountryFlagProp> = ({
  isoCode,
  ...props
}): JSX.Element => {
  return (
    <span
      className={ classNames(
        style['phone-number-country-flag'],
        style[`phone-number-country-flag--${isoCode}`],
      )}
      { ...props } />
  );
};

PhoneNumberCountryFlag.displayName = 'PhoneNumberCountryFlag';

export {
  PhoneNumberCountryFlag,
  type PhoneNumberCountryFlagProp,
};
