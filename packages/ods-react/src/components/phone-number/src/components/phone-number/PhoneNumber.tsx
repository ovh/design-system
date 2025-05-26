import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { withFormField } from '../../../../form-field/src';
import { PhoneNumberProvider, type PhoneNumberRootProp } from '../../contexts/usePhoneNumber';
import style from './phoneNumber.module.scss';

interface PhoneNumberProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue'>, PhoneNumberRootProp {}

const PhoneNumber: FC<PhoneNumberProp> = withFormField(forwardRef(({
  children,
  className,
  countries,
  country,
  defaultValue,
  disabled,
  id,
  invalid,
  locale,
  name,
  onCountryChange,
  onValueChange,
  pattern,
  readOnly,
  required,
  value,
  ...props
}, ref): JSX.Element => {
  return (
    <PhoneNumberProvider
      countries={ countries }
      country={ country }
      defaultValue={ defaultValue }
      disabled={ disabled }
      id={ id }
      invalid={ invalid }
      locale={ locale }
      name={ name }
      onCountryChange={ onCountryChange }
      onValueChange={ onValueChange }
      pattern={ pattern }
      readOnly={ readOnly }
      required={ required }
      value={ value }>
      <div
        className={ classNames(style['phone-number'], className) }
        ref={ ref }
        { ...props }>
        { children }
      </div>
    </PhoneNumberProvider>
  );
}));

PhoneNumber.displayName = 'PhoneNumber';

export {
  PhoneNumber,
  type PhoneNumberProp,
};
