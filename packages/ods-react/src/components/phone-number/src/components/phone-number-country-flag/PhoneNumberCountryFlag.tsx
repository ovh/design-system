import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX } from 'react';
import { type PhoneNumberCountryIsoCode } from '../../constants/phone-number-country-iso-code';
import style from './phoneNumberCountryFlag.module.scss';

interface PhoneNumberCountryFlagProp extends ComponentPropsWithRef<'span'> {
  disabled?: boolean,
  isoCode: PhoneNumberCountryIsoCode | string,
}

const PhoneNumberCountryFlag: FC<PhoneNumberCountryFlagProp> = ({
  disabled,
  isoCode,
  ...props
}): JSX.Element => {
  return (
    <span
      className={ classNames(
        style['phone-number-country-flag'],
        style[`phone-number-country-flag--${isoCode}`],
        { [style['phone-number-country-flag--disabled']]: disabled },
      )}
      { ...props } />
  );
};

PhoneNumberCountryFlag.displayName = 'PhoneNumberCountryFlag';

export {
  PhoneNumberCountryFlag,
  type PhoneNumberCountryFlagProp,
};
