import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../../../form-field/src';
import { PhoneNumberProvider, type PhoneNumberRootProp } from '../../contexts/usePhoneNumber';
import style from './phoneNumber.module.scss';

/**
 * @inheritDoc PhoneNumberRootProp
 */
interface PhoneNumberProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue'>, PhoneNumberRootProp {}

const PhoneNumber: FC<PhoneNumberProp> = forwardRef(({
  children,
  className,
  countries,
  country,
  defaultValue,
  disabled,
  i18n,
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
  const fieldContext = useFormField();

  return (
    <PhoneNumberProvider
      countries={ countries }
      country={ country }
      defaultValue={ defaultValue }
      disabled={ disabled }
      i18n={ i18n }
      id={ id || fieldContext?.id }
      invalid={ invalid || fieldContext?.invalid }
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
        role="group"
        { ...props }>
        { children }
      </div>
    </PhoneNumberProvider>
  );
});

PhoneNumber.displayName = 'PhoneNumber';

export {
  PhoneNumber,
  type PhoneNumberProp,
};
