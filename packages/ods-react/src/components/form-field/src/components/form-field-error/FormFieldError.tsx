import { Field } from '@ark-ui/react/field';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './formFieldError.module.scss';

interface FormFieldErrorProp extends ComponentPropsWithRef<'span'> {}

const FormFieldError: FC<FormFieldErrorProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <Field.ErrorText
      className={ classNames(style['form-field-error'], className) }
      ref={ ref }
      { ...props }>
      { children }
    </Field.ErrorText>
  );
});

FormFieldError.displayName = 'FormFieldError';

export {
  FormFieldError,
  type FormFieldErrorProp,
};
