import { Field } from '@ark-ui/react/field';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './odsFormFieldError.module.scss';

interface OdsFormFieldErrorProp extends ComponentPropsWithRef<'span'> {}

const OdsFormFieldError: FC<OdsFormFieldErrorProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <Field.ErrorText
      className={ classNames(style['ods-form-field-error'], className) }
      ref={ ref }
      { ...props }>
      { children }
    </Field.ErrorText>
  );
});

OdsFormFieldError.displayName = 'OdsFormFieldError';

export {
  OdsFormFieldError,
  type OdsFormFieldErrorProp,
};
