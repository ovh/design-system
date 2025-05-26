import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useFormField } from '../../contexts/useFormField';
import style from './formFieldError.module.scss';

interface FormFieldErrorProp extends ComponentPropsWithRef<'span'> {}

const FormFieldError: FC<FormFieldErrorProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { invalid } = useFormField();

  if (!invalid) {
    return <></>;
  }

  return (
    <span
      className={ classNames(style['form-field-error'], className) }
      ref={ ref }
      { ...props }>
      { children }
    </span>
  );
});

FormFieldError.displayName = 'FormFieldError';

export {
  FormFieldError,
  type FormFieldErrorProp,
};
