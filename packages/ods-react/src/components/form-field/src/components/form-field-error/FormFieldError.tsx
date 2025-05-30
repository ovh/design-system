import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useId, useMemo } from 'react';
import { useFormField } from '../../contexts/useFormField';
import style from './formFieldError.module.scss';

interface FormFieldErrorProp extends ComponentPropsWithRef<'span'> {}

const FormFieldError: FC<FormFieldErrorProp> = forwardRef(({
  children,
  className,
  id,
  ...props
}, ref): JSX.Element => {
  const { invalid, setErrorId } = useFormField();
  const defaultId = useId();
  const computedId = useMemo(() => id ?? defaultId, [defaultId, id]);

  useEffect(() => {
    setErrorId && setErrorId(computedId);
  }, [computedId, setErrorId]);

  if (!invalid) {
    return <></>;
  }

  return (
    <span
      aria-live="polite"
      className={ classNames(style['form-field-error'], className) }
      id={ computedId }
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
