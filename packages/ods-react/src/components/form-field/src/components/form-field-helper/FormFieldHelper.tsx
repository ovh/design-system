import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface FormFieldHelperProp extends ComponentPropsWithRef<'span'> {}

const FormFieldHelper: FC<FormFieldHelperProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <span
      className={ className }
      ref={ ref }
      { ...props }>
      { children }
    </span>
  );
});

FormFieldHelper.displayName = 'FormFieldHelper';

export {
  FormFieldHelper,
  type FormFieldHelperProp,
};
